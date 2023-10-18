const match = (array, element) => {
   for (let i = 0; i < array.length; i++) {
     if (array[i] === element) {
       // Instead of creating an accumulator
       // variable and updating it in the loop,
       // we can just return i directly, when
       // we find it since this is a function.
       return i;
     }
   }

   // If the function has not returned by now,
   // logically that means the word must not
   // exist in the array, so we'll return -1.
   return -1;
}
match(['red', 'orange'], 'red');
const removeEggFood = (array) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {

        if(array[i] === 'egg') {
            continue;//skip
        }

        result.push(array[i]);
    }

    console.log(result);
}
removeEggFood(['egg', 'apple', 'egg', 'egg', 'ham'])

//UPDATE

const updateEggFood = (array) => {
    const reverseFood = array.reverse();
    console.log(reverseFood);
  const result = [];
    let eggRemove = 0;
  for (let i = 0; i < reverseFood.length; i++) {

    if (reverseFood[i] === "egg" && eggRemove < 2) {
      eggRemove++;
      continue; //skip
    }

    result.push(reverseFood[i]);
  }

  console.log(result);
};
updateEggFood(["egg", "apple", "egg", "egg", "ham"]);