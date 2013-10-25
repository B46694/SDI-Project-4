//alert("JavaScript works!");


// Problem 1

var phoneNumber1 = ("251-752-3202");
var phoneNumber2 = ("407-679-01000");
var phoneNumber3 = ("407-679-01.0");
var numberCheck = function(number){
	if(number.indexOf(".") != -1){
		return false;
	}
	var totalSet = number.length;
	
	if(totalSet != 12){
		return false;
		}
	
	var totalSet = number.length;
	
	var firstIns = (number.substr(0,3));
	var secondIns = (number.substr(4,3));
	var thirdIns = (number.substr(8,4));
	
	if(isNaN(firstIns)){
		return false;		
		}
	if(isNaN(secondIns)){
		return false;		
		}
	if(isNaN(thirdIns)){
		return false;		
		}
	
	if(number.search("-") == 3 && number.indexOf("-", 4) == 7){
		return true;
		}else{
		return false;
		}	
};
console.log("*********** Problem 1 ***********");
console.log("Is " + phoneNumber1 + " a phone number?: " + numberCheck(phoneNumber1));
console.log("Is " + phoneNumber2 + " a phone number?: " + numberCheck(phoneNumber2));
console.log("Is " + phoneNumber3 + " a phone number?: " + numberCheck(phoneNumber3));



// Problem Number 2

var email1 = ("fsosupport@fullsail");
var email2 = ("brannon@fullsail.com");
var emailCheck = function(email){
	
	var subMail = email.indexOf("@");
	
	if(!subMail){
		return false;
	}
		
	var dotPos = email.indexOf(".")+1;
	
	if(email.length - dotPos != 3){
		return false;
	}else{
		return true;
		}	
};

console.log("*********** Problem 2 ***********");
console.log("Is " + email1 + " an email?: " + emailCheck(email1));
console.log("Is " + email2 + " an email?: " + emailCheck(email2));


// Problem 3

var http1 = ("http://");
var http2 = ("https://");
var httpCheck = function (http){
	if(http.substr(0, 7) == "http://" || http.substr(0, 7) == "https://"){
		return true;
	}else{
		return false;
		}	
};

console.log("*********** Problem 3 ***********");
console.log("Is " + http1 + " a URL?: " + httpCheck(http1));
console.log("Is " + http2 + " a URL?: " + httpCheck(http2));


// Problem 4 

var phrase1 = ("why is this all due on thursday and not sunday?");
var upperCase = function (string){
		
	var upperarr = string.split(" ");	
	var formatString = "";
	var formatArray = new Array();
	
	for(i=0;i<upperarr.length;i++){
		formatArray.push(upperarr[i].charAt(0).toUpperCase() + upperarr[i].slice(1)); // pushes new string into a new array 
	}
	
	formatString = formatArray.join(" ");
	
	return formatString;	
};

console.log("*********** Problem 4 ***********");
console.log("Lets convert a phrase to a title: " + upperCase(phrase1));


// Problem 5

var comma = ",";
var and = " &";
var names = "Macs, iPhones, iPads";
var sepReplace = function (names, comma, and){
	var nameSplit = names.split(comma);
	var nameJoin = nameSplit.join(and);
	
	return nameJoin;		
};

console.log("*********** Problem 5 ***********");
console.log("What are my favorite apple products?: " + sepReplace(names, comma, and));


// Problem 6

var Pi = Math.PI;
var decimals = 5;
var numbFormat = function(numb, deci){
	if(typeof numb === "string"){
		return parseFloat(numb).toFixed(deci);
	}else{
		return numb.toFixed(deci);
		}	
};

console.log("*********** Problem 6 ***********");
console.log("Lets count " + Pi + " to 5 places: " + numbFormat(Pi, decimals));


// Problem 7

numb1 = 5;
numb2 = 10;
numb3 = 50; 

var percentCheck = function(numb1, numb2, numb3){
	var msg1 = "First Number is not within " + numb3 + "% of the Second Number";
	var msg2 = "First number is less than " + numb2;
	
	percent = parseFloat(numb3/100);
	
	if(numb1/numb2 <= percent){
		msg1 = "First Number is within " + numb3 + "% of the Second Number";
		}
		
	if(numb1 > numb2){
		msg2 = "First number is greater than " + numb2;
		}
	return msg1 + "\n" + msg2;
};

console.log("*********** Problem 7 ***********");
console.log(percentCheck(numb1, numb2, numb3));


// Problem 8 

var date1 = ("July 4, 1776");
var date2 = ("March 1, 1995");
var units = ("days");
var dateTest = function (date1, date2, units){

	var d1 = new Date(date1);
       var d2 = new Date(date2);
       
       var d1_ms = d1.getTime();
       var d2_ms = d2.getTime();
       
       var difference_ms = d2_ms - d1_ms;
       var minutes=1000*60;
       var hours=minutes*60;
       var days=hours*24;
       var years=days*365;
       
       if(units == "hr"){
               return Math.round(difference_ms/hours);
       }
       if(units == "days"){
               return Math.round(difference_ms/days);
       }
};

console.log("*********** Problem 8 ***********");
console.log("I was born " + dateTest(date1, date2, units) + " days ater the birth of our country.");


// Problem 9 

var converted = "123456";
var flag = true;
	
isNaN(converted) == false ? flag == false : flag == true; // : is short for else statment
	
var funcNumb = function (converted, flag){
	if(flag == false)
	return false;
	else
	return parseFloat(converted);
	
};

console.log("*********** Problem 9 ***********");
console.log("I am getting really tired... please convert: " + funcNumb(converted,flag));


// Problem 10

var newarr = [1, 2, 3, 5, 8, 9, 10];
var compare = 3;
var numbLength = function(newarr, compare){
       
       for(i=0;i<newarr.length;i++){
               if(newarr[i] > compare)
                       return newarr[i];
       }
       
};

console.log("*********** Problem 10 ***********");
console.log("Whats the next highest number from " + compare + ": " + numbLength(newarr, compare));


// Problem 11 

var array11 = [1, 2, 3, "sandwich", 5, 8, 8, 10];
var int11 = 3;
var function11 = function(array11, int11){
       var total = 0;
	   var flag = false;
       for(i=0;i<array11.length;i++){
       typeof array11[i] == "number" ? total += array11[i] : total=total;
	   typeof array11[i] == "number" ? flag = true : 0;
	  
       }
	   if(flag == false){
	   return false;	   
	   }else{
		  return total; 
		   };
};

console.log("*********** Problem 11 ***********");
console.log("Whats the total of the numbers in my array?: " + function11(array11, int11));


// Problem 12

var myKey = new Array ();
var compare = "a";

myKey = [{a:1}, {a:2}, {a:3}, {b:1}];

var keyFunction = function (a,b){
 	if (a.a < b.a)
  	  return -1;
	 if (a.a > b.a)
 	  return 1;
 	return 0;
};

console.log("*********** Problem 12 ***********");
console.dir(myKey.sort(keyFunction));