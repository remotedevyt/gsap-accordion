const items = document.querySelectorAll('.item');

const expandimg = (item,i) => {
  items.forEach((item_,index_)=>{
    if(i == index_) return
    item_.clicked = false
  });

  gsap.to(items,{
    width: item.clicked ? '15vw' : '8vw',
    duration: 2,
    ease : 'elastic(1, .6)'
  })

  item.clicked = !item.clicked
  gsap.to(item,{
    width: item.clicked ? '44vw' : '15vw',
    duration: 2.5,
    ease : 'elastic(1, .3)'
  })
}

items.forEach((item,i) => {
  item.clicked = false;
  item.addEventListener('click', ()=> expandimg(item,i))  
});