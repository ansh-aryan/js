// 1. declaring variables
   var myName = "Ansh"
   myName = 8   //updates value of myName

   let myName = "Ansh" //value can't change throughout program

   const pi = 3.14 //value can't change throughout program

// 2. assigning variable
    var a;
    var b = 2;
    var c= "I am a";
   
    console.log(a) 

    a = 7;

    b=a;

    console.log(a)

// 3. case sensitivity (it matters in variable and function)
   // declarations
    var studyCapVar;
    var camelCase;
    var titleLover;

    //assigning
    studyCapVar = 10;
    CamelCase = "hello"; //wrong
    titleLover = 100;

// 4. bodmas numbers
   
    var sum = 10 + 10;
    // var difference
    // var quotient
    // var product

    console.log(sum)

// 5. Increment and decrement 
   
     var myVar = 87;

     myVar++;
     myVar--;

// 6. decimal
     
     var ourDecimal = 5.7;
     var myDecimal = 0.1 * 1.3;

     var product = 2.1 * 2.5;

// 7. to use quote inside a quote
    
     var myStr = "I am \"Ansh Aryan\" the unsung hero of \"CCE B\"" 
     //or
     var myStr = 'I am "Ansh Aryan" the unsung hero of "CCE B"'
     //or
     var myStr = `I am 'Ansh Aryan' the unsung hero of "CCE B"`
    /*
    CODE OUTPUT
     \' single quote
     \" double quote
     \\ backslash
     \n new line
     \r carriage return
     \t tab
     \b backspace
     \f form feed
     */

// 8. Strings can be concatatenated
     var myStr = "His name is Veer." + "He is a fool."
     var ourStr = "Yo who is this? " + myStr + "oh lmao. "  
    
     myStr += " He is a bitch ass nigga."
     console.log(ourStr)
   
// 9. Length of a string
     var firstNameLength = 0;
     var firstLetter = 0;
     var firstName = 'AnshAryan';
   
     firstNameLength = firstName.length;
     firstLetter = firstName.length[0];
     var lastLetterOfFirstName = firstName[firstName.length -1];

     console.log(firstNameLength);

// 10. strings are immutable
   

// 11. word blanks
   
      function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
        var result = "";
        result += "The " + " " + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store " + " ."

        return result;
      }

      console.log(wordBlanks("anaconda", "long", "slid", "quickly"))
      console.log(wordBlanks("veera", "pretty", "dance", "swiftly"))

// 12. Arrays
      
     var ourArray = ["Bitch", 69];

     var myArray = [["veera", 0], ["Ansh", 100]];
     
     var firstInOurArray = ourArray[0];
     
     //arrays are mutable
     ourArray[1] = 100;

     console.log(firstInOurArray);
     console.log(ourArray);

// 13. mmulti-diensional array

     var myData = myArray[0][0];
     
// 14. push()

     var myArray = ["Ansh", "Big House", "Street 69"]
     myArray.push(["Veer", "Smol House", "Street side"])
     
     console.log(myArray)

//15. pop()

     var myArray = [67,69, 71];
     var removedFromMyArray = myArray.pop();
     //pop removes the last element from the array

     console.log(myArray);
     console.log(removedFromMyArray);

// 16. shift()

     var myArray = ["Suck mah D", "you bitch"]
     var removedFromMyArray = myArray.shift();
     //shift funation removes the first element from array

     var addedToArray = myArray.unshift("Hello")
     //unshift is used to add element to the beginning of the arrray

     console.log(myArray);
     console.log(removedFromMyArray);
     //console.log(addedToArray);

// 17. resuable function

     function myReusableFunction() {
        console.log("hello bitch");
     }
     
     myReusableFunction();
     myReusableFunction();
     myReusableFunction();

// 18. using arguments

     function ourFirstFunctionWithArg(a, b) {
        console.log("Veer is a " + a * b);
     }

     ourFirstFunctionWithArg(69, 0);

