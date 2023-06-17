var items =[]

class Inventory {
    constructor(name, quantity, price,){
        this.name =name;
        this.quantity = quantity;
        this.price =price;
        
    }

    add_item(itemName, itemQuantity, itemPrice){
        let item ={
            "name": itemName,
            "quantity":itemQuantity,
            "price":itemPrice
        }
        return items.push(item)
    }

    display_item(){
        items.forEach((item)=>{
            console.log(item);
        })
    }
}

const myinventory = new Inventory("corrola", 10, 200)

myinventory.add_item("corrola", 10, 200)
myinventory.add_item("corrola", 10, 200)

myinventory.display_item()

console.log(myinventory)