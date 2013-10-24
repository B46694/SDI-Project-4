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
/*var name = ("Brannon");

var checkName = function(val) {
	if (val === name) {
		return true;
	}	
		else {
			return false;
		};
	
};


var returnValue = checkName("Brannon");

if (returnValue) { 
	console.log("Yes I am me");
} else { 
	console.log("No im not me");
	
};*/
