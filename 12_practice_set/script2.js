const btnEl = document.getElementById('btn-one');
const cardBtn = document.getElementById('card-btn');
btnEl.addEventListener('click', (e) => {
    btnEl.innerHTML = "Loading...";
    setTimeout(() => {
        btnEl.innerHTML = 'Finished!';
    }, 1000);
});
let timeoutId;
cardBtn.addEventListener('click', (e) => {
    document.getElementById('text-el').innerHTML = 'Added';
    clearInterval(timeoutId)
    timeoutId = setTimeout(() => {
        document.getElementById('text-el').innerHTML = '';
    }, 2000);
});
let num = 2;
setInterval(() => {
    if(document.title == "App"){
      document.title = `(${num}) New Messages`;
    } else {
        document.title = "App";
    }
}, 1000);

document.getElementById('add-btn').addEventListener('click', (e) => {
    num++;
})
document.getElementById('remove-btn').addEventListener('click', (e) => {
    num--;
})