export function getRandomNum(num){
    return Math.floor(Math.random() * num)
}
function attackFunction() {
   Num = getRandomNum(20);
    if (num = 19) {
        console.log('The move missed!')
    } else {
       moveHit();
    }
} 
function moveHit() {
    console.log(`${this.move} caused ${this.move.damage} HP in damage!`);
    this.otherPokemon.hp - this.move.damage;
    return this.otherPokemon.hp;
}