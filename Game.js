import Phaser from "phaser";
import { Scene } from "./scene/Scene";

export const setupGame = () => {
    let config = {
        type: Phaser.AUTOS,
        backgroundColor: '#33A5E7',
        scale: {
          width: 800,
          height: 600,
        },
        physics: {
            default: "arcade",
            arcade: {
                debug: true
            }
        },
        scene: [Scene]
    };
    let game = new Phaser.Game(config)
}