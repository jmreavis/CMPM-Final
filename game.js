// class Cell extends AdventureScene {
//     constructor() {
//         super("cell", "Dingy Cell");
//     }

//     preload() {
//         this.load.image("cell", "./assets/prison_cell.png");
//     }

//     onEnter() {
//         let background = this.add.sprite(715, 540,  "cell");
//         background.setScale(1.155);

//         let wallHitbox = this.add.text(625, 150, " ")
//             .setScale(20)
//             .setInteractive()
//             .on('pointerover', () => {
//                 if(this.hasItem('bricks')) {
//                     this.showMessage("A couple blows from these bricks should bring the rest of it down")
//                 } else if(this.hasItem('key')) {
//                     this.showMessage("The wall is down. I already got what I needed")
//                 } else {
//                     this.showMessage("The wall is beginning to crumble...")
//                 }
//             })
//             .on('pointerdown', () => {
//                 if(this.hasItem('bricks')) {
//                     this.showMessage("*CRASH*")
//                     this.loseItem('bricks')
//                     this.spriteRemove(brick)
//                     this.gotoScene("secret")
//                 } else {
//                     this.showMessage("I can't bust through this with just my bare hands...")
//                 }
//             });
            

//         let doorHitBox = this.add.text(100, 200, " ")
//             .setScale(5)
//             .setInteractive()
//             .on('pointerover', () => {
//                 if(this.hasItem("key")) {
//                     this.showMessage("I should be able to unlock this door now")
//                 } else {
//                     this.showMessage("Locked tight. I need to find a way out, and fast.")
//                 }
//             })
//             .on('pointerdown', () => {
//                 if(this.hasItem("key")) {
//                     this.showMessage("*creak*")
//                     this.loseItem("key")
//                     this.gotoScene("main")
//                 } else {
//                     this.showMessage("It's locked")
//                 }
//             });

//         let brick = this.add.text(1200, 1000, "🧱")
//             .setScale(5)
//             .setInteractive()
//             .on('pointerover', () => this.emphasizeItem(brick))
//             .on('pointerover', () => this.showMessage("There's a brick on the ground next to this bucket. Could be useful."))
//             .on('pointerout', () => this.deEmphasizeItem(brick))
//             .on('pointerdown', () => {
//                 this.showMessage("Bricks collected")
//                 this.gainItem('bricks')
//                 this.spriteRemove(brick)
//             });

//             if(this.hasItem('key')) {
//                 brick.destroy()
//             }
    
            
// }
// }

// class Secret extends AdventureScene {
//     constructor() {
//         super("secret", "Secret Chamber")
//     }

//     preload() {
//         this.load.image("secret", "./assets/secret_room.jpg");
//     }

//     onEnter() {
//         let background = this.add.sprite(715, 540,  "secret")
//         background.setScale(1.8)

//         let spider = this.add.text(340, 560, " ")
//             .setInteractive()
//             .setFontSize(60)
//             .on('pointerover', () => this.showMessage("Gross. I hate spiders..."))

//         let key = this.add.text(1000, 725, "🔑")
//             .setScale(2)
//             .setInteractive()
//             .on('pointerover', () => {
//                 this.showMessage("A key! Maybe it fits the lock to the cell in the other room...")
//                 this.emphasizeItem(key)
//             })
//             .on('pointerout', () => this.deEmphasizeItem(key))
//             .on('pointerdown', () => {
//                 this.gainItem("key")
//                 this.showMessage("Key collected")
//                 this.spriteRemove(key)
//                 this.gotoScene("cell")
//             });
//     }
// }

// class Main extends AdventureScene {
//     constructor() {
//         super("main", "Main Chamber")
//     }

//     preload() {
//         this.load.image("main", "./assets/main_chamber.png")
//     }

//     onEnter() {
//         let background = this.add.sprite(715, 540,  "main")
//             .setScale(1.8)
        
//         let painting = this.add.text(450, 600, " ")
//             .setInteractive()
//             .setFontSize(200)
//             .on('pointerover', () => this.showMessage("An old painting, covered in dust. Whoever used to live here must have loved nature"))
//             .on('pointerdown', () => {
//             this.showMessage("Something fell out of the painting...!")
//             this.gainItem("coin")  
//             })
        
//         let rocks = this.add.text(180, 780, " ")
//             .setFontSize(380)
//             .setInteractive()
//             .on('pointerover', () => this.showMessage("Those boulders are blocking my path. Guess that leaves two other directions..."))
//             .on('pointerdown', () => {
//                 if(this.hasItem("pick")) {
//                     this.showMessage("That was a hefty swing... barely even made a dent")
//                 } else {
//                     this.showMessage("There's no way I'm brute forcing my way through")
//                 }
//             })

