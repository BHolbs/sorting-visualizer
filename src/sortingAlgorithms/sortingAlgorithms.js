// BUBBLE SORT FUNCTIONS
export function bubblesortWrapper(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubblesort(array, animations);
  return animations;
}

function bubblesort(array, animations) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      animations.push([j, j+1, 'compare']);
      animations.push([j, j+1, 'uncompare']);
      if (array[j] > array[j+1]) {
        animations.push([j, array[j+1], 'swap']);
        animations.push([j+1, array[j], 'swap']);
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
}

// QUICK SORT FUNCTIONS
export function quicksortWrapper(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quicksort(array, 0, array.length - 1, animations);
  return animations;
}

function quicksort(array, lo, hi, anims) {
  if (lo < hi) {
    let pivot = partition(array, lo, hi, anims);
    quicksort(array, lo, pivot-1, anims);
    quicksort(array, pivot+1, hi, anims);
  }
  return anims;
}

function partition(array, lo, hi, anims) {
  let pivot = array[hi];
  let i = lo;
  let j;
  for (j = lo; j < hi; j++) {
    anims.push([hi, j, 'compare']);
    anims.push([hi, j, 'uncompare']);
    if (array[j] < pivot) {
      anims.push([i, array[j], 'swap']);
      anims.push([j, array[i], 'swap']);
      [array[i], array[j]] = [array[j], array[i]];
      i = i+1;
    }
  }
  anims.push([i, array[hi], 'swap']);
  anims.push([hi, array[i], 'swap']);
  [array[i], array[hi]] = [array[hi], array[i]];
  return i;
}


// MERGE SORT FUNCTIONS
export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

// HEAP SORT FUNCTIONS
export  function heapSortWrapper(array) {
  const animations = [];
  if (array.length <= 1) return array;
  heapsort(array, animations);
  return animations;
}

function heapsort(array, animations) {
  let n = array.length;

  for (let i = (n/2)-1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }

  for (let i = n-1; i > 0; i--) {
    animations.push([0, array[i], 'swap']);
    animations.push([i, array[0], 'swap']);
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0, animations);
  }
}

function heapify(array, size, i, animations) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < size && array[i] < array[left]) {
    animations.push([i, left, 'compare'])
    animations.push([i, left, 'uncompare'])
    largest = left;
  }

  if (right < size && array[largest] < array[right]) {
    animations.push([i, right, 'compare'])
    animations.push([i, right, 'uncompare'])
    largest = right;
  }

  if (largest !== i) {
    animations.push([i, array[largest], 'swap']);
    animations.push([largest, array[i], 'swap']);
    [array[i], array[largest]] = [array[largest], array[i]];

    heapify(array, size, largest, animations)
  }
}