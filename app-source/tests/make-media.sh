#!/bin/bash
# Regenerates tests/media/* binary fixtures (tiny.mp4, loop.mp4, tiny.mp3, tiny.jpg).
# These are generated, not hand-authored - the GitHub web editor deploy route is
# text-only, so the binaries are rebuilt with this script after cloning.
# Requires ffmpeg. Durations matter: feat-music expects tiny.mp3 ~= 2s (auto-advance).
set -e
cd "$(dirname "$0")"
mkdir -p media
ffmpeg -y -loglevel error -f lavfi -i color=c=0x203040:s=320x240:d=4:r=24 -f lavfi -i sine=frequency=440:duration=4 -c:v libx264 -pix_fmt yuv420p -c:a aac -shortest media/loop.mp4
ffmpeg -y -loglevel error -f lavfi -i color=c=0x304020:s=320x240:d=1:r=24 -c:v libx264 -pix_fmt yuv420p media/tiny.mp4
ffmpeg -y -loglevel error -f lavfi -i sine=frequency=660:duration=2 -c:a libmp3lame media/tiny.mp3
ffmpeg -y -loglevel error -f lavfi -i color=c=0x403020:s=800x500:d=1 -frames:v 1 media/tiny.jpg
echo "media regenerated: $(ls media/)"
