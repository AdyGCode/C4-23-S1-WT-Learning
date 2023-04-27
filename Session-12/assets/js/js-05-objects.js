/**
 * JavaScript Objects
 *
 * JS Objects are similar to Python dictionaries and classes combined
 *
 * Filename:        assets/js/js-05-objects.js
 * Author:          Adrian Gould <adrian.gould@nmtafe.wa.edu.au>
 * Version:         1.0
 *
 * Dependencies:    n/a
 */

const emptyObject1 = {}
const emptyObject2 = new Object()
const emptyObject3 = Object.create({})

const feline = {name: "Freda"}

let game = {
    title: 'bearicades',
    players: [1, 4,],
    tags: ['card', 'survival',],
    duration: [30, 45,],
}

console.log(`Game title: ${game.title}`)
console.log(`${game.players[0]} - ${game.players[1]} Players`)

console.log(game)
console.log("Updating the game title property")
game.title = "Bearicades"

console.log(game)
console.log("Adding new properties")
game.company = "9th Level Games"
game.dummyProperty = "This is to be removed"
game['url'] = "https://9thlevel.com"

console.log(game)
console.log("Dummy Property: ", game.dummyProperty)

game.dummyProperty = null // this does NOT delete the property
console.log("Wrong way to delete Dummy Property: ",game.dummyProperty)

delete game.dummyProperty // correct way to delete a property
console.log("Delete Dummy Property: ",game.dummyProperty)



