'use strict';

const colorTableOffset = 54;

const fs = require('fs');

module.exports = TransformableBitmap;

function TransformableBitmap(path) {
	this.bitmap = fs.readFileSync(path);
	var colorTableOffset = 14 + this.bitmap.readUInt32LE(14);
};

TransformableBitmap.prototype.invert = function() {
	for (var i = 0; i <= 255; i++) {
		for (var j = 0; j <= 2; j++) {
			this.bitmap[colorTableOffset + i * 4 + j] = 255 - this.bitmap[colorTableOffset + i * 4 + j];
		}
	}
	return this;
};	

TransformableBitmap.prototype.write = function(path) {
	fs.writeFileSync(path, this.bitmap);
};
