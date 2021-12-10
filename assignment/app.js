// JAVASCRIPT
// Assignment # 1 

//1. Write a script to greet your website visitor using JS alert
//box.
//Answer
//alert("Welcome to my website");

//2.Write a script to display following message on your web
//page:
//Answer
//alert("Error! Please enter a valid password.");

//3.Write a script to display following message on your web
// page: (Hint : Use line break)
// //Answer
// alert(`Welcome to JS Land..
//  Happy Coding`);

//  alert("Welcome to JS Land..\nHappy Coding")

 // there are to way to break in alert one is using /n and other is using this `xyz`

 //know developer side

 //5.Generate the following message through browser’s developer console:
// console.log("Hello... I can run js through my web browser's console")

//6.Make use of alerts in your new/existing HTML & CSS project.
//alert(" hello alert")

//chapter 1 completed

//Assignment # 2 

//1. Declare a variable called username.
//var username;

//2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName="Syed Noman Ali"
// alert(myName);

// //3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

//  var message="“Hello World”";
//  alert(message);

//4.Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// var name=prompt("enter your name");
// alert(name);

// var name=+prompt("enter your age");
// alert(name);

// var name=prompt("enter your certificate name");
// alert(name);

// 5.Write a script to display the following alert using one JS variable:
// var pizza="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)

// var email="noman.lcsquad@gmail.com";
// var text="my email adress is ";
// alert(text+email);

// var text="I am trying to learn from the book "
// var book="A smarter\nway to learn JavaScript"
// alert(text+book);

//8. Write a script to display this in browser through JS
//document.write("Yah! I can write HTML content through JavaScript")

// var abc="“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”"
// alert(abc);

//-- END --

// Assignment # 3

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

// var age="I am 15 years old";
// alert(age);


//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

// var birthYear="My birth year is 1996 <br> Data type of my ddeclared variable is number"
// document.write(birthYear);

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:

// var username=prompt("enter your name","John Doe" );
// var product=prompt("enter product title","5" );
// var quantity=prompt("enter product quantity", "  T-shirt(s)");
// document.write(username+product+quantity);

// -- END --

// //Assignment # 4
// 1. Declare 3 variables in one statement.
// var name = "John Doe", userName = "user58", age = 23;
// console.log(name,userName,age);

//2. Declare 5 legal & 5 illegal variable names.
// 5 legal variable  names 
// var abc;
// var ABC;
// var abc123;
// var abc$;
// var abc_123;
// var abc123$;

// 5 illegal variable names

// var 123;
// var #abc;
// var abc-123;
// var ba!123;
// var ba&123;
// var my name;

//3. Display this in your browser

// var abc=prompt();
// document.write(abc);

// var text="Variable names can only contain,numbers,$ and _.  For example $my_1stVariable <br> Variables must begin with a,$ or _. For example $name, _name or name <br>Variable names are case sensitive <br>Variable names should not be JS keywords "
// document.write(text);

// -- END --

//Assignment # 5
//1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser
// var a=3;
// var b=5;
// var sum="sum of 3 and 5 is "
// document.write(sum,a+b);

//2. Repeat task1 for subtraction, multiplication, division &
//modulus.

//subtraction
// var a=3;
// var b=5;
// var sum="subtraction of 3 and 5 is "
// document.write(sum,a-b);

//multiplication

//  var a=3;
//  var b=5;
//  var sum="multiplication of 3 and 5 is "
//  document.write(sum,a*b);


//division
//  var a=3;
//  var b=5;
//  var sum="division of 3 and 5 is "
//  document.write(sum,a/b);

//modulus
//  var a=3;
//  var b=5;
//  var sum="modulus of 3 and 5 is "
//  document.write(sum,a%b);

//3. Do the following using JS Mathematic Expressions
//  var xyz;
//  document.write(" Value after variable declaration is:",xyz);

// var abc=5;
// var newabc =abc++;
// var newsum=abc+7;
// var dec=newsum-1;
// var devider=dec%3;
// console.log(devider);
// document.write("<br> Initial value: ", newabc, "<br>Value after increment is: ", abc ,"<br> value after addition is:",newsum, " <br>Value after decrement is:",dec, "<br> The remainder is : ", devider);

//4. Cost of one movie ticket is 600 PKR. Write a script to store
// var oneticket=600;
// var costoffive=oneticket*5;
// console.log(costoffive);
// document.write("Total cost to buy 5 tickets to a movie is ",costoffive, "PKR");

