function Product(name, colour, price) {
  this.name = name;
  this.colour = colour;
  this.price = price;
}

Product.prototype.showPrice = function() {
  return `${this.name} costs ${this.price} `
}

const dress = new Product('dress', 'pink', 100);

console.log(dress.showPrice());