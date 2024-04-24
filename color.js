document.addEventListener('DOMContentLoaded', function() {
    const colorForm = document.querySelector('#colorForm');
    const colorInput = document.querySelector('#colorInput');
    const header = document.querySelector('#header');
    
    colorForm.addEventListener('submit', function(e){
      e.preventDefault(); 
      const color = colorInput.value;
      header.style.color = color;
      colorInput.value = ''; 
    });
  });
  