// 5. Write a script to display multiplication table of any
// number in your browser. E.g
// var tableof4=4;
// var a=tableof4*1;
// var b=tableof4*2;
// var c=tableof4*3;
// var d=tableof4*4;
// var e=tableof4*5;
// var f=tableof4*6;
// var g=tableof4*7;
// var h=tableof4*8;
// var i=tableof4*9;
// var j=tableof4*10;
// document.write("Table of 4", "<br> 4x1=",a, "<br> 4x2=",b,"<br> 4x3=",c,"<br> 4x4=",d,"<br> 4x5=",e,"<br> 4x6=",f,"<br> 4x7=",g,"<br> 4x8=",h,"<br> 4x9=",i,"<br> 4x10=",j,);

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// var cel=25;
// var far=(cel*9/5)+32;
// //console.log(far);

// var far=70;
// var cel=(far-32)*5/9;
// console.log(cel);
// document.write("25 C is ",far,"F", "<br> 70 F is ",cel,"C");


// //7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// document.write("Shopping Cart");
// var priceone=650;
// var quantityOfItemOne=1*3;
// var quantityOne=priceone*3;
// var pricetwo=100;
// var quantityOfItemTwo=1*7;
// var quantityTwo=pricetwo*7;
// var sum=quantityOne+quantityTwo;
// var charges=100;
// document.write("<br> Price of item 1 is ",priceone);
// document.write("<br> Quantity of item 1 is  ",quantityOfItemOne);
// document.write("<br> Price of item 2 is ",pricetwo);
// document.write("<br> Quantity of item 2 is  ",quantityOfItemTwo);
// document.write("<br>Shipping Charges ",charges);
// document.write("<br>Total cost of your order is ",sum+charges);
// console.log(sum+charges);
//-- END --

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// var obtainmarks=804;
// var totalmarks=980;
// var percentage=obtainmarks/totalmarks*100;
// console.log(percentage);
// document.write("Mark Sheet");
// document.write("<br>Total marks: ",totalmarks);
// document.write("<br>Marks obtained:",obtainmarks);
// document.write("<br>Percentage:",percentage);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
// var onedollar=104.80;
// var onesaudi=28;
// var tendollar=onedollar*10;
// var tensaudi=onesaudi*25;

// console.log(tendollar);
// console.log(tensaudi);
// document.write("Currency in PKR");
// document.write("<br>Total in dollar currency in PKR:",tendollar);
// document.write("<br>Total in saudi currency in PKR:",tensaudi);

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// var abc=5;
// var number=abc+5*10/2;
// console.log(number);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!

// var currentY=2021;
// var birthY=1996;
// var age=currentY-birthY;
// console.log(age);
// document.write("Age Calculator");
// document.write("<br>Current Year: ",currentY);
// document.write("<br>Birth Year: ", birthY);
// document.write("<br>Your Age: ",age);


// var currentY=+prompt("enter currrent year");
//  var birthY=+prompt("write birthday year");
//   var age=currentY-birthY;
//   alert(age);
  

// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.
// var radius=20;
// var pie=3.142;
// var circum=2*pie*radius;
// var area=pie*(radius*radius);
// console.log(circum);
// console.log(area);
// document.write("The Geometrizer");
// document.write("<br>Radius of a circle: ",radius);
// document.write("<br>The circumference is: ",circum);
// document.write("<br>The area is: ",area);

//Assignment # 6-9
//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// var a=10;
// document.write("Result:");
// document.write("<br>The value of a is:",a);

// var newa=++a;
// console.log(newa);
// document.write("<br>the value of ++a is:", newa);
// document.write("<br>now the value of a is:",a);

// var newa=a++;
// document.write("<br>the vale of a++ is :",newa)
// document.write("<br>now the value of a is: :",a)

//3. Write a program that takes input a name from user & greet the user.
//  var name=prompt("enter your name");
//  console.log(name);

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// var table=+prompt("write any number")
// var multi=table*table;
// console.log(multi);


// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
 
// var userOne=+prompt("Enter English marks");
// var userTwo=+prompt("Enter Math marks");
// var userThree=+prompt("Enter Urdu marks");

// var total=100;
// var percent=userOne/total*100;
// var percentTwo=userTwo/total*100;
// var percentThree=userThree/total*100;
// //alert(percent)
// console.log(percent);

// document.write("Subject Total Marks Obtained Marks Percentage");
// document.write("<br>English......   ",total);
// document.write(".......",userOne);
// document.write("................",percent,"%");
// //usertwo
// document.write("<br>Math......   ",total);
// document.write(".......",userTwo);
// document.write("................",percentTwo,"%");
// //userThree
// document.write("<br>Urdu......   ",total);
// document.write(".......",userThree);
// document.write("................",percentThree,"%");

