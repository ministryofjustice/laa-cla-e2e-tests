'use strict';

var url = require('url');
var log = require('../modules/log');

exports.command = function(waitForSelector, categoryToCheck){
  var client = this;

  this.perform(function() {
    log.command('Checking fala category correct...');

      client.waitForElementVisible(waitForSelector, 5000,'  - Fala link is on page')
     .pause(500)
     .getAttribute(waitForSelector, 'href', function(attr){
          var category = url.parse(attr.value, {parseQueryString: true}).query.category;
          var message = "Checking fala category is " + category;
        client.assert.equal(category,  categoryToCheck, message);
     });
  });
}