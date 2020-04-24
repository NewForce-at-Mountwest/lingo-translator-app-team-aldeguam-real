//THIS PRINTS THE TITLE ON EACH PAGE 
const h1 = (text, classNames) => {
  //THIS STORES THE PARAMETERS OF TEXT AND CLASS NAME THE VARIABLE OF H1
    return `<h1 class="${classNames}">${text}</h1>`
}


// card function
const createCard = (title, descriptiveText) => {
  return`
<div class="card m-3 p-2 col-sm" style="width: 18rem;"> 
  <div class="card-body">
    <h4 class="card-title">${title}</h4>
    <p class="card-text">${descriptiveText}</p>
  </div>`
}

// loop for cards
const loopTest = (dataForLoop) => {
let data = ""
for (i =0; i < dataForLoop.length; i++) {
  data += `${dataForLoop[i]} <br>`
}
return data
}

// loop for fun facts card *specifically*
const loopFunFacts = (dataForLoop, title, letters, numberLetters, speakers, numberSpeakers) => {
let data = ""
for (i =0; i < dataForLoop.length; i++) {
  data += `<li>${dataForLoop[i]} </li>`}
return `<h6>${title}</h6>
<ul>${data}</ul>
<h6>${letters}:</h6><p>${numberLetters}</p>
<h6>${speakers}:</h6><p>${numberSpeakers}</p>
`
}

const hindiFunFacts = (languages, title, letters, numberLetters, speakers, numberSpeakers) => {
  return `
  <h6>${title}</h6>
  <p>${languages}</p>
  <h6>${letters}:</h6><p>${numberLetters}</p>
  <h6>${speakers}:</h6><p>${numberSpeakers}</p>
  `
}

const createTranslator = (inputID, btnID) => {
  return `
  <fieldset>
  <form action="">
  <input id=${inputID} placeholer="Enter word here"></input>
  <text></text>
  </form>
  <button id=${btnID}>Translate</button>
  </fieldset>`
}

///ADDED CLICK EVENTS FOR ALL LINKS IN THE NAV BAR

    //  PRINTS THE SPLASH PAGE TO THE DOM
    document.querySelector("#language-container").innerHTML =`
     <h1 class="text-center" id="welcome">Welcome To Lingo </h1>
     <p class="text-center"> Click a Language to Begin </P>
    `
 


//   })//



 //  THIS MAKES THE SPLASH PAGE WORK

  document.querySelector("#language-container").innerHTML =`
   <h1 class="text-center" id="welcome">Welcome To Lingo </h1>
   <p class="text-center"> Click a Language to Begin </P>
  `

    document.querySelector("#language-container").innerHTML =`
   
     <h1 class="text-center" id="welcome">Welcome To Lingo </h1>
     <p class="text-center"> Click a Language to Begin </P>
    `
 
