const getsections = document.querySelectorAll('section')
console.log(getsections)
let geta = document.querySelectorAll('nav a,.person')
let currnet ;
console.log(geta)
window.addEventListener('scroll',function(){
    getsections.forEach(function(section) {
        const sectiontop = section.offsetTop
        const sectionheight = section.clientHeight
        console.log(sectionheight)
        if(pageYOffset>=sectiontop){
          currnet = section.getAttribute('id')
        }

    });
    console.log(currnet)
geta.forEach(function(item){
  item.classList.remove('active')  
  if(item.classList.contains(currnet)){
    item.classList.add('active')

  }
})

})
let getdivimg= document.querySelectorAll('#arrow')
console.log(getdivimg)
getdivimg.forEach(function(item){
    item.addEventListener('mouseover',function(){
        item.classList.add('m-over')
        console.log('mirazsrfg')
    })
})
getdivimg.forEach(function(item){
    item.addEventListener('mouseleave',function(){
        item.classList.remove('m-over')
        console.log('falijklkj')
       
    })
})
let getp = document.querySelector('.p-change')
console.log(getp)
let getprev = document.querySelector('.perev')
let getnext = document.querySelector('.next')
let getname = document.querySelector('.namemirza')
let getimg = document.querySelector('.img11')
let getpic = document.getElementById('pic1')
let geth = document.getElementById('hpic')
let divbout = document.querySelectorAll('#divabout')
console.log(divbout)
let aboutimg = document.querySelectorAll('#about-pic')
console.log(aboutimg)
let index = 0
const textarray = ['KRISTIN SAID It was a pleasure working with Brian Adams. They were able to take our vague ideas and turn them into a beautiful, functional website. Brian Adams was very responsive to our feedback and made sure to incorporate our suggestions into the design. They also provided helpful recommendations along the way.','JENNY SAID We hired Brian Adams to create a custom website for our business, and we couldnt be happier with the results. Brian Adams was professional, communicative, and extremely knowledgeable about web development.','LESLIE SAID Working with Brian Adams was an absolute pleasure. From start to finish, they demonstrated a high level of professionalism, expertise, and dedication to our project. They took the time to understand our needs and goals, and went above and beyond to deliver a website that exceeded our expectations.']
const imgarray = ['img/64030001fecdef5199f3d9cc_darlene-robertson.png','img/6402ffb9ae68454dab6e434a_kristin-watson.png','img/6402ff5b5361e56e73377e76_jenny-wilson.png']
const namearray= ['Kristin Watson','Jenny Wilson','LESLIE ALEXANDER']

console.log(getprev,getnext)
function prev (){
  console.log('prev')
  index--
  if(index < 0 ){
    index = 2
  }
  if(index < 0 ){
    index = namearray.length -1
  }
  
  getp.innerHTML= textarray[index]
  getname.innerHTML = namearray[index]
  getimg.setAttribute('src',imgarray[index])

}
function next(){
  console.log('next')
  index++
  if(index > textarray.length-1){
    index = 0
}
if(index > namearray.length-1){
  index = 0
}
  
  getp.innerText= textarray[index]
  getname.innerText = namearray[index]
  getimg.setAttribute('src',imgarray[index])
  
  
}
getprev.addEventListener('click',prev)
getnext.addEventListener('click',next)
window.addEventListener('load',function(){
 geth.classList.add('showh')
  getpic.classList.add('pic11')
})
console.log(geth)

