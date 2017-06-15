
var current = "";
var total = "";
var keyClicked = "";
var keyClass = "";

var keys = document.querySelectorAll('.key');
var display = document.querySelector('.display');

for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', wasClicked);
}

function wasClicked() {
  keyClass = this.getAttribute('class');
  keyClicked = this.value;
  if (keyClass.includes('number') === true) {
    current += this.value;
    total += this.value;
    if (current.startsWith('0') === true) {
      current = current.slice(1);
    }

    display.innerHTML = `<p> ${current} </p>`;
  } else if (keyClass.includes('operator') === true) {
    doOperator(this.value);
  } else if (keyClass.includes('action') === true) {
    doAction();
  }
}

function doOperator() {
   total += keyClicked;
   current = 0;
}

function doAction() {
  if (keyClicked === '=') {
    total = eval(total);
    display.innerHTML = `<p> ${total} </p>`;
  } else if (keyClicked === 'C') {
    total = "0";
    current = "0";
    display.innerHTML = `<p> ${total} </p>`;
  }
}
