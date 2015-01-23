
VendorAttack.Facebook = function(game) {};

VendorAttack.Facebook.prototype = {
    preload: function() {
    	console.log("Facebook - preload");
    },
    
    create: function() {
        facebookConnectPlugin.login([], loginSuccess, loginFailure);

        //this.state.start('Preloader');
    },
    
    loginSuccess: function() {
        console.log("loginSuccess");
    },
    
    loginFailure: function() {
        console.log("loginFailure");
    }
};