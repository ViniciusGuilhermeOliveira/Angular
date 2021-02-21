import{Spacecraft,Containership} from './base-ships'

export class MillenniumFalcon extends Spacecraft implements Containership{
    cargoContainers: number

    constructor(){
        super('Hyperdrive')
        this.cargoContainers = 2
    }
    //não é necessario override para sobreescrever o metodo

    jumpIntoHyperSpace(){
        let luck: number
        luck = Math.random()
        console.log(luck) 
         luck >=0.5 ? super.jumpIntoHyperSpace : console.log('Failed to jump into hyperspace')
    }
}