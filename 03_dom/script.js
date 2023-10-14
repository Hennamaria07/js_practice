const subscribeBtn = document.getElementById("subscribe-btn");
const inputEl = document.getElementById('input-el');
const calculateBtn = document.getElementById('calculate-btn');
subscribeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(subscribeBtn.innerText === 'Subscribe'){
        subscribeBtn.innerHTML = "Subscribed";
    } else {
        subscribeBtn.innerHTML = "Subscribe";
    }
  });

  calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetchContent();
  });
  
  inputEl.addEventListener('keypress', (e) => {
   if(e.key === 'Enter'){
    fetchContent();
   }
  });

  const fetchContent = () => {
    if (parseInt(inputEl.value) < 40) {
      document.getElementById("cost-el").innerHTML = `$${
        parseInt(inputEl.value) + 10
      }`;
    } else {
      document.getElementById("cost-el").innerHTML = `$${parseInt(
        inputEl.value
      )}`;
    }
  }