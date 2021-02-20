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

let distance = 11
// chamada da Função utilizando tamplate String, utilizando o caracter "`" na chamda da string pode passar as funões dentro da string 
// iif no type script tem a syntax ${condição ? true parte : false parte}
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO' }`)

// arrow function, esse tipo de função é uma versão simplificada da função normal
// syntax  nome da função = parametros => implementação da função 
let call = (name: string) => console.log(`Do you copy, ${name} ?`)
// chamada da Arrow Function
call ("R2D2")



// tipos de parametros em funções 

function inc3 (speed: number , inc: number = 1) : number {
    return speed + inc
}

console.log(`inc (5,1) = ${inc3(5,1)}`)
console.log(`inc(5) = ${inc3(5)}`)

function defineNumber ():number{
    return 5
}


/* atribuindo o valor default como o retorno de uma função, 
a função defineNumber retorna o valor 5 que é passado para a função 
inc3 que devolve o valor somado ao incremento e então passa esse valor c
omo default para o parametro inc da função inc2
*/
function inc2 (speed: number , inc: number = inc3(defineNumber(),defineNumber())) : number {
    return speed + inc
}

console.log(`inc2 (5,1) = ${inc2(5,1)}`)
console.log(`inc2(5) = ${inc2(5)}`)
