// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
//const heart = document.getElementsByClassName('like-glyph');
const heart = document.querySelectorAll('span.like-glyph');
const errorBox = document.getElementById('modal')


// Your JavaScript code goes here!

  heart.forEach((heart)=>heart.addEventListener("click",()=>{
    let clicked = false;
    clicked = !clicked;
    mimicServerCall()
    .then(response=> {
      console.log(response);
      heart.classList.toggle("activated-heart")
      if (clicked){
        heart.innerHTML = FULL_HEART;
      }
      else{
        heart.innerHTML = EMPTY_HEART;
      }
    })
    .catch(error =>{ 
      heart.innerHTML = EMPTY_HEART;
        heart.classList.remove("activated-heart")
      console.log(`***ERROR!*** ${error} ***ERROR!***`)
      errorBox.classList.remove('hidden');
      setTimeout(() => {
        errorBox.classList.add('hidden');
      }, 3000);
      
    
    })
})) 


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
