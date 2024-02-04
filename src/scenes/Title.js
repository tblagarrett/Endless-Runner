class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }

    create() {
        this.add.image(0, 0, 'title').setOrigin(0,0)
        this.add.text (w/2, h/2 + 200, 'Press space to play').setScale(2).setOrigin(0.5, 0.5)
        this.add.text (w/2, h/2 + 250, 'Press shift for credits').setScale(2).setOrigin(0.5, 0.5)
    
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update(time, delta) {
        if (this.cursors.space.isDown) {
            this.sound.play('sfx-ui-blip')
            this.scene.start('playScene')
        }
        if (this.cursors.shift.isDown) {
            this.sound.play('sfx-ui-blip')
            this.scene.start('creditsScene')
        }
    }
}