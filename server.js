//https://www.youtube.com/watch?v=W6NZfCO5SIk&t=487s&ab_channel=ProgrammingwithMosh
//https://www.youtube.com/watch?v=PkZNo7MFNFg&t=1s

//Prints in the bowser console
//console.log('Hello World');

//Variables - for re-assignment
let name = 'Mosh';  //If you need to quote inside " ", it'll be "I am \" \" for this"
//console.log(name);

//Constant - for fixed
const interestRate = 0.3;
//console.log(interestRate);

//Primitives/Value Types - String, Number, Boolean, undefined, null
let theName = 'Mosh';  //String Literal, can be ' ' or " "
let age = 30;           //Number Literal
let isApproved = false;  //Boolean Literal
let firstName = undefined;
let selectedColor = null; //explicitly clears the value of variable

/********************************
 * STRINGS
 * CODE     OUTPUT
 * \'       single quote
 * \''      double quote
 * \\       blackslash
 * \n       newline
 * \r       carriage return
 * \t       tab
 * \b       backspace
 * \f       forn feed
 ********************************/
//Concatenating strings with plus operator
var myStr = "This is the start. " + "This is the end."
//console.log(myStr);

//Concatenating strings with plus equals operator
var ourStr = "This is the first sentence. ";
ourStr += "This is the second sentence.";
//console.log(ourStr);

//Constructing strings with variables
var myName = 'Ummey';
var theStr = "My name is " + myName + " and I am well!";
//console.log(theStr);

//Appending variables to strings
var anAdjective = "worthwhile!";
var strOne = "Learning to code is ";
strOne += anAdjective;
//console.log(strOne);

//Finding length of string
var fNameLength = 0;
var fName = "Ada";
fNameLength = fName.length;

var lNameLength = 0;
var lName = "Lovelace";
lNameLength = lName.length;
//console.log(lNameLength);

//Bracket Notation to find first character in string
var firstLetterOfLastName = "";
var surName = "Lovelace";
firstLetterOfLastName = surName[0];
//console.log(firstLetterOfLastName);

//String immutability - You cannot change one char in the string
//You must change the whole string
var strTwo = "Jello World!"
strTwo = "Hello World!";

//Bracket notation to find Nth character in string
var thirdLetterOfLastName = surName[2];
//console.log(thirdLetterOfLastName);

//Bracket notation to find last character in string
var lastLetterOfLastName = surName[surName.length - 1];
//console.log(lastLetterOfLastName);

//Bracket notation to find Nth-to-last character in string
var secondToLastLetterOfLastName = surName[surName.length - 2];
//console.log(secondToLastLetterOfLastName);

//Word Blanks - it will fill in the blank
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb +
        " to the store " + myAdverb + ".";

    return result;
}

//console.log(wordBlanks("dog", "big", "ran", "quickly"));
//console.log(wordBlanks("bike", "slow", "flew", "slowly"));

/********************************************************************* 
 * Arrays - data structure that we use to represent a list of items
 * The length is dynamic, it can change.
 * In JS, we can also store different types in an array
 * An array is an object in JS (you can check with "typeof")
 *********************************************************************/
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
//console.log(selectedColors[2]);
//console.log(selectedColors.length);

//Store Multiple values with arrays
var ourArray = ["John", 23];
var myArray = ["Quincy", 1];

//Nested Arrays
var arrayOne = [["the universe", 42], ["everything", 101010]];
var arrayTwo = [["Bulls", 23], ["White Sox", 45]];

//Access arrays data with indexes
var myArrayOne = [50, 60, 70];
var myDataOne = myArrayOne[0];
//console.log(myDataOne);

//Modify Array data with indexes
var ourArrayOne = [18,64,99];
ourArrayOne[0] = 45;
//console.log(ourArrayOne);

//Access multi-dimensional arrays with indexes
var anArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var aData = anArray[2][1];  //gets the 8 in the array
//console.log(aData);

//Manipulate arrays with push()
var arr = ["Stimpson", "J", "cat"];
arr.push(["happy", "joy"]);
//arr is now ["Stimpson", "J", "cat", ["happy", "joy"]]

var arr1 = [["John", 23], ["cat", 2]];
arr1.push(["dog", 3]);
//console.log(arr1);

//Manipulate arrays with pop()
var arr2 = [1, 2, 3];
var removedFromArr2 = arr2.pop();
//arr2 is now [1,2]

var arr3 = [["John", 23], ["cat", 2]];
var removedFromArr3 = arr3.pop();
//console.log(arr3);

//Manipulate arrays with shift()
var arr4 = ["Stimpson", "J", "cat"];
var removedFromArr4 = arr2.shift();
//removedFromArr4 is now "Stimpson" and arr4 is ["J", "cat"]

var arr5 = [["John", 23], ["dog", 3]];
var removedFromArr5 = arr5.shift();
//console.log(removedFromArr5);
//console.log(arr5);

//Manipulate arrays with unshift()
arr6 = ["Stimpson", "J", "cat"];
arr6.shift(); //["J", "cat"]
arr6.unshift("Happy");
//arr 6 is now ["Happy", "J", "cat"]

var arr7 = [["John", 23], ["dog", 3]];
arr7.shift();
arr7.unshift(["Paul", 3]);
//console.log(arr7);

//Shopping List
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

//Writing reusable code with functions
function ourReusableFunction() {
    console.log("Hi World");
}

//ourReusableFunction();

//Passing values to functions with arguments

/*********************************************************************
 * Dynamic Typing
 * There are two types of languages - Static (statically-typed) and Dynamic (Dynamically-typed)
 * In static languages, when we declare a variable, the type of the variable is set 
 * and it cannot be changed in the future (string name = "John";)
 * In dynamic language (ie. JS), the type of a variable can change at runtime (let name = "John")
 * 
 * In the brower console, you can use "typeof [variableName]" to check the type
 * You can also change the variable type here (name = 1), which makes it dynamic
 * You can clear the console by typing ctrl + L
*********************************************************************/

//Reference Types - Object, Array, Function

/*********************************************************************
 * Objects
 * Objects make it easier to organize and bring common attributes together
 * 
 * The following code is equvalent to:
 * let myName = "Ummey";
 * let myAge = 23;
*********************************************************************/

let person = {
    name: 'Ummey',
    age: 23
};

//Dot Notation
person.name = 'Zarin';
//console.log(person.name);

//Bracket Notation
let selection = 'name';
person[selection] = 'Tashnim';
//console.log(person.name);

/*********************************************************************
 * Functions
 * 
 *********************************************************************/
function greet(name, lastName) { //name is parameter
    console.log('Hello ' + name + ' ' + lastName);
}

//Calling the function, 'John' is the argument, which is the actual value
//greet('John', 'Smith'); //with supply for the parameter 
                        
//Calculates a value
function square(number) {
    return number * number;
}

let number = square(2);
//console.log(number);

/*********************************************************************
 * 
 *********************************************************************/
