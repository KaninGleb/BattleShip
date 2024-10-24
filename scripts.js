// Ship position
const randomLoc = Math.floor(Math.random() * 5) // From 0 to 4
const location1 = randomLoc
const location2 = location1 + 1
const location3 = location2 + 1

// Sunk or not
let isSunk = false;

// The estimated location of the ship ("shot")
let guess;

// Add hits counter
let hits = 0;

// Creating a shot counter
let guesses = 0;


while (isSunk === false) {
    // Don't forget to turn a string into a number
    guess = +prompt("Fire! Enter a number 0-6");
    if (guess < 0 || guess > 6) {
        alert("Please, enter a valid cell number!")
    } else {
        // Increasing the shot counter
        guesses = guesses + 1
        // Logical "||" <-- (or)
        if (guess === location1 || guess === location2 || guess === location3) {
            alert("HIT!")
            // Counting hits
            hits = hits + 1
            // If got hit
            if (hits === 3) {
                isSunk = true
                alert("You sank my battleship!")
            }
        } else {
            alert("MISS!")
        }
    }
}

const stats = (`You have ${hits} hits out of ${guesses} shots.`)
// const stats = "You have " + hits + " hits out of " + guesses + " shots."
alert(stats)