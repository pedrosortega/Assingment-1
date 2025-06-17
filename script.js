function myEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
let ar = [1, 2, 3, 4, 5];
myEach(ar, (element) => {
    console.log(element);
});

console.log('----------------------------------------------');

function myMap(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
let myMapAr = [1, 2, 3, 4, 5];
myMap(myMapAr, (element) => {
    console.log(element * 2);
});

console.log('----------------------------------------------');

function myFilter(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
let filterArr = [1, 2, 3, 4, 5];
let result = [];
myFilter(filterArr, (element) => {
    if (element % 2 === 0) {
        result.push(element);
    }
});

console.log(result);


console.log('----------------------------------------------');

function mySome(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return true;
        }
    }
    return false;
}

let mySomeArr = [1, 2, 3, 4, 5];


mySome(mySomeArr, (element) => {
    if (element % 2 === 0) {
        console.log(true);
        return true;
    }
    return false;
});

console.log('----------------------------------------------');

function myEvery(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i])) {
            return false;
        }
    }
    return true;
}

let myEveryArr = [2, 4, 6, 8, 10];
myEvery(myEveryArr, (element) => {
    if (element % 2 === 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
});

console.log('----------------------------------------------');

function myReduce(arr, func) {
    let acc = arr[0];
    for (let i = 1; i < arr.length; i++) {
        acc = func(acc, arr[i]);
    }
    return acc;
}

let myReduceArr = [1, 2, 3, 4, 5];

let sum = myReduce(myReduceArr, (acc, num) => {
    return acc + num;
})

console.log(sum);

console.log('----------------------------------------------');

function myIncludes(arr,func){
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return true;
        }else{
            return false;
        }
        
    }
}

let myIncludesArray=["apple","orange","pear"];

myIncludes(myIncludesArray,(element)=>{
    if(element==="apple"){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
        return false;
    }
});