// //marksheet
// var totalSum=total*3;
// var totalObtainMarks=userOne+userTwo+userThree;
// var totalPercent=totalObtainMarks/totalSum*100;

// document.write("<br>.......",totalSum,".......",totalObtainMarks,"......",totalPercent,"%");

// End

// Assignment # 9-10
//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var city=prompt("Enter your City");
// if (city==="karachi"){
//     alert("“Welcome to city of lights”")
// }else{
//     alert("Write Correct City")
// }
// console.log(city);




//practice if else statement
// var a=40;
// var b=30;
// if (a<b){
//     alert("correct");
// }
// else{
//     alert("wrong");
// }

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Write Your Gender");
// if (gender==="male"){
//     alert("Good Morning Sir.");
// }
// else if (gender==="female"){
//     alert("Good Morning Ma’am");
// }else {
//     alert("you have only two option male or female");
// }


//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:


// var signal = prompt("Write Any Signal Color");
// if (signal==="red") {
//     alert("Must Stop")
// }
// else if (signal==="green"){
//     alert("Move now")
// }

// else if (signal==="yellow")
// {
//     alert("Ready to move");

// }else {
//     alert("You Have Three Colors Only(Red,Green,Yellow)");
// }

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
// var fuel=prompt("Please Enter your Remaining Fuel");
// if (fuel<0.25){
//     alert("“Please refill the fuel in your car”");
// }
// else{
//     alert("enter value less than (0.25)")
// }

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
//a
 //var a = 4; 
 //if (++a === 5)
 //{ alert("given condition for variable a is true"); }
 //output:alert message displayed

 //b
//  var b = 82; 
// if (b++ === 83)
// { alert("given condition for variable b is true"); }
// output:alert message not displayed

//c
// var c = 12; 
//  if (c++ === 13){ alert("condition 1 is true"); } 
//  if (c === 13){ alert("condition 2 is true"); } 
//  if (++c < 14){ alert("condition 3 is true"); } 
//  if(c === 14){ alert("condition 4 is true"); }
//output:alert message displayed

//d
//  var materialCost = 20000; 
//  var laborCost = 2000; 
//  var totalCost = materialCost + laborCost;
//   if (totalCost === laborCost + materialCost)
//   { alert("The cost equals"); }
//output:alert message displayed

// //e
//   if (true)
//   { alert("True"); 
// } 
//   if (false)
//   { alert("False"); }
  //output:alert message displayed

//   //f
//   if("car" < "cat"){
//     alert("car is smaller than cat");
//  }
 //output:alert message displayed
 
 //6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
//  var a = +prompt("Enter English Marks/out of 100");
//  var b = +prompt("Enter Urdu Marks/out of 100");
//  var c = +prompt("Enter Maths Marks/out of 100");
//  var abc="you need to improve"

//  var totalObtain =a+b+c;
//  var totalMarks = 300;
//  var percentage = totalObtain/totalMarks*100;
 
//  if(percentage>=80){
//      document.write("Mark Sheet");
//     document.write("<br> Total marks:",totalMarks);
//     document.write("<br>Marks obtained: ",totalObtain);
//     document.write("<br>Percentage: ",percentage,"%");
//     document.write("<br>Grade : A-one ");
//     document.write("<br>Remarks : Excelent");
    

//  } else if(percentage>=70){
//     document.write("Mark Sheet");
//     document.write("<br> Total marks:",totalMarks);
//     document.write("<br>Marks obtained: ",totalObtain);
//     document.write("<br>Percentage: ",percentage,"%");
//     document.write("<br>Grade : A ");
//     document.write("<br>Remarks : Good");
    
//    // alert("A")
// }else if(percentage>=60){
//     document.write("Mark Sheet");
//     document.write("<br> Total marks:",totalMarks);
//     document.write("<br>Marks obtained: ",totalObtain);
//     document.write("<br>Percentage: ",percentage ,"%");
//     document.write("<br>Grade : B ");
//     document.write("<br>Remarks : You need to improve");
    
//     //alert("B")
// }else if(percentage<=60){
//     document.write("Mark Sheet");
//     document.write("<br> Total marks:",totalMarks);
//     document.write("<br>Marks obtained: ",totalObtain);
//     document.write("<br>Percentage: ",percentage ,"%");
//     document.write("<br>Grade : Fail ");
//     document.write("<br>Remarks : Sorry");
    
