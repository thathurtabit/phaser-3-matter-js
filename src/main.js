import 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.CANVAS,
    roundPixels: true,
    parent: 'content',
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'matter'
    },
    scene: [
        BootScene,
        GameScene
    ]
};

const game = new Phaser.Game(config);