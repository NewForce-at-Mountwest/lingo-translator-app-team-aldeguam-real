const spanishData = {
  name: "Spanish",
  notablePeople: [
    "Antonio Banderas",
    "John Cena",
    "Enrique Iglesias",
    "Rita Moreno",
    "Penelope Cruz",
  ],
  funFacts: {
    relatedLanguages: [
      "Catalan",
      "Italian",
      "French",
      "Portuguese",
      "Romanian",
    ],
    lettersInAlphabet: 27,
    numberOfSpeakers: "more than 437 million",
  },
  countriesSpoken: [
    "Argentina",
    "Bolivia",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Dominican Republic",
    "Equador",
    "El Salvador",
    "Equatorial Guinea",
    "Guatemala",
    "Honduras",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Mali",
    "Monaco",
    "Paraguay",
    "Peru",
    "Puerto Rico",
    "Spain",
    "Uruguay",
    "Venezuela",
  ],
  dictionary: {
    hello: "Hola",
    goodbye: "Adiós",
    thankYou: "Gracias",
    goodEvening: "Buena noches",
    howAreYou: "¿cómo estás?",
    whatsYourName: "cuál es tu nombre?",
  },
};

let container3 = document.querySelector("#language-container")

document.querySelector("#spanish").addEventListener("click", function(){
  console.log("hello, world") 
  container3.innerHTML = h1(spanishData.name, "spanish-heading")
  container3.innerHTML += createCard("Notable People", loopTest(spanishData.notablePeople))
  container3.innerHTML += createCard("Countries Spoken", loopTest(spanishData.countriesSpoken))
  container3.innerHTML += createCard("Fun Facts", loopFunFacts(spanishData.funFacts.relatedLanguages, "Related Languages:", "Letters in Alphabet", spanishData.funFacts.lettersInAlphabet, "Number of Speakers World Wide", spanishData.funFacts.numberOfSpeakers))
})


