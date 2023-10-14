// console.log(document.getElementById('a-btn'));
// document.getElementById('b-btn').innerText = '9b done!'
document.getElementById('head-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("result-el").innerHTML = `You chose: Heads`;
});
document.getElementById('tail-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("result-el").innerHTML = `You chose: Tails`;
});

document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("text-el").innerHTML = `You name is: ${document.getElementById('input-el').value}`;
});
document.getElementById('input-el').addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
    document.getElementById("text-el").innerHTML = `You name is: ${
      document.getElementById("input-el").value
    }`;
    }
});

