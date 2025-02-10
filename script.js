
//* Part 1: Humble Beginnings

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
        
    }, // need a comma to write the function after
    roll(mod = 0) { // function
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);      
    }
}
adventurer.roll()

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
