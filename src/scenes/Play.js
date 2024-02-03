class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        // Set player in the center
        this.player = new Player(this, w/2, h/2, 'player', 0)

        // Set up launchers
        this.launcherDown = new Launcher(this, w/2, 0, 'launcher', 0, directions.DOWN).setOrigin(0.5, 0)
        this.launcherUp = new Launcher(this, w/2, h, 'launcher', 0, directions.UP).setOrigin(0.5, 0)
        this.launcherLeft = new Launcher(this, w, h/2, 'launcher', 0, directions.LEFT).setOrigin(0.5, 0)
        this.launcherRight = new Launcher(this, 0, h/2, 'launcher', 0, directions.RIGHT).setOrigin(0.5, 0)

        // set up cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update(time, delta) {
        // Adjust player facing
        if (this.cursors.up.isDown) {
            this.player.lookDirection(directions.UP)
        } else if (this.cursors.down.isDown) {
            this.player.lookDirection(directions.DOWN)
        } else if (this.cursors.left.isDown) {
            this.player.lookDirection(directions.LEFT)
        } else if (this.cursors.right.isDown) {
            this.player.lookDirection(directions.RIGHT)
        }
    }
}