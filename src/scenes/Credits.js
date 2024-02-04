class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene')
    }

    create() {
        this.add.text(w/2, h/2, 'Credits').setScale(2).setOrigin(0.5, 0.5)
        this.add.text (w/2, h/2 + 50, 'Press any key to return').setScale(2).setOrigin(0.5, 0.5)
    
        this.input.keyboard.on('keydown', () => {
            this.scene.start('titleScene')
        })
    }

    update(time, delta) {

    }
}