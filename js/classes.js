


export class Pokemon {
    constructor(name, type, hp, moves1, moves2){
        this.name = name;

        this.type = type;
        this.hp = hp;
        this.moves1 = moves1;
        this.moves2 = moves2;
    }




    describe() {
        return `${this.name} ,${this.type} , ${this.hp} , ${this.moves1}, ${this.moves2} `



    }
}


const charizard = new Pokemon ("Charizard" , "Fire , Flying" , 84 , "Wing Attack" , "FlameThrower");
const snorlax = new Pokemon ("Snorlax", )
//

const pokemonName = document.querySelector(".pkmName");


const playerBtn1 = document.querySelector(".playerBtn1");


//

//
const charizardOutput = () => {
    playerBtn1.innerHTML = charizard.moves1
    pokemonName.textContent = charizard.name
    
};
//


console.log(charizard.describe())
charizard.hp -= 30
console.log("Charizard got hit by Lightning Bolt and lost 30 HP" , charizard.hp)


console.log(typeof Pokemon)
