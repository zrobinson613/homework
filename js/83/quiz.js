(function () {
    'use strict';

    let orderArray = [];
    const resultsDiv = document.getElementById('results');

    class Item {

        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;

        }
    }

    class Order {

        constructor(custName, custAddr, items) {
            this.custName = custName;
            this.custAddr = custAddr;
            this.items = items;
        }
        get total() {
            let totalprice = 0;
            this.items.forEach(item => {
                totalprice += item.quantity * item.price;
            });
            return totalprice;
        }
    }

    function fetchObjectFromFile(file) {

        // console.log(UrlExists(file));    deprecated when synchronous, could not solve it

        if (file) {

            fetch(file)
                .then(response => {
                    console.log(response);
                    if (!response.ok) {
                        throw new Error(`${response.status} ${response.statusText}`);
                    } else if (response.status === 404) {
                        throw new Error("file does not exist");
                    }
                    return response.json();
                })
                // SL - kishkes - cute - but not really descriptive...
                .then(kishkes => {
                    kishkes.forEach(k => {
                        // SL - seems the complexity of checking for "valid" data is probably overkill here
                        // defensive programing is great but I might rely on data matching agreed upon API unless this was some sort of critical system. I would code for cases that agreed upon API allows for (e.g no items, no orders, price or quantity of 0 - though quantity of 0 is probably bad data, and behave properly in those cases but not sure I would handle receiving complete garbage...

                        let properties = ['customer', 'address', 'items'];
                        if ((properties.every(p => k.hasOwnProperty(p) && k[p] !== null))) {

                            let itemArray = [];
                            k.items.forEach(i => {

                                let properties = ['item', 'quantity', 'total'];
                                if ((properties.every(p => i.hasOwnProperty(p) && i[p] !== null))) {

                                    itemArray.push(new Item(i.item, (i.total / i.quantity), i.quantity));

                                } else {
                                    throw new Error("error in json, please check \"items\" properties");
                                }
                            });
                            orderArray.push(new Order(k.customer, k.address, itemArray));

                        } else {
                            throw new Error("error in json, please check properties");
                        }
                    });
                    uploadToHTML();
                })
                .catch(error => {
                    console.error('we have an error', error);
                });
        }


    }

    fetchObjectFromFile('json.json');

    // SL - upload?
    function uploadToHTML() {
        console.log(orderArray);
        orderArray.forEach(order => {
            resultsDiv.innerHTML += `<hr>
                                    <div class="custInfo">
                                    <p>Customer: ${order.custName}</p>
                                    <p>Address: ${order.custAddr}</p>
                                    <p>Total: ${order.total.toFixed(2)}</p>
                                    </div>
                                    <p class="itemsTitle">Items:</p>`;

            order.items.forEach(i => {
                resultsDiv.innerHTML += `<div class="itemInfo">
                                         <p>Item: ${i.name}</p>
                                        <p>Quantity: ${i.quantity}</p>
                                        <p>Price: ${i.price.toFixed(2)}</p>
                                        </div>`;
            });
        });
    }

    /*function UrlExists(url) {
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        return http.status !== 404;
    }*/

})();

// SL - nice - 100