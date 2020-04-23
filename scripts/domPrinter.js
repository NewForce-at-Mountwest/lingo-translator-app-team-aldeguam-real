// The purpose of this file is to define functions that will return individual HTML components

// You should not call any of these functions in this file. Instead, you should call them in the individual file for your language (e.g. hindi.js)


// For example, we can define a function here that prints an H1 element

const h1 = (text, classNames) => {
    return `<h1 class="${classNames}">${text}</h1>`
}


// Go to french.js to see how we can execute this function


// -------------------- For reference! -----------------//

// Here are some other ways to right the exact same function we wrote above:

// function h1(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = function(text, classNames){
//     return `<h1 class="${classNames}">${text}</h1>`
// }

// const h1 = (text, classNames) => `<h1 class="${classNames}">${text}</h1>`


// card function
const createCard = (title, descriptiveText) => {
  return`
<div class="card" style="width: 18rem;"> 
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${descriptiveText}</p>
  </div>
</div>`
}

const loopTest = (dataForLoop) => {
  let data = ""
  for (i =0; i < dataForLoop.length; i++) {
    data += `${dataForLoop[i]} <br>`
  }
  return data
}


///ADDED CLICK EVENTS FOR ALL LINKS IN THE NAV BAR

//  document.querySelector(".navbar-brand").addEventListener("click", function(){
//   console.log("superclick its super clicky yeah")
//   document.querySelector("#homepage").innerHTML = `
//   <h1>Welcome To Lingo</h1>
//        <p>Click a Language to Begin!</p>
  
//   `
 
//   })//


document.querySelector("#spanish").addEventListener("click", function(){
    console.log("click click click")
    document.querySelector("#language-container").innerHTML = h1(spanishData.name, "spanish-heading")
    })

    document.querySelector("#hindi").addEventListener("click", function(){
      console.log("click ")
      document.querySelector("#language-container").innerHTML = h1(hindiData.name, "hindi-heading")
      document.querySelector("#language-container").innerHTML +=`
      <div>
       <div class="card" style="width: 18rem;">
            <div class="card-body">
             <h5 class="card-title">Noteable People</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      `
      })
   
    //  THIS MAKES THE SPLASH PAGE WORK

    document.querySelector("#language-container").innerHTML =`
     <h1 class="text-center" >Welcome To Lingo </h1>
     <p class="text-center"> Click a Language to Begin </P>
    `
 
// this will redirect to dashboard --
      document.querySelector(".navbar-brand").addEventListener("click", function(){
        console.log("superclick its super clicky yeah")
        })

        document.querySelector("#french").addEventListener("click", function(){
            console.log("click click click")
            document.querySelector("#language-container").innerHTML = h1(frenchData.name, "french-heading")})

 
