export class Scene extends Phaser.Scene {
    player1
    winPlatform1
    player2
    winPlatform2
    ball
    constructor() {
        super("mainScene")
    }

    preload() {
        this.load.image("player", "../assets/player.png")
        this.load.image("ball", "../assets/ball.png")
        this.load.image("winPlatforms", "../assets/win.png")
    }

    create() {
        let velX = Math.floor(Math.random() * 550) + 1
        let velY = Math.floor(Math.random() * 550) + 1
        console.log(velX);
        console.log(velY);
        this.player1 = this.physics.add.sprite(50, 300, "player")
            .setPushable(false)
            .setCollideWorldBounds(true)
        this.player2 = this.physics.add.sprite(750, 300, "player")
            .setPushable(false)
            .setCollideWorldBounds(true)
        this.ball = this.physics.add.image(400, 300, "ball")
            .setVelocity(velX, velY)
            .setCollideWorldBounds(true)
            .setBounce(1.1)
        this.physics.add.collider(this.player1, this.ball);
        this.physics.add.collider(this.player2, this.ball);


        this.winPlatform1 = this.physics.add.staticGroup();
        this.winPlatform2 = this.physics.add.staticGroup();

        this.winPlatform1.create(-40, 600, 'winPlatforms').setScale(2).refreshBody();
        this.winPlatform2.create(840, 600, 'winPlatforms').setScale(2).refreshBody();
        this.physics.add.collider(this.winPlatform1, this.ball, () => { confirm("le joueur 1 a perdu "); this.game.destroy(true) });
        this.physics.add.collider(this.winPlatform2, this.ball, () => { confirm("le joueur 2 a perdu"); this.game.destroy(true) });

    }

    update() {
        let cursorPlayer1 = this.input.keyboard.createCursorKeys();
        let cursorPlayer2 = this.input.keyboard.addKeys({ 'right': Phaser.Input.Keyboard.KeyCodes.Q, 'left': Phaser.Input.Keyboard.KeyCodes.D });
        if (cursorPlayer1.left.isDown) {
            this.player1.setVelocityY(330)
        } else if (cursorPlayer1.right.isDown) {
            this.player1.setVelocityY(-330)
        } else {
            this.player1.setVelocityY(0)
        }
        if (cursorPlayer2.left.isDown) {
            this.player2.setVelocityY(330)
        } else if (cursorPlayer2.right.isDown) {
            this.player2.setVelocityY(-330)
        } else {
            this.player2.setVelocityY(0)
        }
    }
}