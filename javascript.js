/* 
    Use INPUT variable to get stdin.
    Try console.log(INPUT);
*/
//CHALLENGE 1( VARIABLE   TYPES):-
//     console.log(10+ "20");     //number + string =concat;
//  console.log(9 - "4");        //number - string = subtraction    1ST BUG
//      console.log("java" + " script");  //string + string=concat
//       console.log(" " + " ");    // empty string
//        console.log(" " + "0");   //0
//         console.log("java" - "script");  //NaN:- not a number
//          console.log(true + true);   //2 as true=1
//           console.log(false - true);   //Nan

// 1st INTERVIEW QUESTION:--->>DIFF BETWEEN NULL AND UNDEFINED:-
//  var iAmUseless = null;
//  console.log(iAmUseless);
//  console.log(typeof(iAmUseless));      // 2ND BUG NULL IS A OBJECT
//  var iAmStandBy;
//  console.log(iAmStandBy);
//  console.log(typeof(iAmStandBy));
 //2nd INTERVIEW QUESTION:--->> What is NAN ??:--
 //NAN is a property of global object, in other words it is a variable in global scope and the intial value of NAN is NOT-A-Number
 //use:-
//  var myPhoneNumber = 908765498;
//  var myName = "Vishal";
//  if(isNaN(myName)){
//      console.log("Enter correct input");
//  }

 //2nd CHALLENGE:-
//  console.log(NaN==NaN);      //false
//  console.log(Number.NaN==NaN); //false
//  console.log(isNaN(NaN));      //true
//  console.log(isNaN(Number.NaN));    //true
//  console.log(Number.isNan(NaN));    //true

//SECTION 5:- EXPRESSION ND OPERATORS:--->>
//1)assigment operators:-
// var x=5;
// var y=5;
// console.log("is both x and y are equal " + x==y );   //false
// console.log(`Is both x and y are equal : ${ x == y }` );  //Is both x and y are equal :true
// 2)arithmetic operators:--- + - / * %
//3)incremcent and Decrement:-
// var num=15;
// var newnum=num++;
// console.log(num);  //16
// console.log(newnum);  //15

// var num=15;
// var newnum=++num;
// console.log(num);       //16
// console.log(newnum);    //16

// 4)comparision operator:--
// var a=10;
// var b=30;
// console.log(a==b);  //false
// console.log(a != b);  //true
// console.log(a > b);   //false
// console.log(a >= b);   //false
// console.log(a < b);  //true
// console.log(a <= b);  //true
// 5)Logical operator:--->returns boolean value;---> AND ,OR ,NOT:---
// console.log(a>b && a<b);  //false

// 6)String(contaction operator):- which contacts two strings and returns as a single string:--


//CHALLENGE 3:-
// console.log(3**3);  //** exponentiation operator->power i.e 3^3 i.e.27

// 3RD INTERVIEW  QUESTION:-
// var num1=5;
// var num2='5';
// console.log(num1==num2);   //true(only checks value in double equal to)
// console.log(num1 === num2);   //false(checks type and value also)
 
 //SECTION 4:- CONTROL STATEMENTS AND LOOPS:---
 //1) If else;-
//  var tomr = 'rain';
//  if(tomr == 'rain'){
//      console.log('take a raincoat');     //take a raincoat
//  }
//  else{
//      console.log('dont take');
//  }

 //5 CHALLENEGE TIME:-
 //What is turthy and falsy values  in JS..??
//  we have total 5 falsy(false) values in JS:--->> 0, "" , NULL, Nan,undefined, false** is anyways false
// if(score = 0){     //whenever there is any of the above 5 values then it becomes false condition
//     console.log('Ups we lose the game');
// }
// else{
//     console.log('yaa we won the game');     //yaa we won the game
// }

// if(score = 10){    
//     console.log('Ups we lose the game');      //Ups we lose the game


// }
// else{
//     console.log('yaa we won the game');    
// }

//Conditional(Ternary) operator:- only Js operator that takes 3 operands
// var age=17;
// console.log((age>=18)?'you can vote' : 'sorry baccha hai tu'); //sorry baccha hai tu
//SWITCH statement:-
// var area='circle';
//  switch(area){
//      case 'circle':
//      console.log('it is circle');     //it is circle
//      break;
//      case 'square':
//      console.log('it is sqaure');
//      break;
//      default:
//      console.log('theek data daal');
//  }
 //While loop and do-while loop
//  var num=10;
//  while(num<=10){
//      console.log(num);
//      num++;
//  }
//   do{
//       console.log(num);
//   }while(num<10);

//for(condition;intializer;iteration){ code }
// for(var num=1;num<=10;num++){
//     console.log(num);
// }

// FUNCTIONS:-
// function sum(){    //function defination or declaration or statement 
//     var a=10,b=20;
//     var total=a+b;
//     console.log(total);    
// }
// sum();    //30
//Function parameter vs argument:
// parameter:- listed or present  in declaration nad argument :- when real value is passed during call;
// function summ(a,b){
//     var total=a+b;
//     console.log(total);
// }
// summ();   //Nan
// summ(20,1);   //21
//Function expression:-create a function nd put into variable. It is complete when we have return statement.
// var funexp=summ(10,4);
// funexp;              //14
//  function summm(a,b){
//      return a+b;
//  }
//  console.log(summm(3,5));           //8
 //or
//  var y= summm(3,5);
//  console.log(y);              //8
 
 //Anonymous Function:-
//  var anyo= function(a,b){
//      return a+b;
//  }
//  console.log(anyo(8,9));     
 //or
//  var d= anyo(5,5);    //function expression
// console.log(d); //calling without using parenthesis called function expression

//ECMA SCRIPT
//1996:- Java developed and 1997:-Ecma script formed
//Ecma 15(6th edition)

//LET VS CONST VS VAR:-
// 1)const value once intalized cannot be changed while other two can
// var a='vish';
// a='das'; 
// console.log(a);    //das

// let bb='vish';
// bb='das';
// console.log(bb);     //das

// const c='vish';
// c='das';
// console.log(c);   //error

