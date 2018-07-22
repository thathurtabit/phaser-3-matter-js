class BootScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'BootScene'
        });
    }
    preload() {
        this.load.image('crate', '../../assets/images/crate.png');

        const progress = this.add.graphics();
       
        // Register a load progress event to show a load bar
        this.load.on('progress', (value) => {
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, this.sys.game.config.height / 2, this.sys.game.config.width * value, 60);
        });

        // Register a load complete event to launch the title screen when all files are loaded
        this.load.on('complete', () => {
            // prepare all animations, defined in a separate file
            //makeAnimations(this);
            progress.destroy();
            this.scene.start('GameScene');
        });
    }
}

export default BootScene;
