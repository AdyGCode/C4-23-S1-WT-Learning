/**
 * JavaScript Objects Part II
 *
 * JS Objects are similar to Python dictionaries and classes combined
 *
 * Filename:        assets/js/js-06-objects-2.js
 * Author:          Adrian Gould <adrian.gould@nmtafe.wa.edu.au>
 * Version:         1.0
 *
 * Dependencies:    n/a
 */

const vehicle = {
    type: "Car",
    brand: "Hyundai",
    model: "Kona",
    engineSize: 2750,
    start: function () {
        console.log(`${this.type} engine started`)
    },
    stop: function () {
        console.log(`${this.type} engine stopped`)
    },
    goTo: function (destination) {
        console.log(`${this.type} is going to ${destination}`)
    },
}

vehicle.start()
vehicle.goTo("Darwin")
vehicle.stop()

const displayCarDetails = ({brand, model, engineSize}) => console.log(`This ${brand} ${model} has a ${engineSize}cc engine.`)
displayCarDetails(vehicle)

newVehicle = {...vehicle}
newVehicle.model="Accent"
newVehicle.engineSize=2000
displayCarDetails(newVehicle)

