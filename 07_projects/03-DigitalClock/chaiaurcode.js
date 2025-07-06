const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')//we can use both of them

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleString());
  clock.innerHTML = date.toLocaleDateString();
}, 1000);
