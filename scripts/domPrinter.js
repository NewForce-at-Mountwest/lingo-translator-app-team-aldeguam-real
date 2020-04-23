
// FUNCTION THAT DEFINES THE H1 ELEMENT
const h1 = (text, classNames) => {
    return `<h1 class="${classNames}">${text}</h1>`
}





// CARD CREATOR FUCNTION
const createCard = (title, descriptiveText) => {
  return`
<div class="card" style="width: 18rem;"> 
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${descriptiveText}</p>
  </div>
</div>`
}


//LOOP THAT GOES THROUGH THE DATA FOR Countries Spoken 
const loopTest = (dataForLoop) => {
  let data = ""
  for (i =0; i < dataForLoop.length; i++) {
    data += `${dataForLoop[i]} <br>`
  }
  return data
}



    //  THIS MAKES THE SPLASH PAGE WORK BY PRINTING TO THE DOM
    document.querySelector("#language-container").innerHTML =`
     <h1 class="text-center" id="welcome">Welcome To Lingo </h1>
     <p class="text-center"> Click a Language to Begin </P>
    `
 


 
