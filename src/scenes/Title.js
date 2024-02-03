class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }

    create() {
        this.add.text(w/2, h/2, 'TITLE').setScale(2).setOrigin(0.5, 0.5)
    }

    update(time, delta) {

    }
}