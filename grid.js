class Grid {
	constructor(width, height) {
		this.width = width;
		this.height = height;

		this.content = [];
		for (let x = 0; x < width; x++) {
			let row = [];
			this.content.push(row);

			for (let y = 0; y < height; y++) {
				row.push(-1);
			}
		}
	}

	setAt(x, y, value) {
		let gridx = this.content[x];
		if (!gridx) {return false; }

		gridx[y] = value;
	}

	getAt(x, y) {
		let gridx = this.content[x];
		if (!gridx) {return false; }

		return gridx[y];
	}

	draw() {
		graphics.beginPath();
		graphics.lineWidth = "1";

		let biggest = Math.max(this.width, this.height);
		for (let x = 0; x < biggest; x++) {
			graphics.rect(0, x * tileSize, this.width * tileSize, tileSize);
		}

		for (let y = 0; y < biggest; y++) {
			graphics.rect(y * tileSize, 0, tileSize, this.height * tileSize);
		}
		graphics.stroke();
	}
}