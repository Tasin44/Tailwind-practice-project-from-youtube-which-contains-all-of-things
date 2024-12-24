
const navDialog = document.getElementById('nav-dialog');

function handleMenu(){
   navDialog.classList.toggle('hidden');
}

const initialTranslateLTR = -48*4;
const initialTranslateRTL =  36*4;

function setIntersectiomover(element,isLTR, speed){

      const IntersectionCallback=(entries)=>{

            const isIntersecting = entries[0].isIntersecting;
            
            if(isIntersecting)
               document.addEventListener('scroll',scrollHandler);
            else 
               document.removeEventListener('scroll',scrollHandler);

      }

      const Intersectionmover = new IntersectionObserver(IntersectionCallback);

      Intersectionmover.observe(element);

      function scrollHandler(){
         const translateX = (window.innerHeight -element.getBoundingClientRect().top) * speed;
         // element.style.transform = `translateX(${translateX}px)`;

         let totalTranslate = 0;
         if(isLTR) {
             totalTranslate = translateX + initialTranslateLTR;
         } else {
             totalTranslate = -(translateX + initialTranslateRTL);
         }
 
         element.style.transform = `translateX(${totalTranslate}px)`;
     }
      

}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

setIntersectiomover(line1,true,0.15);
setIntersectiomover(line2,false,0.15);
setIntersectiomover(line3,true,0.15);
setIntersectiomover(line4,true,0.8);



const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
})












