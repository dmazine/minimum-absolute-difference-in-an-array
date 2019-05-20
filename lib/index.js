"use strict";

function minimumAbsoluteDifference(arr) {
  let minimumDifference = Number.MAX_VALUE;

  // Note that the array was sorted beforehand, so that
  // considering differences of consecutive elements is all
  // we need to check to find the minimum difference.
  // No point in checking the difference between i and i+2
  // if we know the difference between i and i+1 is
  // definitely less.
  arr.sort();

  for (let i = 0; i < arr.length - 1; i++) {
    const difference = Math.abs(arr[i] - arr[i + 1]);
    if (difference < minimumDifference) {
      minimumDifference = difference;
    }
  }

  return minimumDifference;
}

module.exports = minimumAbsoluteDifference;
