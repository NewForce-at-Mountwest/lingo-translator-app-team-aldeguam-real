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


///ADDED CLICK EVENTS FOR ALL LINKS IN THE NAV BAR
document.querySelector("#spanish").addEventListener("click", function(){
    console.log("click click click")
    document.querySelector("#language-container").innerHTML = h1(spanishData.name, "spanish-heading")
    })

    document.querySelector("#hindi").addEventListener("click", function(){
      console.log("click ")
      document.querySelector("#language-container").innerHTML = h1(hindiData.name, "hindi-heading")
      })

      document.querySelector(".navbar-brand").addEventListener("click", function(){
        console.log("superclick its super clicky yeah")
        })

        document.querySelector("#french").addEventListener("click", function(){
            console.log("click click click")
            document.querySelector("#language-container").innerHTML = h1(frenchData.name, "french-heading")
        })