var config = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [EvoGame],
};

var game = new Phaser.Game(config);
