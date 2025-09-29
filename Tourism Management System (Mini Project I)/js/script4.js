
var themeColor=document.querySelectorAll('.toggler span');
    themeColor.forEach(color=>color.addEventListener('click',()=>{
      var background=color.style.background;
      document.querySelector('body').style.background=background;
    }));

