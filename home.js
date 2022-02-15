const slider3= document.getElementById("slider3");
const slider4=document.getElementsByClassName("slider4")[0];
// const g=document.getElementsByClassName("facultyDisplayAlt")[0];

// let lem=0;

let sli4=0;
let nindex=0;
let pindex=0
let lete=0;


const slider = tns({
  container: '.my-slider',
  items: 1,
  // autoplay: true,
  controls: false,
  nav: false,
  edgePadding: 40,
  center: true,
  responsive: {

    0:{
items:1,
gutter:50
    },
    587: {
      edgePadding: 20,
      gutter: 50,
      items: 2
    },
    700: {
      gutter: 30,
    },
    900: {
      items: 3,

      
    },
    1160:{
      items: 4
    }
  }
});

document.querySelector('.prev').addEventListener('click', function() {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function() {
  slider.goTo('next');
});


// sliderbhu

const slidersss = tns({
  container: '.flexourresultop',
  items: 1,
  // autoplay: true,
  controls: false,
  nav: false,
  edgePadding: 40,
  center: true,
  responsive: {

   0: {
      edgePadding: 20,
      gutter: 20,
      items: 1
    },
    550: {
      items: 2,
      gutter: 30,
    },
    900: {
      items: 3, 
      gutter: 180
    },
  
  }
});

document.querySelector('.ourresultbuttonprev').addEventListener('click', function() {
  slidersss.goTo('prev');
});

document.querySelector('.ourresultbuttonnext').addEventListener('click', function() {
  slidersss.goTo('next');
});


// slider4
function nexslider(){
  sli4++;
  slider4.style.transform=`translateX(${-33.3*sli4}vw)`;

  if (sli4==4){ 
    slider4.style.transform="translateX(0)";
    sli4=0;
  }
}
function prevslider4(){
  sli4--;
  


  if (sli4==-1){
    slider4.style.transform="translateX(-133.2vw)";
    sli4=3;
  }
  if (sli4==3){
    slider4.style.transform="translateX(-99.9vw)";
    sli4=3;
  }
  if (sli4==2){
    slider4.style.transform="translateX(-66.6vw)";
    sli4=2;
  }
  if (sli4==1){
    slider4.style.transform="translateX(-33.3vw)";
    sli4=1;
  }
  if (sli4==0){
    slider4.style.transform="translateX(0)";
    sli4=0;
  }
}




// mobile slider



const sliderweq = tns({
  container: '.facultyDisplayAlt',
  items: 1,
  // autoplay: true,
  controls: false,
  nav: false,
  edgePadding: 0,
  center: true,
  responsive: {

    0:{
items:1,
gutter:100
    },
   634:{
      items:2,
      gutter:0
    },
    900:{
      items:3,
      gutter:0
    },
    1018:{
      items: 4,
      gutter:60
    }
  }
});

document.querySelector('.ourresultbuttonprev1').addEventListener('click', function() {
  sliderweq.goTo('prev');
});

document.querySelector('.ourresultbuttonnext1').addEventListener('click', function() {
  sliderweq.goTo('next');
});



// slider3

const nexts=document.querySelector(".nextnextb");
const prevs=document.querySelector(".prevprevb");
const sliderB=document.querySelector(".slider-innerb");
let ni=0;
let pi=0

nexts.addEventListener('click',function(){
  ni++;
  sliderB.style.transform=`translateX(${-66.7*ni}em)`;
  if (ni==5){
    sliderB.style.transform="translateX(0)";
    ni=0;
  }
  if (ni!=0){
    prevs.style.display="block";
  }
  
})

prevs.addEventListener('click',function(){
  ni--;


  if (ni==-1){
    sliderB.style.transform="translateX(-266.92em)";
    ni=4;
  }
  if (ni==3){
    sliderB.style.transform="translateX(-200.19em)";
    ni=3;
  }
  if (ni==2){
    sliderB.style.transform="translateX(-133.46em)";
    ni=2;
  }
  if (ni==1){
    sliderB.style.transform="translateX(-66.73em)";
    ni=1;
  }
  if (ni==0){
    sliderB.style.transform="translateX(0)";
    ni=0;
  }

})


// mobile extraslider\


// function nexx(){
// lem++;
//   g.style.transform=`translateX(-${27.8*lem}rem)`;
//   if(lem==4){
//     lem=0;
//     g.style.transform=`translateX(-${27.8*lem}rem)`;
//   }
// }

// function prevv(){
//   lem--;
//   g.style.transform=`translateX(-${27.8*lem}rem)`;
//   if(lem==-1){
//     lem=3;
//     g.style.transform=`translateX(-${27.8*lem}rem)`;
//   }
// }


