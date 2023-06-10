const GLOBAL_STATS = {
	['player']:  {
		speed: 7,

		sprite: {
			image: 'player.png',
			offset: [0, 0]
		},

		gridName: 'entities',
	},


}

const Entities = [];
class Entity {
	constructor(name, x, y) {
		this.x = 0;  this.y = 0;
		this.px = 0; this.py = 0;
		this.step = 0;

		const baseStats = GLOBAL_STATS[name];
		if (!baseStats) {return print(name + ' doesnt exist!'); }

		this.screen_x = 0;
		this.screen_y = 0;
		this.stats = baseStats;
		this.sprite = null;

		//const sprite = baseStats.sprite;
		//this.sprite = new Sprite(sprite.image, sprite.offset[0], sprite.offset[1]);

		Entities.push(this);
	}

	update() {
		if (!this.isMoving) {return; }

		this.step += 1;

		let step = this.step;
		let speed = this.stats.speed;

		if (step === speed) {
			this.px = this.x;
			this.py = this.y;

			this.screen_x = this.x * tileSize;
			this.screen_y = this.y * tileSize;
			this.isMoving = false;
		} else {
			let alpha = step / speed;
			this.screen_x = lerp(this.px, this.x, alpha) * tileSize;
			this.screen_y = lerp(this.py, this.y, alpha) * tileSize;
		}
	}

	canMove(x, y) {
		return groundGrid.getAt(x, y);
	}

	moveTo(x, y) {
		if (this.isMoving) {return false; }
		if (!this.canMove(x, y)) {return false; }

		this.x = x;
		this.y = y;
		this.step = 0;
		this.isMoving = true;

		return true;
	}

	draw() {
		this.sprite.draw(this.screen_x, this.screen_y);
	}

	static drawAll() {
		for (let i = 0; i < Entities.length; i++) {
			Entities[i].draw();
		}
	}

	static updateAll() {
		for (let i = 0; i < Entities.length; i++) {
			Entities[i].update();
		}
	}

	static loadSprites() {
		for (let i = 0; i < Entities.length; i++) {
			const data = Entities[i];
			const sprite = data.stats.sprite;

			data.sprite = new Sprite(sprite.image, sprite.offset[0], sprite.offset[1]);
		}
	}
}


/*
	player = {
		movement: {
			x0: 0,
			y0: 0,

			x1: 0,
			y1: 0,

			step: 100,
		},

		screen_x: 0,
		screen_y: 0,
		sprite: new Sprite('player.png'),

		speed: 7,

		onUpdate: function(){
			let move = this.movement;

			if (move.step > this.speed) {
				for (let i = 0; i < controlsArray.length; i++) {
					let keyname = controlsArray[i][0];

					if (!KEY_ISDOWN[keyname]) {continue; }

					let direction = controlsObject[keyname];
					let [x2, y2] = [move.x1 + direction[0], move.y1 + direction[1]];

					this.sprite.setImageId(i);
					if (!groundGrid.getAt(x2, y2)) {continue; }
					
					move.x1 = x2;
					move.y1 = y2;
					move.step = 0;
					break;
				}

				if (move.step !== 0) {
					return;
				}
			}

			move.step += 1;

			let step = move.step;

			if (step === this.speed) {
				move.x0 = move.x1;
				move.y0 = move.y1;

				this.screen_x = move.x1 * tileSize;
				this.screen_y = move.y1 * tileSize;
			} else {
				let alpha = step / this.speed;
				this.screen_x = lerp(move.x0, move.x1, alpha) * tileSize;
				this.screen_y = lerp(move.y0, move.y1, alpha) * tileSize;
			}	
		}
	}
*/