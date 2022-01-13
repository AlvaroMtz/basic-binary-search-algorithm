const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let low, high, mid, estimated, bucle

const binary_search_algorithm = (arr, element, fist = true) => {
  if (fist === true){
    low = 0
    high = arr.length
    bucle = 0
  }

  mid = Math.round((low+high)/2)
  estimated = arr[mid]
  mid = (low+high)/2

  bucle = bucle + 1 
  console.log(bucle)
  if (estimated === element) return 'FIND: ' + element
  if (estimated > element) {
    high = Math.round(mid - 1)
    return binary_search_algorithm(arr, element, false)
  }
  if (estimated < element) {
    low = Math.round(mid + 1)
    return binary_search_algorithm(arr, element, false)
  }
  return 'Not found'
}

let result = binary_search_algorithm(array, 9)
console.log(result)