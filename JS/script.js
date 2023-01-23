const btnToggle = document.querySelector('.menuHamburguesa');
const btnCerrar = document.querySelector('.menulateral')

btnToggle.addEventListener('click', function () {
  document.querySelector('.menulateral').classList.toggle('active');

});

btnCerrar.addEventListener('click', function () {
    document.querySelector('.menulateral').classList.toggle('active');
});

window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
          for(var i = 0; i < elements.length; i++) {
          var element = elements[i];
  
          if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
          } else {
            element.classList.remove('visible');
          }  
        }
});