//2) let and const is scope valid while var is global :-
// function biodata(){
//     var firstname='Vishal';
//     console.log(firstname);       //Vishal
//     if(true){
//         var lastname = 'Das';
//         console.log(lastname);    //Das
//         console.log(firstname);   //Vishal
//     }
//     console.log(lastname); //Das
// }
// biodata();

// function biodata(){
//     let firstname='Vishal';
//     console.log(firstname);       //Vishal
//     if(true){
//         let lastname = 'Das';
//         console.log(lastname);    //Das
//         console.log(firstname);   //Vishal
//     }
//     console.log(lastname); //Error
// }
// biodata();

//TEMPLATE LITERALS(TEMPLATE STRINGS):-
// for (num=1;num<=10;num++){
//     let tableof=8;
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }

//Default Parameters:-  Intialized with default values if no value is passed
// function mult(a,b=5){    //value if passed to first parameter so default parameter starts from right side;
//     return a*b;
// }
// console.log(mult(5))   //25

//FAT ARROW FUNCTION:- instead of function keyword we use => and we can't call function before decalartion like traditional functions
// Also,if there is one line of code inside function then no need to give parenthesis and return statement
//We cannot use this keyword

// const mult = () =>{
//     let a=5,b=0;
//     return `multiplication is ${a*b}`;
// }
// console.log(mult());      //multiplication is 0;
//OR

//  const mult = () => `multiplication is ${(a=8)*(b=1)}`;
// console.log(mult());    //multiplication is 8

//ARRAYS:-
// var arr = ['vishal', 20 , true];
//ways to create arrays:-
// var ar= new Array;
//traversal:- 
// console.log(arr[2]);                 //true
//to check length of array
// console.log(arr.length);       //3
//for in loop:-
// for(let elements in arr){
//     console.log(elements);          //0 1 2 
// }
//for of loop:-
// for(let elements of arr){
//     console.log(elements);          //vishal 20 true
// }

//Array.prototype.forEach: Calls a function for each element in the array
// arr.forEach(function(element,index,array,this)){};
//canot use break stement once strted it will go till end
// arr.forEach(function(element,index,array){
//    console.log(element);            //element , index , araay
// });
//using fat arrow. dont support this argument
// arr.forEach(function(element,index,array) => {
//    console.log(element);            //element , index , araay
// });

//Searching and filter in array
//1) indexOf():- searching from front search
//Returns the first index of an element within the array equal to the element or -1 if none is found.
//  var friendnames = ['vishal','Toko','Shruti','Pawan','Toko','YUvika'];
//  console.log(friendnames.indexOf("Toko"));   //1
//   console.log(friendnames.indexOf("Toko",1));  //search from 1st index-->> 1

  //2) lastIndexOf():- returns lastIndex of does backward search
//   console.log(friendnames.lastIndexOf('Toko'));      //4
//3).includes():- determines wether the array contains a value returning true or false
// console.log(friendnames.includes('Toko'));   //true
// console.log(friendnames.includes('Toko',5));  //forward search only from index 5 i.e false

//4).find(callback(element[,index[,array]])[,thisArg]):-
//Returns the found element in array, if some element found in the array statisfies the testing function, or undefined if not found.
//Only problem is that it returns only one element.
// const prices = [200,300,400,500,900];
//prices<400
// const findElem = prices.find((currentval)=>{
//     return currentval < 400;
// });
// console.log(findElem); //200
//or
// console.log(prices.find((currentval)=> currentval<400)); //200

// 5)findIndex:- return the find index when statisfying the condition else -1 :-
// console.log(prices.findIndex((currentval)=> currentval<400));  //0

//6) .filter:- Returns a new array containing all elements of the calling array for which the provided filtering function returns true nad if condition not statisfied then empty array is returned
// const newitem = prices.filter((newElem,index)=>{
//     return newElem < 400;
// })
// console.log(newitem);   //new array:- [200,300]

//SECTION 2:- Sort:-
// Default sort is in ascending style
//converts into string then sorts :-
// const months = ['jan','feb','march'];
// console.log(months.sort()); //feb jan march
// const array1 = [1,1000,90,5,77];
// console.log(array1.sort());  //1,1000,5,77,90

//SECTION 3:- Insert,Add,Replace and Delete (CRUD:create read update delete )
//1) .push:- adds one or more elements to end of array and returns new length of array
// const animals = ['pigs','goat','tiger',];
// const count = animals.push('paneer');
// console.log(animals);   //pigs,goat,tiger,paneer
// console.log(count);   //4
// animals.push('samosa','elephant');
// console.log(animals);

//2) .unshift:- adds elements to start of array and returns length of new array
// animals.unshift('briyani');
// animals.unshift('doggy','bamro');
// console.log(animals);   //doggy,bamro,briyani,pigs,goat,tiger
//e.g 2:-
// const numbers = [1,4,3,9,10];
// numbers.unshift(0,100);
// console.log(numbers);   //0 100 1 4 3 9 10

//3) .pop():- removes last element of array and returns that element and changes the length of array
// const plants = ['banana', 'apple', 'orange', 'beeches'];
// plants.pop();
// console.log(plants);   //banana,apple,orange
//4) .shift():- removes first element
// console.log(plants.shift());    //banana

//5) .splice:- adds or removes element from the array
//splice(staring index,no of numbers to be deleted,string to be added). If nothing to delete then 0
// const months =['Jan', 'March','April','June','July'];
//sol1:- to add Dec to last using splice :- 
// const newMonth = months.splice(months.length,0,"dec");
// console.log(months);   //Jan,March,April,June,July,dec
//sol2:- Return value of splice method;
// console.log(newMonth);    //element deleted will return if nothing deleted then empty array
//sol3:- update March with march
// const updateMonth = months.splice(1,1,'march');
// console.log(months); //Jan , march, April,June,July ,dec
//OR
//  const indexOfMonth = months.indexOf('March');
//  if(indexOfMonth != -1){
//      months.splice(indexOfMonth,1,'march');
//      console.log(months);
//  }
//  else{
//      console.log('Not found');
//  }
 //sol4 :- delete March
