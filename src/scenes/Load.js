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
        this.load.image('player', 'img/player.png')
        this.load.image('launcher', 'img/launcher.png')
        this.load.image('arrow', 'img/arrow.png')
        this.load.image('heart', 'img/heart.png')
        this.load.image('space', 'img/space.png')

        // load sound assets
        this.load.audio('sfx-block', 'sfx/block.wav')
        this.load.audio('sfx-hurt', 'sfx/hurt.wav')
        this.load.audio('sfx-heal', 'sfx/heal.wav')
        this.load.audio('sfx-ui-blip', 'sfx/ui-blip.wav')
    }

    create() {
        // check for local storage browser support
        if(window.localStorage) {
            console.log('Local storage supported');
        } else {
            console.log('Local storage not supported');
        }

        // go to Title scene
        this.scene.start('titleScene');
    }
}