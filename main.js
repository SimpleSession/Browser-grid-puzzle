const groundGrid = new Grid(20, 11);

let player = new Entity('player');

async function load() {
	await loadImage('player.png');

	Entity.loadSprites();
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
}

function keypressed(key) {
	if (key == 'q') {
		player.speed += 1;

	} else if (key == 'e') {
		player.speed -= 1;
	}
}

function update() {
	
	if (!player.isMoving) {
		for (let i = 0; i < controlsArray.length; i++) {
			let keyname = controlsArray[i][0];

			if (!KEY_ISDOWN[keyname]) {continue; }

			let direction = controlsObject[keyname];
			let [x2, y2] = [player.x + direction[0], player.y + direction[1]];

			player.sprite.setImageId(i);
			if (player.moveTo(x2, y2)) {
				break;
			}
		}

		if (player.step !== 0) {
			return;
		}
	}

	Entity.updateAll();
}

graphics.font = "24px monospace";
function draw() {
	groundGrid.draw();
	Entity.drawAll();

	//graphics.save();
	//graphics.scale(2, 2);

	//graphics.drawImage(playerImg, player.screen_x, player.screen_y, 16, 16);
	//graphics.drawImage(playerImg, player.screen_x, player.screen_y, 16, 16, player.direction * 16, 0, 16, 16);
	//graphics.drawImage(playerImg, player.direction * 16, 0, 16, 16, player.screen_x, player.screen_y, tileSize, tileSize)


	//graphics.restore();
	//graphics.fillRect(mouseX - 5, mouseY - 5, 10, 10);

	graphics.fillText('FPS ' + elapsedFPS, 10, 30);

}

disableAntiAliasing();
GAME.start();