const subscribeBtn = document.getElementById("subscribe-btn");
const inputEl = document.getElementById('input-el');
const calculateBtn = document.getElementById('calculate-btn');
subscribeBtn.addEventListener("click", (e) => {
    if(subscribeBtn.innerText === 'Subscribe'){
        subscribeBtn.innerHTML = "Subscribed";
        //it will add a class named as is-subscribed
        subscribeBtn.classList.add('is-subscribed');
    } else {
      subscribeBtn.classList.remove("is-subscribed");
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
  })

  const fetchContent = () => {
    if (parseInt(inputEl.value) < 40 && parseInt(inputEl.value) === 0) {
      document.getElementById("cost-el").style.color = "black";
      document.getElementById("cost-el").innerHTML = `$${
        parseInt(inputEl.value) + 10
      }`;
    } else if(parseInt(inputEl.value) < 0) {
      document.getElementById('cost-el').style.color = "red";
      document.getElementById('cost-el').innerHTML = `Error: cost cannot be less than $0`;
    }
    else {
      document.getElementById("cost-el").style.color = "black";
      document.getElementById("cost-el").innerHTML = `$${parseInt(
        inputEl.value
      )}`;
    }
  }