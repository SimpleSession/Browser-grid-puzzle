const controlsArray = [
	['w', 0, -1],
	['s', 0,  1],

	['a',-1,  0],
	['d', 1,  0],
];

const controlsObject = {
	['w']: [ 0, -1],
	['s']: [ 0,  1],
	
	['a']: [-1,  0],
	['d']: [ 1,  0],
};

const tileSize = 32;

function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t
}