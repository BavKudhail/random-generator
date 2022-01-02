// Pseudo-code

// Object containing all male names
let maleNameObject = {
    three:["Bob", "Jim", "Tom", "Tim", "Joe"],
    four:["Milo", "Finn", "Theo", "Hugo", "Owen"],
    five: ["James", "Logan", "Henry", "Aiden", "Lucas"],
    six: ["Oliver", "Daniel", "Samuel", "Carter", "Julian"]
}

// Object containing all female names
let femaleNameObject = {
    three:["Eva", "Ava", "Mia", "Ann", "Fay"],
    four:["Emma", "Lily", "Nora", "Aria", "Mila"],
    five: ["Emily", "Grace", "Sofia", "Riley", "Hazel"],
    six: ["Olivia", "Sophia", "Amelia", "Hannah", "Aubrey"]
}

// let randomName = maleNameObject.three[Math.floor(Math.random()*maleNameObject.three.length)];

// HTML variables
const characterAmountRange = document.getElementById('characterRange')
const characterAmountNumber = document.getElementById('characterNumber')
const isMale = document.getElementById('isMale')
const isFemale = document.getElementById('isFemale')
const form = document.getElementById('form')
const passwordDisplay = document.getElementById('passwordDisplay')

// Upon 'input' event, execute SyncCharacter function
characterAmountRange.addEventListener('input', syncCharacters)
characterAmountNumber.addEventListener('input', syncCharacters)

// Function syncs character number with character slider
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
    const password = generatePassword()
    passwordDisplay.innerText = password
})

function generatePassword(){

    // let randomName = []
    // if (isMale.checked ) randomName = maleNameObject
    // if (isFemale.checked) randomName = femaleNameObject

    let randomName = undefined
    
    if (isMale.checked) {
        if (characterAmountNumber.value == 6) {
            randomName = maleNameObject.six[Math.floor(Math.random()*maleNameObject.six.length)]
        } else if (characterAmountNumber.value == 5) {
            randomName = maleNameObject.five[Math.floor(Math.random()*maleNameObject.five.length)]
        } else if (characterAmountNumber.value == 4) {
            randomName = maleNameObject.four[Math.floor(Math.random()*maleNameObject.four.length)]
        } else if (characterAmountNumber.value == 3) {
            randomName = maleNameObject.three[Math.floor(Math.random()*maleNameObject.three.length)]
        }
    }
    
    if (isFemale.checked) {
        if (characterAmountNumber.value == 6) {
            randomName = femaleNameObject.six[Math.floor(Math.random()*femaleNameObject.six.length)]
        } else if (characterAmountNumber.value == 5) {
            randomName = femaleNameObject.five[Math.floor(Math.random()*femaleNameObject.five.length)]
        } else if (characterAmountNumber.value == 4) {
            randomName = femaleNameObject.four[Math.floor(Math.random()*femaleNameObject.four.length)]
        } else if (characterAmountNumber.value == 3) {
            randomName = femaleNameObject.three[Math.floor(Math.random()*femaleNameObject.three.length)]
        }
    }

    if (isMale.checked && isFemale.checked) {
        randomName = "Please select one box"
    }

    return randomName 
};

