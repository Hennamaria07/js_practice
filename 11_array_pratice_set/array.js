let words = ["hello", "world", "search", "good", "search"];
let index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "search") {
    index = i;
    // Once we find 'search', immediately exit
    // the loop since we want the index of the
    // first appearance of 'search'.
    break;
  }
}

console.log(index);
 words = ["not", "found"];
index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "search") {
    index = i;
    break;
  }
}

console.log(index);
