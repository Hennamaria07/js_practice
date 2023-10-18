const num = [10, 20, 30];
num[2] = 99;
console.log(num);
const lastValue = (num) => {
    console.log(num[num.length-1]);
}
lastValue(['hello', 'world']);

function arraySwap(array) {
  const lastIndex = array.length - 1;

  // We need to save the values first before
  // swapping. Otherwise, if we swap directly,
  // we would lose one of the values.
  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(["hi", "hello", "hey"]));

// for(let i = 0; i < 11; i += 2) {
//     console.log(i);
// }
// let i = 0 ;
// while(i < 11) {
//     if(i%2 === 1){
//         i++
//         continue;
//     }
//     console.log(i);
//     i++;
// }
// for(let i = 5; i >= 0; i --) {
//     console.log(i);
// }
// let i = 5;
// while(i >= 0){
//     console.log(i);
//     i--;
// }
// const array = [1, 2, 3];
// const result = [];
// const addOne = (array, num) => {
//     for (let i = 0; i < array.length; i++) {
//     result.push(array[i] + num[i]);
//     }
//     console.log(result);
// }
// addOne([1, 1, 2], [1, 1, 3]);


let count = 0;
function countPositive(array) {
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0) {
            count++;
        }
    }
    console.log(count);
}
countPositive([-1, -2, 5])


function minMax(nums) {
  // We'll set the starting values of min and max
  // as the first value in the array. (This is
  // just one way to set the starting values. You
  // can use another way if you like.)
  const result = {
    min: nums[0],
    max: nums[0]
  };

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    // If the value is less than the min,
    // update the min.
    if (value < result.min) {
      result.min = value;
    }

    // If the value is greater than the max,
    // update the max.
    if (value > result.max) {
      result.max = value;
    }
  }

  return result;
}
 console.log(minMax([1, 5]));
 console.log(minMax([-2, 3, -5, 7, 10]));