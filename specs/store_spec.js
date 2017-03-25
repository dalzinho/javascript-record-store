var Store = require('../store');
var Record = require('../record');
var assert = require('assert');
var impulse;
var angst;
var tweeter;

describe('store', function(){

  beforeEach(function(){
    impulse = new Store("Impulse", "Hamilton");
    angst = new Record("Sparks", "Angst In My Pants", 10);
    tweeter = new Record("Sparks", "A Tweeter in Woofer's Clothing", 10);
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
    impulse.addRecordtoInventory(angst);
    impulse.addRecordtoInventory(tweeter);
    var getInventoryOutput = impulse.displayInventory();
    assert.equal(2, getInventoryOutput.length
      );

  });

  it('loses inventory item when record sold', function(){
    impulse.addRecordtoInventory(angst);
    impulse.addRecordtoInventory(tweeter);
    
    impulse.sell(angst);

    assert.equal(1, impulse.inventory.length);
  });

  it('increases balance when record sold', function(){
    impulse.addRecordtoInventory(angst);
    impulse.addRecordtoInventory(tweeter);
    
    impulse.sell(angst);

    assert.equal(10, impulse.balance);
  });

  it('can report value of inventory', function(){
    impulse.addRecordtoInventory(angst);
    impulse.addRecordtoInventory(tweeter);
    assert.equal(20, impulse.inventoryValue());
  });

  it('has a report function giving cash balance and stock value together', function(){
    impulse.balance = 100;
    impulse.addRecordtoInventory(angst);
    impulse.addRecordtoInventory(tweeter);

    assert.equal(120, impulse.totalValue());
  });
})