
var originalArray = [];
var reverseArray = [];
var invalidEntryFlag;
//event listener click
document.getElementById("convert").addEventListener("click", function (event) {
  //grab the user input
  var userString = document.getElementById("user-input").value
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
  //call alphabits function
  alphabits();
  //call palindrom function
  palindrome(userString, reverseString);
});

//event listener enter

function reversal(userString) {
  //reverse array
  reverseArray = userString.split('').reverse();

  //convert array to string
  return reverseArray.join('');

  //print string to DOM
  console.log("This is my reverse String: ", reverseString);
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
    console.log("You have a palindrome!"); //make this go to DOM
  } else {
      console.log("You do not have a palindrome!"); //make this go to DOM

  }
}


// The text input should only accept letters. No numbers.
function validate(userStringRepresentation) {
    console.log(userStringRepresentation);
    //check to see if userStringRepresentation is only letters
    if (userStringRepresentation.indexOf(0) >= 0 || userStringRepresentation.indexOf(1) >= 0 || userStringRepresentation.indexOf(2) >= 0 || userStringRepresentation.indexOf(3) >= 0 || userStringRepresentation.indexOf(4) >= 0 || userStringRepresentation.indexOf(5) >= 0 || userStringRepresentation.indexOf(6) >= 0 || userStringRepresentation.indexOf(7) >= 0 || userStringRepresentation.indexOf(8) >= 0 || userStringRepresentation.indexOf(9) >= 0) {
      alert("Please enter only phrases containing letters. Try again.");
      invalidEntryFlag = false;
    } else {
        invalidEntryFlag = true;
    }

}