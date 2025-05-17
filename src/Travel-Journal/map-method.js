//square the numbers of an array

function squareArray(arr){
    return arr.map(num => num * num)
}

const input = [1, 2, 3, 4];
const squared = squareArray(input);
console.log(squared); 


//captitalize first letter

function capitalizeFirstLetter(arr){
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}

const input1 = ["hello", "world", "javascript"];
const capitalized = capitalizeFirstLetter(input1);
console.log(capitalized);



//to wrap strings in <p></p> tag

function wrap(arr){
    return arr.map(str => `<p>${str}</p>`);
}

const input2 = ["hello", "world"]
const wrapped = wrap(input2)
console.log(wrapped)
