class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene')
    }

    create() {
        this.add.image(0, 0, 'credits').setOrigin(0,0)
        this.add.text(w/2, h - 30, 'Press any key to return').setScale(2).setOrigin(0.5, 0.5)

        this.add.text(40, h/2 - 100, `Created by: Garrett Blake
        \nSound effects generated at https://jfxr.frozenfractal.com/
        \nVisuals made in aseprite`).setOrigin(0,0)
    
        this.input.keyboard.on('keydown', () => {
            this.sound.play('sfx-ui-blip')
            this.scene.start('titleScene')
        })
    }

    update(time, delta) {

    }
}