// }


//8:Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var num =+prompt("enter any number");
// if (num%3==0){
//     alert("entered number is divisible by 3")
// }else {
//     alert("entered number is not divisible by 3")
// }

// 9:Write a program that checks whether the given input is an even number or an odd number.

// var num = +prompt("Enter any number");
// if (num % 2 == 0){
//     alert("Number is Even")
// }else {
//     alert("Number is odd")
// }

//10. Write a program that takes temperature as input and shows a message based on following criteria

// var temp = +prompt();

// if (temp > 40){
//     alert("“It is too hot outside.”")
// }else if (temp > 30){
//     alert("“The Weather today is Normal.”")
// } else if (temp > 20){
//     alert("“Today’s Weather is cool.”")
// } else if (temp > 10){
//     alert("“OMG! Today’s weather is so Cool.”")
// }  else {
//     alert("Number must be greater than 10")
// }

//11:Write a program to create a calculator for +,-,*, / & % using if statements.


// var numberOne = +prompt("Enter First Number");
// var operator = prompt("Enter Operator either (+, -, *, / or%)");
// var numberTwo = +prompt("Enter Second Number");

// if (operator == "+"){
//     alert(numberOne+numberTwo)
// }else if (operator == "-"){
//     alert(numberOne-numberTwo)
// }else if (operator == "*"){
//     alert(numberOne*numberTwo)
// }else if (operator == "/"){
//     alert(numberOne/numberTwo)
// }else {
//     (operator == "%")
//     alert(numberOne%numberTwo)
// }

    // END

    //Assignment # 12-13

// 1:   Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.



// var ch = prompt("Enter any Charater (Uper case or lower case)");

// if (ch >= "A" & ch <= "Z"){
//     alert("Upper Case")

// }else if (ch >= "a" & ch <= "z"){
//     alert("lower case")

// }else {
//     alert("not a alphabetic character")
// }

// //2:Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// var first = + prompt("enter first number");
// var second = + prompt("enter second number");

// if (first > second){
//     alert(first)
// }else if (first < second ){
//     alert(second)
// }else if ( first==second){
//     alert("interger are same")
// }


// else{
//     alert("not a number")
// }

//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var num = + prompt("");

// if (num > 0){
//     alert("number is positive")
// }else if (num < 0){
//     alert("number is negative")
// }else if (num == 0){
//     alert("number is zero")
// }


//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var ch = prompt("write any aplhabet");

// if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "y" ){
//     alert("this is a vowel alphabet")
// }
// else {
//     alert("Not a vowel")
// }


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:

// var password = prompt("enter your password");
// var confirmPassword = prompt("Please Confirm your password");

// if ( password == confirmPassword) {
//     alert("“Correct! The password you entered matches the original password”")
// }else{
//     alert("“Incorrect password”")
// }

//6. This if/else statement does not work. Try to fix it:

// var greeting; 
// var hour = 13;
//  if (hour < 18){ 
//      greeting = "Good day"}
//     else {greeting = "Good evening"; }


//7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// var time = +prompt("write time in 24 hours format");

// if ( time >= 0000 && time < 1200){
//     alert("Good Morning")
// }else if ( time >= 1200 && time < 1700){
//     alert("Good atfernoon")
// }else if ( time >= 1700 && time < 2100){
//     alert("Good Evening")
// }else if ( time >= 2100 && time < 2359){
//     alert("Good night")
// }


// practice even and odd program

// var num = +prompt();

// if (num %2==0){
//     alert("number is even")
// }else {
//     alert("number is odd")
// }

        //end
//Chapter 14-16

//1:Declare an empty array using JS literal notation to store student names in future.
// var arr;
//     arr=("noman");
// console.log(arr);

//2;Declare an empty array using JS object notation to store student names in future.

// var arr;
//  arr=["noman","ali","asad"];
// console.log(arr);

//3. Declare and initialize a strings array.

// var arr=["a","b","c","d"];
// console.log(arr);

//4. Declare and initialize a numbers array.
// var arr = [1,2,3,4,5];
// console.log(arr);

//6:Declare and initialize a mixed array.
// var arr = ["a",1,"b",2,"c",3,"d",5,"e"];
// console.log(arr);


//7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).

// var arr = ["SSC" , "HSC ", "BCS ", "BS ", "BCOM ", "MS ", "M. Phil ", "PhD"];

