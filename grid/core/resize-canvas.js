(_=> {

const wrapper = document.querySelector('#wrapper');
const canvas = document.querySelector('#screen');

function setCanvasSize() {
	canvas.width = wrapper.offsetWidth;
	canvas.height = wrapper.offsetHeight;

	canvasWidth  = canvas.width;
	canvasHeight = canvas.height;
	canvasDimension = canvas.getBoundingClientRect();
}

let startTime = 0;
let loopFunc = null;

let tick = function() {
	return performance.now() / 1000;
}

addEventListener("resize", (event) => {
	if (loopFunc) {
		startTime = tick();
		return;
	}

	loopFunc = setInterval(_ => {
		console.log('xd');

		if (tick() > startTime + 0.2) {
			clearInterval(loopFunc);
			setCanvasSize()
			loopFunc = null;
		}
	}, 100);
});

setCanvasSize();
console.log('success');

})();