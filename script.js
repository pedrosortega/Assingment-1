function myEach(arr, func) {
for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
let ar = [1, 2, 3, 4, 5];
myEach(ar, (element) => {
console.log(element);
});