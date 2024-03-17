// Extra Assignment in Array

// Answer 1
let series = [];
for (let i = 1; i <= 10; i++) {
    series.push(i);
}
let specificRange = series.slice(2, 5);
console.log(specificRange);

// Answer 2
let givenArray = ["apple", "banana", "orange", "grape", "mango"];
let removedElements = givenArray.splice(1, 3);
console.log(givenArray); 
console.log(removedElements); 

// Answer 3
let givenArray1 = ["apple", "banana", "orange", "grape", "mango"];
let removedElement = givenArray1.shift();
console.log("Updated Array:", givenArray1);
console.log("Removed Element:", removedElement);

// Answer 3
let givenArray2 = ["banana", "orange", "grape", "mango"];
givenArray2.unshift("apple");
console.log("Updated Array:", givenArray2); 

// Answer 4
let givenArray3 = ["apple", "banana", "orange"];
givenArray3.push("grape");
console.log("Updated Array:", givenArray3); 

//  Answer 5
let givenArray4 = ["apple", "banana", "orange", "grape"];
let removedElement1 = givenArray4.pop();
console.log("Updated Array:", givenArray4); 
console.log("Removed Element:", removedElement1); 

// Answer 6
let givenArray5 = ["apple", "banana", "orange", "grape", "mango"];
let newArray = givenArray5.slice(1, 4);
console.log("Original Array:", givenArray5); 
console.log("New Array:", newArray); 

// Answer 7
let givenArray6 = ["apple", "banana", "orange", "grape", "mango"];
let removedElements1 = givenArray6.splice(1, 3);
console.log("Updated Array:", givenArray6); 
console.log("Removed Elements:", removedElements1); 

// Answer 8
let givenArray7 = ["apple", "banana", "orange", "grape", "mango"];
let removedElement2 = givenArray7.shift();
let removedElement3 = givenArray7.shift();
let removedElement4 = givenArray7.shift();
console.log("Updated Array:", givenArray7); 
console.log("Removed Element 1:", removedElement2); 
console.log("Removed Element 2:", removedElement3); 
console.log("Removed Element 3:", removedElement4); 

//  Answer 9
let givenArray8 = ["apple", "banana", "orange"];
givenArray8.push("grape", "mango");
console.log("Updated Array:", givenArray8); 





