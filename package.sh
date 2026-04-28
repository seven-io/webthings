#!/bin/bash
set -euo pipefail

rm -rf node_modules
npm i --omit=dev
rm -rf node_modules/.bin

shasum --algorithm 256 package.json manifest.json dist/*.js LICENSE README.md >SHA256SUMS
if [ -d node_modules ]; then
  find node_modules -type f -exec shasum --algorithm 256 {} \; >>SHA256SUMS
fi

VERSION=$(node -p "require('./package.json').version")
TARFILE="seven-adapter-${VERSION}.tgz"

# npm pack uses the package.json name (@seven.io/webthings-adapter -> seven.io-webthings-adapter-*.tgz);
# rename to a stable filename consumers can predict.
PACKED=$(npm pack)
mv "${PACKED}" "${TARFILE}"

tar xzf "${TARFILE}"
if [ -d node_modules ]; then
  cp -r node_modules ./package
fi
tar czf "${TARFILE}" package

shasum --algorithm 256 "${TARFILE}" >"${TARFILE}.sha256sum"

rm SHA256SUMS
rm -rf package
