// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const arr1 = arr.slice(0, Math.ceil(arr.length / 2));
  const arr2 = arr.slice(Math.ceil(arr.length / 2));
  return merge(mergeSort(arr1), mergeSort(arr2));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
