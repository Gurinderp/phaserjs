class EvoGame extends Phaser.Scene {
	constructor() {
		super("EvoGame");
	}

	preload() {
		this.load.image("Squittle", "assets/squittle.png");
	}

	create() {
		let player = this.add.image(400, 300, "Squittle");
		console.log(this.player);

		this.input.keyboard.on("keydown-D", function (event) {
			player.x += 20;
		});
		this.input.keyboard.on("keydown-A", function (event) {
			player.x -= 20;
		});
		this.input.keyboard.on("keydown-W", function (event) {
			player.y -= 20;
		});
		this.input.keyboard.on("keydown-S", function (event) {
			player.y += 20;
		});
	}

	update() {}
}
