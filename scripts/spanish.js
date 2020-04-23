const spanishData = {
    name: "Spanish",
    notablePeople: [
      "Antonio Banderas",
      "John Cena",
      "Enrique Iglesias",
      "Rita Moreno",
      "Penelope Cruz"
    ],
    funFacts: {
      relatedLanguages: ["Catalan", "Italian", "French", "Portuguese", "Romanian"],
      lettersInAlphabet: 27,
      numberOfSpeakers: "more than 437 million"
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
      "Venezuela"
    ],
    dictionary: {
      hello: "Hola",
      goodbye: "Adiós",
      thankYou: "Gracias",
      goodEvening: "Buena noches",
      howAreYou: "¿cómo estás?",
      whatsYourName: "cuál es tu nombre?"
    }
  };

  // let container2 = document.querySelector("#language-container")

  // document.querySelector("#hindi").addEventListener("click", function(){
  //   container2.innerHTML = h1(hindiData.name, "hindi-heading")
  //   container2.innerHTML += createCard("Notable People", loopTest(hindiData.notablePeople))
  //   container2.innerHTML += createCard("Countries Spoken", loopTest(hindiData.countriesSpoken))
  //   container2.innerHTML += createCard("Fun Facts"),loopTest((hindiData.funFacts))

  let container3 = document.querySelector("#language-container")

document.querySelector("#spanish").addEventListener("click", function(){
  container3.innerHTML = h1(spanishData.name, "spanish-heading")
  container3.innerHTML += createCard("Notable People", loopTest(spanishData.notablePeople))
  container3.innerHTML += createCard("Countries Spoken", loopTest(spanishData.countriesSpoken))
  container3.innerHTML += createCard("Fun Facts"),loopTest((spanishData.funFacts))
})
