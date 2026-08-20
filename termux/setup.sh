#!/data/data/com.termux/files/usr/bin/bash

set -e

echo "========================================"
echo " BT Viman Nagar Wi-Fi Portal Lab"
echo " Termux Setup"
echo "========================================"
echo

echo "[1/4] Updating Termux packages..."
pkg update -y
pkg upgrade -y

echo
echo "[2/4] Installing Python..."
pkg install -y python

echo
echo "[3/4] Checking Python..."
python --version

echo
echo "[4/4] Starting local portal..."
echo

cd "$(dirname "$0")/../portal"

echo "Portal directory:"
pwd

echo
echo "Starting HTTP server on port 8080..."
echo "Open http://127.0.0.1:8080 on this phone."
echo
echo "Press CTRL+C to stop the server."
echo

python -m http.server 8080
