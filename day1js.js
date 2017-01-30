
function whoAmI (name,age){
  console.log ("Hi, my, name is " + name + " and I am " + age + " years old");

  var yob = yearOfBirth(age);

  console.log ("I was born in " + yob);
}
whoAmI("Brian", "34");

function yearOfBirth(age){
  if (age < 0) {
    throw new Error ("Age cannot be a negative number");

  }
  else if (isNaN(age)) {
    throw new Error ("Arguments not valid");
  }

  else {
  return 2016 - age;
  }
}