// 19. Global scope

      var myGlobal = 10;
      //this is declared as a global variable 

      function fun1(){
          oopsGlobal = 5;
          //its not necessary to declare this as var since its in the scope of the function
      }

      function fun2(){
          var OUTPUT = "";

          if (typeof myGlobal != "undefined"){
               OUTPUT += "myGlobal " + myGlobal;
          }
          if(typeof oopsGlobal != "undefined"){
               OUTPUT += "oopsGlobal: "  + oopsGlobal;
          }
          console.log(OUTPUT);
      }
      fun1();
      fun2();

// 20. Local Scope

      function myLocalScope(){
          var myNumber = 10;
          console.log(myNumber);
      }

      myLocalScope();

      console.log(myVar); //this will cause an error because myNumber is defined in the local scope of the function

// 21. Global vs Local Functions

      var outerWear = "T-shirt"
      
      function myOutfit(){
          var outerWear = "Sweater";
          return outerWear;
      }

      console.log(myOutfit()); //this displays Sweater since the local scope takes precedence
      console.log(outerWear); //this displays T-shirt since the global scope takes precedence

// 22. return a value from a function

      function minusSeven(num) {
          return num - 7; //we need to add return otherwise it would return an undefined value
      }

      console.log(minusSeven(10));

// 23. Assignment with a returned value

      var changed = 0;
      function change(num) {
          return (num - 7)/10;

      }

      changed = change(10);
      console.log(changed);

//24. Stand in Line

      function nextInLine(arr, item) {
          arr.push(item); //we push an item in the array
          return arr.shift(); //shift is used to remove the first element of the array
      }

      testArr = [1, 2, 3, 4, 5]

      console.log("Before: " + JSON.stringify(testArr)); //JSON.stringify is used to show the array as a string
      console.log(nextInLine(testArr, 6));
      console.log("After: " + JSON.stringify(testArr))

//25. Boolean (True or False)

      function useBoolean() {
          return false;
      }
  
// 26. if statements

      function trueOrFalse(thatIsTrue){
          if (thatIsTrue){
               return "Yes, that is true.";
          }
          return "No, that is false."
      }

      console.log(trueOrFalse(false));

// 27. === means strict equality 
      //   3===3 is true
      //   3=='3' is true
      //   3==='3' is false //this reads '3' as a string

// 28. case in Switch statement 
  
       function caseInSwitch(val){
          var answer = "";
          switch(val){
               case 1:
                    answer = "veer";
                    break;
               case 2:
                    answer = "is";
                    break;
               case 3:
                    answer = "a nigga";
                    break;
               case 4:
                    answer = "girl";
                    break;
                default:
                    answer = "Default";
                    break;

          }
          return answer;
       }
       
      console.log(caseInSwitch(3));
      
//29. if we want multiple inputs to give same outputs in swtich statement

function caseInSwitch(val){
     var answer = "";
     switch(val){
           case 1:
           case 2:
           case 3:
               answer = "veer";
               break;
           case 4:
           case 5:
               answer = "nigga";
               break;              
           default:
               answer = "girlie";
               break;

     }
     return answer;
  }
  
 console.log(caseInSwitch(3));

// 30. To return boolean value without using if else

      function isLess(a, b){
          return a < b;
      }
      //returns "true"

      console.log(isLess(10, 15));

// 31. returning values

      function abTest(a, b){

          if (a < 0 || b < 0){
               return undefined;
          }

          return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

      }
      
      console.log(abTest());

// 32. counting cards

      var count = 0;

      function cc(card){
          switch(card){
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                     count++;
                     break;
                case 10:
                case "J":
                case "Q":
                case "k":
                case "A":
                    count --;
                    break;                              
          }
           var holdbet = 'Hold'
           if (count>0){
               holdbet = 'Bet'
           }

          return count + " " + holdbet; 
      }

      console.log(cc("A"));
      console.llog(cc(3));

// 33. objects

      var myDog = {
          "name"  : "camper",
          "number of legs": 4,
          "tails": 1,
          "friends": ["everything!"]
          //"property" : "Value",
     
      };
     
      var dogName = myDog.name;
      var numberOfLegs = myDog["number of legs"];
      var numberOfFriends = myDog.friends;

      myDog.name = "Veer";
      myDog.bark = "wow wow";
      myDog['walking speed'] = 'slow';
 
      delete myDog.bark; 

      console.log(myDog.name);
      console.log(numberOfLegs);
      console.log(numberOfFriends);
      console.log(myDog['walking speed']);
      console.log(myDog.bark);

