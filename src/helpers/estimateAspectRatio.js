let ERROR_ALLOWED = 0.05;
let STANDARD_ASPECT_RATIOS = [
  [1, "1:1"],
  [4 / 3, "4:3"],
  [3 / 4, "3:4"],
  [5 / 4, "5:4"],
  [4 / 5, "4:5"],
  [3 / 2, "3:2"],
  [2 / 3, "2:3"],
  [16 / 10, "16:10"],
  [10 / 16, "10:16"],
  [16 / 9, "16:9"],
  [9 / 16, "9:16"],
];

let RATIOS = STANDARD_ASPECT_RATIOS.map(function (tpl) {
  return tpl[0];
}).sort();

let LOOKUP = Object();

for (let i = 0; i < STANDARD_ASPECT_RATIOS.length; i++) {
  LOOKUP[STANDARD_ASPECT_RATIOS[i][0]] = STANDARD_ASPECT_RATIOS[i][1];
}

/*
Find the closest value in a sorted array
*/
function findClosest(arrSorted, value) {
  let closest = arrSorted[0];
  let closestDiff = Math.abs(arrSorted[0] - value);

  for (let i = 1; i < arrSorted.length; i++) {
    let diff = Math.abs(arrSorted[i] - value);
    if (diff < closestDiff) {
      closestDiff = diff;
      closest = arrSorted[i];
    } else {
      return closest;
    }
  }
  return arrSorted[arrSorted.length - 1];
}

/*
Estimate the aspect ratio based on width x height (order matters)
*/
function estimateAspectRatio(width, height) {
  let ratio = width / height; // Maintain order for width and height
  let reverseRatio = height / width; // Reverse order for comparison

  // Check if the ratio is in the lookup table directly
  if (ratio in LOOKUP) {
    return LOOKUP[ratio];
  }
  if (reverseRatio in LOOKUP) {
    return LOOKUP[reverseRatio];
  }

  // Look by approximation
  let closest = findClosest(RATIOS, ratio);
  let closestReverse = findClosest(RATIOS, reverseRatio);

  if (Math.abs(closest - ratio) <= ERROR_ALLOWED) {
    return LOOKUP[closest];
  }

  if (Math.abs(closestReverse - reverseRatio) <= ERROR_ALLOWED) {
    return LOOKUP[closestReverse];
  }

  return "non standard ratio: " + Math.round(ratio * 100) / 100 + ":1";
}

export { estimateAspectRatio };
