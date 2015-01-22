var VendorAttack = {};

VendorAttack.Boot = function(game) {};

VendorAttack.Boot.prototype = {
    preload: function() {
    	console.log("Boot");
        this.load.image('preloaderBar', 'images/loader_bar.png');
        //this.load.image('titleimage', 'images/TitleImage.png');
    },
    
    create: function() {
        this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = false;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 480;
		this.scale.minHeight = 270;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		//this.stage.forcePortrait = true;
		this.stage.forceLandscape = true;
		this.scale.setScreenSize(true);

		this.input.addPointer();
		this.stage.backgroundColor = '#171642';
		
        this.state.start('Facebook');
        //this.state.start('Preloader');
    }
};