var config = {
	width: window.innerWidth,
	height: window.innerHeight,
	type: Phaser.AUTO,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 0 },
		},
	},
	scene: [EvoGame],
};

var game = new Phaser.Game(config);
