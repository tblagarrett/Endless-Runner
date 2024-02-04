// Class copied from professor Altice's PaddleParkourP3
class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, centerY, w * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        this.load.path = './assets/';
        // load graphics assets
        this.load.image('launcher', 'img/launcher.png')
        this.load.image('arrow', 'img/arrow.png')
        this.load.image('heart', 'img/heart.png')
        this.load.image('space', 'img/space.png')
        this.load.image('title', 'img/title.png')
        this.load.image('credits', 'img/credits.png')

        // load sound assets
        this.load.audio('sfx-block', 'sfx/block.wav')
        this.load.audio('sfx-hurt', 'sfx/hurt.wav')
        this.load.audio('sfx-heal', 'sfx/heal.wav')
        this.load.audio('sfx-ui-blip', 'sfx/ui-blip.wav')

        // load spritesheet
        this.load.spritesheet('player', 'img/player.png', {
            frameWidth: 48,
            frameHeight: 48,
            startFrame: 0,
            endFrame: 5
        })
    }

    create() {
        // animation configuration
        this.anims.create({
            key: 'player-animation',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5, first: 0}),
            frameRate: 10,
            repeat: -1
        })

        // go to Title scene
        this.scene.start('titleScene');
    }
}