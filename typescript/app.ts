let message:string = "Help me, Obi-Wan Kenobi. You're my only hope !"
console.log(message)

let episode: number = 4
console.log ("This episode is "+ episode)
episode += 1 
console.log ("the next episode is "+ episode)

let favoriteDroid // any declaration 
// declaração do tipo any recebe qualquer tipo de resultado
favoriteDroid = "R2D2"
favoriteDroid = 10
console.log("My favorite Droid is " + favoriteDroid)

//Funções:
let isEnoughToBeatMF = function (parsecs: number):boolean {
    return parsecs < 12;
}

let distance = 14

console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO' }`)

