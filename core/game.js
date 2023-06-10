const GAME = {
	windowFocused: true,
	isPaused: false,
}

const KEY_ISDOWN = {}

document.addEventListener('keydown', event => {
	const keyName = event.key;
	KEY_ISDOWN[keyName] = true;
})

document.addEventListener('keyup', event => {
	const keyName = event.key;
	KEY_ISDOWN[keyName] = false;
	keypressed(keyName);

	//print(keyName + ' was pressed!');
})

let [mouseX, mouseY] = [0, 0]
/*
addEventListener("mousemove", event => {
	mouseX = event.pageX - canvasDimension.left;
	mouseY = event.pageY - canvasDimension.top;
});
*/

window.onfocus = function() {
	GAME.windowFocused = true;
}
window.onblur = function() {
	GAME.windowFocused = false;
	GAME.isPaused = true;

	print('paused!');
	graphics.clearRect(0, 0, canvasWidth, canvasHeight);
	draw();
}

GAME.start = async function() {
	await load();

	let prevStamp;
	function main() {
		window.requestAnimationFrame(main);

		let timestamp = performance.now();
		if (prevStamp === undefined) {
			prevStamp = timestamp;
		}

		if (prevStamp + FPSvalue > timestamp) {return; }

		let delta = (timestamp - prevStamp) / 1000;
		prevStamp = timestamp;

		elapsedFPS = Math.floor(1 / delta);

		if (GAME.windowFocused) {
			update();

			//context.setTransform(1, 0, 0, 1, 0, 0);
			graphics.clearRect(0, 0, canvasWidth, canvasHeight);
			draw();
		}

		
	}

	window.requestAnimationFrame(main);
}

