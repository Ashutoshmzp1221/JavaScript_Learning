// let i = 1, ans = 0;
// while(i <= 10)
// {
//     ans += i;
//     i++;
// }
// console.log("The sum is",ans);
class Game {
    constructor(score) {this.score = points; } 
    getPoints() { return this.score; }
}
class Bonus extends Game {
    constructor() { super(2);} 
    getpoints() { return super.getPoints() * 5; } 
} 
var result = new Bonus(); 
console.log(result.getPoints()); 