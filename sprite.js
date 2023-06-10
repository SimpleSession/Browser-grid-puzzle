const sheetTileSize = 16;
class Sprite {
	constructor(imagePath, ox, oy) {
		const image = loadedImages[imagePath];
		if (!image) {return print('Unable to find image ' + imagePath); }

		this.image = image;
		this.imageId = 0;
		this.imageMaxWidth  = image.width / sheetTileSize;
		this.imageMaxHeight = image.height / sheetTileSize;
		this.x = 0;
		this.y = 0;

		this.ox = ox || 0;
		this.oy = oy || 0;

		//graphics.drawImage(playerImg, player.direction * 16, 0, 16, 16, player.screen_x, player.screen_y, tileSize, tileSize)
	}

	setImageId(id) {
		if (this.imageId === id) {return; }
		const x_value = this.ox + id

		this.x = (x_value % this.imageMaxWidth) * sheetTileSize;
		this.y = Math.floor(x_value / this.imageMaxWidth) * sheetTileSize;
		this.imageId = id;
	}

	draw(x, y) {
		graphics.drawImage(
			this.image, 
			this.x, this.y, 
			sheetTileSize, sheetTileSize, 
			x, y, 
			tileSize, tileSize
		);
	}
}