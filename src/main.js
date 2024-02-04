/*
Name: Garrett Blake
*/

let directions = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3
}

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 640,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    pixelArt: true,
    scene: [ Load, Title, Play ]
}

let game = new Phaser.Game(config)
settings = {
    launcherCurrentFrequency: 3,
    launcherMaxFrequency: .3,
    launcherFrequencyChange: .1,
    arrowCurrentSpeed: 50,
    arrowMaxSpeed: 400,
    arrowSpeedChange: 10
}

// define globals
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;