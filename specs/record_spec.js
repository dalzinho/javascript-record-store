var Record = require('../record');
var assert = require('assert');

var kimono = new Record("Sparks", "Kimono My House", 10)

describe('record', function(){
  it('has an artist, title and price', function(){
    assert.equal("Sparks", kimono.artist);
    assert.equal("Kimono My House", kimono.title);
    assert.equal(10, kimono.price);
  });

  it('can display it details as a string', function(){
    assert.equal("Artist: Sparks; Title: Kimono My House; Price: £10", kimono.describe());
  });
})