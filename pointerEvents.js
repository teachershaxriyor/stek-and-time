// click, pointerdown, pointerup, pointerenter,pointerleave, pointermove
// pointerEvents
// let x = 0
// let y = 0

// let b = document.querySelector('.block')

// b.style.top = y + 'px'
// b.style.left = x + 'px'

b.addEventListener('mousemove', (e)=>{
  if(e.offsetX > 0 && e.offsetX < 50){
    x = x + 15
    b.style.top = x + 'px'
  }
})

