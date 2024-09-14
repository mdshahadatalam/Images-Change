let imgShow = Array.from(document.querySelectorAll('.img'))
let Extra = document.querySelector('aside')
let cross = document.querySelector('.Icon')
let right = document.querySelector('.rightIcon')
let left = document.querySelector('.leftIcon')
let previwe = Extra.querySelector('img')
let currentPosition = 0



imgShow.map((elmt,index)=>{
  elmt.addEventListener('click',()=>{

   previwe.src = imgShow[index].src

    Extra.classList.add('active')
    
  right.addEventListener('click',()=>{
  

   if(currentPosition == imgShow.length-1 ){
    currentPosition = 0
   }else{
    currentPosition++;
   }
   previwe.src = imgShow[currentPosition].src;
   
  })

  left.addEventListener('click',()=>{
    
   if(currentPosition == 0 ){
    currentPosition = imgShow.length-1
   }else{
    currentPosition--;
   }
   previwe.src = imgShow[currentPosition].src;

  })
  
  })
})

cross.addEventListener('click',()=>{
    Extra.classList.remove('active')
})


Extra.addEventListener('click',(e)=>{
  if(e.target.classList.contains('active')){
    Extra.classList.remove('active')
  }
   
})

