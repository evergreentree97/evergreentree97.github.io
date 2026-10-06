# Portfolio font

Noto Sans KR is downloaded from the [official Google Fonts repository](https://github.com/google/fonts/tree/main/ofl/notosanskr). The original [SIL Open Font License](OFL-NotoSansKR.txt) ships beside the derived WOFF2 files. The only reserved font name in that license is `Source`; these files retain the Noto family name.

The three static weights are 400, 500 and 600. The subset includes the current public TSX, data modules, HTML and printable ASCII. System Korean fonts handle text outside this subset. `noto-coverage.json` records the source SHA-256, generator version, output checksums and glyph coverage. `npm run check:fonts` verifies current content coverage, file integrity and a combined 200KB ceiling.

To rebuild after changing text, use Python with `fonttools==4.66.1` and `brotli==1.2.0`. Download `NotoSansKR[wght].ttf` from the official repository, then run:

```bash
python scripts/subset-font.py /path/to/NotoSansKR.ttf
npm run check:fonts
```

The full upstream TTF and temporary Python environment are not shipped. `font-display: swap` keeps text visible while the font loads. Preload only the regular weight used by body text; the browser loads other weights when needed.
