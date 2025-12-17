#!/bin/bash
set -e

# Define variables
EXTERNAL_DIR="../../.external"
DSFR_REPO="git@github.com:GouvernementFR/dsfr.git"
DSFR_DIR="$EXTERNAL_DIR/dsfr"

# Create .external directory if it doesn't exist
mkdir -p "$EXTERNAL_DIR"

# Clone repo if it doesn't exist
if [ ! -d "$DSFR_DIR" ]; then
  echo "Cloning DSFR repository..."
  git clone "$DSFR_REPO" "$DSFR_DIR"
else
  echo "DSFR repository already exists. Pulling latest changes..."
  cd "$DSFR_DIR" && git pull && cd - > /dev/null
fi

# Build DSFR
echo "Installing and building DSFR..."
cd "$DSFR_DIR"
npm install --legacy-peer-deps
npm run build

echo "DSFR setup complete!"