//  months.splice(indexOfMonth,1);
//  console.log(months);   //Jan,April,June,July

 //soln5 :- to delete all from April:-
//  const indexOfMonth =months.indexOf('March');
// months.splice(indexOfMonth,Infinity);
// console.log(months); //Jan

//section 5:- map,reduce and filter
//1) .map():- 
//returns a new Array containing the results(bool value) of calling a function on every element in this array
//It returns the new array without mutating(changing) the original array
//let newArray = arr.map(callback(currentValue[,index[,array]])){
    //return element for newArray after executing something
//}[,thisArg]);
//e.g:-
// const array2= [1,4,6,9,10,23];
// let newArr = array2.map((curr,index,array)=>{
//     return curr >9;
// })
// console.log(array2);
// console.log(newArr);   //false,false,false,false,true,true

//  let newArr = array2.map((curr,index,array)=>{
//     return ` Index no is ${index} and the value is ${curr} and the array is ${array}\n`;
// })
// console.log(newArr);

//CHALLENGE TIME:-
//1) Find the SquareRoot of each element in the array =[25,36,49,64,81]
//solution
// let arr5=[25,36,49,64,81];
// let arrSquare = arr5.map((curr)=>{
//     return Math.sqrt(curr);
// })
// console.log(arrSquare);    //5,6,7,8,9

//2) Multiply each element with 2 and return only those elements which are greater than 10? [2,3,4,6,8]
//SOLUTION:-
// let arr3=[2,3,4,6,8];
// let arr33 = arr3.map((curr)=>{
//     return curr*2;
// }).filter((curr)=>{
//     return curr>10;
// })
// console.log(arr33);   //12,16

// .reduce:- to flatten an array means to convert the 3d or 2d array into a 1D array
//It executes s reducer function(that you provide) on each element of the array resulting in single output value.
//The reducer function takes 4 arguments:-
//Accumulator
//Current value
//Current Index
//Source Array

//e.g:-
// let arr11= [5,6,2];
// let sum21= arr11.reduce((accumulator,curr,index,arr)=>{
//     return accumulator+=curr;
// })
// console.log(sum21);   //13

//e.g 2:- to add an extra intial value
// let arr11= [5,6,2];
// let sum21= arr11.reduce((accumulator,curr,index,arr)=>{
//     return accumulator+=curr;
// },7)
// console.log(sum21);    //20

//to FLAT an array
//2D array:-
// const arr55= [
//     ['zone1','zone2'],
//      ['zone3','zone4'],
//      ['zone5','zone6'],
//      ['zone7','zone8']
//     ];
//  let flatArray = arr55.reduce((accu,curr)=>{
//      return accu.concat(curr);
//  })   
//  console.log(flatArray);   //zone1,zone2,zone3,zone4,zone5,zone6,zone7,zone8


//<<------STRINGS--------->>
//strings are zero or more characters within quotes
//we can use single or double quotes
//strings can be used as primitives, from string literals, or as objects,or using the String() constructor
// let name='Vishal';
// let myname = "vishal";
// let sname = new String('Vishal');
// console.log(name);       //Vishal
// console.log(sname);   //Vishal

//STRING METHODS:-
//1) .length():- Reflects the length of string
// let myname = "vishal";
// console.log(myName.length);    //6

//Escape sentence:-
// let anySentence = "we are the so called \"The Vikings\" from north";
// console.log(anySentence);
//OR

// let anySentence = 'we are the so called \"The Vikings\" from north';
// console.log(anySentence);

//Finding a string in string:-
///2) .indexOf():- returns the index of first occurence of particular text in a string, searches from foraward and returns -1 if not found
// const bio = 'My name is vishal das';
// console.log(bio.indexOf('vishal'));    //11
//  console.log(bio.indexOf('vishal',6));   //start from index 6 to search

//3) .lastIndexOF():- searches from backward and returns -1 if not found
//4) .search():-  searches string for a specified value and returns the position of the match. No second argument takes and searches from forward
// const data ="My name is Vishal das";
// let sdata = data.search('Vishal');
// console.log(sdata);    //11

//EXTRACTING STRING:-
//There are 3 parts to extract a part of a string:-
//a) slice(start,end);
//b) substring(start,end);
//c) substr(start,end);
//The start position and end position(end not included)

//1) .slice(start,end):- it extracts a part of string and returns the extracted part in a new string
//The original array will not changed
//Negative numbers mns it will go till end except -2 mns not including last 2 characters only
//if no end index given then from starting index till end
//  var str= "apple,banana,orange";
//  let res = str.slice(0,5);
//  console.log(res);   //apple
//  let ress = str.slice(0,-2);
//  console.log(ress); //apple,banana,oran
//   let resss = str.slice(0);
//  console.log(resss);  //apple,banana,orange

//CHALLENGE:-
//Display only 280 characters like twitter...?
 //SOLN:---> 
//   let mytweets = 'The Lorem Ipsum text is also an effective way to set up your fonts before you place your content. For example, you’re writing content for your website, and you want your website to have a specific font, length, and design. Adding the Lorem Ipsum text allows you to efficiently set up the specifics of your font before you place your content. ';
//   let actualtweet = mytweets.slice(0,280);
//   console.log(actualtweet);    //

//2) .substring():- similar to slice and ending position is also not included
//difference is that substring cann't accept negative indexes
//IF we give negative index the it starts from 0th index till starting pos i.e (7,-2) then takes from 0 to 6
// let strr= 'Apple, banana,orange';
// let res= strr.substring(0,5);
// console.log(res);   //Apple
// let ress= strr.substring(6,-2);
// console.log(ress); //Apple,

//3) .substr():- is similar to slice
//difference is that the second parameter specifies the length of the extracted part
//we cann't add negative values as second parameter
//useful for extracting from back
// var str="Apple, banana, orange";
// let res = str.substr(-6);
// console.log(res);   //orange

//4) .replace(oldvalue, newvalue):- replaces a speicifed value with new value in a string
//Points to remember:-
//a) the replace() doen't change the string and returns a new string
//b) by Default, the replace method replaces only the first match
// let bio = "My name is vishali dasi";
// let replaceData = bio.replace('vishali','Vishal');
// console.log(replaceData);

