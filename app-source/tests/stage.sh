#!/bin/bash
# Build app-source and refresh ~/staging (mirror of the live site root) with the new bundle.
set -e
cd "$(dirname "$0")/.."
npx tsc --noEmit
npm run build
ROOT="${STAGING:-$HOME/staging}"
mkdir -p "$ROOT"
rsync -a --exclude .git --exclude app-source "$PWD/../" "$ROOT/"
rm -f "$ROOT"/index-*.js "$ROOT"/index-*.css "$ROOT"/vendor-*.js "$ROOT"/timerWorker-*.js
cp dist/* "$ROOT/"
ls "$ROOT" | grep -E '^(index|vendor|timerWorker)' 
