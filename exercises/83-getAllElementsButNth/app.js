// Write your function here
function getAllElementsButNth(array,i){
    array.splice(i,1);
    return array;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']