//Extracting String Characters:-
// charAt(position)
// charCodeAt(position)
// Property access[ ]

//1) .charAt(position):- returns the character at specified index
// let str = 'Hello World!';
// let newstr = str.charAt(0);
// console.log(newstr);   //H

//2) .charCodeAt(position):- returns UNICODE of the character at a specified index in a string
//returns unicode integer between (0 to 65535);
//The Unicode Standard provides a unique number for every character, no matter the platform, device, application, or language. UTF-8 is a popular unicode
//encoding which has 88-bit code units  1
// let str = 'Hello World!';
// console.log(str.charCodeAt(0));   //UNICODE of H is 72

//CHALLENGE TIME:-
//1) Return the UNICODE of the last character in a string
//  let str = 'Hello World';
//  console.log(str.charCodeAt(str.length-1)); //100(of d)

//3) Property Access:- ECMAScript 5(2009) allows access [ ] on strings
// let str = 'Hello World';
// console.log(str[0]);  //H

//5)toUpperCase():  and toLowerCase():-
// let str = 'Hello World';
// console.log(str.toUpperCase());    //HELLO WORLD
// console.log(str.toLowerCase());    //hello world

//6) .concat():- joins two or more strings
// let str1='Vishal';
// let str2 = 'Das';
// console.log(str1 + str2);   //VishalDas
// console.log(`${str1} ${str2}`);    //Vishal Das
// console.log(str1.concat(str2));    //VishalDas
// console.log(str1.concat(" ",str2));    //Vishal Das

//7) .trim():-removes whitespaces from both sides of a string
// var str1 = '   Hello      World    ';
// console.log(str1.trim());      //Hello   World

//Converting a string into Array
//split() method
//  var txt = "a,b,c | d,e";    //String
//  console.log(txt.split(","));  //['a','b','c | d','e']   (split on basis of commas i.e commas se phele character and comma ke baad counts as character) 
//  console.log(txt.split("|"));   //['a,b,c ',' d,e'] (splits on basis of bar)
//  console.log(txt.split(" "));    //['a,b,c','|', 'd,e']     (splits on basis of spaces)

//------>>>Date and time<<<------
//Js Date objects represent a single moment in time in a platform independent format. Date objects contain a number that represents milliseconds since 1 Jan 1970 UTC.

//Date object
//new Date is created with Date() constructor
//There are 4 ways to create a new Date object
//new Date()
//new Date(year,month,day,hours,minutes,seconds,milliseconds)   ....takes 7 arguments
//new Date(milliseconds)
//new Date(date string)
//e.g:------
// let curr = new Date();
// console.log(curr);       //Sat Jun 05 2021 18:27:13 GMT+0530(India Standard Time)  -->> GMT+0530 is India is 5 hrs and 30 mins ahead of Greenwich Mean Time
//  console.log(new Date());         //Sat Jun 05 2021 18:32:31 GMT+0530 (India Standard Time)
//  console.log(new Date().toLocaleString());   // 6/5/2021, 6:32:31 PM
//  console.log(new Date().toString());     // Sat Jun 05 2021 18:32:31 GMT+0530 (India Standard Time)

//2)Date.now():- Returns the numeric value corresponding to current time-the number of milliseconds ellapsed since Jan 1 1970 00:00:00 UTC
//  console.log(Date.now());  //1622898407784

//3) new Date(year,month,.....)
//7 arguments specify year,month,day,hour,minute,secs, and miliseconds(in that order)
//Js counts months from 0 to 11
// var d = new Date(2021,21,0,10,33,30,0);
// var d1 = new Date(2021,21,0,20,33,30,0);
// console.log(d.toLocaleString());    //9/30/2022, 10:33:30 AM
// console.log(d1.toLocaleString());    //9/30/2022, 8:33:30 PM

//The month argument is compulsory
// var d2 = new Date(2021);
// var d3 = new Date(2021,0);
// console.log(d2.toLocaleString());     //1/1/1970, 5:30:02 AM
// console.log(d3.toLocaleString());   //1/1/2021, 12:00:00 AM

//4)new Date(dateString):- creates a new Date object from a date string
// var d=new Date("October 13,2021 11:13:00");
// console.log(d.toLocaleString());   //10/13/2021, 11:13:00 AM

//5)
// var d = new Date(0);
// var d1=new Date(1649784873498);
// var d2=new Date(8634674*2);
// console.log(d.toLocaleString());    //1/1/1970, 5:30:00 AM
// console.log(d1.toLocaleString());   //4/12/2022, 11:04:33 PM
// console.log(d2.toLocaleString());   //1/1/1970, 10:17:49 AM
// const curr= new Date();
//To get individual date:-

// console.log(curr.getDate());     //5
// console.log(curr.getFullYear());   //2021
// console.log(curr.getMonth());   //5
// console.log(curr.getDay());     //6

//To set date:-\
//output will be in milliseconds
// console.log(curr.setFullYear(2900));
// console.log(curr.setFullYear(2022,10,5));
// console.log(curr.setDate(5));
// console.log(curr.toLocaleString());

//----->>>TIME<<-----
// const curTime = new Date();
// Get Time:---->>
// console.log(curTime.getTime());   //1622907451957
// //Returns no of milliseconds since jan 1 1970
// console.log(curTime.getHours());   //21
// //returns the hours of a date as a number(0-23)
// console.log(curTime.getSeconds());  //31
// console.log(curTime.getMinutes());    //7
// console.log(curTime.getMilliseconds());    //957

//Set Time:--->>
// console.log(curTime.setTime());  //NaN
// console.log(curTime.setHours(5));      //1622850368793
// console.log(curTime.setSeconds(5));   //1622850365793
// console.log(curTime.setMinutes(5));   //1622849705793
// console.log(curTime.setMilliseconds(5))   //1622849705005