// 34. using objects instead of switch statements

      function phoneticLookup(val) {
          var result = " ";

          var lookup = {
               "alpha" : "Adams",
               "bravo" : "Boston",
               "charlie" : "Chicago",
               "delta" : "Denver",
               "echo" : "Easy"

          };
          result = lookup[val];

          return result;
      }

      console.log(phoneticLookup("bravo"))

// 35. test object for properties

      var myObj = {
          gift : "pony",
          pet : "kitten",
          bed : "sleigh",

      };

      function checkObj(checkProp){

          if (myObj.hasOwnProperty(checkProp)) {
               return myObj[checkProp];
          } else {
               return "Not Found"
          }
      }

      console.log(checkObj("Hello")); //displays Not Found
      console.log(checkObj("gift")); //displays pony

// 36. Manipulating complex objects

      var Music = [ 
          {
               "artist"  : "Billy Joel",
               "title" : "Piano Man",
                "release_year" : 1973,
                "formats" : [
                    "CD",
                    "8T",
                    "LP"
                ],
                "gold" : true

      }, //first object
     {
          "artist"  : "The Backstreet Boys",
          "title" : "Tell Me Why",
           "release_year" : 1969,
           "formats" : [
               "Disk",
               "YouTube",
               "SoundCloud"
           ],
           "gold" : false  
     }//second object
 ]; //array in which two objects are stored

// 37. Nested Objects

      var myStorage = {
          "car" : {
               "inside" : {
                    "glove box": "maps",
                    "passenger seat": "crumbs"
               },
               "outside" : {
                    "trunk" : "jack"
               }
          }
      };
      
      var gloveBoxContents = myStorage.car.inside["glove box"];

      console.log(gloveBoxContents);

// 38. Nested Arrays
   
      var myPlants = [
          {
               type: "flowers",
               list: [
                    "rose",
                    "tulip",
                    "dandelion"
               ]
          },
          {
               type : "trees",
               list: [
                    "fir",
                    "pine",
                    "birch"
               ]
          }
      ];

      var secondTree = myPlants[1].list[1];

      console.log(secondTree);

// 39. Record Collection  

      var collection = {
          "2548": {
               "album": "Slippery when wet",
               "artist": "Bon Jovi",
               "tracks": [
                    "Let it rock",
                    "You give love a bad name"
               ] 
          },
          "2468": {
               "album": "1999",
               "artist": "Prince",
               "tracks":  [
                    "1999",
                    "Little Red Corvette"
               ]        
          },
          "1245": {
               "artist": "Robert Palmer",
               "tracks": [],     
          },
          "5439": {
               "album": "ABBA Gold"
          } 
      };
      
      //keep a copy of the collection for tests
      var collectionCopy = JSON.parse(JSON.stringify(collection));

      //only change code below this  line
      function updateRecords(id, prop, value){
          if (value === ""){
               delete collection[id][prop];
          } else if(prop === "tracks"){
               collection[id][prop] = collection[id][prop] || [];
               collection[id][prop].push(value);
          }
          else{
               collection[id][prop] = value;
          }

          return collection;
      }

      //to get output
      console.log(updateRecords(5439, "artist", "ABBA"));
      console.log(updateRecords(5439, "tracks", "Night is young"));
      console.log(updateRecords(1245, "tracks", ""));

// 40. Iterate with while loop

       var myArray = [];

       var i = 0;
       while(i<5){
          myArray.push(i);
          i++;
       }

       console.log(myArray);

// 41. for loop

      var myArray = [];
      for (var i=0; i<5; i++){
          myArray.push(i);
      }

      console.log(myArray);

// 42. for loop to count backwards

       var myArray = [];
       for (var i=10; i>0; i-=2) //value of i is reduced by 2
       {  
          myArray.push(i);
       }

       console.log(myArray);

// 43. adding up the elements in an array

      var myArray = [1, 23, 43, 69];

      var myTotal = 0;

      for (var i = 0; i < myArray.length; i++){
          myTotal += myArray[i];
      }

      console.log(myTotal);

