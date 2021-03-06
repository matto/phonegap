
VendorAttack.Facebook = function(game) {};

VendorAttack.Facebook.prototype = {
    preload: function() {
    	console.log("Facebook - preload");
    },
    
    create: function() {
        console.log(window.facebookConnectPlugin);
       /* 
        if(this.facebookConnectPlugin) console.log("this.facebookConnectPlugin");
        if(this.facebookConnectPlugin.login) console.log("this.facebookConnectPlugin.login");
        if(this.facebookConnectPlugin && this.facebookConnectPlugin.login) this.facebookConnectPlugin.login(["email"], this.loginSuccess, this.loginFailure);
        */
        if(window.facebookConnectPlugin) console.log("window.facebookConnectPlugin");
        if(window.facebookConnectPlugin.login) console.log("window.facebookConnectPlugin.login");
        if(window.facebookConnectPlugin && window.facebookConnectPlugin.login) window.facebookConnectPlugin.login(["email"], this.loginSuccess, this.loginFailure);
        //console.log(this.facebookConnectPlugin);
        //console.log(window.facebookConnectPlugin);
        //this.state.start('Preloader');
    },
    
    loginSuccess: function(userData) {
        console.log("loginSuccess: ", userData);
    },
    
    loginFailure: function(error) {
        console.log("loginFailure: ", error);
    }
};