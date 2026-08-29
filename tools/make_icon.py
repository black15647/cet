# -*- coding: utf-8 -*-
"""生成 PWA 图标（纯标准库，无需 PIL）。
绘制 Apple 蓝圆角背景 + 白色书本图形。
"""
import zlib
import struct
import os

BRAND = (0x00, 0x71, 0xE3)   # Apple 蓝
WHITE = (255, 255, 255, 255)


def rounded_rect_alpha(x, y, w, h, r):
    """判断像素是否落在圆角矩形内并返回 alpha（简易抗锯齿：边界用覆盖度近似）"""
    if x < 0 or y < 0 or x >= w or y >= h:
        return 0
    return 255


def in_rounded(x, y, w, h, r):
    """圆角矩形内部判定（无抗锯齿，够用于图标）"""
    if x < 0 or y < 0 or x >= w or y >= h:
        return False
    # 四个角的圆心
    corners = [(r, r), (w - 1 - r, r), (r, h - 1 - r), (w - 1 - r, h - 1 - r)]
    for cx, cy in corners:
        if ((x < r and y < r) or (x > w - 1 - r and y < r) or
                (x < r and y > h - 1 - r) or (x > w - 1 - r and y > h - 1 - r)):
            if (x - cx) ** 2 + (y - cy) ** 2 > r * r:
                return False
    return True


def make_icon(size):
    px = [[(0, 0, 0, 0) for _ in range(size)] for _ in range(size)]
    bg_r = int(size * 0.22)

    # 书本尺寸（居中）
    bw = int(size * 0.52)
    bh = int(size * 0.40)
    bx = (size - bw) // 2
    by = (size - bh) // 2
    spine = max(2, int(size * 0.022))
    line_gap = max(3, int(size * 0.055))
    line_h = max(2, int(size * 0.018))

    for y in range(size):
        for x in range(size):
            if not in_rounded(x, y, size, size, bg_r):
                continue
            px[y][x] = BRAND + (255,)

            # 书本主体（白色，左右两页 + 中缝留空）
            if bx <= x < bx + bw and by <= y < by + bh:
                rel = x - bx
                # 中缝：留出书脊
                if not (bw // 2 - spine // 2 <= rel < bw // 2 + spine // 2 + 1):
                    px[y][x] = WHITE
                    # 页面上的横线（表示文字）
                    ly = y - by
                    if ly > line_h * 2 and (ly % line_gap) < line_h:
                        if int(size * 0.06) < rel < bw - int(size * 0.06):
                            px[y][x] = BRAND + (255,)

    # 组装 PNG
    raw = bytearray()
    for y in range(size):
        raw.append(0)  # filter type 0
        for x in range(size):
            raw.extend(px[y][x])

    def chunk(tag, data):
        c = struct.pack('>I', len(data)) + tag + data
        return c + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)

    png = b'\x89PNG\r\n\x1a\n'
    png += chunk(b'IHDR', struct.pack('>IIBBBBB', size, size, 8, 6, 0, 0, 0))
    png += chunk(b'IDAT', zlib.compress(bytes(raw), 9))
    png += chunk(b'IEND', b'')
    return png


if __name__ == '__main__':
    out = os.path.join(os.path.dirname(__file__), '..', 'icons')
    os.makedirs(out, exist_ok=True)
    for s in (192, 512, 180):
        data = make_icon(s)
        name = 'apple-touch-icon.png' if s == 180 else f'icon-{s}.png'
        with open(os.path.join(out, name), 'wb') as f:
            f.write(data)
        print(f'生成 {name} ({s}x{s}, {len(data)} bytes)')
