const frenchData = {
  name: "French",
  notablePeople: [
    "Vincent Van Gogh",
    "Claude Monet",
    "Gustave Eiffel",
    "John Cena",
    "Coco Chanel",
  ],
  funFacts: {
    relatedLanguages: ["Latin", "Spanish", "Italian"],
    lettersInAlphabet: 26,
    numberOfSpeakers: "about 300 million",
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
    "Togo and Vanuatu",
  ],
  dictionary: {
    hello: "Bonjour",
    goodbye: "Au revior",
    thankYou: "Merci",
    goodEvening: "Bon soir",
    howAreYou: "Ça va?",
    whatsYourName: "Comment tu t’appelles?",
  },
};

//THIS CALLS THE
let container = document.querySelector("#language-container");

document.querySelector("#french").addEventListener("click", function () {
  container.innerHTML = h1(frenchData.name, "french-heading");
  container.innerHTML += `<div class="row">
   ${createCard("Notable People", loopTest(frenchData.notablePeople))}
   ${createCard("Countries Spoken", loopTest(frenchData.countriesSpoken))}
  ${createCard(
    "Fun Facts",
    loopFunFacts(
      frenchData.funFacts.relatedLanguages,
      "Related Languages:",
      "Letters in Alphabet",
      frenchData.funFacts.lettersInAlphabet,
      "Number of Speakers Worldwide",
      frenchData.funFacts.numberOfSpeakers
    )
  )}
   </div>`;
  container.innerHTML += createTranslator("french-input", "french-btn");
});

document.querySelector("body").addEventListener("click", function () {
  console.log("this should be something", event.target.id);
  if (event.target.id === "french-btn") {
    console.log("clickety click clack click");
    if (document.querySelector("#french-input").value === "Hello" || document.querySelector("#french-input").value === "hello") {
      console.log(frenchData.dictionary.hello);
    }
  }

  //  document.querySelector("#french-btn").addEventListener("click", function () {
  // if ("#french-input" === "Hello" || "#french-input" === "hello") {
  //  console.log(frenchData.dictionary.hello)
});
