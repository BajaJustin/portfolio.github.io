const NAME = document.getElementById("name");
const EMAIL = document.getElementById("email");
const BIRTHDATE = document.getElementById("birthDate");
const PHONENUMBER = document.getElementById("phoneNumber");
const PASSWORD = document.getElementById("password");
const FORM = document.getElementById("form");
// Used for displaying errors to the user
const NAMEMESSAGE = document.getElementById("invalidName");
const PASSWORDMESSAGE = document.getElementById("invalidPassword");
const PHONENUMBERMESSAGE = document.getElementById("invalidPhone");
const BIRTHDATEMESSAGE = document.getElementById("invalidBirthdate");
const EMAILMESSAGE = document.getElementById("invalidEmail");

let validName = true;
let validPhone = true;
let validPassword = true;
let validBirthdate = true;
let validEmail = true;
// Error message to display to user
let nameError = "";
let passwordError = "";
let phoneError = "";
let birthdateError = "";
let emailError = "";


// ******************** Regular Expressions for validation ********************
// Checks if input contain non digit characterseb
var nameCheck = /^\D*$/;
// Must contain at least one digit, lowercase & uppercase Character
//        and have at least 10 characters
var passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; 
// Phone number must be 11 digits and can contain (), - and spaces
var phoneNumberCheck = /^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
// Day | Month | Year
var birthdateCheck = /^([0-9]{2})[-]?[\/]?([0-9]{2})[-]?[\/]?([0-9]{4})$/;
// Allow some flexibility with email
var emailCheck = /^\S+@\D+\.\S+$/;

// Calls when submit button is clicked
FORM.addEventListener('submit', function(event){
  // ************************ Name Input Validation ************************
  // User doesn't enter name
  if (NAME.value === "" || NAME.value == null){
    nameError = "Please Enter a Name";
    validName = false;
  }
  // Name length entered is less than 2
  else if ( NAME.value.length < 2 ){
    // Name contains digits and less than 2
    if (!NAME.value.match(nameCheck)) {
      nameError = "Name Cannot Contain Numbers";
      validName = false;
    }else {
      nameError = "Name Must Be Greater Than 2 Characters";
      validName = false;
    }
  }
  // Name contains digits
  else if ( !NAME.value.match( nameCheck ) ){
    nameError = "Name Cannot Contain Numbers";
    validName = false;
  }
  // Input is entered correctly
  else {
    validName = true;
    NAMEMESSAGE.style.display = "none";
  }
  // Display error message to user
  if( !validName ){
    NAMEMESSAGE.style.display = "block";
    NAMEMESSAGE.innerHTML = nameError;
    event.preventDefault();
  }
  // ********************* Email Input Validation ******************************
  // User doesn't enter an Email
  if( EMAIL.value === "" || EMAIL.value == null ){
    emailError = "Please Enter an Email";
    validEmail = false;
  }
  // User entered something other than an email
  else if ( !EMAIL.value.match( emailCheck ) ){
    emailError = "Please enter an Email With The Following Format Example@domain.ca";
    validEmail = false;
  }
  // User entered a valid email
  else {
    validEmail = true;
    EMAILMESSAGE.style.display = "none";
  }
  // Display error message to user
  if( !validEmail ){
    EMAILMESSAGE.style.display = "block";
    EMAILMESSAGE.innerHTML = emailError;
    event.preventDefault();
  }
  // ********************* Birthdate Input Validation **************************
  // If user doesn't enter date
  if ( BIRTHDATE.value === ""  || BIRTHDATE.value == null){
    birthdateError = "Please Enter a Birthdate";
    validBirthdate = false;
  }
  // Date input entered does not match currect format
  else if ( !BIRTHDATE.value.match( birthdateCheck ) ){
    birthdateError = "Please Enter a Birthdate With The Following Format DD/MM/YYYY";
    validBirthdate = false;
  }
  // Date entered correctly
  else {
    let birthdateInput = BIRTHDATE.value;
    // User entered year
    var year;
    // User entered month
    var month;
    // user entered day
    var day;
    // If "/" is entered with date
    if ( birthdateInput.includes("/") ){
      let firstForwardSlash = birthdateInput.indexOf("/");
      let lastForwardSlash = birthdateInput.lastIndexOf("/");

      day = birthdateInput.slice(0,firstForwardSlash);
      month = birthdateInput.substring(3,5);
      year = birthdateInput.slice(lastForwardSlash + 1);
    } 
    // If "-" is entered with date
    else if ( birthdateInput.includes("-") ){
      let firstDash = birthdateInput.indexOf("-");
      let lastDash = birthdateInput.lastIndexOf("-");

      day = birthdateInput.slice(0,firstDash);
      month = birthdateInput.substring(3,5);
      year = birthdateInput.slice(lastDash + 1);
    }
    // If there no escape characters
    else {
      year = birthdateInput.substring(6);
      month = birthdateInput.substring(3,5);
      day = birthdateInput.substring(0,2);
    }
    // User enters day greater than 31
    if ( day > 31 ){
      birthdateError = "Day Cannot Be Greater Than 31";
      validBirthdate = false;
    }
    // User enters month greater than 12
    else if ( month > 12 ){
      birthdateError = "Month Cannot Be Greater Than 12";
      validBirthdate = false;
    }
    else { 
      // New date with user entered data
      let birthYear = new Date(year, month, day);
      // Current Date
      let currentDate = new Date();
      
      // If user is under 18
      if ( currentDate.getFullYear() - birthYear.getFullYear() < 18){
        birthdateError = "Cannot be under 18";
        validBirthdate = false;
      }
      // User is above 18
      else {
        validBirthdate = true;
        BIRTHDATEMESSAGE.style.display = "none";
      }
    }
  }
  // Display error message to the user
  if( !validBirthdate ){
    BIRTHDATEMESSAGE.style.display = "block";
    BIRTHDATEMESSAGE.innerHTML = birthdateError;
    event.preventDefault();
  }

  // ********************* Phone Number Input Validation ***********************
  // Phone Number is empty
  if( PHONENUMBER.value === "" || PHONENUMBER.value == null ){
    phoneError = "Please Enter a Phone Number";
    validPhone = false;
  }
  // Phone Number is entered incorrectly
  else if( !PHONENUMBER.value.match( phoneNumberCheck ) ){
    phoneError = "Please Enter a Phone Number Formated as (XXX) XXX-XXXX";
    validPhone = false;
  }
  // Password is correctly entered
  else {
    validPhone = true;
    PHONENUMBERMESSAGE.style.display = "none";
  }

  if( !validPhone ){
    PHONENUMBERMESSAGE.style.display = "block";
    PHONENUMBERMESSAGE.innerHTML = phoneError;
    event.preventDefault();
  }
 
  // ************************ Password Input Validation ************************
  // Password is empty
  if( PASSWORD.value === "" || PASSWORD.value == null ){
    passwordError = "Please Enter a Password";
    validPassword = false;
  }
  // Password is less than 10 characters
  else if( PASSWORD.value.length < 10 ){
    passwordError = "Password Cannot Be Less Than 10 Characters";
    validPassword = false;
  }
  // Password does not contain the correct characters
  else if( !PASSWORD.value.match( passwordCheck ) ){
    passwordError = "Password must contain at least one digit, one lowercase & uppercase Charater";
    validPassword = false;
  }
  // Password entered correctly
  else {
    validPassword = true;
    PASSWORDMESSAGE.style.display = "none";
  }
  // Dispay error message to user
  if( !validPassword ){
    PASSWORDMESSAGE.style.display = "block";
    PASSWORDMESSAGE.innerHTML = passwordError;
    event.preventDefault();
  }
});
