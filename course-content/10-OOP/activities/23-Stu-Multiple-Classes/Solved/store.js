class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = [new Toy("Action Figure", 14.99, 5),new Toy("Rare Toy", 17.99, 1)];
    this.revenue = 0;
  }

  processProductSale(name) {
    this.stock.forEach(item => {
      if (item.name === name) {
        if (item.count > 0) {
          item.count--;
          this.revenue += item.price;
          console.log(`Purchased ${item.name} for ${item.price}`);
        } else {
          console.log(`Sorry, ${item.name} is out of stock!`);
        }
      }
    });
  }

  replenishStock(name, count) {
    this.stock.forEach(item => {
      if (item.name === name) {
        item.count += count;
        console.log(`Replenished ${item.name} by ${item.count}`);
      }
    });
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
