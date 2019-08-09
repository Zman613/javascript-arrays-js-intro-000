var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, addition) {
  return [...addition, array]
}
function destructivelyAddElementToBeginningOfArray(array, addition){
  return [array.unshift(addition)]
}
function addElementToEndOfArray(array, addition){
  return [array, ...addition]
}
function destructivelyAddElementToEndOfArray(array, addition){
  return [array.shift(addition)]
}
function accessElementInArray(array, index){
  return [array[index]]
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return[array]
}
