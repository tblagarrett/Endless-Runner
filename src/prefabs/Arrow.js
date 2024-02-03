class Arrow extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, direction) {
        super(scene, x, y, texture, frame)

        // Spawn the arrow
        this.sprite = scene.add.existing(this)
        scene.physics.add.existing(this)

        // Set up properties
        this.direction = direction
        this.rotate(this.direction)
        this.setDepth(-10)
    }

    update() {
        this.move(this.direction)
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
                console.log('Arrow: Rotate: Invalid Direction')
        }
    }

    move(direction) {
        switch (direction) {
            case directions.UP:
                this.body.setVelocityY(-settings.arrowCurrentSpeed)
                break;
            case directions.DOWN:
                this.body.setVelocityY(settings.arrowCurrentSpeed)
                break;
            case directions.LEFT:
                this.body.setVelocityX(-settings.arrowCurrentSpeed)
                break;
            case directions.RIGHT:
                this.body.setVelocityX(settings.arrowCurrentSpeed)
                break;
            default:
                console.log('Arrow: Move: Invalid Direction')
        }
    }
}