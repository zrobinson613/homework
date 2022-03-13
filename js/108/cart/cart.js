module.exports = class Cart {
  constructor(cart) {
    this.items = cart?.items || {};
  }

  addItem(itemId, quantity) {
    //{ 1: 2, 2: 5 }
    const q = this.items[itemId] || 0;
    this.items[itemId] = q + quantity;
  }

  getItems() {
    const keys = Object.keys(this.items);
    let string = '';
    keys.forEach(k=>{
      global.items.forEach(gi=>{
        if(k === gi.id.toString()){
          string += `${gi.name} number of items: ${this.items[k]} item total is `;
        }
      });
    });
    return string;

    /*let cartArray = global.items.map(gi => {
      keys.forEach(k => {
        if (k === gi.id.toString()) {
          return `You ordered ${gi.name}`;
        }
      });
    });

    return cartArray;




    let array = [];
    keys.forEach(k => {
      global.items.forEach(gi => {
        if (k === gi.id.toString()) {
          array.push(gi.name);
        }
      });


    });
    return array;*/


    /*for (const [key, value] of Object.entries(this.items)) {
      console.log(`${key}: ${value}`);
    }*/
  }
}