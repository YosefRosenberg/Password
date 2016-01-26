// This is the function for the user id

// Makes sure that user id DOES NOT include '!#$'
var notInclude = function (userID) {
  var check = ((!userID.includes ("#")) && (!userID.includes ("!"))) && !userID.includes ("$");
  return check;
};

// Makes sure user id is AT LEAST 6 characters long
var userLength = function(userID) {
  var check = userID.length >= 6;
  return check;
};

// Combines both notInclude and userLength to evaluate either true or false
var checkID = function (iD) {
  var userID = (userLength(iD) && notInclude(iD));
  return userID;
};



// This is the function for Password

// Checks to see that there is AT LEAST one number
var numCheck = function(password) {
  return password.includes("0") ||
  password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9");
};

// Makes sure password includes AT LEAST one of the following: '!#$'
var include = function (password) {
  var check = (((password.includes ("#")) || (password.includes ("!"))) || password.includes ("$")) && (numCheck(password) && (!password != password.toUpperCase()) && (password != password.toLowerCase()));
  return check;
};

// Makes sure password is AT LEAST 6 characters long
var restrictions = function(password) {
  var check = (password.length >= 6) && (password != "password");
  return check;
};

// Checks to see that password meets all requirements by eval 'include' && 'restrictions'
var checkPassword = function (pass) {
  var password = (include(pass) && restrictions(pass));
  return password;
};

// This is the final function

// Assigns two variables and uses them on the checkID and checkPassword functions to see if they both pass
var checkCredentials = function () {
  var user = prompt("What would you like your user ID to be? Rules: User ID and password cannot be the same, User ID and password have to be at least six characters long, User ID cannot contain the following characters: !#$");
  var pass = prompt("What would you like your password to be? Rules Password has to contain at least one digit, Password cannot be 'password'");
  alert("Your credentials are correct " + (checkID(user) && checkPassword(pass)));
};

checkCredentials();
