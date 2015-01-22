VendorAttack.Preloader = function(game) {
    this.preloadBar = null;
    // this.titleText = null;
    this.ready = false;
};

VendorAttack.Preloader.prototype = {
    
    preload: function () {
        console.log("Preloader");

        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0, 0.5);
        this.preloadBar.x = this.world.centerX - (this.preloadBar.width/2);
        this.load.setPreloadSprite(this.preloadBar);

//      this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
//      this.titleText.anchor.setTo(0.5, 0.5);
        // this.load.image('titlescreen', 'images/TitleBG.png');
         this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
//         this.load.image('hill', 'images/hill.png');
        this.load.image('sky', 'images/starry_back.jpg');  
//         this.load.atlasXML('bunny', 'images/spritesheets/bunny.png', 'images/spritesheets/bunny.xml');
//         this.load.atlasXML('spacerock', 'images/spritesheets/SpaceRock.png', 'images/spritesheets/SpaceRock.xml');
//         this.load.image('explosion', 'images/explosion.png');
//         this.load.image('ghost', 'images/ghost.png');
//         this.load.audio('explosion_audio', 'audio/explosion.mp3');
//         this.load.audio('hurt_audio', 'audio/hurt.mp3');
//         this.load.audio('select_audio', 'audio/select.mp3');
//         this.load.audio('game_audio', 'audio/bgm.mp3');
    },

    create: function () {
        this.preloadBar.cropEnabled = false;
    },

    update: function () {
               
        if(/*this.cache.isSoundDecoded('game_audio') && */ this.ready == false) {
            this.ready = true;
            this.state.start('Facebook');

            //this.state.start('StartMenu');
        }
    }
};