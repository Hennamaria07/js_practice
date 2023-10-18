const addBtn = document.getElementById("add-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById('list-items');
const dataEl = document.getElementById('date-el');
let todoList = [];

addBtn.addEventListener("click", (e) => {
  todoList.push({
    name: inputEl.value,
    dueDate: dataEl.value
  });
  inputEl.value = "";
  render(todoList);
  // console.log(todoList);
});


const render = (todoList) => {
  let listItems = '';
  for(let i = 0; i < todoList.length; i++){
    listItems += `<div class="pe-1">${todoList[i].name}</div>
    <div class="pe-1">${todoList[i].dueDate}</div>
    <button class="delete-btn"
    ">Delete</button>
    `;
  }
  ulEl.innerHTML = listItems;
  document.querySelectorAll('.delete-btn')
  .forEach((value, index) => {
    value.addEventListener('click', () => {
       todoList.splice(index, 1);
       render(todoList);
    })
  })
}







//accumulator pattern
const array = [2, 4, 4];
// let total = 0;
// for(let i = 0; i < array.length ; i++) {
//   total += array[i];
// }
// console.log(total);
console.log(array.reduce((pre, cur) => pre + cur));