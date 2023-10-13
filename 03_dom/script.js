const subscribeBtn = document.getElementById("subscribe-btn");
subscribeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(subscribeBtn.innerText === 'Subscribe'){
        subscribeBtn.innerHTML = "Subscribed";
    } else {
        subscribeBtn.innerHTML = "Subscribe";
    }
    
  });