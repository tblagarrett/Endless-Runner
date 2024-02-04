class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        // Set player in the center
        this.player = new Player(this, w/2, h/2, 'player', 0)
        this.health = 4
        this.maxHealth = 4
        this.secondsSinceHit = 0

        // set up hearts
        this.hearts = []
        for (let i = 0; i < this.maxHealth; i++) {
            let heart = this.add.sprite(30 + 38*i, 30, 'heart', 0)
            this.hearts.push(heart)
        }

        // Set up launchers
        this.launcherDown = new Launcher(this, w/2, 0, 'launcher', 0, directions.DOWN).setOrigin(0.5, 0)
        this.launcherUp = new Launcher(this, w/2, h, 'launcher', 0, directions.UP).setOrigin(0.5, 0)
        this.launcherLeft = new Launcher(this, w, h/2, 'launcher', 0, directions.LEFT).setOrigin(0.5, 0)
        this.launcherRight = new Launcher(this, 0, h/2, 'launcher', 0, directions.RIGHT).setOrigin(0.5, 0)

        // Set up arrow group and collision
        this.arrowGroup = this.add.group({
            runChildUpdate: true
        })
        this.physics.add.collider(this.player, this.arrowGroup, (player, arrow) => {
            // if it hit
            this.secondsSinceHit = 0
            this.health -= 1
            this.updateHearts()

            if (this.health <= 0) {
                this.gameOver = true
            } 
        }, (player, arrow) => {
            // check for hit
            arrow.destroy()
            return player.didItHit(arrow)
        })

        // set up cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();
        
        // set up difficulty timer (triggers callback every second)
        this.level = 0
        this.difficultyTimer = this.time.addEvent({
            delay: 1000,
            callback: this.levelBump,
            callbackScope: this,
            loop: true
        });

        // set up healing timer
        this.healingTimer = this.time.addEvent({
            delay: 1000,
            callback: this.heal,
            callbackScope: this,
            loop: true
        })

        // Game Over Flag
        this.gameOver = false;

        // Set up random launcher selection
        this.msCounter = 0
        this.launchers = [this.launcherDown, this.launcherUp, this.launcherLeft, this.launcherRight]
        
        // Shoot randomly at the start
        let shooter = Phaser.Math.Between(0, this.launchers.length-1)
        this.launchers[shooter].spawn(this.arrowGroup)
    }

    update(time, delta) {
        if (this.gameOver) {
            this.difficultyTimer.destroy()
            this.healingTimer.destroy()
            this.add.text(w/2, h/2, 'GAME OVER', this.scoreConfig).setOrigin(0.5)
            this.add.text(w/2, h/2 + 64, 'Press (R) to Restart or ← for Menu', this.scoreConfig).setOrigin(0.5)
        }

        // stop all later processes if the game is over
        if (this.gameOver) { return }

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

        // Make the launchers fire
        this.shoot(delta)
    }

    levelBump() {
        // increment level (ie, score)
        this.level++;

        // bump speed every 10 levels
        if (this.level % 10 == 0) {
            if (settings.arrowCurrentSpeed < settings.arrowMaxSpeed) {
                settings.arrowCurrentSpeed += settings.arrowSpeedChange
            }
        }

        // bump frequency every 5 levels (until max is hit)
        if(this.level % 5 == 0) {
            console.log(`level: ${this.level}, speed: ${settings.arrowCurrentSpeed}, frequency: ${settings.launcherCurrentFrequency}`);
            if(settings.launcherCurrentFrequency > settings.launcherMaxFrequency) {
                settings.launcherCurrentFrequency -= settings.launcherFrequencyChange
                
                // cam shake: .shake( [duration] [, intensity] )
                this.cameras.main.shake(100, 0.01);
            }
 
            // change game border color
            let rndColor = this.getRandomColor();
            document.getElementsByTagName('canvas')[0].style.borderColor = rndColor;
        }
    }

    // makes a random launcher shoot
    shoot(delta) {
        this.msCounter += delta
        if (this.msCounter > settings.launcherCurrentFrequency * 1000) {
            let shooter = Phaser.Math.Between(0, this.launchers.length-1)
            this.launchers[shooter].spawn(this.arrowGroup)
            this.msCounter -= settings.launcherCurrentFrequency * 1000
        }
    }

    updateHearts() {
        for (let i = 0; i < this.maxHealth; i++) {
            if (i <= this.health-1) {
                this.hearts[i].visible = true
            } else {
                this.hearts[i].visible = false
            }
        }
    }

    heal() {
        this.secondsSinceHit++

        if (this.secondsSinceHit >= 10 && this.health < this.maxHealth) {
            this.secondsSinceHit = 0
            this.health += 1
            this.updateHearts()
        }
    }

    // random HTML hex color generator from:
    // https://stackoverflow.com/questions/1484506/random-color-generator
    getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}