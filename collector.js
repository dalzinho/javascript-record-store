var Collector = function(){
  this.balance = 0;
  this.collection = [];
}

Collector.prototype = {

  canAfford: function(record){
    return this.balance > record.price;
  },

  buy: function(record, store){
    this.collection.push(record);
    this.balance -= record.price;
    store.sell(record);
  },

  sell: function(record, store){
    var foundIndex = this.collection.indexOf(record);
    this.balance += this.collection[foundIndex].price;
    store.buy(this.collection.splice(foundIndex, 1));
  }
};

module.exports = Collector;