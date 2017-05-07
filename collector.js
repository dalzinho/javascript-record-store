var Collector = function(){
  this.balance = 0;
  this.collection = [];
}

Collector.prototype = {

  addRecordToCollection: function(record){
    this.collection.push(record);
  },

  removeFromCollection: function(record){

    this.collection.splice(this.collection.indexOf(record));
  },

  canAfford: function(record){
    return this.balance >= record.price;
  },

  buy: function(record, store){
    
    if(this.canAfford(record)){

      this.addRecordToCollection(record);
      this.balance -= record.price;
      store.sell(record);

    } else {
      return "Sorry, you can't afford this";
    }
  },

  sell: function(record, store){
    this.balance += record.price;
    store.buy(record);
    this.removeFromCollection(record);
  }
};

module.exports = Collector;