// console.log(new Date().toLocaleDateString());   //6/5/2021
// console.log(new Date().toLocaleString());      //6/5/2021, 9:49:24 PM
// console.log(new Date().toLocaleTimeString());   //9:49:24 PM

//Math Object:-
//Performs mathematical operations on numbers
//1)Math.PI:-
// console.log(Math.PI);   //3.14.....

//2)Math.round():-
// let num9=10.99998;
// console.log(Math.round(num9));   //11

//3)Math.pow():-
// console.log(Math.pow(2,3));   //8

//4)Math.sqrt():-
// console.log(Math.sqrt(49));   //7

//5)Math.abs():- returns the positive value
// console.log(Math.abs(-9));    //9

//6)MAth.ceil():- rounds up to integer
// console.log(Math.ceil(99.1));   //100

//7)Math.floor()
// console.log(Math.floor(99.1));   //99

// 8)Math.min():-
// console.log(Math.min(100,1,-2,-99,9));   //-99

//9)Math.max():-
// console.log(Math.max(100,2,-2,-99));   //100

//10)Math.random():- returns between 0(inclusive) and 1(exclusive) always
// console.log(Math.random());
//to remove and show between 1 multiply 10
// console.log(Math.random()*10); //7.8458820.....
//to get between 1 to 9:-
// console.log(Math.floor(Math.random()*10)); 

//Math.trunc():- returns the integer part of a number
// console.log(Math.trunc(-4.6));   //-4
//If number is positive then Math.trunc() is equal to Math.floor()  otherwise equal to Math.ceil()

//-------DOM----
// document.documentElement    //returns root element of the document
// document.head         //returns head of a webpage
// document.body    //returns body of a webpage
// document.body.childNodes  //returns all nodes of body(includes tab,white-spce,enter)
// document.body.children  //returns children of only body
//document.body.children.length //returns length
 
 //PRACTICE:-1) How to know wether an element has child node or not..?
//  document.body.hasChildNodes()  //return bool value here we are checking for body has child nodes or not

//Q2)How to find child in DOM tree??
// document.body.firstChild  //gives enter as first child
// document.body.firstElementChild    //gives first real child
// const firstchild = document.firstElementChild.firstElementChild   //first child of first element of body
// firstchild.style.color = "red";   //to change color of first child of first element of body i.e css using DOM
//------ OR---->>
//query selector 
// const childtwo = document.querySelector('.childtwo');
// childtwo.style.color = "yellow";


//Q3) TO find parent nodes:-
// document.body.parentNode   or document.body.parentElement

//Q4) SIBLINGS:-
// document.body.nextElementSibling   or document.body.nextSibling    //null
// document.body.previousSibling   //enter
// document.body.previousElementSibling   //head

//sibling for head;-
// document.head.nextSibling   //enter
// document.head.nextElementSibling    //body

//--------SEARCH AND REFERENCE-----
// 1) document.getElementById("xyz").innerHTML="......";   //to get an element by Id and change its contents
    //by taking REFERENCE:-
    // const headingchange = document.getElementById("xyz");
    // headingchange.innerHTML = ".....";
// 2)  console.log(document.getElementsByClassName("...").innerHTML);    //to print all elements by that class name in console
// 3)const.log(document.getElementsByTagName("..."));  //to print all elements if that tag
// 4) console.log(document.getElementsByName(".."));   //to print elements which have that name in console usually used in radio buttons
//5) querySelector returns the first matching value i.e changes of first i.e of first class wheras
//6)querySelectorAll() will return all the elements(no of elements)
//in query selector we can use id ,classes and by element name
// console.log(document.querySelectorAll(".xyz"));   //returns all elements of class xyz in console
  
//----INTERVIEW QUESTION
//Q1)Difference between getElementById and querySelector..??
//soln:-
//getElementById:- returns a reference to the element by its Id.
//If the element with the specified is not in the document then it returns null

//querySelector:-  element = document.querySelector(selectors);
//returns the first element within the document that matches the specified group of selectors or null if no match is found

//document.getElementByID is faster than querySelector

//<<<<<------EVENTS----->>>>
//HTML EVENTS are things that happen to HTML elements can be something that browser or user does
//some examples:-
//1)an HTML web pages has finished loading
//2) An HTML input field has changed
//3)An HTML button was clicked
//4)Often, when events happen, you want to do something

//SECTION 1:- 4 ways of writing Events in Js
//1)using inline events:- using alert();
//2) By Calling a function
//3) using Inline events(HTML onclick = "" property and element.onclick)   //It gets overwritten
//4) using Event Listeners (addEventListener and IE's attachEvent)

//1)<a href="..." onlclick="alert('Hey myslef Vishal)">;   //when click on these link then a alert mssg will be displayed
//2) <a href="..." onlclick="callingFunction()">;
    // const callingFunction =()=>{
    //     alert("most common way of calling functions");
    // } 
//3)const thirdWay = document.getElementById('thirdway');
//    thirdway.onclick = function(){
//         alert("most common way of calling functions");
//    }
//   thirdway.onclick = function(){
//        console.log("most common way of calling functions");     //It will bed displayed in console only as it gets overridden
//    }
 //4) const fourthWay = document.querySelector('#fourway');
    //   fourway.addEventListener('type of event',function());
    //   fourway.addEventListener('click',()=>{
    //       alert("Boom boom");
    //   })
    // fourway.addEventListener('click',()=>{   
    //      console.log("Boom boom");                  //Here,both will work
    //   })

//SECTION 2:- What is Event object..??
//Event object is the parent object of event object
//e.g.:-
//MouseEvent , focusEvent, KeyboardEvent etc
//e.g:-
// const fourWay = document.getElementById('fourway');
// const checkEvent = () =>{
//     alert("Element has ben clicked");
//     console.log(event);                    //prints information about event in console
//     console.log(event.target);
//     console.log(event.type);        //click 
// }
// fourWay.addEventListener('click',checkEvent);   //calling checkEvent function when clicked

