// Question #1:. Write a JS code to print numbers from 1 to 10.
console.log("Print numbers from 1 to 10")
for (let index = 1; index <= 10; index++) {
    console.log(index)

}
//Question #2:. Write a JS code to print Even numbers in given array.
console.log("Print even number in a given array")
let array = [2, 5, 6, 8, 9, 4, 12, 7]
for (index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
        console.log(array[index])
    }
}
//Question #3:Write a JS code to delete all occurrence of element in given array.
function deleteOcc(arr,element,newArr){
    newArr=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==element){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr)
}

let array1 = [2,4,5,7,8,9,6,0];
let element=7;

console.log("Array before occurrence 7 is deleted = " + array1)

console.log("Array after occurrence 7 is deleted = ")
deleteOcc(array1,element)
// Question #4:Write a JS code to find the power of a number using for loop
function findPower(base, power) {
    var result = 1;
    for (var i = 0; i < power; i++) {
        result = result * base;
    }
    return result;
}

// Example usage:
console.log("The answer when we take 2 as base and 3 as exponent is = ")
var base = 2;
var power = 3;
var result = findPower(base, power);
console.log(result); // Output: 8
// Question #5:. Write a JS code to print a pattern using for loop
/* 1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 */

var rows = 8;
var rowPattern;
console.log("The pattern is:")
for (var i = 1; i <= rows; i++) {
    rowPattern = "";

    for (var j = 1; j <= i; j++) {
        rowPattern += j + " ";
    }

    console.log(rowPattern);
}
// Question #6:Write a JS code to find the no of digits in a number
function numCount(number,numberCount){
    numberCount=number.toString()
    console.log("The number of digits are =" + numberCount.length)
}
let num=prompt("Enter a number")
let numcount;
numCount(num,numcount);
// Question #7:Write a JS code to calculate the sum of digits in a number
function sumDigit(number){
    let numString=number.toString()
    let sum=0;
    for(i=0; i<numString.length; i++){
        sum += Number(numString[i]);
    }
    console.log("The sum of digits is =" + sum)
}
let number = prompt("Enter a number")
sumDigit(number)
// Question #8: Write a JS code to find the largest number in an array
function largestNumber(array){
     let largest=array[0];
     for(i=0; i<array.length; i++){
        if(array[i] > largest){
            largest=array[i]
        }
     }
     console.log("The largest number in this array is" + largest)
}
let arr=[10,20,30,40,50]
largestNumber(arr)
// Question #9:Write a JS code to print the Fibonacci series for a given value of N
function fibonacciSeries(number){
    let sum=[];
    sum[0]=0
    sum[1]=1
    for(i=2; i<number; i++){
        sum[i]=sum[i-1] + sum[i-2]
    }
    for(i=0; i<number; i++){
        console.log(sum[i])
    }
}
 num=prompt("Enter a number:")
console.log("The fibonacci series smaller than the above number is:")
fibonacciSeries(num)
// Question #10: Write a JS code to find duplicate values in a given array
function findDuplicates(arr) {
    var duplicates = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i && duplicates.indexOf(arr[i]) === -1) {
            duplicates.push(arr[i]);
        }
    }

    return duplicates;
}
 array = [1, 2, 3, 4, 1, 2, 5, 6, 6];
var duplicates = findDuplicates(array);
console.log("Duplicate values:", duplicates); // Output: [1, 2, 6]

//Question #11: Write a JS code for Linear search algorithm
function linearSearch(array,element){
    for(i=0; i<=array.length; i++){
        if(array[i]===element){
        return i;
    }
}
        return 1;

}
array=[5,6,7,46,45,3,2,9,76,56]
element=prompt("Enter a number to find")
element1=Number(element)
result=linearSearch(array,element1)
if(result!==1){
    console.log("Element " + element1 + " is present in index " + result)
}
else if(result===1){
    console.log("Element " + element1 + " is not present in array " )
}
//Question #12: Write a JS code for Binary search algorithm
function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;

    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}


array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 6;
var result = binarySearch(array, target);
if (result !== -1) {
    console.log("Target", target, "found at index:", result); 
} else {
    console.log("Target", target, "not found in the array."); 
}