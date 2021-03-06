# Bitmap Transformer

[![N|Solid](http://www.brackeen.com/vga/images/img00023.gif)](https://nodesource.com/products/nsolid)

### Description
This bitmap reader and transformer. It will read a bitmap in from disk, run one or more color transforms on the bitmap and then write it out to a new file.

### Summary
To run the command line interface:
  - navigate to bitmap-team0 directory
  - Enter 'node index.js'

It can do transforms:
  - Invert the colors
  - Grayscale the colors
  - (red|green|blue)scale the colors

It can can also:
  - handle various sized bitmap
  - handle palette and non-palette bitmaps
  - handle multiple types of bitmaps (not just BM)
  - handle LE and BE computers with a single if statement
  - utilizes a command line interface (CLI)
  - CLI can select the transforms

To run the gulp automated tests and linter:
  - navigate to bitmap-team0 directory
  - Enter 'gulp'

### Dependencies

   - chai
   - gulp
   - gulp-eslint
   - gulp-mocha
