
var originalArray = [];
var reverseArray = [];
var invalidEntryFlag;
var answerDiv = document.getElementById("convert");
var showDiv = document.getElementById("show");

//event listener click
answerDiv.addEventListener("click", convertThis);

window.addEventListener("keypress", enter);

function enter (event) {
  if (event.keyCode == 13) {
    convertThis();
  }
};

//answerDiv.addEventListener("click", function (event) {
  function convertThis () {
  //grab the user input
  var userString = document.getElementById("user-input").value
  if (userString != "") {
  //validate letters only
  validate(userString);
  if (invalidEntryFlag === false) {
    return;
  }
  //convert string to an array
  originalArray = userString.split('');
  console.log("This is my string made into an array: ", originalArray);

  //call function to reverse array
  var reverseString = reversal(userString);
  console.log("This is my string reversed: ", reverseString);
    //DIV id=reverseHere ... write this to the DOM
  document.getElementById("reverseHere").innerHTML = "<p>Here is your entry in reverse: " + reverseString +"</p>";
  //call alphabits function
  var alphabetString = originalArray.sort().join('');
  console.log("This is my string alphabetized: ", alphabetString);
    //DIV id=abcHere ... write this to the DOM
  document.getElementById("abcHere").innerHTML = "<p>Here is your entry in alphabetical order: " + alphabetString +"</p>";

  //call palindrom function
  palindrome(userString, reverseString);

  //show answer
  toggle_visibility("show");

    //DIV id=palindromeHere ... write this to the DOM
  console.log("Program complete");
}

else {
  alert("Please enter a valid word/phrase.");
}

};

function reversal(userString) {
  //reverse array
  reverseArray = userString.split('').reverse();

  //convert array to string
  return reverseArray.join('');

  //print string to DOM
}

function alphabits() {
  //sort array alphabetically
  //convert array to string

  //write string to DOM
}

function palindrome(userString, reverseString) {
  //compare varRegular to varReverse
  //if palidrome write "this is a ..." to the DOM
  //else write "this ..." to the DOM
  if (userString === reverseString) {
    document.getElementById("palindromeHere").innerHTML = "You have a PALINDROME!!";
    console.log("You have a palindrome!");
  } else {
      document.getElementById("palindromeHere").innerHTML = "You do NOT have a palindrome";
      console.log("You do not have a palindrome!");
    }
}


// The text input should only accept letters. No numbers.
function validate(userStringRepresentation) {
    //check to see if userStringRepresentation is only letters
    if (userStringRepresentation.indexOf(0) >= 0 || userStringRepresentation.indexOf(1) >= 0 || userStringRepresentation.indexOf(2) >= 0 || userStringRepresentation.indexOf(3) >= 0 || userStringRepresentation.indexOf(4) >= 0 || userStringRepresentation.indexOf(5) >= 0 || userStringRepresentation.indexOf(6) >= 0 || userStringRepresentation.indexOf(7) >= 0 || userStringRepresentation.indexOf(8) >= 0 || userStringRepresentation.indexOf(9) >= 0) {
      alert("Please enter only phrases containing letters. Try again.");
      invalidEntryFlag = false;
    } else {
        invalidEntryFlag = true;
      }
}

function toggle_visibility(id) {
  document.getElementById(id).className = "show";
}