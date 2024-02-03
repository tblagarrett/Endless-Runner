class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        // Add Player to the scene
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.body.setImmovable(true)

        // Add shield sprites
        this.shieldUp = scene.add.sprite(x, y-38, 'shield').setScale(2)

        this.shieldDown = scene.add.sprite(x, y+38, 'shield').setScale(2)
        this.shieldDown.angle = 180
        this.shieldDown.visible = false

        this.shieldRight = scene.add.sprite(x+38, y, 'shield').setScale(2)
        this.shieldRight.angle = 90
        this.shieldRight.visible = false

        this.shieldLeft = scene.add.sprite(x-38, y, 'shield').setScale(2)
        this.shieldLeft.angle = 270
        this.shieldLeft.visible = false
        
        // Set up variables
        this.facing = directions.UP
    }

    update() {

    }

    lookDirection(direction) {
        this.facing = direction

        switch (direction) {
            case directions.UP:
                this.shieldUp.visible = true
                this.shieldDown.visible = false
                this.shieldLeft.visible = false
                this.shieldRight.visible = false
                break;
            case directions.DOWN:
                this.shieldUp.visible = false
                this.shieldDown.visible = true
                this.shieldLeft.visible = false
                this.shieldRight.visible = false
                break;
            case directions.LEFT:
                this.shieldUp.visible = false
                this.shieldDown.visible = false
                this.shieldLeft.visible = true
                this.shieldRight.visible = false
                break;
            case directions.RIGHT:
                this.shieldUp.visible = false
                this.shieldDown.visible = false
                this.shieldLeft.visible = false
                this.shieldRight.visible = true
                break;
            default:
                console.log("Player: lookDirection: Not a valid direction")
                break;
        }
    }
}