//         let north = this.add.text(710, 780, " ")
//             .setInteractive()
//             .setFontSize(50)
//             .on('pointerover', () => this.showMessage("Go straight..."))
//             .on('pointerdown', () => this.gotoScene("grave"))
        
//         let east = this.add.text(1200, 800, " ")
//             .setFontSize(50)
//             .setInteractive()
//             .on('pointerover', () => this.showMessage("Go right..."))
//             .on("pointerdown", () => this.gotoScene("exit"))
//     }
// }

// class Graveyard extends AdventureScene {
//     constructor() {
//         super("grave", "Graveyard")
//     }

//     preload() {
//         this.load.image("graveyard", "./assets/graveyard.jpg")
//     }

//     onEnter() {
//         let background = this.add.sprite(711, 540, "graveyard")
//             .setScale(2.7)

//         let gravetext = this.add.text(815, 600, " ")
//             .setInteractive()
//             .setScale(9)
//             .on('pointerover', () => this.showMessage("Here lies Guppy, mans' best friend. 1921-1933"))

//         let back = this.add.text(50, 350, "Return")
//             .setScale(3)
//             .setInteractive()
//             .on('pointerover', () => this.showMessage("Click to return to previous scene"))
//             .on('pointerdown', () => this.gotoScene("main"))

//         let digtext = this.add.text(860, 850, " ")
//             .setInteractive()
//             .setScale(9)
//             .on('pointerover', () => {
//                 if(this.hasItem("pick")) {
//                     this.showMessage("It looks like something's jutting out of the ground. That pick I found earlier could do the trick")
//                 } else {
//                     this.showMessage("It looks like something's jutting out of the ground. If only I could reach it somehow...")
//                 }
//             })
//             .on('pointerdown', () => {
//                 if(this.hasItem("pick")) {
//                     this.gainItem("bone")
//                     this.showMessage("This...doesn't look like any dog bone I've ever seen before")
//                 } else {
//                     this.showMessage("The dirt is too solid to dig through bare-handed")
//                 }
//             })

//         let pick = this.add.text(100, 700, "⛏️")
//             .setScale(3)
//             .setInteractive()
//             .on('pointerover', () => {
//                 this.emphasizeItem(pick)
//                 this.showMessage("A pickaxe. Could come in handy")
//             })
//             .on('pointerout', () => this.deEmphasizeItem(pick))
//             .on('pointerdown', () => {
//                 this.gainItem("pick")
//                 this.spriteRemove(pick)
//                 this.showMessage("Can't hurt to take along, just in case")
//             })
//     }
// }

// class Exit extends AdventureScene {
//     constructor() {
//         super("exit", "Castle Exterior")
//     }

//     preload() {
//         this.load.image("exterior", "./assets/castle_outside.png")
//     }

//     onEnter() {
//         let background = this.add.sprite(480, 500, "exterior")

//         let monsterhb = this.add.text(375, 40, " ")
//             .setScale(25)
//             .setInteractive()
//             .on('pointerover', () =>  {
//                 if(this.hasItem("bone")) {
//                     this.showMessage("What the hell is that thing? That bone! It might not hurt it, but it will at least give me a chance to escape!")
//                 } else {
//                     this.showMessage("There's nothing I can do...")
//                 }
//             })
//             .on('pointerdown', () => {
//                 if(this.hasItem("bone")) {
//                     this.showMessage("*chuck*  RRRAAAAAAHHH")
//                     this.gotoScene("outro1")
//                 } else {
//                     this.gotoScene("outro2")
//                 }
//             })
//     }
// }

class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerover', () => this.emphasizeItem(clip))
            .on('pointerout', () => this.deEmphasizeItem(clip))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.spriteRemove(key);
                // this.tweens.add({
                //     targets: key,
                //     y: `-=${2 * this.s}`,
                //     alpha: { from: 1, to: 0 },
                //     duration: 500,
                //     onComplete: () => key.destroy()
                // });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Where am I...?").setFontSize(25);
        this.add.text(50,100, "Fine dust fills the air as I stir, like a crypt being disturbed").setFontSize(20);
        this.add.text(750,300, "Entombed").setFontSize(60);
        this.add.text(800, 375, "Click to Begin").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('cell'));
        });
    }
}

class Outro1 extends Phaser.Scene {
    constructor() {
        super('outro1');
    }
    create() {
        this.add.text(50, 50, "I escaped the monster. I should be safe... for now")
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

class Outro2 extends Phaser.Scene {
    constructor() {
        super('outro2');
    }

    create() {
        this.add.text(50, 50, "With no way to fight back or escape, I met my untimely end...")
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    //scene: [Intro, Cell, Secret, Main, Graveyard, Exit, Outro1, Outro2],
    scene: [Demo1, Demo2],
    title: "Entombed",
});