//SECTION 3:- MOUSE EVENT:-
//Events that occur when the mouse interacts with HTML document belongs to MouseEvent object
// <p id="merap" onmousedown="mousieDown()"  onmouseup  = "mousieUp()" ></p>;     //onmousedown = when the mouse is clicked 
// function mousieDown(){                                                         //onmouseup = when the mouse is released
//     document.getElementById('merap').style.color = "red";
// }
// function mousieUp(){              
//     document.getElementById('merap').style.color = "yellow";
// }

//Mouse enter and Leave events:-
// const menter = document.getElementById("box");
// menter.addEventListener('mouseenter',()=>{
//     menter.style.backgroundColor = "blue";
//     console.log("mouse enter bro");
// });
// menter.addEventListener('mouseleave',()=>{
//      console.log("mouse leave bro");
//     menter.style.backgroundColor = "yellow";
// })

//SECTION 4:- Keyboard events in JS:-
//Events that occur when an user presses key on the keyboard
// <input type="text" onkeypress="keypress()"  onkeydown="keyDown()"  onkeyup="keyUp()">;
// const keypress = ()=>{                                   //works when u press any key
//     document.getElementById("keys").innerHTML = `you press ${event.key} and it's code is ${event.code}`;
// }
// //better to use 2nd and 3rd once
// const keyDown = ()=>{                     //when u have kept any key pressed  
//     document.getElementById("keys").innerHTML = 'key is down';
//     //when we click backslash to delete then it will run
// }
// const keyUp = ()=>{                         //when u release any key            
//     document.getElementById("keys").innerHTML = 'key is up';
//     //when we click backslash to delete then it will run
// }

//SECTION 5:-----INPUT EVENTS---->
// The onchange event occurs when the value of an element has been changed 
// For radiobuttons and checkboxes the onchange event occurs when the checked state has been changed.

//e.g:-------
// <input type="text" name="" id="ice">
// <label>Choose an ice-cream flavour
// <select id="iceCreams" name="iceCreams" onchange = "selectElement()">
// <option value="">Select one</option>
// <option value="chocolate">Chocolate</option>
// <option value="sardine">Sardine</option>
// <option value="vanilla">Vanilla</option>
// </select>
// </label>
// <div id="result"></div>;
// const selectElement=()=>{
//     const inputChange = document.getElementByID('ice').value;       //for input we have to write .value else for text .innerHTML to get the vaslu typed by user
//     const iceCreams = document.getElementByID('iceCreams').value;
//     const result = document.getElementByID('result');
//     result.innerHTML = `Mr ${inputChange} select ${iceCreams} ice-cream flavour`;
//     console.log(`${inputChange} and ${iceCreams}`);
// }
       //OR 
      //--------BY REFERENCE-----
// <input type="text" name="" id="ice">
// <label>Choose an ice-cream flavour
// <select id="iceCreams" name="iceCreams" >
// <option value="">Select one</option>
// <option value="chocolate">Chocolate</option>
// <option value="sardine">Sardine</option>
// <option value="vanilla">Vanilla</option>
// </select>
// </label>
// <div id="result"></div>;
// const iceCreams = document.getElementById("iceCreams");
// iceCreams.addEventListener('change',()=>{
 //   const inputChange = document.getElementByID('ice').value;       //for input we have to write .value else for text .innerHTML to get the vaslu typed by user
//     const iceCreams = document.getElementByID('iceCreams').value;
//     const result = document.getElementByID('result');
//     result.innerHTML = `Mr ${inputChange} select ${iceCreams} ice-cream flavour`;
//     console.log(`${inputChange} and ${iceCreams}`);   //to show in console what user inputs
// })

//----INTERVIEW QUESTION---> Difference between onclick and addEventListener..??
//soln:-
//addeventListener doesn't override existing event handlers, whereas onclick overrides any existing event handler
//Another is that onclick will always work ,whereas addEventListener willn't work in Interent Explorer before 9

//----TIMING BASED EVENTS------
//Two methods to use is with js:-
   //setTimeout(function,milliseconds)   //Executes a function after waiting a specified no of milliseconds
   //setInterval(function,milliseconds)   //same as setTimeout but repeats execution of function continously
   //clearTimeout()
   //clearInterval()
//E.g:-
//-----SETTIMEOUT:---
//<div id="main-div">
//    <div>
//         <p>Want to show my name?</p>
//         <p id="showMyName"></p>
//         <br>
//         <button id="btn">CLick here</button>
//    </div>
// </div>
//js:-
//const myName = document.querySelector("#showMyName");
//const btn = document.querySelector("#btn");
// const showMyName = ()=>{
//   myName.innerHTML="Loading...."
//     setTimeout(()=>{
//        myName.innerHTML = "Vishal Das"
//     },1000)     //1000 milliseconds
// }
// btn.addEventListener('click',showMyName);

//clearTimeOut():-
//<button onclick="myvar = setTimeout(myFunction,2000)">Try it</button>
//<button onclick = "clearTimeout(myvar)">Stop it</button>
//js:-
//function myFunction(){
//     alert("Hello");
// }

//setInterval():-
// <p>Can you stop me at 5?</p>
// <button id="btn">Click Here</button>
// <button id="btn-1">Stop</button>
// JS:-
//conststopNum = document.querySelector('p');
//const btn = document.querySelector("#btn");
//const stop = document.querySelector("#btn-1");
//let timeRef;
// let num=0;
// const showMyNum = ()=>{
//   stopNum.innerHTML="Loading...."
//     timeRef = setInterval(()=>{
//        stopNum.innerHTML =`${num}`;
//      num++;
//     },1000)     //1000 milliseconds
// }
// btn.addEventListener('click',showMyNum);
//stopInterval.addeventListener('click',()=>{
//     clearInterval(timeRef);
// });

//------OOPS------->>>
//1)What is Object Literals  ??
//soln:-  Object Literal is simply a key:value pair data structure
//Storing variables and function together in one conatainer
//We can refer this as an objects

//How to create an Object??
//1st way:---
// let bioData = {
//     name: "vishal",
//     age: 20,
//     getData: function(){
//         console.log(`My name is ${bioData.name} and my age is ${bioData.age}`);
//     }
// }
// console.log(bioData.name);
// console.log(bioData.getData());

