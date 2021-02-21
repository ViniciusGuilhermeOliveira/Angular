class Spacecraft {
    constructor(public propulsor: string){}

    jumpIntoHyperSpace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()

class MillenniumFalcon extends Spacecraft{
    constructor(){
        super('Hyperdrive')
    }
    //não é necessario override para sobreescrever o metodo

    jumpIntoHyperSpace(){
        let luck: number
        luck = Math.random()
     //   console.log(luck) 
         luck >=0.5 ? super.jumpIntoHyperSpace : console.log('Failed to jump into hyperspace')
    }
}


let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperSpace()

interface Containership{
    cargoContainers: number
}

class MillenniumFalconDois extends Spacecraft implements Containership{

    cargoContainers:number

    constructor(){
        super('Hyperdrive')
        this.cargoContainers = 2
    }
    //não é necessario override para sobreescrever o metodo

    jumpIntoHyperSpace(){
        let luck: number
        luck = Math.random()
     //   console.log(luck) 
         luck >=0.5 ? super.jumpIntoHyperSpace : console.log('Failed to jump into hyperspace')
    }
}

let falconDois = new MillenniumFalconDois()
falconDois.jumpIntoHyperSpace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2 
console.log(`Is Falcon good for the job ? ${goodForTheJob(falconDois)? 'YES': 'NO'}`)
