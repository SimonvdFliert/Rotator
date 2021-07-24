// Get values from page
function getValues(){
    let inputString = document.getElementById("inputString").value;

    //clean the string by removing special characters
    inputString = inputString.replace(/[^a-zA-Z ]/g, "");

    //lower string
    inputString = inputString.toLowerCase();

    let IsPalindrome = checkPalindrome(inputString);
    displayContent(IsPalindrome, inputString)
}

//Check if values are palindrome
function checkPalindrome(inputString){

    let stringLength = inputString.length;
    for (let i = 0; i < (stringLength/2); i++) {
        if(inputString.charAt(i) != inputString.charAt(stringLength - i - 1)){
            return false;
        }
        
    }
    return true;
}

// Display content on screen
function displayContent(IsPalindrome, inputString){

    if(IsPalindrome){
        // write the message to the page
        document.getElementById("msg").innerHTML = `Yes! Your input was a palindrome: ${inputString}`;

        // show the alert box
        document.getElementById("alert").classList.remove("invisible");

    }
    else{
        document.getElementById("msg").innerHTML = `No! Your input ${inputString} was not a palindrome!`;

        // show the alert box
        document.getElementById("alert").classList.remove("invisible");
    }

}