
VendorAttack.Facebook = function(game) {};

VendorAttack.Facebook.prototype = {
    preload: function() {
    	console.log("Facebook - preload");
    },
    
    create: function() {
        this.facebookConnectPlugin.login(["email"], loginSuccess, loginFailure);
        window.facebookConnectPlugin.login(["email"], loginSuccess, loginFailure);

        //this.state.start('Preloader');
    },
    
    loginSuccess: function() {
        console.log("loginSuccess");
    },
    
    loginFailure: function() {
        console.log("loginFailure");
    }
};