const add = () => {
    console.log(1 + 2);
}
add();
add();
function runTwice(fun) {
  fun();
  fun();
}
runTwice(function () {
  console.log("12b");
});

runTwice(add);

const multiply = (a, b) => a * b;
console.log(multiply(2, 5));
const positiveNum = (array) => {
    let positiveCount = 0;
  array.forEach((element) => {
    if(element >= 0) {
        positiveCount++
    }
  });
  return positiveCount;
}
console.log(positiveNum([-9, 4, 6]));

const addNum = (array, num) => {
    return array.map((value) => value + num);
}
console.log(addNum([3, 6], 3));

 function removeEgg(foods) {
   let eggsRemoved = 0;

   return foods.filter((food) => {
     // If the food is 'egg', we should return false
     // but only if we haven't removed 2 eggs already.
     if (food === "egg" && eggsRemoved < 2) {
       eggsRemoved++;
       return false;
     }

     return true;
   });
 }
console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));