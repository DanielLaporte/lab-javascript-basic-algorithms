// Iteration 1: Names and Input

let hacker1 = "Daniel"
console.log("The driver's name is " + hacker1)

let hacker2 = "Pierina"
console.log("the navigator's name is " + hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)
{
    console.log("The driver's has the longest name, it has " + hacker1.length + "character.");

} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters");

} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + "characters!")
}

// Iteration 3: Loops

let hacker1NameSpace= "" ;
for (let i = 0; i < hacker1.length; i ++) {
    hacker1NameSpace += hacker1[i].toUpperCase()+ " ";
}
     console.log(hacker1NameSpace);

let hacker1NameReverse = "";
for (let i = hacker1.length - 1; i >=0; i --)  {
        hacker1NameReverse += hacker1[i];
}
     console.log(hacker1NameReverse);

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}   else if  (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely");
}   else {
    console.log("What?! You both have the same name?");
}