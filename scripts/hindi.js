
  const hindiData = {
    name: "Hindi  ",
    notablePeople: [
      "Nelly Furtado",
      "John Cena",
      "Natalie Di Luccio",
      "Anush Stepanyan",
      "Will Smith",
      "Hugh Jackman",
      "Julia Roberts",
      "Ben Kingsley",
      "Dev Patel"

    ],
    funFacts: {
      relatedLanguages: `Hindi is not really one language, rather it is a "catchall" name for over 300 different languages, like Chinese, which is another generic name for different languages.`,
      lettersInAlphabet: 50,
      numberOfSpeakers: "about 341 million"
    },
    countriesSpoken: [
      "India",
      "Nepal",
      "Fiji",
      "Pakistan",
      "Trinidad and Tobago",
      "Singapore",
      "South Africa",
      "Mauritius",
      "Guyana",
      "Suriname"
    ],
    dictionary: {
      hello: {
        hindi: "नमस्ते",
        englishPronunciation: "namaste"},
      goodbye: {
        hindi: "अलविदा",
        englishPronunciation:"alavida"
      },
      thankYou: {
        hindi: "धन्यवाद",
        englishPronunciation: "dhanyavaad"

      },
      goodEvening: {
        hindi: "सुसंध्या",
        englishPronunciation: "susandhya"
      },
      howAreYou: {
        hindi: "क्या हाल है",
        englishPronunciation: "kya haal hai"
      },
      whatsYourName: {
        hindi: "तुम्हारा नाम क्या हे",
        englishPronunciation: "tumhaara naam kya he"
    }
    }
  };
 



//THIS CALLS ALL RELAVENT FUNCTIONS AND PRINTS HINDI DATA TO THE DOM


  let container2 = document.querySelector("#language-container")
//THIS STORES THE ID LANGUAGE CONTAINER IN THE VARIABLE CONTAINER2
  document.querySelector("#hindi").addEventListener("click", function(){
   //THIS TARGETS THE ID OF HINDI THEN ADDS CLICK FUNCTIONALITY TO HINDI IN THE NAV BAR
    container2.innerHTML = h1(hindiData.name, "hindi-heading")
    //THIS PRINTS THE HEADING INTO THE DOM
    container2.innerHTML += createCard("Notable People", loopTest(hindiData.notablePeople))
    //THIS CALLS THE TARGETED LANGUAGE CONTAINER, CREATE CARD FUNCTION WHICH PRINTS THE PARAMATER OF NOTABLE PEOPLE, LOOP TEST WHICH PRINTS THE PARAMATER OF HINDI DATA.NOTABLE PEOPLE
    container2.innerHTML += createCard("Countries Spoken", loopTest(hindiData.countriesSpoken))
   //THIS CALLS THE TARGETED LANGUAGE CONTAINER, CREATE CARD FUNCTION WHICH PRINTS THE PARAMATER OF COUNTRIES SPOKEN, LOOP TEST WHICH PRINTS THE PARAMATER OF HINDI DATA.COUNTIES SPOKEN
    container2.innerHTML += createCard("Fun Facts", hindiFunFacts("Related Languages:", hindiData.funFacts.relatedLanguages, "Letters in Alphabet", hindiData.funFacts.lettersInAlphabet, "Number of Speakers World Wide", hindiData.funFacts.numberOfSpeakers))
  //THIS CALLS THE TARGETED LANGUAGE CONTAINER, CREATE CARD FUNCTION WHICH PRINTS THE PARAMATER OF FUN FACTS, CALLS THE FUNCTION OF HINDI FUN FACTS THEN PRINTS THE 6 PARAMATERS IN THE FUNCTION

  })


//FUNCTION FOR HINDI FUN FACTS
const hindiFunFacts = (title, lang, letters, numberLetters, speakers, numberSpeakers) =>{
 return  `<h6>${title}</h6>
  <p>${lang}</p>
  <h6>${letters}:</h6><p>${numberLetters}</p>
  <h6>${speakers}:</h6><p>${numberSpeakers}</p>`}

 
