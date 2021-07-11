// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')



// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
 // YOUR CODE HERE

//  localstorage https://www.youtube.com/watch?v=AUOzvFzdIk4
let username = {
  name: ""
};

let username_serialized = JSON.stringify(username);
localStorage.setItem("username", username_serialized);
console.log(localStorage);

//  cookies
 document.cookie = "username=; path=/";

 var count = parseInt(document.cookie) || 0
  formEl.onclick = function() {
  count ++
  document.cookie = count
 }


formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE




  function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp