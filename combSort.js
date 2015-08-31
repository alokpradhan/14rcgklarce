var combSort = function(arr){
  // set initial values of gap, shrink value, and swapped flag
  var gap = arr.length;
  var shrink = 1.1;
  var swapped = true;
  // check shrinking gap
  while (gap !== 1 && swapped === false) {
    var i = 0;
    // shrink gap
    gap = gap/shrink;
    // if gap is less than one, set gap to one
    if (gap < 1){gap = 1;}
    // keep swapping until i+gap < size of array
    while (i+gap < arr.length){
      if (arr[i] > arr[i+gap]){
        swap = arr[i];
        arr[i] = arr[i+gap];
        arr[i+gap] = swap;
        // flag to check that sort is still ongoing
        swapped = true;
      }
      i = i++;
    }
  }
  // return sorted array
  return arr;
};