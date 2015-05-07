'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Test App', function() {

  it('should redirect index.html to index.html#/dashboard', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/dashboard');
      });
  });


  describe('dashboard view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/dashboard');
    });

    it('should display title', function() {
      var query = element(by.css('h1'));

      expect(query.getText()).toBe('Dashboard');
    });

  });

});
