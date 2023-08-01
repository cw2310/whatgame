import Phaser from 'phaser';
// import logoImg from './assets/logo.png';
import bgImg1 from './assets/background.png';
import playerImg from './assets/player.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        // this.load.image('logo', logoImg);
        this.load.image('background1', bgImg1);
        // this.load.image('player', playerImg);

        this.load.spritesheet('player', playerImg, {
            frameWidth: 32,
            frameHeight: 36
        })
    }
      
    create ()
    {
        // console.info('create');
        // const logo = this.add.image(400, 150, 'logo');
      
        // this.tweens.add({
        //     targets: logo,
        //     y: 450,
        //     duration: 2000,
        //     ease: "Power2",
        //     yoyo: true,
        //     loop: -1
        // });
        this.background1 = this.add.image(0, 0, 'background1');
        this.background1.setOrigin(0, 0);

        this.player = this.add.sprite(config.width/2, config.height/2, 'player');
        // this.player.setOrigin(0, 0);
        // this.player.scale = 2;
        // this.player.flipY = true;
        // this.player.flipX = true;
        // this.player.angle += 20;

        // 안내 문구
        this.add.text(20,10,"안녕하세요^^", {
            font: '30px 휴먼중간팸체',
            fill: '#f5e99f'
        });

        this.anims.create({
            key: 'player_anim',
            frames: this.anims.generateFrameNumbers('player'),
            frameRate: 12, // 초당 프레임
            repeat: -1 // 반복 횟수(-1 주면 무한)
        })

        this.anims.create({
            key: 'player_idle',
            frames: this.anims.generateFrameNumbers(
                'player', {
                start:0,
                end: 0
            }),
            frameRate: 1, // 초당 프레임
            repeat: 0 // 반복 횟수(-1 주면 무한)
        })

        this.player.play('player_anim');
        this.keyboardInput = this.input.keyboard.createCursorKeys();
        this.player.moving = false;
    }
    update() {
        // console.info('update');
        this.move(this.player);
    }

    move(player) {
        const PLAYER_SPEED = 1.5;
        
        if(this.keyboardInput.left.isDown ||
            this.keyboardInput.right.isDown ||
            this.keyboardInput.up.isDown ||
            this.keyboardInput.down.isDown){
            if(!this.player.moving) {
                this.player.play('player_anim');
            }
            this.player.moving = true;
        } else {
            if(this.player.moving) {
                this.player.play('player_idle');
            }
            this.player.moving = false;
        }

        // 실제 이동
        if (this.keyboardInput.left.isDown) {
            this.player.x -= PLAYER_SPEED;
            player.flipX = false;
        } else if (this.keyboardInput.right.isDown) {
            this.player.x += PLAYER_SPEED;
            player.flipX = true;
        }
        if (this.keyboardInput.up.isDown) {
            this.player.y -= PLAYER_SPEED;
        } else if (this.keyboardInput.down.isDown) {
            this.player.y += PLAYER_SPEED;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    physics: {
        default: 'arcade',
        arcade: {
            debug: process.env.DEBUG === 'true',
        },
    },

    scene: MyGame
};

const game = new Phaser.Game(config);
