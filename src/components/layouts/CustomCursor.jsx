import React from "react"
import $ from "jquery";

function CustomCursor() {

  useEffect(() => {
    /*========== Custom Cursor  ==========*/
   if($(".custom__cursor").length) {
     var cursor = document.querySelector('.custom__cursor-one');
     var cursorinner = document.querySelector('.custom__cursor-two');
     var a = document.querySelectorAll('a');
     document.addEventListener('mousemove', function(e) {
       var x = e.clientX;
       var y = e.clientY;
       cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
     });
     document.addEventListener('mousemove', function(e) {
       var x = e.clientX;
       var y = e.clientY;
       cursorinner.style.left = x + 'px';
       cursorinner.style.top = y + 'px';
     });
     document.addEventListener('mousedown', function() {
       cursor.classList.add('click');
       cursorinner.classList.add('custom__cursor-hover')
     });
     document.addEventListener('mouseup', function() {
       cursor.classList.remove('click')
       cursorinner.classList.remove('custom__cursor-hover')
     });
     a.forEach(item => {
       item.addEventListener('mouseover', () => {
         cursor.classList.add('custom__cursor__hover');
       });
       item.addEventListener('mouseleave', () => {
         cursor.classList.remove('custom__cursor__hover');
       });
     })
   }

 });

  return (
    <>
	  <div class="custom__cursor-one main"></div>
    <div class="custom__cursor-two main"></div>
    </>
  )
}

export default CustomCursor