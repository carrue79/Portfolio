const buttons = document.querySelectorAll('button');
function count() {
  let counter = 0;
  return function() {
    return counter+=1;
  };
}

for (let button of buttons) {
  const counter = count(); 
  button.addEventListener('click', function() {
    this.textContent = counter(); 
  });
  if (counter==5 || counter == 10 || counter==50 || counter==100){
    function on() {
        document.getElementById("clicker").style.display = "block";
    }

    function off() {
        document.getElementById("clicker").style.display = "none";
    }
  }
}