// 44. multiplying the elements in an array

       function multiplyAll(arr){
          var product = 1;

          for (var i=0; i< arr.length; i++){
               for(j=0; j<arr[i].length; j++){
                    product *= arr[i][j];
               }
          }
          return product;
       }

       var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

       console.log(product);

// 45. do...while loop

       var myArray = [];
       var i = 10;

       do {
          myArray.push(i);
          i++;
       } while(i < 5)

       console.log(i, myArray);

// 46. contacts lookup

       var contacts = [
          {
               "firstName" : "Harry",
               "lastName" : "Potter",
               "number" : "8935840921",
               "likes" : ["emma", "voldermort", "magic"]
          },
          {
               "firstName" : "Ansh",
               "lastName" : "Aryan",
               "number" : "8935840828",
               "likes" : ["weekend", "club", "weed"]
          },  
          {
               "firstName" : "Veer",
               "lastName" : "Aryan",
               "number" : "8969285908",
               "likes" : ["poop", "music", "diks"]
          }
       ];

       function lookUpProfile(name, prop){
          for ( var i = 0; i<contacts.length; i++){
               if(contacts[i].firstName === name){
                    return contacts[i][prop] || "No such property";
               }
          }
          return "No such contact";
          }
       
          var data =  lookUpProfile("Ansh", "Hobbies");
          var data2 = lookUpProfile("Veer", "likes");

          console.logo(data);
          console.logo(data2);

// 47.  random fraction using Math.random()

       function randomFunction(){
          return Math.random();
       }

       console.log(randomFunction());

// 48. random whole number using Math.floor()

       var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

       function randomWholeNum() {
          return Math.floor(Math.random()*10);
       }

       console.log(randomWholeNum());

// 49. parseInt(str) is used to convert strings into integers

      function convertToInteger(str){
          return parseInt(str);
      }

      console.log(convertToInteger("56"));

// 50. using parseInt to convert into radix

       function convertToInteger(str){
          return parseInt(str, 2); //2 indicates the base as 2
       }

       convertToInteger("10011");

// 51. Ternary Operator -  "condition ? statement-if-true : statement-if-false;"

      function checkSign(num){
          return num > 0 ? "positive" : num < 0 ? "negative" : "zero ";

      }

      console.log(checkSign(10));

// 52. var v let : // var declares a variable globally or locally of declared in a function whereas let declares in a local scope 
                  // var lets us declare more than one variable of same name but let doesn't 
                 // let is strict
      function checkScope(){
          "use strict"; // used to catch cosing mistakes like forgetting to declare variables
          var i = "function scope";
          if(true){
               i = "block scope";
               console.log("Block scope is: ", i); //block scope
          }
          console.log("Function scope is: ", i); //block scope
          return i;
      }

      console.log(checkScope());

//or

function checkScope(){
     "use strict"; 
     let i = "function scope";
     if(true){
          i = "block scope";
          console.log("Block scope is: ", i); //block scope
     }
     console.log("Function scope is: ", i); //block scope
     return i;
 }

 console.log(checkScope()); 
 
 //or

 function checkScope(){
     "use strict"; 
     let i = "function scope";
     if(true){
          let i = "block scope";
          console.log("Block scope is: ", i); //block scope
     }
     console.log("Function scope is: ", i); //function scope
     return i;
 }

 console.log(checkScope());

 //or

 function checkScope(){
     "use strict"; 
     i = "function scope";
     if(true){
          var i = "block scope";
          console.log("Block scope is: ", i);//block scope
     }
     console.log("Function scope is: ", i);//block scope
     return i;
 }

 console.log(checkScope());

  //or

  function checkScope(){
     "use strict"; 
     i = "function scope";
     if(true){
          let i = "block scope";
          console.log("Block scope is: ", i);//block scope
     }
     console.log("Function scope is: ", i);//error
     return i;
 }

 console.log(checkScope());

 // 53. using const TODECLAREVARIABLE

      function printManyTimes(str){
          "use strict";

          const SENTENCE = str + " is poop."; //SENTENCE is written in all caps to show that it is a const variable
          
          //SENTENCE = str + " is amazing!" //this will cause an error since the var was declared const and also coz its a big time lie.

          for(let i=0; i < str.length; i+=2){
               console.log(SENTENCE);
          }
      }
      printManyTimes("Veer");

