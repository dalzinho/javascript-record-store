var Store = function(storeName, city){
  this.storeName = storeName;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

Store.prototype = {
  addRecordtoInventory: function(record){
    this.inventory.push(record);
  }
}

module.exports = Store;