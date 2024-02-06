/*
Name: Garrett Blake
Game Title: ARROW
Time Spent: 20 hours
Creative Tilt: I'm really proud of this game, I wanted to make an endless runner without the "runner" and I feel that was accomplished well.
The general concept of the game is my favorite part, but sections in Play.js like heal() and the increasing frequency/speed in levelBump()
ended up working very nicely. I also find it a nice touch that I got the favicon up.

If nothing, this game has been addicting to play
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
        // arcade: {
        //     debug: true
        // }
    },
    pixelArt: true,
    scene: [ Load, Title, Play, Credits ]
}

let game = new Phaser.Game(config)
settings = {
    launcherMinFrequency: 3,
    launcherCurrentFrequency: 3,
    launcherMaxFrequency: .3,
    launcherFrequencyChange: .1,
    arrowMinSpeed: 50,
    arrowCurrentSpeed: 50,
    arrowMaxSpeed: 500,
    arrowSpeedChange: 20,
    heartOdds: 25               // works as 1/heartOdds chance for a heart to spawn
}

// define globals
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;