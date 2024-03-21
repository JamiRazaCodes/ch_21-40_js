//  //Chapter 21
//  //1
//  var allLower = userInput.toLowerCase();
//  //2
//  x = x.toLowerCase();
//  //3
//  y = y.toUpperCase();
//  //4
//  var a = "CapitalLetters";
//  var b = a.toLowerCase();
//  //5
//  var arr1 = ['SAYlANI']
//  var arr2 = arr1[0].toLowerCase();
//  //6
//  var str  = 'Hello World';
//  alert(str.toUpperCase());
//  //7
//  var cityName = "kaRacHi";
//  var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

//  alert(capitalizedCityName);

//  //chapter 22-25
//  //1
//  var sameWord = 'captain'
//  var  sliceStr = sameWord.slice(1, 3);
//  console.log(sliceStr);
//  //2
// var word = 'Jami Raza';
// var charactr = word.length;
// console.log(charactr)
//  //3
//  var animal = 'elephant';
//  var seg = animal.slice(2, 6);
// console.log(seg)
// //5
// var strr =  "hello world";
// var chrac = strr.length;
// var strr2 = strr.slice(1, 7);
// console.log(strr2);
// //6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// the value of indx is 3
// //8
// var text = "To go or not to go.";
// var indx = text.lastIndexOf("go");
// console.log(indx);
// //9
// if (indexNum >= 0 && indexNum < myString.length){
// }
// //10
// var str = "abcde";
// var chracindx = str.charAt(2);
// console.log(chracindx); 
// //11
// var text = 'My name is Jami Raza'
// var cha = text.charAt(9);
// console.log(cha);
// //12
// var str = "Pakistan zindabad";
// var x = str.charAt(str.length - 1);
// console.log(x);
// //13
// var input = 'Saylani';
// var cha = input.charAt(4);
// console.log(cha)
// //14
// if (str.charAt(2) === 'X') {
// }
// //15
// var reply = "no, there is no problem";
// var charArray = [];

// for (var i = 0; i < reply.length; i++) {
//     charArray.push(reply.charAt(i));
// }
// var indxOfNo = reply.indexOf("no");

// if (indxOfNo !== 1) {
//     charArray.splice(indxOfNo, 2, "y", "e", "s");
// }
// var revisedReply = charArray.join("");

// console.log(revisedReply);

// //16
// var str = '12345'
// var newStr = str.replace('1', 'one');
// console.log(newStr);
// //17
// var x = 'a b c d e a b a'
// var y = x.replace(/a/g, 'Z');
// console.log(y);

// //chappter 26
// //1
// var roundedNumber = Math.round(1.4);
// console.log(roundedNumber)
// //2
// var origNum = 2.2;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum);
// //3
// var origNum = 4.5;
// var roundNum = Math.floor(origNum);
// console.log(roundNum);
// //4
// var Num = 16.5;
// var roundNum = Math.round(Num);
// console.log(roundNum);
// //5
// var num = 0.5;
// var round = Math.round(num);
// console.log(round);

// //chapter 27
// //1
// var randomNumber = Math.random();
// var range = Math.floor(randomNumber * 50) + 1;
// console.log(range);
// //2
// var randomNumber = Math.random();
// //3
// var dice = Math.floor(Math.random() * 6) + 1;
// //4
// var coinToss = Math.floor(Math.random() * 2);
// var tossResult;
// if (coinToss < 0.5) {
//     tossResult = "Head";
// } else {
//     tossResult = "Tail";
// }
// console.log(tossResult);

// //chapter 28-29
// //1
// // In Javascript we use parseInt function to convert string into integer.
//2
// var str = "123";
// var num = parseInt(str);

// console.log(num);
// //3
// //In javascipt we use parseFloat() function to convert decimal number into floating point number.
// //4
// // In JavaScript, before performing the conversion of a string to an integer or a decimal, 
// // we can check if the string can be successfully converted using the isNaN().
// // 5
// // In javascript we can use .tostring() or string()  method to convert any data type into string.
// //6
// var num = 42
// console.log(num.toString());
// var str = "3.14";
// var floatNum = Number(str);
// console.log(floatNum);

// // Chapter 30
// //1
// var num = 3.1415926535;
// var newNum = num.toFixed(4);
// console.log(newNum);
// //2
// var num = 5.263983363;
// var newNum = num.toFixed(2);
// console.log(newNum);
// //3
//if (num.toFixed(2).toString().length > 4) {
//}
// //4
// var num = 1234.56789;
// var rounded = num.toFixed(2);
// alert("Number rounded to 2 decimal places: " + rounded); 00000

