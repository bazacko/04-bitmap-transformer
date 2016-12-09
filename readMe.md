# Bitmap Transformer

[![N|Solid](http://www.brackeen.com/vga/images/img00023.gif)](https://nodesource.com/products/nsolid)

### Description 
This bitmap reader and transformer. It will read a bitmap in from disk, run one or more color transforms on the bitmap and then write it out to a new file.

### Summary 
It can do transforms:
  - Invert the colors
  - Grayscale the colors 
  - (red|green|blue)scale the colors

It can can also:
  - Handle various sized bitmap
  - Handle LE and BE computers with a single if statement
  - Utilizes a command line interface (CLI)
  - CLI can select the transforms
 

### Dependencies 

   - chai
   - gulp
   - gulp-eslint
   - gulp-header
   - gulp-mocha	
   - mocha
