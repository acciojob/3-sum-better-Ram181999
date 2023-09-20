function threeSum(arr, target) {
// write your code here
// Sort the array to make it easier to find the closest sum.
  arr.sort((a, b) => a - b);

  let closestSum = Infinity; // Initialize closestSum to a large value.
  
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      
      // If the current sum is equal to the target, return it.
      if (sum === target) {
        return sum;
      }

      // Update closestSum if the current sum is closer to the target.
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
  
}

module.exports = threeSum;
