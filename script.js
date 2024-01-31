var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
var interval;
// console.log(navmenuAnchorTags);
for(var i=0;i<navMenuAnchorTags.length;i++){
navMenuAnchorTags[i].addEventListener('click',function(event){
    event.preventDefault();
    var targetSectionID=this.textContent.trim().toLowerCase();
    // console.log(targetSectionID);
    var targetSection=document.getElementById(targetSectionID);
     interval=setInterval(function(){
        scrollSmooth(targetSection);
    },20);
});
}
function scrollSmooth(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
    if(targetSectionCoordinates.top<=0){
        clearInterval(interval);
        return;
    }
window.scrollBy(0,50);
}

// skill progress bar animation 

var progressBar = document.querySelectorAll('.skill-progress > div');
var skillsContainer=document.getElementById('skill-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;
function initialiseBars(){
    for(let bar of progressBar){
        bar.style.width= 0 +'%';
    }
}
initialiseBars();
function fillBars(){
    for(let bar of progressBar){
       let targetWidth = bar.getAttribute('data-bar-width') ;
       let currentWidth=0;
       let interval=setInterval(function(){
        if(currentWidth>targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width=currentWidth + '%';
       },5);
    }
}
function checkScroll(){
    //you have to  wheater skill container is visible
    var coordinates=skillsContainer.getBoundingClientRect();
    //window.innerHeight give viewport-height
    if(!animationDone && coordinates.top<window.innerHeight){
        animationDone=true;
        console.log('skill section Visible');
       fillBars();
    }else if(coordinates.top>window.innerHeight){
        animationDone=false;
        initialiseBars();
    }
}