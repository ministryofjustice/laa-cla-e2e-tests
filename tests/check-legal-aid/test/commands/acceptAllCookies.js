exports.command = function acceptAllCookies(callback) {
		var client = this;
    return this.perform(function(client, callback) {
        console.log('Accepting all cookies');
		    client.useCss()
		    .click('.gem-c-cookie-banner__button-accept')
		    ;
	  if (typeof callback === 'function') {
	    callback.call(client);
	  }
    });
};
