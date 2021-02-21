import {Spacecraft,Containership} from './base-ships'
import {MillenniumFalcon} from './starfighters'
 
import * as _ from 'lodash'
console.log(_.pad("TypesCript Examples",40,"="))

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperSpace()

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2 
console.log(`Is Falcon good for the job ? ${goodForTheJob(falcon)? 'YES': 'NO'}`)


//npm install --save-dev @types/lodash
//npm install --save lodash@4.14