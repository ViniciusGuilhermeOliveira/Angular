export class Spacecraft {
    constructor(public propulsor: string){}

    jumpIntoHyperSpace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}
export interface Containership{
    cargoContainers: number
}