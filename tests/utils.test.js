var utils = require('../lib/utils');
var path = require('path');
var should = require('should');
var underscore = require('underscore');

describe('utils destination', function() {
  var post = {
    year: function() { return 2012; },
    month: function() { return 1; },
    filename: 'hello'
  };

  it('should format to 2012/01/hello', function() {
    var value = utils.destination(post, '{{year}}/{{month}}/{{filename}}');
    value.should.equal('2012/01/hello');
  });

  it('should format to blog/01/hello', function() {
    var value = utils.destination(post, 'blog/{{month}}/{{filename}}');
    value.should.equal('blog/01/hello');
  });
});

describe('Pagination', function() {
  it('should be a pagination', function() {
    var items = underscore.range(100);
    var p = new utils.Pagination(items, 2, 30);
    p.items.should.eql(underscore.range(30, 60));
  });
});
