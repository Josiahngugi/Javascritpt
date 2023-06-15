class Character{
    constructor(name, health, strenght){
        this.name = name
        this.health = health
        this.strenght = strenght
    }


}

class Warrior extends Character{

    constructor(name, health, strenght, weapon, power){
        super(name, health, strenght)
        this.weapon =weapon
        this.power =power
    }

    attack(character){
        return  this.name +" " + "health is reduced"
    }
}

let warrior = new Warrior("gondaf", 100, 20, "spear", 20)

console.log(warrior.attack())