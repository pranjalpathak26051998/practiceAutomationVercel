//find the length of an Array

const arr  = [1,2,3,4,5]
console.log(arr.length);
console.log(arr[0]+arr[2]);

//add an element to the end of an array
arr.push('mango');
console.log(arr);

//remove the first element
arr.shift();
console.log(arr);

//check if an element exists
let x = 3;
let present = false;
for(let i = 0;i<arr.length;i++){
    if(arr[i] === x){
        present = true;
        break;        
        // console.log("the value "+x+" is present in the array "+arr);
        
    }
    if(present = true){
        console.log("the value of x = "+x+ " is present in the array arr= "+arr);
    }else{
        console.log("Not Found");
    }
};

// Print all elements in an array using a for loop and a forEach loop.
// using for loop 
for(let i in arr){console.log(arr[i])};
for(let i of arr){console.log(i)};
//using forEach 
arr.forEach((x)=>{console.log(x)});

// Find the sum of all elements in an array.
// Example: [1, 2, 3] → Output: 6
const arr1 = [1,2,3,4];
let sum = 0;
arr1.forEach((y)=>{sum = sum + y 
    return sum;
})
console.log(sum);

// Count how many times a specific value appears in an array.
// Example: ['apple', 'banana', 'apple'] → apple appears 2 times
const arr2 = ['apple', 'banana', 'apple','mango','apple'];
let arr2CountObj = {};
for(let i in arr2){
    let fruit = arr2[i];
    if(arr2CountObj[fruit]){
        arr2CountObj[fruit]++;
    }else{
        arr2CountObj[fruit] = 1;
    }
};
for(let i in arr2CountObj){
    console.log(` the ${i} in the array  is ${arr2CountObj[i]}`);
};