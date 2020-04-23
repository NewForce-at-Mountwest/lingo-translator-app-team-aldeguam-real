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
let container = document.querySelector("#language-container")

document.querySelector("#french").addEventListener("click", function(){
  console.log("hello, world")
  container.innerHTML = h1(frenchData.name, "french-heading")
  container.innerHTML += `<div class="row">
   ${createCard("Notable People", loopTest(frenchData.notablePeople))}
   ${createCard("Countries Spoken", loopTest(frenchData.countriesSpoken))}
  ${createCard("Fun Facts", loopFunFacts(frenchData.funFacts.relatedLanguages, "Related Languages:", "Letters in Alphabet", frenchData.funFacts.lettersInAlphabet, "Number of Speakers Worldwide", frenchData.funFacts.numberOfSpeakers))}
   </div>`
 
})
