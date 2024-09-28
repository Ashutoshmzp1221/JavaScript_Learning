const player = {
    firname : 'Virat',
    lastname : 'Kohli',
    numberToBat : '3',
    canBowl : false,
    getDetails: function(){
         console.log(this.firname, this.lastname,"comes at No.",this.numberToBat)
    }
}

const obj = function(){
    console.log(this.getDetails())
}

let x = obj.bind(player)
x()

const p = function(x,y){
    console.log(this.getDetails())
    console.log( x + y )
}

p.call(player,2,35) // call(), apply() ande bind function.