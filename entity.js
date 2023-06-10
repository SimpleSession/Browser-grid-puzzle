const GLOBAL_STATS = {
	['player']:  {
		speed: 7,

		sprite: {
			image: 'player.png',
			offset: [0, 0]
		},

		gridType: 'entities',
	}
}

class Entity {
	constructor(name, x, y) {
		this.movement = {
			x0: 0, y0: 0,
			x1: 0, y1: 0,
			step: 10000,
		},

		const baseStats = GLOBAL_STATS[name];
		if (!baseStats) {return print(name + ' doesnt exist!'); }

		this.screen_x = 0;
		this.screen_y = 0;
		this.stats = baseStats;

		const sprite = baseStats.sprite;
		this.sprite = new Sprite(sprite.image, sprite.offset[0], sprite.offset[1]);
	}

	onUpdate() {
		if (!this.isMoving) {return; }

		this.move.step += 1;

		let step = this.move.step;

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