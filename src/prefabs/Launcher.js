class Launcher extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, direction) {
        super(scene, x, y, texture, frame)

        this.sprite = scene.add.existing(this)

        this.direction = direction
        this.rotate(this.direction)
        this.setScale(1.7)
    }

    update() {

    }

    rotate(direction) {
        switch (direction) {
            case directions.UP:
                this.sprite.angle = 180
                break;
            case directions.DOWN:
                this.sprite.angle = 0
                break;
            case directions.LEFT:
                this.sprite.angle = 90
                break;
            case directions.RIGHT:
                this.sprite.angle = 270
                break;
            default:
                console.log('Launcher: Rotate: Invalid Direction')
        }
    }

    spawn(arrowGroup, heartGroup) {
        // if the player is hurt, have a chance to spawn a heart that heals them
        if (this.scene.health < this.scene.maxHealth) {
            if (Phaser.Math.Between(1, settings.heartOdds) == 1) {
                let heart = new Heart(this.scene, this.x, this.y, 'heart', 0, this.direction)
                heartGroup.add(heart)
                return
            }
        }

        let arrow = new Arrow(this.scene, this.x, this.y, 'arrow', 0, this.direction)
        arrowGroup.add(arrow)
    }
}