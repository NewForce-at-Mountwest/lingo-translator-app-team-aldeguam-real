const splashPage = () => {
return `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src=https://www.azquotes.com/picture-quotes/quote-with-languages-you-are-at-home-anywhere-edmund-de-waal-88-23-20.jpg"" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">To learn a new Language please select one of the following.</p>
  </div>
</div>`
}

document.querySelector("#lingo").addEventListener("click", function(){
    console.log("am i clicking?")
    document.querySelector("#language-container").innerHTML = splashPage()