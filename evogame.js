class EvoGame extends Phaser.Scene {
	constructor() {
		super("EvoGame");
	}

	preload() {
		// Grabs Images from assets
		this.load.image("Squittle", "assets/squittle.png", {});
	}

	create() {
		let height = window.innerHeight;
		let width = window.innerWidth;
		let gameHeight = this.game.config.height;
		let gameWidth = this.game.config.width;

		// console.logs EvoGame properties
		console.log(this);

		console.log("Window height = " + height);
		console.log("Window width = " + width);
		console.log("Game height = " + gameHeight);
		console.log("Game width = " + gameWidth);

		// Squittle Sprite is created for player controls
		this.player = this.physics.add.sprite(400, 300, "Squittle");
		console.log("Player X = " + this.player.x);
		console.log("Player Y = " + this.player.y);
		// Squittle Sprite is created for automated controls
		this.rando = this.physics.add.sprite(500, 300, "Squittle");
		this.rando.status = "Idle";

		// Scale for player and automated squittle
		this.player.setScale(0.3);
		this.rando.setScale(0.2);

		// prevents squittles from leaving window
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

		this.add = function () {
			console.log(1 + 1);
		};

		// console.logs player pixel height
		console.log("Player height = " + this.player.height);
	}

	update() {
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

		// Checks if rando squittles status is Idle
		if (this.rando.status == "Idle") {
			this.automatedMovements();
		}
	}

	automatedMovements() {
		// Sets status to Not Idle to prevent repeated firing
		this.rando.status = "Not Idle";
		// Calculates Decision value up to 10
		let decision = Math.floor(Math.random() * 10);
		console.log("Decision = " + decision);
		// Binds EvoGame "this" to variable "that" for usage
		// in setTimeout
		let that = this;

		if (decision >= 10) {
			this.rando.status = "Not Idle";
			console.log("Choice >= 10");
			setTimeout(function () {
				console.log("%c   Complete", "color: red;");
				that.automatedMovements();
			}, 1000);
		} else if (decision >= 1) {
			this.rando.status = "Not Idle";
			console.log("Choice >= 1");
			setTimeout(function () {
				console.log("%c   Complete", "color: green;");
				that.randomLocation();
			}, 10000);
		} else if (decision < 1) {
			this.rando.status = "Not Idle";
			console.log("Choice < 1");
			setTimeout(function () {
				console.log("%c   Complete", "color: blue;");
				that.automatedMovements();
			}, 1000);
		}
		console.log("Current Status = " + this.rando.status);
	}

	randomLocation() {
		console.log(this.game.config.width);
		console.log(this.game.config.height);

		let newX = Math.random() * this.game.config.width;
		let newY = Math.random() * this.game.config.height;

		console.log(newX);
		console.log(newY);

		this.rando.x = newX;
		this.rando.y = newY;

		console.log(newX);
		console.log(newY);

		this.rando.status = "Idle";
	}
}
