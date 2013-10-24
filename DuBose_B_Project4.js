//alert("JavaScript works!");

// Problem 1: String Function

/*var myString = "Some Text";

myString.length
myString.substring(from, to) // (0,4)
myString.charAt(index) // (3) = "e"
myString.indexOf(string) //("e") = 3
myString.lastIndexOf("e") = 6

var myStirng1 = "407-679-0100";

var end = myString1.indexOf("-");
var end2 = myString1.last.indexOf("-");

var start = myString.indexOf("-")+1;
var start2 = myString.last.indexOf("-")+1;

var end3 = myString1.length;

myString1.substring(0,end);

myString1.substring(start,end);*/

/*var checkNumber = function(val) {
	
	var strLength = val.length;
	for (var i=0; i < strLength; i++) {
		
		if (val.substring(i, i+1) === "-") {
			return i;
		}	
		
	}
	
};*/

// Problem Number 1

			    	// 012-456-8901
/*var checkNumber = function(val) {
	//var strLength = val.length; 
	//for (var i=0; i < strLength; i++) {	
		if (val.substring(0,3) === "-") {
			return true;
		}
		else{
			return false;

		}

};

console.log("The dash is in position " + checkNumber(phoneNumber1));
console.log("The position this time is " + checkNumber(phoneNumber2));*/
var phoneNumber1 = ("251-7.2-3202");
var phoneNumber2 = ("407-679-01000");
var numberCheck = function(number){
	
	var totalSet = number.length;
	if(totalSet != 12){
		return false;
		}
		
	var totalSet = number.length;
	
	var firstIns = (number.substr(0,3));
	var secondIns = (number.substr(4,3));
	var thirdIns = (number.substr(8,4));
	
	if(firstIns.indexOf('.')){
		return false;	
	}
	
	
	if(secondIns.indexOf('.')){
		return false;	
	}
	
	
	if(thirdIns.indexOf('.')){
		return false;	
	}
	
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

console.log("Blah " + numberCheck(phoneNumber1));
console.log("Blah " + numberCheck(phoneNumber2));


// Problem Number 2
var email1 = ("fsosupport@fullsail");
var email2 = ("brannon@fullsail.com");

var emailCheck = function(email){
	
	var subMail = email.indexOf("@");
	
	if(!subMail){
		return false;
	}
	
	var dotPos = email.indexOf('.')+1;
	
	if(email.length - dotPos != 3){
		return false;
	}else{
		return true;
		}
	
};

console.log("Blah " + emailCheck(email1));
console.log("Blah " + emailCheck(email2));

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
console.log("Blah " + httpCheck(http1));
console.log("Blah " + httpCheck(http2));

// Problem 4 

var string1 = ("why is this all due on thursday and not sunday?");

var upperCase = function (string){
		
	var upperarr = string.split(" ");
	
	var formatString = '';
	var formatArray = new Array();
	
	for(i=0;i<upperarr.length;i++){
		formatArray.push(upperarr[i].charAt(0).toUpperCase() + upperarr[i].slice(1)); // pushes new string into a new array 
	}
	
	formatString = formatArray.join(' ');
	
	return formatString;
	
};

console.log(upperCase(string1));

// Problem 5

var comma = ",";
var and = " &";
var names = "Macs, iPhones, iPads";

var sepReplace = function (names, comma, and){
	var nameSplit = names.split(comma);
	var nameJoin = nameSplit.join(and);
	
	return nameJoin;	
	
};

console.log(sepReplace(names, comma, and));

// Problem 6

var Pi = Math.PI;
var decimals = 19;

var numbFormat = function(numb, deci){
	if(typeof numb === "string"){
		return parseFloat(numb).toFixed(deci);
	}else{
		return numb.toFixed(deci);
		}	
};

console.log(numbFormat(Pi, decimals));

// Problem 7
numb1 = 5;
numb2 = 10;
numb3 = 50; 

var percentCheck = function(numb1, numb2, numb3){
	var msg1 = 'First Number is not within ' + numb3 + '% of the Second Number';
	var msg2 = "First number is less that " + numb2;
	
	percent = parseFloat(numb3/100);
	
	if(numb1/numb2 <= percent){
		msg1 = 'First Number is within ' + numb3 + '% of the Second Number';
		}
		
	if(numb1 > numb2){
		msg2 = "First number is greater than " + numb2;
		}
	return msg1 + "\n" + msg2;
};

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

console.log("Did it work? " + dateTest(date1, date2, units));

// Problem 9 
var converted = "123456";
	var flag = true;
	
	isNaN(converted) == false ? flag == false : flag == true;
	
var funcNumb = function (converted, flag){
	if(flag == false)
	return false;
	else
	return parseFloat(converted);
	
};

console.log("I Hope this Shi** works... I am so tired " + funcNumb(converted,flag));

// Problem 10

var newarr = [1, 2, 3, 4, 5, 8, 9, 10];

var compare = 3;

var numbLength = function(newarr, compare){
       
       for(i=0;i<newarr.length;i++){
               if(newarr[i] > compare)
                       return newarr[i];
       }
       
};

console.log("Holy F Work " + numbLength(newarr, compare));

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

console.log("Come on man!!... " + function11(array11, int11));

// Problem 12
var myKey = new Array ();
 myKey = [{a:1}, {a:2}, {a:3}, {b:1}];
var compare = "a";

var keyFunction = function (a,b) {
 	if (a.a < b.a)
  	  return -1;
	 if (a.a > b.a)
 	  return 1;
 	return 0;
};



console.dir(myKey.sort(keyFunction));