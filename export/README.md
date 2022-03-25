# Create an exportable version of ESPLoader

This is an attempt to see if the ESP-Web-Flasher fork can be replaced with upstream. Run `export/generate` to create a patched and bundled version in `export/dist`.


Current issues:

- Source doesn't export types but assumes it's run as-is on a website.
   - Fixed this by adding small patch to add module imports/exports
- `esptool.js` uses globals `port`, `outputStream`, `inputBuffer`
- The `readLoop` logic that `ESPLoader` relies on to read input lives in `script.js`
