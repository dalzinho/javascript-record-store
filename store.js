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
    var inventoryList = [];
    this.inventory.forEach(function(record){
      inventoryList.push(record);
    });
    return inventoryList;
  },

  sell: function(searchRecord){
    var foundIndex = this.inventory.indexOf(searchRecord);
    this.balance += this.inventory[foundIndex].price;
    this.inventory.splice(foundIndex, 1);
  },

  inventoryValue: function(){
    var total = 0;
    this.inventory.forEach(function(record){
        total += record.price; 
    });
    return total;
  },

  totalValue: function(){
    return (this.balance += this.inventoryValue());
  }
}

module.exports = Store;