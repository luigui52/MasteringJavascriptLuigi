function removeProperty(obj, key) {
  // your code here
  if(obj.hasOwnProperty(key)){
      return delete obj[key]
  }
  return false;
}
let obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name);