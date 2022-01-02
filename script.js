// Pseudo-code


// When 'Number of Characters' range slider is adjusted. Then the number of characters display is synced accordingly. 

const characterAmountRange = document.getElementById('characterRange')
const characterAmountNumber = document.getElementById('characterNumber')

characterAmountRange.addEventListener('input', syncCharacters)
characterAmountNumber.addEventListener('input', syncCharacters)

function syncCharacters(e){
    let value = e.target.value

    characterAmountRange.value = value
    characterAmountNumber.value = value
}


// create a value variable
// how to set value variable = input

// set character amount range.value = value variable
// set character amount number.value = value variable




// When is male is selected, names that are predominatly male are displayed
// When is female is selected, names that are predominatly female are displayed
// When generate name button is clicked, a random name with the selected values is displayed in the text box
