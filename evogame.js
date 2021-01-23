class EvoGame extends Phaser.Scene {
	constructor() {
		super("EvoGame");
	}

	preload() {
		this.load.image("Squittle", "assets/squittle.png");
	}

	create() {
		let player = this.physics.add.image(400, 300, "Squittle");
		player.setBounce(0.2);
		player.setCollideWorldBounds(true);
		console.log(this.player);

		this.input.keyboard.on("keydown-D", function (event) {
			player.x += 10;
		});
		this.input.keyboard.on("keydown-A", function (event) {
			player.x -= 10;
		});
		this.input.keyboard.on("keydown-SPACEBAR", function (event) {
			player.y += 30;
		});
	}

	update() {}
}
