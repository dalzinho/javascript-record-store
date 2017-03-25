var Collector = function(){
  this.balance = 0;
  this.collection = [];
}

Collector.prototype = {

  canAfford: function(record){
    return this.balance >= record.price;
  },

  buy: function(record, store){
    if(this.canAfford(record)){


      this.collection.push(record);
      this.balance -= record.price;
      store.sell(record);
    } else {
      return "Sorry, you can't afford this";
    }
  },

  sell: function(record, store){
    var foundIndex = this.collection.indexOf(record);
    this.balance += this.collection[foundIndex].price;
    store.buy(this.collection.splice(foundIndex, 1));
  }
};

module.exports = Collector;