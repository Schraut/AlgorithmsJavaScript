function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as the minimum
    let min = i;
    let temp = array[i];
    for(let j = i + 1; j < length; j++){
      if (array[j] < array[min]){
        //if current is lower then update minimum to what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [3,9,1,4,7];
selectionSort(numbers);
console.log(numbers);