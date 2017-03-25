var Collector = require('../collector');
var assert = require('assert');
var Record = require('../record');
var Store = require('../store');

describe('record collector',function(){
  
  var collector;
  var manmachine;
  var tee;
  var radioactivity;
  var ourprice;

  beforeEach(function(){
    collector = new Collector();
    manmachine = new Record("Kraftwerk", "The Man Machine", 20);
    tee = new Record("Kraftwerk", "Trans-Europe Express", 30);
    radioactivity = new Record("Kraftwerk", "Radio-Activity", 40);
    ourprice = new Store("Our Price", "Hamilton");

    ourprice.addRecordtoInventory(manmachine);
    ourprice.addRecordtoInventory(tee);
    ourprice.addRecordtoInventory(radioactivity);

    collector.balance = 50;
  });

  it('can add record to collection', function(){
    collector.buy(manmachine, ourprice);
    assert.equal(1, collector.collection.length);
  });

  it('balance decreases when buying records', function(){
    collector.buy(manmachine, ourprice);
    assert.equal(30, collector.balance);
  });

  it('buying affects store inventory', function(){
    collector.buy(manmachine, ourprice);
    assert.equal(2, ourprice.inventory.length);
  });

  it('loses item when selling', function(){
    collector.buy(manmachine, ourprice);
    collector.buy(tee, ourprice);

    collector.sell(tee, ourprice);

    assert.equal(1, collector.collection.length);
  });

  it('increases its balance when selling records', function(){
    collector.buy(manmachine, ourprice);
    collector.buy(tee, ourprice);

    collector.sell(tee, ourprice);

    assert.equal(30, collector.balance);
  });

  it('store gains item when collector sells', function(){
    collector.buy(manmachine, ourprice);
    collector.buy(tee, ourprice);

    collector.sell(tee, ourprice);

    assert.equal(2, ourprice.inventory.length);
  });

  it("can't buy records it can't afford");


})