// document.write("Qualifications:","<br>","<br>")
// document.write("<br> 1) ",arr [0]);
// document.write("<br>  2)  ",arr [1]);
// document.write("<br> 3) ",arr [2]);
// document.write("<br> 4) ",arr [3]);
// document.write("<br> 5) ",arr [4]);
// document.write("<br> 6) ",arr [5]);
// document.write("<br> 7) ",arr [6]);
// document.write("<br> 8) ",arr [7]);
// console.log(arr);




//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

// var arr = ["Michael","John","Tony"];
// var score = [320,230,480];
// var total=500;

// document.write("Score of ",arr[0], " is " ,score[0], "."," Percentage: ", score[0]/total*100,"%");
// document.write("<br>", "Score of ", arr[1], " is " ,score[1], "."," Percentage: ", score[1]/total*100,"%");
// document.write("<br>","Score of ",arr[2], " is " ,score[2], "."," Percentage: ", score[2]/total*100,"%");

// console.log(score[0]/total*100);
// console.log(arr);  
// console.log(score);  



//9. Initialize an array with color names. Display the array elements in your browser.
//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.

// var color = ["red","blue","yellow","green","black","pink"];
// var user1 = prompt("what color you wants to add to the beginning an array");
// color.unshift(user1);

// document.write(color);
// console.log(color);

//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

// var color = ["red","blue","yellow","green","black","pink"];
// var user1 = prompt("what color you wants to add to the End an array");
// color.push(user1);

// document.write(color);
// console.log(color);



//c. Add two more color to the beginning of the array. Display the updated array in your browser.

// var color = ["red","blue","yellow","green","black","pink"];
// var user1 = prompt("Add two more color to the beginning of the array");
// var user2 = prompt("Add two more color to the beginning of the array");

// color.unshift(user1,user2);

// document.write(color);
// console.log(color);

//d. Delete the first color in the array. Display the updated array in your browser.


// var color = ["red","blue","yellow","green","black","pink"];

// color.shift();

// document.write(color);
// console.log(color);

//e. Delete the last color in the array. Display the updated array in your browser.

// var color = ["red","blue","yellow","green","black","pink"];

// color.pop();

// document.write(color);
// console.log(color);


// //f Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

// var color = ["red","blue","yellow","green","black","pink"];
// var index = +prompt("enter index number (0-5)");
// var userColor = prompt("what color do you insert in this index number");

// color.unshift();

// console.log(color[],);


// var arr = ["a","b","c","d",];
// var newArr = arr.slice(2);

// console.log(arr);
// console.log(newArr);

// color.push(user);
// console.log(color);

// color.push("abc");
// color.pop();
// color.unshift("abc");
// color.shift();
// Push:last main add krta hai
// pop:last main remove krta hai
// unshift:add krta hai start main
// shift:remove krta hai start sy

// sir i tried but fail did not found the solution


//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var arr = [320,230,480,120];

// document.write("Scores of Students: ",arr);
// document.write("<br>Ordered Scores of Students: ",arr[3],",",arr[1],",",arr[0],",",arr[2]);

// console.log(arr);


//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var selectedCities=cities.slice(0,3);

// document.write("Cities list:");
// document.write("<br>",cities,"<br>");
// document.write("<br> Selected cities list:");
// document.write("<br>",selectedCities);


// console.log(cities);
// console.log(selectedCities);


// concatenation
// var pets = ["cat","dog"];
// var wild = ["tiger","wolf"];
// var bugs = ["ants","bee"];

// var animal = pets.concat(wild,bugs);

// console.log(animal);

//12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

// var arr = ["This","is", "my","cat"];
// var abc = arr.join("");

// document.write("Array:");
// document.write("<br>",arr,"<br>");
// document.write("<br>String","<br>")
// document.write(abc);


// console.log(abc);
// console.log(arr);

//13:Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored.

// var devices = ["Keyboard","mouse","printer","moniter"];

// document.write("Devices:");
// document.write("<br>",devices,"<br>");

// document.write("<br>Out:");
// document.write("<br>",devices[0]);
// document.write("<br>Out:");
// document.write("<br>",devices[1]);
// document.write("<br>Out:");
// document.write("<br>",devices[2]);
// document.write("<br>Out:");
// document.write("<br>",devices[3]);

//14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)


// var devices = ["Keyboard","mouse","printer","moniter"];

// document.write("Devices:");
// document.write("<br>",devices,"<br>");

// document.write("<br>Out:");
// document.write("<br>",devices[3]);
// document.write("<br>Out:");
// document.write("<br>",devices[2]);
// document.write("<br>Out:");
// document.write("<br>",devices[1]);
// document.write("<br>Out:");
// document.write("<br>",devices[0]);

//END
