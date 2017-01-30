
console.log("Hi");
function jediName (firstName,lastName) {
  var firstName = firstName.slice(0,2);
  var lastName = lastName.slice(0,3);
  return firstName + lastName
}
var myJediName = jediName("Brian","McMinn");
console.log(myJediName);
