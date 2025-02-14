
//* Part 1: Humble Beginnings
console.log("======= Part 1: Humble Beginnings =======");

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artefact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            accesories: ["small hat", "sunglasses"]
        }
        
    }, // need a comma to write the function after since is part of the object
    // roll(mod = 0) { // function
    //     const result = Math.floor(Math.random() * 20) + 1 + mod;
    //     console.log(`${this.name} rolled a ${result}.`);      
    // }
}


//print inventory array
console.log(`Inventory: ${adventurer.inventory}`); 
// print specifict array string
console.log(`Item on hand: ${adventurer.inventory[0]}`);
// print companion
console.log(`Summoned companion: ${adventurer.companion.name}`);

// Leo' companion
console.log(`${adventurer.companion.name}'s has a companion named: ${adventurer.companion.companion.name}, a type of: ${adventurer.companion.companion.type}`);


// loop over the array, prints each item individualy
for ( const object of adventurer.inventory)
    console.log(object);
    
    
//* Part 2: Class Fantasy
console.log("======= Part 2: Class Fantasy =======");


class Character {
    constructor (name,) { // use constructor to pass properties from parent class
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll(mod = 0) { //maybe use it as attack power?
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);      
    }
  };

  // changed to their respective class
  const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin);
robin.roll()


//* Part 3: Class Features
console.log("======= Part 3: Class Features =======");

class Adventurer1 extends Character {
    constructor (name, role) {
      super(name); 
      // Adventurers have specialized roles.
      this.role = ["Fighter", "Healer","Wizard", "Archer", "Warrior", "Assassin"]
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    // scout () {
    //   console.log(`The ${this.role} named ${this.name} is scouting ahead...`);
    //   super.roll();
    // }
  }

  class Companion extends Character {
    constructor(name) {
        this.name = name;
        this.type = type;
        this.inventory = []; // companion's inventory can be used to store some adventurer's items
    }
  }
  
  //* Part 4: Class Uniforms


//* Part 5: Gather Your Party
console.log("======= Part 5: Gather Your Party =======");


//* Part 6: Developing Skills


// vs.
class Adventurer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.health = 100;
  }
  scout () {
    console.log(`The ${this.role} named ${this.name} is scouting ahead...`);
  }
    roll(mod = 0) { //maybe use it as attack power?
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);      
  }
 duel (opponent) {
    console.log(`${this.name} vs ${opponent.name}`);

    while (this.health > 50 && opponent.health > 50){
      const myRoll = this.roll();
      const opponentRoll = opponent.roll();

      console.log(`${this.name} rolls: ${myRoll}`);
      console.log(`${opponent.name} rolls: ${opponentRoll}`);
      
      if (myRoll > opponentRoll) {
        opponent.health -= 1;
        console.log(`${this.name} attacked! ${opponent.name}'s health: ${opponent.health}`);      
      } else if (myRoll < opponentRoll) {
        this.health -= 1;
        console.log(`${opponent.name} attacked! ${this.name}'s health: ${this.health}`);
      } else {
        console.log("It's a draw! Rolling again!");       
      }
      
    }
    if (this.health > 50) {
      console.log(`${this.name} is the winner!`);
    } else {
      console.log(`${opponent.name} is the winner!`);
    }
  };
}


class AdventurerFactory {
  constructor(role) {
      this.role = role;
      this.adventurers = [];
  }

  generate(name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
      return newAdventurer;
  }

  findByIndex(index) {
      return this.adventurers[index];
  }

  findByName(name) {
      return this.adventurers.find((a) => a.name === name);
  }
}


const healers = new AdventurerFactory("Healer");
const fighters = new AdventurerFactory("Fighter");


const fabio = healers.generate("Fabio");
const elio = fighters.generate("Elio");


fabio.scout(); 
elio.scout(); 

// duel(elio);