// 54. const arrays are mutable

      const s = [5, 7, 2];
      function editInPlace(){
          "use  strict";

          //s = [2, 5, 7]; //this will not update and cause an error

          s[0] = 2;
          s[1] = 3;
          s[2] = 4;
      }
      editInPlace();

      console.log(s);

// 55. prevent object mutation

function freezeObj() {
     "use strict";

     const MATH_CONSTANTS = {
          PI : 3.14
     };

     Object.freeze(MATH_CONSTANTS);

     try {
          MATH_CONSTANTS.PI = 99;
     } catch( ex ) {
          console.log(ex);
     }
     return MATH_CONSTANTS.PI;
  }

  const PI = freezeObj();

  console.log(PI);

// 56. using arrows instead of functions

      const magic = () => new Date(); //same thing as var magic = function(){ return new Date();};

// 57. using filter and map (they take function as an argument) function with the help of arrow function (when arg is used instead of func, it's a good time to use arrow func)

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squareIntegers = arr.filter(num  => Number.isInteger(num) && num > 0).map( x => x * x); // num is an arg here // x is a number passed from the filter function
    return squareIntegers;
};

const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers); 

// 58. higher order arrow function

      const increment = (function() {
          return function increment(number, value = 1) { //this sets the default value of value as 1
               return number + value;
          };
      })();
      console.log(increment(5, 2));
      console.log(increment(5));
      
// 59. rest operator (...arg)
      
      //without using rest operator
      const sum = (function() {
          return function sum(x, y, z){
               const args = [x, y, z];
               return args.reduce((a, b) => a+b, 0);
          };
      })();
      console.log(sum(1, 2, 3));

      //using rest operator
      const sum = (function() {
          return function sum(...args){
              // const args = [x, y, z]; //not needed anymore
               return args.reduce((a, b) => a+b, 0);
          }
      })();
      console.log(sum(1, 2, 3, 4));

// 60. spread operator [...var] is used to spread the array and store the copy of an array

       const arr1 = ['jan', 'feb', 'mar'];
       let arr2;
       (function(){
          //arr2 = arr1;
          //arr1[0] = 'potato'
          //this would print ['potato', 'jan', 'feb', 'mar']

          //using spread operator
          arr2 = [...arr1];
          arr1[0] = 'potato';
       })();
       console.log(arr2); //prints original arr1

// 61. Destructuring Assignment
    
      var voxel = {x: 3.6, y: 7.4, z: 6.54};

      //one way of assigning values
      var a = voxel.x; // a = 3.6
      var b = voxel.y; // b = 7.4
      var c = voxel.z; // c = 6.54

      //better way of assigning values (using destructuring)
      const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54

      const AVG_TEMP = {
          today: 77.5,
          tomorrow: 79
      };

      function getTempOfTomorrow(avgTemperature) {
          "use strict";

          const { tomorrow : tempOfTomorrow } = avgTemperature;

          return tempOfTomorrow;
      }

      console.log(getTempOfTomorrow(AVG_TEMP));

// 62. Nested Destructring

      const LOCAL_FORECAST = {
          today : { min : 72, max : 82},
          tomorrow : { min : 73.3, max : 84.6 }
      };

      function getMaxOfTomorrow(forecast){
          "use strict";

          const { tomorrow : { max : maxOfTomorrow }} = forecast;

          return maxOfTomorrow;
      }

      console.log(getMaxOfTomorrow(LOCAL_FORECAST));

// 63. assigning variables from arrays using destructuring

      const [z, x, , y]= [1, 2, 3, 4, 5, 6];
      console.log(z, x, y);


      let a=8, b=6;
      (() => {
          "use strict";

          [a, b] = [b, a];

      })();
      console.log(a);
      console.log(b);

// 64. Using destructuring assignment with the rest operator [...var]

       const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
       function removeFirstTwoElements(list){

          const [ , , ...arr] = list; //this means that we avoid the first two elements and keep the rest in the array

          return arr;
       }

       const arr = removeFirstTwoElements(source);

       console.log(arr);
       console.log(source);