
VendorAttack.Facebook = function(game) {};

VendorAttack.Facebook.prototype = {
    preload: function() {
    	console.log("Facebook - preload");
    },
    
    create: function() {
        facebookConnectPlugin.login(Array strings of permissions, success, failure);

        //this.state.start('Preloader');
    },
    
    success: function() {
        console.log("success");
    },
    
    failure: function() {
        console.log("failure");
    }
};