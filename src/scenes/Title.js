class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }

    create() {
        this.add.text(w/2, h/2, 'TITLE').setScale(2).setOrigin(0.5, 0.5)
        this.add.text (w/2, h/2 + 50, 'Press space to continue').setScale(2).setOrigin(0.5, 0.5)
        this.add.text (w/2, h/2 + 100, 'Press shift for credits').setScale(2).setOrigin(0.5, 0.5)
    
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update(time, delta) {
        if (this.cursors.space.isDown) {
            this.scene.start('playScene')
        }
        if (this.cursors.shift.isDown) {
            this.scene.start('creditsScene')
        }
    }
}