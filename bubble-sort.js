function bubbleSort(array){
  do {
    var swapped = false;

    for (i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        var placeholder = array[i]
        array[i] = array[i + 1]
        array[i + 1] = placeholder
        swapped = true;
      }
    }
  } while (swapped == true);

  return array
};

module.exports = bubbleSort;
