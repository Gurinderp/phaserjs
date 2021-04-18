var config = {
	width: window.innerWidth * 0.5,
	height: window.innerHeight * 0.5,
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
