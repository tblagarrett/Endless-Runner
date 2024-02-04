class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        // Add Player to the scene
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.body.setImmovable(true)
        
        // Set up variables
        this.facing = directions.UP
    }

    update() {

    }

    lookDirection(direction) {
        this.facing = direction

        switch (direction) {
            case directions.UP:
                this.angle = 0
                break
            case directions.DOWN:
                this.angle = 180
                break
            case directions.LEFT:
                this.angle = 270
                break
            case directions.RIGHT:
                this.angle = 90
                break
            default:
                console.log("Player: lookDirection: Not a valid direction")
                break
        }
    }
}