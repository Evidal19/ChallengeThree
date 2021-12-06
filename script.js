// Assignment Code
var generateBtn = document.querySelector("#generatePassword");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var upercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_+{}|:<>,-=;'[]\,./'"
var passwordLength;
var lowercaseCheck;
var uppercaseCheck;
var numberCheck;
var specialCheck;
 
// Length of Password
function determineLength(){
 passwordLength = prompt ("Choose a length of at least  8 characters but no more than 128");
      if (passwordLength<8){
      alert("password length should be between 8-128 characters");
      determineLength();
      }else if (passwordLength>128){
      alert("password length must be a number 8-128 characters");
      determineLength();
     }else{
      alert("The next steps will be to select the charcters to your unique password");
      }
     return passwordLength;
}
 
// Determine if you want lowercase letters
function determineLowercase(){
 lowercaseCheck= prompt("Would you like lowercase letters in your password? \n(Yes or No)");
   console.log (lowercaseCheck)
 
     if (lowercaseCheck === null || lowercaseCheck === ""){
        alert("Please answer Yes or No");
        determineLowercase();
    
     }else if (lowercaseCheck === "No" || lowercaseCheck =="N"){
        lowercaseCheck =false;
        return lowercaseCheck;
 
     }else if (lowercaseCheck === "Yes" || lowercaseCheck =="Y"){
        lowercaseCheck =true;
         return lowercaseCheck;
  
     }else {
        alert( "Please select No or Yes" );
        determineLowercase();
       }
     return lowercaseCheck;
}
 
// Determine if you want Uppercase letters
function determineUppercase(){
 uppercaseCheck= prompt("Would you like uppercase letters in your password? \n(Yes or No)");
   console.log (uppercaseCheck)
 
    if (uppercaseCheck === null || uppercaseCheck === ""){
        alert("Please answer Yes or No");
        determineUppercase();
 
     }else if (uppercaseCheck === "No" || uppercaseCheck =="N"){
        uppercaseCheck =false;
        return uppercaseCheck;
 
     }else if (uppercaseCheck === "Yes" || uppercaseCheck =="Y"){
        uppercaseCheck =true;
        return uppercaseCheck;
 
     }else {
        alert( "Please select No or Yes" );
        determineUppercase();
       }
     return uppercaseCheck;
}
 
// Determine if you want numbers
function determineNumber(){
  numberCheck = prompt("Would you like to add numbers to your password? \n(Yes or No)");
   console.log (numberCheck)
 
    if (numberCheck === null || numberCheck === ""){
     alert("Please answer Yes or No");
     determineNumber();
 
    }else if (numberCheck === "No" || numberCheck =="N"){
        numberCheck =false;
        return uppercaseCheck;
 
    }else if (numberCheck === "Yes" || numberCheck =="Y"){
        numberCheck =true;
        return numberCheck;
    }else {
        alert( "Please select No or Yes" );
        determineNumber();
       }
    return numberCheck;
}
 
// Determine if you want special characters
function determineSpecial(){
specialCheck = prompt("Would you like to add special characters to your password? \n(Yes or No)");
   console.log (specialCheck)
 
   if (specialCheck === null || specialCheck === ""){
     alert("Please answer Yes or No");
     determineSpecial();
 
   }else if (specialCheck === "No" || specialCheck =="N"){
         specialCheck =false;
        return specialCheck;
 
   }else if (specialCheck === "Yes" || specialCheck =="Y"){
        specialCheck =true;
        return specialCheck;
 
   }else {
         alert( "Please select No or Yes" );
        determineSpecial();
        }
     return specialCheck
}
 
// Function to generate random number, special character, lowercase and uppercase letters for a password
function generatePassword(){

 if (lowercaseCheck && uppercaseCheck && numberCheck && specialCheck){
  characters+= lowercaseCheck + uppercaseCheck + numberCheck + specialCheck;
   console.log (generatePassword);

}else if (lowercaseCheck && uppercaseCheck && numberCheck){
  characters+= lowercaseCheck + uppercaseCheck +numberCheck;
   console.log (generatePassword);

}else if (lowercaseCheck && uppercaseCheck && specialCheck){
  characters+= lowercaseCheck + uppercaseCheck + specialCheck;
   console.log (generatePassword);

}else if ( lowercaseCheck && numberCheck && specialCheck){
  characters+= lowercaseCheck + numberCheck + specialCheck;
    console.log (generatePassword);

}else if (uppercaseCheck && numberCheck && specialCheck){
  characters+= uppercaseCheck + numberCheck + specialCheck;
   console.log (generatePassword);

}else if ( uppercaseCheck && specialCheck){
  characters+= uppercaseCheck + specialCheck;
   console.log (generatePassword);

}else if (uppercaseCheck && numberCheck){
  characters+= uppercaseCheck + numberCheck;
   console.log (generatePassword);

}else if ( numberCheck && specialCheck) {
  characters+= numberCheck + specialCheck;
   console.log (generatePassword);

} else if (numberCheck && lowercaseCheck) {
  characters+= numberCheck + lowercaseCheck;
   console.log (generatePassword);

}else if (lowercaseCheck && specialCheck) {
  characters+= lowercaseCheck + specialCheck;
   console.log (generatePassword); 
    
}else if ( specialCheck && uppercaseCheck) {
  characters+= specialCheck + uppercaseCheck;
   console.log (generatePassword);

}else if ( uppercaseCheck && lowercaseCheck) {
  characters+= uppercaseCheck + lowercaseCheck;
   console.log (generatePassword);

}else if ( uppercaseCheck && numberCheck && specialCheck){
  characters+= uppercaseCheck + numberCheck + specialCheck;
   console.log (generatePassword);

}else if ( uppercaseCheck){
  characters+= uppercaseCheck;
   console.log (generatePassword);

}else if ( numberCheck){
  characters += numberCheck;
   console.log (generatePassword);

}else if (specialCheck){
  characters+= specialCheck;
   console.log (generatePassword);

}else if ( lowercaseCheck){
  characters+= lowercaseCheck;
   console.log (generatePassword);
   
}

 determineLength ();
   
 determineLowercase();
    
 determineUppercase ();
  
 determineNumber();
    
 determineSpecial();
   
  
 
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}|:<>,-=;'[]\,./".split("")
var password = ""
  
for(var i =0; i< passwordLength; i++){
password += characters [Math.floor(Math.random()*characters.length)]
}
return password;
}
 
 
// Write password to the #password input
function writePassword() {
 var password2 = generatePassword("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}|:<>,-=;'[]\,./");
 var passwordText = document.querySelector("#password");
 passwordText.value = password2;
 
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
