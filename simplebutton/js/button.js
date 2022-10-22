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
}