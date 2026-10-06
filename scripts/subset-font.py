"""Rebuild the portfolio font from the official Noto Sans KR variable TTF."""
from hashlib import sha256
import json
from pathlib import Path
import sys
from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

root = Path(__file__).resolve().parent.parent
source = Path(sys.argv[1])
text = ''.join(path.read_text() for path in (root / 'src').rglob('*.tsx'))
text += ''.join(path.read_text() for path in (root / 'src/data').glob('*.ts'))
text += (root / 'index.html').read_text()
codepoints = sorted(set(map(ord, text)) | set(range(32, 127)))
files = []
coverage = None
for weight in (400, 500, 600):
    font = instantiateVariableFont(TTFont(source), {'wght': weight}, inplace=True)
    options = subset.Options()
    options.flavor = 'woff2'
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=codepoints)
    subsetter.subset(font)
    font.flavor = 'woff2'
    target = root / f'public/fonts/NotoSansKR-{weight}.woff2'
    font.save(target)
    cmap = set(font.getBestCmap())
    missing = [cp for cp in codepoints if cp >= 32 and cp not in cmap]
    if missing:
        raise SystemExit(f'Missing glyphs: {missing}')
    coverage = cmap if coverage is None else coverage & cmap
    files.append({'name': target.name, 'bytes': target.stat().st_size, 'sha256': sha256(target.read_bytes()).hexdigest()})
(root / 'public/fonts/noto-coverage.json').write_text(json.dumps({
    'source': 'https://github.com/google/fonts/tree/main/ofl/notosanskr',
    'sourceSha256': sha256(source.read_bytes()).hexdigest(),
    'fontToolsVersion': __import__('fontTools').__version__,
    'files': files,
    'codepoints': sorted(coverage),
}, indent=2) + '\n')
print(f'{len(coverage)} glyphs, {sum(file["bytes"] for file in files)} bytes, weights 400, 500, 600')