// //Chapter31-34
// //1
// var dObj = new Date();
// console.log(dObj);
// // //2
// var dObj = new Date();
// var dStr = dObj.toString();
// console.log(dStr);
// //3
// var d = new Date();
// var dayOfWeek = d.getDay();
// console.log(dayOfWeek);
// //4
// var crrDate = new date();
// var d = crrDate.getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert("Today is " + dayNames[d] + " (" + d + ")");
// Get the current date
// var currentDate = new Date();
// var d = currentDate.getDay();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// alert("Today is " + dayNames[d]);
// //5
// var d = new Date();
// var allParts = {
//     year: d.getFullYear(),
//     month: d.getMonth()+1,
//     date: d.getDate(),
//     day: d.getDay(),
//     hours: d.getHours(),
//     minutes: d.getMinutes(),
//     seconds: d.getSeconds(),
//     milliseconds: d.getMilliseconds()
// }
// console.log(d)
// console.log(allParts)
// //6
// var d = new Date(2020, 12, 1);
// console.log(later);
// //7
// var d = new Date(1992, 1, 3)
// console.log(d)
// //8
// alert(Date.now() - new Date('1980-01-01').getTime());
// //9
// In javascript we change the year  of a date object by using setFullYear method
// //10
// var d = new Date();
// d.setMonth(5);
// console.log(d);
// //11
//the day of the specific date can't change in javascript.
// //12
// function changeMinutes(time) {
//     var newMinutes = prompt("Enter the new value for minutes:");
//     if (newMinutes !== null && !isNaN(newMinutes)) {
//         time.setMinutes(parseInt(newMinutes));
//         console.log("Time with minutes changed:", time.toString());
//     } else {
//         console.log("Invalid input or canceled.");
//     }
// }
// var currentTime = new Date(); 
// console.log("Original time:", currentTime.toString());
// changeMinutes(currentTime);
// //13
// function addHoursToTime(time, hoursToAdd) {
//     time.setHours(time.getHours() + hoursToAdd);
//     return time;
// }

// var currentTime = new Date(); 
// console.log("Original time:", currentTime.toString());
// var newTime = addHoursToTime(currentTime, 3);
// console.log("Time after adding 3 hours:", newTime.toString());
// //14
// function calculateAge(birthDate) {
//     var today = new Date();
//     var birthDate = new Date(birthDate);
//     var age = today.getFullYear() - birthDate.getFullYear();
    
//     if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
    
//     return age;
// }
// var birthDate = '2003-08-14';
// var age = calculateAge(birthDate);
// console.log("Age:", age);

//chapter 35-37
// //1
// function displayalert(){
// }
// //2
// function askName(){
//    var userName =  prompt('Enter your name:')
//    return userName;
// }
// alert("Welcome" + " " + askName())
// //3
// function callFunction(){
//     functionOne();
//     functiontwo();
// }
// //4
// function askName(){
//    var userName = prompt('Enter name:')
//     return userName;
//  }
//  alert("Welcome" + " " + askName())
// //5
// function concat(a, b, c){
// }

// var x = "Hello"
// concat(x, "World", 9)
// console.log(concat(x,"hello",9))
// //6
// function concatenate(x, y){
//     var result = x + y; 
// }
// // 7
// function multiply(para1, para2, para3) {
//     var result = para1 * para2 * para3;
// }
// //8
// function average(numbers){
//     var sum = 0;

// }
// function calculateAverage(numbers) {
//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return  sum / numbers.length ;
// }
// //12
// function countLetters(word) {
//     var letterCounts = {};   
//     for (var i = 0; i < word.length; i++) {
//         var letter = word[i];
//         if (letterCounts[letter]) {
//             letterCounts[letter]++;
//         } else {
//             letterCounts[letter] = 1;
//         }
//     }
//     return letterCounts;
// }
// //15
// function checkPresence(word, array) {
//     return array.includes(word);
// }
// var wordToCheck = 'hussain';
// var namesArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
// var isPresent = checkPresence(wordToCheck, namesArray);
// console.log("Is", wordToCheck, "present?", isPresent);
// //16
// function repeatLetter(letter) {
//     return letter.repeat(10);
// }
// //17
// function reverseArray(arr) {
//     return arr.reverse();
// }

// // chapter 38 
// //1
// function usage(){
//     var name = prompt("What's your name?" );
//     alert("Hello "+name)
// }
// usage()
// //2
// var gvariable = "Pakistan";
// function msg(){
//     alert(gvariable + " " + "zindabad")
// }
// msg()

// //chapter 39-40
// //1
// var day = "";

// switch (day) {
//     case "Monday":
//         console.log("Today is Monday.");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday.");
//         break;
//     case "Wednesday":
//         console.log("Today is Wednesday.");
//         break;
//     case "Thursday":
//         console.log("Today is Thursday.");
//         break;
//     case "Friday":
//         console.log("Today is Friday.");
//         break;
//     default:
//         console.log("Wrong day");
// }
// //2
// var cityName = prompt("Enter your city name:");

// switch (cityName) {
//     case "Karachi":
//         alert("city of lights");
//         break;
//     case "Lahore":
//         alert("Isse bara johar he");
//         break;
//     case "Islamabad":
//         alert("Burger");
//         break;
//     default:
//         alert("available only in  Karachi, Lahore and Islamabad");
// }
