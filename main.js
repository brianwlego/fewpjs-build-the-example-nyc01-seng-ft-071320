// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorMessage = document.querySelector('div#modal')
// Your JavaScript code goes here!
function addHiddenClass(){
  errorMessage.classList.add('hidden')
}

document.addEventListener('click', e => {
  if (e.target.matches('span.like-glyph')){
    mimicServerCall()
    .then(function(resp){
      if (e.target.innerText === EMPTY_HEART){
        e.target.innerText = FULL_HEART
        e.target.classList.add('activated-heart')
      } else {
        e.target.innerText = EMPTY_HEART
        e.target.classList.remove('activated-heart')
      }


      
    }).catch(function(error){
      errorMessage.classList.remove('hidden')
      document.querySelector('p#modal-message').innerText = error
      setTimeout(function(){
        errorMessage.classList.add('hidden')
      }, 5000)
    })
  }
})





addHiddenClass()
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
