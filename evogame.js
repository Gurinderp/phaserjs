class EvoGame extends Phaser.Scene {
	constructor() {
		super("EvoGame");
	}

	preload() {
		// Grabs Images from assets
		this.load.image("Squittle", "assets/squittle.png", {});
	}

	create() {
		console.log(window.innerHeight);
		// Squittle Sprite is created
		this.player = this.physics.add.image(400, 300, "Squittle");
		this.rando = this.physics.add.image(500, 300, "Squittle");
		this.player.setScale(0.3);
		this.rando.setScale(0.2);
		this.player.setCollideWorldBounds(true);
		this.player.name = "Squittle";

		// WASD Movement Key Binds
		// Left Movement
		this.key_A = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.A
		);
		// Right Movement
		this.key_D = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.D
		);
		// Up Movement
		this.key_W = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.W
		);
		// Down Movement
		this.key_S = this.input.keyboard.addKey(
			Phaser.Input.Keyboard.KeyCodes.S
		);
		// Working on this -- Need to make random movement
		var tween = this.tweens.add(
			{
				targets: this.randos,
				x: Math.random() * window.innerWidth,
				y: Math.random() * window.innerHeight,
				duration: 3000,
				ease: "Elastic",
				easeParams: [1.5, 0.5],
				delay: 300,
				onComplete: tweens(this),
			},
			this
		);

		console.log(this.player.height);
	}

	update(delta) {
		// WAS Key Movement
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
