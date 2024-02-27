// forEach -> has 3 arguments you can pass: val, i, arr
const colors = ['teal', 'cyan', 'peach', 'purple'];
colors.forEach(function(val, i) { 
    console.log(val.toUpperCase(), 'at index of:', i);
});

// map -> will take return value and build a new array as the return value
// n (needs a return value)
// arguments: val, i, arr
const nums = [21, 37, 64 ,99 ,142];
const negatives = nums.map(function(num) {
    return num*-1;
});

const links = document.querySelectorAll('a') // this is a node list, not an array 
const arr = Array.from(links); // returns an array
const urls = arr.map(function(a) {
    return a.href;
});

// filter loops through an array, runs the callback function and if it's true, adds value to the new array
let friends = [
    { name: "Amanda" },
    { name: "Tommy" },
    { name: "Nathan" },
    { name: "Pat" }
  ];
const ex = friends.filter(function(value, index, array){
    return value.name.includes("n")
});
// function that determines if a vowel is present
const isVowel = function(char) {
    return 'aeiou'.indexOf(char) !== -1;
}

const allCheck = document.querySelectorAll('input[type="checkbox"]') // NOT AN ARRAY
const arrAllCheck = Array.from(allCheck);
const checked = arrAllCheck.filter(function(box) {
    return box.checked;
})

function extractCompletedChecks() { //call this function in the console to confirm it works
    return arrAllCheck.filter(function(box) { //function that filters for boxes that are checked
        return box.checked;
    }).map(function(checkbox) { //function that now looks at the boxes that are checked, finds the inner text and adds it to an new array
        return checkbox.parentElement.innerText;
    });
}

