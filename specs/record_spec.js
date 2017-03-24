var Record = require('../record');
var assert = require('assert');

var kimonoMyHouse = new Record("Sparks", "Kimono My House", 10)

describe('record', function(){
  it('has an artist, title and price', function(){
    assert.equal("Sparks", kimonoMyHouse.artist);
    assert.equal("Kimono My House", kimonoMyHouse.title);
    assert.equal(10, kimonoMyHouse.price);
  });

  it('can display it details as a string');
})