// Pseudo-code

// Male names
let MaleNameObject = {
    three:["Bob", "Jim", "Tom", "Tim", "Joe"],
    four:["Milo", "Finn", "Theo", "Hugo", "Owen"],
    five: ["James", "Logan", "Henry", "Aiden", "Lucas"],
    six: ["Oliver", "Daniel", "Samuel", "Carter", "Julian"]
}

// When 'Number of Characters' range slider is adjusted. Then the number of characters display is synced accordingly. 
const characterAmountRange = document.getElementById('characterRange')
const characterAmountNumber = document.getElementById('characterNumber')
const isMale = document.getElementById('isMale')
const isFemale = document.getElementById('isFemale')
const form = document.getElementById('form')
const passwordDisplay = document.getElementById('passwordDisplay')

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


form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log("generate name!")
    const characterAmount = characterAmountNumber.value
    const maleNames = isMale.checked
    const femaleNames = isFemale.checked
    const password = generatePassword(characterAmount, isMale, isFemale)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, isMale, isFemale){

}





// When is male is selected, names that are predominatly male are displayed
// When is female is selected, names that are predominatly female are displayed
// When generate name button is clicked, a random name with the selected values is displayed in the text box
