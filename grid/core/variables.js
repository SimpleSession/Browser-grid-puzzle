const print = console.log;

const canvas = document.querySelector('#screen');
const graphics = canvas.getContext('2d');

let [canvasWidth, canvasHeight] = [0, 0];
let canvasDimension;

function disableAntiAliasing() {
	graphics.webkitImageSmoothingEnabled = false;
	graphics.mozImageSmoothingEnabled = false;
	graphics.imageSmoothingEnabled = false;
}

const loadedImages = {};
function loadImage(url) {
	return new Promise(resolve => {
		let img = new Image();
		img.onload = _ => {
			loadedImages[url] = img;
			resolve(img);
		};
		img.src = url;
	});
}

const preferredFPS = 30;
let elapsedFPS;