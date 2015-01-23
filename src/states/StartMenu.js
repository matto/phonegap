VendorAttack.StartMenu = function(game) {
    // this.startBG;
	this.startPrompt;
	this.started;
    // this.ding;
};

VendorAttack.StartMenu.prototype = {
	
	create: function () {
		console.log("StartMenu");

  //      this.ding = this.add.audio('select_audio');
        
		// startBG = this.add.image(0, 0, 'titlescreen');
		this.inputEnabled = true;
		this.input.onDown.addOnce(this.startGame, this);
		//this.onInputDown.addOnce(this.startGame, this);
		
		this.startPrompt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, 'eightbitwonder', 'Touch to Vendor!', 24);
	},

	startGame: function (pointer) {
		
		console.log("Start");
		this.started = true;
		// this.ding.play();
		
		this.state.start('Facebook');
		//this.state.start('Game');
	},
	
	update: function() {
		if(!this.started) console.log("update");
		
	}
};