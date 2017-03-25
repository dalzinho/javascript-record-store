var Store = function(storeName, city){
  this.storeName = storeName;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

Store.prototype = {
  addRecordtoInventory: function(record){
    this.inventory.push(record);
  },

  displayInventory: function(){
    return this.inventory.map(function(record){
      return record.describe();
    });
  },

  removeItem: function(record){
    this.inventory.splice(this.inventory.indexOf(record));
  },

  sell: function(record){
    this.balance += record.price;
    this.removeItem();
  },

  buy: function(record){
    this.addRecordtoInventory(record);
    this.balance -= record.price;
  },

  inventoryValue: function(){
    var allPrices = this.inventory.map(function(record){
      return record.price;
    });

    return allPrices.reduce(function(acc, val){
      return acc + val;
    });
  },

  totalValue: function(){
    return (this.balance += this.inventoryValue());
  }
}

module.exports = Store;