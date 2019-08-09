var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, addition) {
  return [...addition, array]
}
function destructivelyAddElementToBeginningOfArray(array, addition){
  return [array.unshift(addition)]
}
