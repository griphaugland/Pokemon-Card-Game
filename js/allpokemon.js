class Pokemons {
    constructor(name, type, stats, moves){
        this.name = name;
        this.type = type;
        this.stats = stats;
        this.moves = moves;
    }

    describe() {
        return `${this.name} ,${this.type} , ${this.stats} , ${this.moves} `



    }
}


const charizard = new Pokemons ("Charizard" , "Fire , Flying" , 200 , "Move 1, Move 2");
console.log(charizard.describe())
charizard.stats -= 30
console.log("Charizard got hit by Lightning Bolt and lost 30 HP" , charizard.describe())
