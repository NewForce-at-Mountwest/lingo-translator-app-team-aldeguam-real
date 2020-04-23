const frenchData = {
  name: "French",
  notablePeople: [
    "Vincent Van Gogh",
    "Claude Monet",
    "Gustave Eiffel",
    "John Cena",
    "Coco Chanel"
  ],
  funFacts: {
    relatedLanguages: ["Latin", "Spanish", "Italian"],
    lettersInAlphabet: 26,
    numberOfSpeakers: "about 300 million"
  },
  countriesSpoken: [
    "Belgium",
    "Benin",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Canada",
    "Chad",
    "the Ivory Coast",
    "the Democratic Republic of the Congo",
    "Djibouti",
    "Equatorial Guinea",
    "France",
    "Haiti",
    "Luxembourg",
    "Madagascar",
    "Mali",
    "Monaco",
    "Niger",
    "Rwanda",
    "Senegal",
    "Seychelles",
    "Switzerland",
    "Togo and Vanuatu"
  ],
  dictionary: {
    hello: "Bonjour",
    goodbye: "Au revior",
    thankYou: "Merci",
    goodEvening: "Bon soir",
    howAreYou: "Ça va?",
    whatsYourName: "Comment tu t’appelles?"
  }
};

// Note: this will print on page load. You will need to refactor this code slightly so that it only prints when you click the "French" button on the nav bar

// This line of code calls the h1 function defined in domPrinter.js and passes in the text (the name property in the above object) and a class name of "french-heading", which currently has no applied CSS so we won't see a difference
// document.querySelector("#language-container").innerHTML = h1(frenchData.name, "french-heading")


let container = document.querySelector("#language-container")

document.querySelector("#french").addEventListener("click", function(){
  container.innerHTML += createCard("Notable People", loopTest(frenchData.notablePeople))
  container.innerHTML += createCard("Countries Spoken", loopTest(frenchData.countriesSpoken))
})

// document.querySelector("#french").addEventListener("click", function (){
//   document.querySelector("#language-container").innerHTML += createCard("Countries Spoken", loopTest(frenchData.countriesSpoken))
// })

 // Build the list of things to go in the card (notable people)
  // const listOfPeople = loopTest(frenchData.notablePeople)
  // console.log(listOfPeople)

  // // Build card using list of things we built in step 1
  // const famousPeopleCard = createCard("Famous People", listOfPeople)
  // console.log(famousPeopleCard)
  // // Print card to DOM
  // document.querySelector("#language-container").innerHTML += famousPeopleCard;

  // document.querySelector("#language-container").innerHTML += createCard("Notable People", loopTest(frenchData.notablePeople)) 

  // const loop = () => {
//   let notables = ""
// for (i = 0; i < frenchData.notablePeople.length; i++){
//   notables += `${frenchData.notablePeople[i]} <br>`
// }
// return notables
// }

// const loop1 = () => {
//   let countries = ""
// for (i = 0; i < frenchData.countriesSpoken.length; i++){
//     countries += `${frenchData.countriesSpoken[i]} <br>`
//   }
//   return countries
// }