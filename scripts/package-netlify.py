"""Package the validated static build with portable ZIP entry paths."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

project = Path(__file__).resolve().parent.parent
build = project / "dist"
archive = project.parent / "artifacts" / "kebab-factory-netlify.zip"
if not (build / "index.html").is_file():
    raise SystemExit("Run npm run build before packaging")
archive.parent.mkdir(parents=True, exist_ok=True)
with ZipFile(archive, "w", ZIP_DEFLATED) as output:
    for source in sorted(build.rglob("*")):
        if source.is_file():
            output.write(source, source.relative_to(build).as_posix())
print(f"Portable archive: {archive} ({archive.stat().st_size} bytes)")
