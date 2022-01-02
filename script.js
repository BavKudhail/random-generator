// Pseudo-code


// When 'Number of Characters' range slider is adjusted. Then the number of characters display is synced accordingly. 
const characterAmountRange = document.getElementById('characterRange')
const characterAmountNumber = document.getElementById('characterNumber')

const isMale = document.getElementById('isMale')
const isFemale = document.getElementById('isFemale')

const form = document.getElementById('form')

// When character range/number input is altered, execute syncCharacters function
characterAmountRange.addEventListener('input', syncCharacters)
characterAmountNumber.addEventListener('input', syncCharacters)
// Create the syncCharacter function
// Function takes in an event (e) arguement
function syncCharacters(e){
    let value = e.target.value

    characterAmountRange.value = value
    characterAmountNumber.value = value
}

// When male is checked, isMale is set to true
// When male is unchecked, isMale is set to false


form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log("generate name!")
})






// When is male is selected, names that are predominatly male are displayed
// When is female is selected, names that are predominatly female are displayed
// When generate name button is clicked, a random name with the selected values is displayed in the text box
