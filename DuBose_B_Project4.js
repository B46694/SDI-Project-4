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

// Probelm Number 1

var checkString = function(val) {
	
	var strLength = val.length;
	for (var i=0; i < strLength; i++) {
		
		if (val.substring(i, i+1) === "-") {
			return i;
		}	
		
	}
	
};

console.log("The dash is in position " + checkString("251-752-3202"));
console.log("The position this time is " + checkString("1238760-45"));


// Problem Number 2
var name = ("Brannon");

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
	
};