//2nd way:--we don't need to write function keyword after ESCMA 6
// let bioData = {
//     name: "vishal",      //key is name and value is vishal
//     age: 20,
//     getData(){
//         console.log(`My name is ${bioData.name} and my age is ${bioData.age}`);
//     }
// }

//What if we want object as a value inside another object..?(Nested objects)
// let bioData = {
//       myname:{
 //        firstname: "vishal",      //key is firstname and value is vishal
 //        lastname:"Das";
//      },
//     age: 20,
//     getData(){
//         console.log(`My name is ${bioData.name} and my age is ${bioData.age}`);
//     }
// }
// console.log(bioData.myName.lastname);

// What is 'this' object..??
// 'this' object is that it conatins the current context 
// It can different values depending upon where it is placed.

//Example 1:-
//console.log(this);
//it refers to current context which is window global object

//Example 2:-
//function myName(){
//    console.log(this);      //now also it refers to window global object
// }
// myName();

//Example 3:-
// let myNames = "Vishal";
// function myName(){
//     console.log(this.myNames);     //Vishal
// }
// myNames();

//Example 4:-
//const obj = {
//     myAge: 26,
//     myName(){
//         console.log(this);    //current context is current object so it displays all memebers of the object
//         console.log(this.myAge);
//     }
// }
// obj.myName();          //{myAge:26, myName:[Function:myName]}

//Example 5:-
//'this' object willn't with arrow function 
//What is output..??
// const obj = {
//     myAge:26,
//     myName : ()=>{
//         console.log(this);    //it context to window global object
//     }
// }
// obj.myName();
//OUTPUT:- {}

//----OUTPUT 2-----
// let bioData = {
//     myname:{
//         realName: "Vishal Das",
//         surName: "Guddu";
//     },
//     myAge: 26,
//     getData(){
//         console.log(`My name is ${this.myName.surName} and my age is ${this.myAge}`);
//     } 
// }
// bioData.getData();
//OUTPUT---- My name is Guddu and my age is 26

//------ECMA 6-------
//1)Array Destructing:-
// const bioData =['vishal','das',20];
// let firstName = bioData[0];
// let lastname= bioData[1];
// let age1 = bioData[2];
// //----OR----->>
// let [fname,lname,agee,myDegree="B.Tech"] = bioData   //according to ECMA and we can add our own values too
// console.log(fname);    //vishal

//2)Object Destructing:---
// const bioData = {
//     myFname: "vishal",
//     myLname: "Das",
//     age:20
// }
// let {fname,lname,agee,myDegree="B.Tech"} = bioData   //according to ECMA and we can add our own values too
// console.log(fname);    //vishal

//EXTRACTOR OPERATOR:----
//if key and value are of same name the don't need to add both
// const color = ['red','blue','orange'];
// const color1=['red','blue','orange','violet','pink'];
//---OR ACCORDING TO ECMA USE EXTRACTOR OPERATOR
// const color2 = [...color,'violet','pink'];
// console.log(color2);

//ES7 features:-
//1) .includes():-
//  const color = ['red','blue','orange'];
//  const present = color.includes("red");
//  console.log(present);     //true

//2)Exponeniation operator----
// console.log(2**3);   //8

//---ES8(2017) features:-
//1)String padding
//2)Object.values
//3)Object.entries

//1)String padding:-
   //padStart(value):-padding at start of string
   //padEnd(value):-padding at end of string
// let myName1 = "vishal".padStart(10);    //padding applied at start = (padding value - string.length) = 10-6=4
// console.log(myName1);      //     vishal

//2) Object.values:-- to show only values of a object
// const person ={name:"vishal", age:20};
// console.log(Object.values(person));      //vishal,20

//3)Object.entries:--shows complete key and value both and converts each key and value pair into a array
// const person ={name:"vishal", age:20};
// console.log(Object.entries(person))        //[['name','vishal'], [['age',20]]

//---ES9(2018)----->>
//1) Spread operator for objects also:-
// const person ={name:"vishal", age:20};
// const secondPerson = {...person};
// console.log(secondPerson);

//2) .flat():- 
//by default, it flats array upto one level but we can add parameter to how much levels we want to flat 
//if we add infinity then it will flat unlimited levels
// const arr =[['zone1','zone2'],
//             ['zone3','zone4'],
//             ['zone5',['zone6','zone7']]
//             ];
// console.log(arr.flat());
// console.log(arr.flat(2));

//3)Object.fromEntries():-  to convert from array back to object
// const person ={name:"vishal", age:20};
//  const arrObj = (Object.entries(person));
//  console.log(Object.fromEntries(arrObj));  

//4) trimSpaces :-to delete spaces that we have added during padding

//----ES11(2020)----
//1)BIGInt data type:- just add n after max safe number and other number also
// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum);           //max capacity
// console.log(oldNum+12);    //cann't handle such big number
//  console.log(9007199254740991n +12n);     //9007199254741003
// let newnum1 = 9007199254740991n +12n;
// console.log(typeof newnum1);     //bigint

//2)Nullish Coalescing(??):-is a logical operator that returns its RHS operand when its LHS operand is NULL or undefined, and otherwise returns its LHS

//---ES5(2014)-----
// x=3.14;
// console.log(x);

"use strict"
// x=3.14;
// console.log(x);   //error
// let x=3.14;
// console.log(x);

//---ADVANCED JAVASCRIPT----

//1)------Event BUBBLING AND EVENT CAPTURING-----
//By default,event bubbling occurs i.e. first child event then parent event
// <div id="parentId">
//   <div id="childId"></div>
// </div>
// const parentIdd = document.getElementById("parentId");
// const childIdd = document.getElementById("childId");
// const parentCall () =>{
//     alert("Parent Call Div");
// }
// const childCall() =>{
//     alert("Children Call Div");
//     event.stopPropagation();
// }
// parentIdd.addEventListener('click',parentCall);
// childIdd.addEventListener('click',childCall);

//for CAPTURING EVENT:- first parent then child
// parentIdd.addEventListener('click',parentCall,true);     //By default third argument is false for event bubbling
// childIdd.addEventListener('click',childCall,true); 

