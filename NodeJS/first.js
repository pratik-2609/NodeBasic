var addfn = require("./add");

function greet(name){
    console.log("Hello " + name + " !")
}

greet("pratik");

console.log(addfn.add(11,12));
console.log(addfn.subtract(11,12));