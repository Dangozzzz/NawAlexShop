var leftBtn = document.querySelector('#left');
var rightBtn = document.querySelector('#right');

leftBtn.addEventListener('click', slide);
rightBtn.addEventListener('click', slide);

function slide(e) {
  e.target.id === 'left' ? scroll(100) : scroll(-100);
}

function scroll(val) {
  document.querySelector('ul').scrollBy({ 
    left: val,
    behavior: 'smooth' 
  });
}