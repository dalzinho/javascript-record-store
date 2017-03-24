var Store = require('../store');
var Record = require('../record');
var assert = require('assert');
var impulse;
var angst;

describe('store', function(){

  beforeEach(function(){
    impulse = new Store("Impulse", "Hamilton");
    angst = new Record("Angst In My Pants", "Sparks", 10);
  });

  it('has a name, city and inventory', function(){
    assert.equal("Impulse", impulse.storeName);
    assert.equal("Hamilton", impulse.city);
    assert.deepEqual([], impulse.inventory);
  });

  it('has a balance', function(){
    assert.equal(0, impulse.balance);
  });

  it('can add records to its inventory', function(){
    impulse.addRecordtoInventory(angst);
    assert.equal(1, impulse.inventory.length);
  });

  it('can list its inventory', function(){
    
  });

  it('loses inventory item when record sold');

  it('increases balance when record sold');

  it('can report value of inventory');

  it('has a report function giving cash balance and stock value together');
})