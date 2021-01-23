class EvoGame extends Phaser.Scene {
	constructor() {
		super("EvoGame");
	}

	preload() {
		this.load.image("Squittle", "assets/squittle.png");
	}

	create() {
		this.player = this.add.image(400, 300, "Squittle");

		this.input.keyboard.on("keydown-W", function (event) {
			this.player.y -= 20;
		});
		this.input.keyboard.on("keydown-S", function (event) {
			this.player.y += 20;
		});

		this.key_A = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.A
		);
		this.key_D = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.D
		);
		this.key_W = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.W
		);
		this.key_S = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.S
		);

		console.log(this.player);
	}

	update(delta) {
		if (this.key_A.isDown) {
			this.player.x -= 5;
		} else if (this.key_D.isDown) {
			this.player.x += 5;
		} else if (this.key_W.isDown) {
			this.player.y -= 5;
		} else if (this.key_S.isDown) {
			this.player.y += 5;
		}
	}
}
