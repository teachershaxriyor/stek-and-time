
b.addEventListener('mousemove', (e)=>{
    if(e.offsetX > 0 && e.offsetX < 50){
      x = x + 15
      b.style.top = x + 'px'
    }
  })
  
  