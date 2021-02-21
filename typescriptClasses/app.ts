import {Spacecraft,Containership} from './base-ships'
import {MillenniumFalcon} from './starfighters'

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperSpace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2 
console.log(`Is Falcon good for the job ? ${goodForTheJob(falcon)? 'YES': 'NO'}`)