//2) CALL BACK and HIGHER ORDER FUNCTION:-
//HIGHER ORDER FUNCTION:-  function which takes another argument as a function is called HOF
//Call Back Function:- function which get passed as an argument to another function ,to be "called back" at a later time
// const add = (a,b)=>{
//     return a+b;
// }
// const sub=(a,b)=>{
//     return Math.abs(a-b);
// }
// const mull = (a,b)=>{
//     return a*b;
// }
// const div = (a,b)=>{
//     return a/b;
// }
// const calculator = (num1,num2,operator) =>{
//     return operator(num1,num2);
// }
// console.log(calculator(5,6,add));     //11   //Calculator is HOF and add,sub,mull,divide are CALL BACK functions

//3)Asynchronous Javascript:---
//3.1)--HOSTING IN JAVASCRIPT--
//We have a creation and execution phase
//Hosting in Js is a mechanism where variables and functions declarations are moved to top of their scope before the code execute
 
//Example:-
// console.log(myName);             //undefined
// var myName;
// myName = "Vishal";
   //How it will be in creation phase:-
// 1)var myName;   //not intialized with any value mns undefined
// 2)console.log(myName);
// 3)myName = "Vishal";

//in ES6(2015), hosting is avoided by using the "let" keyword instead of "var".(The other difference is that variables declared with let are local 
// to the surrounding block, not the entire function) 

//4) What is Scope chain and Lexical Scoping in Js..??
//Scope chain in Js is lexically defined, which means that we can see what the scope chain will be by looking at the code
//At the top we have Global scope , which is the Window Object in the browser
//Lexical Scoping means Now, the inner function can get access to their parent function variables but the vice-versa is not true

//for Example:-
// let a ="Hello Guyzz. ";    //global scope
// const first = ()=> {
//    let b = "How are you..??";
//    const second = () =>{
//        let c = "Hii,I'm fine,Thank-You..!!";
//        console.log(a+b+c);
//    }
//    second();
//    console.log(a+b+c);    //cann't use c
// }
// first();

//5)What is Closures in Js..??
//A closure is a combination of a funciton bundled together(enclosed) with refernces to its surrounding state(the lexical enviroment)
 
 //In other words, a closure gives you:-
 // Access to outer function's scope from an inner function
 //In Js, closures are created everytime a function is created, at function creation time
 //It is same like lexical scoping

 //for e.g:-
//  let outerFunction = (a) =>{
//      let b=10;
//      let innerfunction = () =>{
//          let sum = a+b;
//          console.log(`The sum of 2 numbers is ${sum}`);
//      }
//      innerfunction();
//  }
//  outerFunction(2);    //The sum of 2 numbers is 12;
   //---OR---
//  let outerFunction = (a) =>{
//      let b=10;
//      let innerfunction = () =>{
//          let sum = a+b;
//          console.log(`The sum of 2 numbers is ${sum}`);
//      }
//      return innerfunction;
//  }
// let checkClosure =  outerFunction(2);      
// console.log(checkClosure);               //[Function:innerfunction]
// checkClosure();         //The sum of 2 numbers is 12;
// console.dir(checkClosure);    //dir gives more information about function

//INTERVIEW QUESTION:---- difference between Asynchrounous and synchronous Js..??
//Synchronous js:- Until first function work is completed we cann't go to next function work no matter who takes less or more time for execution
//e.g:-
// const fun2 = ()=>{
//     console.log('Function 2 is called');
// }
// const fun1 = ()=>{
//     console.log("Function 1 is called");
//     fun2();
//     console.loG("Function1 is called Again");
// }
// fun1();
//Output:- Function 1 is called
          //Function 2 is called
          //Function1 is called Again
//Asynchrounous js :- All function works parallely
//e.g:-
// const fun2 =()=>{
//     setTimeout(()=>{
//         console.log("Function 2 is called");
//     },2000);
// }
// const fun1 = ()=>{
//     console.log("function1 is called");
//     fun2();
//     console.log("Function1 is called Again");
// }
// fun1();
//Output:- function1 is called
         //Function1 is called Again
         //Function 2 is called

//-----EVENT LOOP---->>

//Function Currying---->
//It is a technique of evaluating function with multiple arguments, into sequnce of function with single argument 
//In other words, when a function instead of taking all arguments ta one time ,takes the first one and returns a new function that takes the second one 
// and returns a new function that takes the third argument and so forth until all arguments are fulfiled.

//e.g:-
// function sum(num1){
//     // console.log(num1);   //5
//     return function(num2){ 
//         // console.log(num1,num2);    //5,3
//         return function(num3){
//             // console.log(num1,num2,num3);     //5,3,8
//             console.log(num1+num2+num3);          //16
//         }
//     }
// }
// sum(5)(3)(8);
   //OR using fat function
//    const sum = (num1)=>(num2)=>(num3)=> console.log(num1+num2+num3);
//    sum(5)(3)(8);

//---CALLBACK HELL---->>
// setTimeout(()=>{
//   console.log("1 work is done");
//   setTimeout(()=>{
//       console.log("2 work is done");
//       setTimeout(()=>{
//           console.log("3 work is done");
//           setTimeout(()=>{
//               console.log("4 work is done");
//               setTimeout(()=>{
//                   console.log("5 work is done");
//                   setTimeout(()=>{
//                       console.log("6 work is done");
//                   },1000)
//               },1000)
//           },1000)
//       },1000)
//   },1000)
// },1000)

//----JSON---->>

//JSON.stringify turns a javascript object into JSON text and stores that JSON text in astring, e.g:-
// var my_object = {key1:"some text", key2:true , key3:5};
// var object_as_string = JSON.stringify(my_object);
    //"{"key1":"some text", "key2":true , "key3":5}"
// typeof(object_as_string);    //"string"

//JSON.parse turns a string of JSON text into a javascript object e.g:-
// var object_as_string_object = JSON.parse(object_as_string);
    // {key1:"some text", key2:true , key3:5}
// typeof(object_as_string_object);
   //"object"






















 














































