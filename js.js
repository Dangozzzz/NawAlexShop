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



$outer_container=$("#outer_container");
$thumbScroller=$("#thumbScroller");
$thumbScroller_container=$("#thumbScroller .container");
$thumbScroller_content=$("#thumbScroller .content");
$thumbScroller_thumb=$("#thumbScroller .thumb");
 
var sliderWidth=$thumbScroller.width();
var itemWidth=$thumbScroller_content.width();
 
$thumbScroller_content.each(function (i) {
    totalContent=i*itemWidth;   
    $thumbScroller_container.css("width",totalContent+itemWidth);
});
 
$thumbScroller.mousemove(function(e){
    var mouseCoords=(e.pageX - this.offsetLeft);
      var mousePercentY=mouseCoords/sliderWidth;
      var destY=-(((totalContent-(sliderWidth-itemWidth))-sliderWidth)*(mousePercentY));
      var thePosA=mouseCoords-destY;
      var thePosB=destY-mouseCoords;
      if(mouseCoords==destY){
        $thumbScroller_container.stop();
      }
      if(mouseCoords>destY){
        $thumbScroller_container.css("left",-thePosA);
      }
      if(mouseCoords<destY){
        $thumbScroller_container.css("left",thePosB);
      }
});
 
var fadeSpeed=300;
 
$thumbScroller_thumb.each(function () {
    var $this=$(this);
    $this.fadeTo(fadeSpeed, 0.5);
});
 
$thumbScroller_thumb.hover(
    function(){ //mouse over
        var $this=$(this);
        $this.stop().fadeTo(fadeSpeed, 1);
    },
    function(){ //mouse out
        var $this=$(this);
        $this.stop().fadeTo(fadeSpeed, 0.5);
    }
);
