function random(upper,lower){
    return Math.floor(Math.random()*upper)+lower;
}
function getRandomColor() {
  var length = 6;
  var chars = '0123456789ABCDEF';
  var hex = '#';
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}

alert('hi');


var box = document.getElementById("box");
var currentY= box.getBoundingClientRect().y;
var currentX = box.getBoundingClientRect().x;
box.addEventListener('mouseover',function(){
   console.log(currentX);
   currentY = random(window.innerHeight-200,200);
   box.style.top = currentY + 'px';
   console.log(currentX);
   currentY = random(window.innerWidth-200,200);
   box.style.left = currentY + 'px';
   box.style.backgroundColor = getRandomColor();
})