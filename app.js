// OVA VERZIJA RADI BARBA

gsap.registerPlugin(ScrollTrigger);

let locoScroll;

//Splitting();

/*
================================================================================
PRELOADER
================================================================================
*/

const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);

const loader = select('.loader');
const loaderInner = select('.inner-loader');
const progressBar = select('.progress');
const loaderMask = select('.loader__mask');


/*
================================================================================
IMAGES LOADED
================================================================================
*/

function init() {
  // show loader on page load
  gsap.set(loader, {autoAlpha: 1});

  // scale loader down
  gsap.set(loaderInner, {
    scaleY: 0.025,
    transformOrigin: 'bottom'
  });

  // make a tween that scales the loader
  const progressTween = gsap.to(progressBar, {
    paused: true,
    scaleX: 0,
    ease: 'none',
    transformOrigin: 'right'
  });

  // setup variables
  let loadedImageCount = 0,
    imageCount;
  const container = select('.smooth-scroll');

  // setup Images loaded
  const imgLoad = imagesLoaded(container);
  imageCount = imgLoad.images.length;

  // set the initial progress to 0
  updateProgress(0);

  // triggered after each item is loaded
  imgLoad.on('progress', function () {
    // increase the number of loaded images
    loadedImageCount++;
    // update progress
    updateProgress(loadedImageCount);
  });

  // update the progress of our progressBar tween
  function updateProgress(value) {
  
    // tween progress bar tween to the right value
    gsap.to(progressTween, {
      progress: value / imageCount,
      duration: 0.3,
      ease: 'power1.out'
    })
  }

  // do whatever you want when all images are loaded
  imgLoad.on('done', function (instance) {
    // we will simply init our loader animation onComplete
    gsap.set(progressBar, {
      autoAlpha: 0,
      onComplete: initPageTransitions
    });
  });

}

init();

/*
================================================================================
MAIN JS + LOCOMOTIVE SCROLL + SCROLL TRIGGER PROXY
================================================================================
*/
function initScroll(container) {

  locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true, 
    offset: [0, 0],
    getDirection: true,
    scrollFromAnywhere: true,
    multiplier: 1.0, // body sroll speed / object speed values are multiplied
    touchMultiplier: 3.0,
    inertia: .6,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,

    }
  });

  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

// data direction ubačeno naknadno
locoScroll.on('scroll', (instance) => {
    document.documentElement.setAttribute('data-direction', instance.direction)
});

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },

    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, 
    // we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    // UKLJUČITI SAMO NA MOBILNOJ VERZIJI
    // pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
 
  /*NE ZNAM DA LI OVO IDE???*/
  //locoScroll.update();

/* PREVENT SCROLL UNDER FS MENU*/
function handler1() {
   locoScroll.stop();
    $(this).one("click", handler2);
}

function handler2() {
   locoScroll.start();
    $(this).one("click", handler1);
}
$(".fs-nav-butt").one("click", handler1);


///////////// 



// Dynamic Copyright Year
var date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;



/* =============================================
MARQUEE + SCROLLTRIGGER change direction
================================================ */

let direction = 1; // 1 = forward, -1 = backward scroll

const roll1 = roll(".roll1", {duration: 80}), // ugasi true i mijenja smjer
      roll2 = roll(".roll2", {duration: 50}, true),
      roll3 = roll(".roll3", {duration: 60}),
      roll4 = roll(".roll4", {duration: 40}, true),
      roll5 = roll(".roll5", {duration: 70});
ScrollTrigger.create({
       trigger: ".cd-wrap",
      
       /*toggleClass: {
        targets: '.logofrka, .navstyle, .kontakt',
        className: 'orange'
      }, */
        start: "top 30%",
        end: "bottom top",
        scroller: ".smooth-scroll",
            /*  invalidateOnRefresh: true, */
         onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1;
           
            gsap.to([roll1, roll2, roll3, roll4, roll5], {
                timeScale: direction, 
                overwrite: true            
            });

            
          }
        }
      });

// helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
function roll(targets, vars, reverse) {
  const tl = gsap.timeline({
    repeat: -1,
    onReverseComplete() { 
      this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
    }
  });
  vars = vars || {};
  vars.ease || (vars.ease = "none");
  gsap.utils.toArray(targets).forEach(el => {
    let clone = el.cloneNode(true);
    el.parentNode.appendChild(clone);
    gsap.set(clone, {position: "absolute", top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)});
    tl.to([el, clone], {xPercent: reverse ? 100 : -100, ...vars}, 0);
  });
  return tl;
}


  /* ============================================================================
SCROLL TRIGGER INSET CLIPMASK ON FIRST
================================================================================ */

let videoroll = gsap.timeline()

let cover = document.querySelector('.bgvideo')
let firstSection = document.querySelector('.big-logo')

videoroll.to(".bgvideo", {
  scrollTrigger: {
    scroller: ".smooth-scroll",
    trigger: firstSection,    
    start: 'top 20%',
    end: "+=30%",    
    scrub: 2,
  },
  /*clipPath: 'inset(60%)',*/
  scale:1.3,
  rotate:0,
  yPercent:-30
})


.to(".hero--white--background", {
  scrollTrigger: {
    scroller: ".smooth-scroll",
    trigger: firstSection,    
    start: 'top 30%',
    end: "+=30%",    
    scrub: 2,
  },
  /*clipPath: 'inset(60%)',*/
  duration: 0.2,
  autoAlpha:0,
  rotate:0,
 
})



/*------------/ SCROLLTRIGGER INNER IMAGE PARALLAX /------------*/

var inparallax = gsap.timeline({
  scrollTrigger: {
    trigger: ".img__wrapper",
    scroller: ".smooth-scroll",
    scrub: true,
    pin: false,
  },
}); 
inparallax.from(".img__background", {
  yPercent: -50,
  ease: "none",
}).to(".img__background", {
  yPercent: 50,
  ease: "none",
}); 





/* sort shuffle*/
/*
var Shuffle = window.Shuffle;
var element = document.querySelector('.my-shuffle-container');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});
// shuffleInstance.filter('animal');
$("#all").on("click", function(){
   shuffleInstance.filter();
});
$("#btn-animal").on("click", function(){
   shuffleInstance.filter('animal');
});
$("#btn-city").on("click", function(){
   shuffleInstance.filter('city');
});
$("#btn-nature").on("click", function(){
   shuffleInstance.filter('nature');
   locoScroll.update();
console.log("LOCOSCROLL UPDATED AFTER SORT");
});

*/
/*
ScrollTrigger.refresh();
console.log("SCROLLTRIGGER UPDATED AFTER SORT");
*/




/*
var video = document.getElementById("bgvid");
video.oncanplaythrough = function() {
    video.muted = true;
    video.play();
   console.log("RADIDIIDIIDIDIDIDIDI");
}
*/


/*
================================================================================
LOCOMOTIVE 4 SCROLL TO TOP
================================================================================
*/
$( "#tomain" ).on( "click", function() {
  locoScroll.scrollTo( '#top', {
    'offset': 0,
    'duration': 1500,
    'easing': [0.25, 0.00, 0.35, 1.00],
    'disableLerp': true
  });
  
});
$( "#tomainipad" ).on( "click", function() {
  locoScroll.scrollTo( '#top', {
    'offset': 0,
    'duration': 1500,
    'easing': [0.25, 0.00, 0.35, 1.00],
    'disableLerp': true
  });
  
});

/*
================================================================================
RELOAD ON MOBILE ORIENTATION CHANGE
================================================================================
*/
(function(w){

  var ua = navigator.userAgent;
  if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf( "AppleWebKit" ) > -1 ) ) {
    return;
  }

  var doc = w.document;
  if( !doc.querySelector ){ return; }

  var meta = doc.querySelector( "meta[name=viewport]" );
  var initialContent = meta && meta.getAttribute( "content" );
  var disabledZoom = initialContent + ",maximum-scale=1";
  var enabledZoom = initialContent + ",maximum-scale=10";
  var enabled = true;
  var x, y, z, aig;

  if( !meta ){ return; }

  function restoreZoom(){
    meta.setAttribute( "content", enabledZoom );
    enabled = true;
  }

  function disableZoom(){
    meta.setAttribute( "content", disabledZoom );
    enabled = false;
  }

  function checkTilt( e ){
    aig = e.accelerationIncludingGravity;
    x = Math.abs( aig.x );
    y = Math.abs( aig.y );
    z = Math.abs( aig.z );

    if( (!w.orientation || w.orientation === 180) && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
      if( enabled ){ disableZoom(); }
    } else if( !enabled ) {
      restoreZoom();
    }
  }

  w.addEventListener( "orientationchange", restoreZoom, false );
  w.addEventListener( "devicemotion", checkTilt, false );

})( this );
}

/*
================================================================================
PRELOADER --> vodi na --> INIT CONTENT
================================================================================
*/
function initLoader() {

  const tlLoaderIn = gsap.timeline({
    id: 'tlLoaderIn',
    defaults: {duration: 1.1, ease: 'power2.out'},
    onComplete: () => initContent()
  });

  const image = select('.loader-img-img');
  const mask = select('.loader__image--mask');
  const lines = selectAll('.loader__title--mask');
  const loaderContent = select('.loader__content');

  const loader = select('.loader');
  const loaderInner = select('.inner-loader');

  tlLoaderIn
/*
    .set(loaderContent, {autoAlpha: 1})
    .set(".txt", {yPercent: 100}) 
    .set(".imgg", {yPercent: 100})
    .set(".smallprint", {yPercent: 120})

    .to(loaderInner, {scaleX: 0,transformOrigin: 'right bottom',ease: 'power1.inOut'}) 

    .addLabel('revealImage')
    //.to(image, {yPercent: 0}, 'revealImage-=0.5') 
    .to(".imgg", {yPercent: 0})
        .to(".txt", {yPercent: 0, stagger: 0.3}, 'revealImage-=0.4')
    .to(".smallprint", {yPercent: 0})
*/

.set(loaderContent, {autoAlpha: 1})
    .set(".txt", {yPercent: 100})
    .set(".l1, .l3", {scaleX: 0})
    .set(".freveal", {yPercent: 100})
    .set(mask, {yPercent: 0})
    //.set(image, {yPercent: 100})
    .set("#main", {y: 150})

    //.to(loaderInner, {scaleY: 1, transformOrigin: 'bottom', ease: 'power1.inOut'})

    .addLabel('revealImage')

    .to(".l1", {scaleX: 1, transformOrigin: 'left', duration: 0.6}, 'revealImage+=0.1')
    .to(".l3", {scaleX: 1, transformOrigin: 'left', duration: 0.6}, 'revealImage+=0.3')
    .to(".freveal", {yPercent: 0, stagger: 0.05}, 'revealImage+=0.8')
    //.to(image, {yPercent: 0}, 'revealImage-=0.5')
    //.to(".txt", {yPercent: 0, stagger: 0.2}, 'revealImage-=0.4');

  // LOADER OUT
  const tlLoaderOut = gsap.timeline({
    id: 'tlLoaderOut',
    defaults: {duration: 1.2, ease: 'power2.inOut'},delay: 0});

  tlLoaderOut

  /*
.to(".imgg", {autoAlpha:0})
    .to(lines, {stagger: 0.3, autoAlpha:0}, '-=0.5')
    .to([loader, loaderContent], {yPercent: -100}, '-=0.5')
*/

//.to(lines, {yPercent: -500, stagger: 0.2}, 0)
    .to([loader, loaderContent], {yPercent: -100}, 0.2)
    .to('#main', {y: 0}, 0);

  const tlLoader = gsap.timeline();
  tlLoader
    .add(tlLoaderIn)
    .add(tlLoaderOut);
}

/*
================================================================================
INIT CONTENT --> vodi na --> INIT SCROLL
================================================================================
*/
function initContent() {

  select('body').classList.remove('is-loading');
  initScroll();
 
}

/*
================================================================================
BARBA PAGE TRANSITION IN
================================================================================
*/
function pageTransitionIn({
  container
}) {
  // timeline to stretch the loader over the whole screen
  const tl = gsap.timeline({defaults: {duration: 0.6,ease: 'power3.out'}});
  tl

  .set(loaderInner, {autoAlpha: 0})
  .fromTo(loader, {yPercent: -100}, {yPercent: 0})
  .fromTo(loaderMask, {yPercent: 80}, {yPercent: 0}, 0)
  .to(container, {y: 150}, 0);

/*
  .to(container, {autoAlpha:0}, 0);
*/

  return tl;
}


/*
================================================================================
BARBA PAGE TRANSITION OUT
================================================================================
*/
function pageTransitionOut({
  container
}) {
  // timeline to move loader away down
  const tl = gsap.timeline({defaults: {duration: 0.6, ease: 'power3.inOut'},
    // OVDJE SE INICIRA PONOVO SAV JS CONTENT / AKO ZATREBA
    onComplete: () => initContent()
  });
  tl
/*
    .from(container, {autoAlpha:0}, 0);
  */

    .to(loader, {yPercent: 100})
    .to(loaderMask, {yPercent: -80}, 0)
    .from(container, {y: -150}, 0);
    return tl;
}

/*
================================================================================
♥️ BARBA GLOBAL HOOKS + PREFETCH + INIT + VIEWS + TRANSITIONS
================================================================================
*/
function initPageTransitions() {
  // do something before the transition starts
  barba.hooks.before(() => {
    select('html').classList.add('is-transitioning');
  });
  // do something after the transition finishes
  barba.hooks.after(() => {
    select('html').classList.remove('is-transitioning');
  });

  // scroll to the top of the page
  barba.hooks.enter(() => {
    window.scrollTo(0, 0);
  

  });
  //kill scrolltrigger
  barba.hooks.beforeLeave(() => {
    locoScroll.destroy();
    
  });
  //init scrolltrigger
  barba.hooks.afterEnter(() => {
   
  });

  /*
  ================================================================================
  BARBA PREFETCH
  ================================================================================
  */
  barba.use(barbaPrefetch);
  /*
  ================================================================================
  BARBA INIT 
  ================================================================================
  */

  barba.init({
    debug: true,
    prefetch: true,
  /*
================================================================================
BARBA VIEWS
================================================================================
*/  
views: [{
  namespace: 'home',

  beforeEnter(data) {
    heroSwiper();
    heroApeli();
  /* imgoverlay(); */
    /*heroSwiper();
  console.log("HERO SWIPER loooooooaded!");*/
  
  },
  once(data) {
    heroSwiper();
    /* titleHero(); */
    /* heroSwiper(); */
  },
  afterEnter(data) {
   }


},{
  namespace: 'onama',
  beforeEnter(){
    simpleaccordion();
    console.log("SIMPLE ACCORDION ONNNN");
 /*    locoAccordion(); */

   // projectsHeroAnima();
 
    },
  once(){
 
    }

},{
    namespace: 'lokacije',
  beforeEnter(data) {

    locationMap();
    console.log("LOCATION MAP LOADED");
 
  }},{

    namespace: 'sort',
  beforeEnter(data) {

   
  
  
 
  }},{

  namespace: 'lokacijesolo',
  once(data) {
    swiperlocation();
  },

  beforeEnter(data) {

    swiperlocation();
    locationMap();
    //contactHeroAnima();

  }},{

    namespace: 'npp',
    once(data) {
      
    },
  
    beforeEnter(data) {
      simpleaccordion();
      console.log("HACCORDIJON UČIUTAN NA NPP");
      
       
    }},{

  },{
 

}],
    /*
    ================================================================================
    BARBA TRANSITIONS
    ================================================================================
    */
    transitions: [{
   
      once({
        next
      }) {
       
        // do something once on the initial page load
        initLoader();
        /*fullscreenMenuNew(); */
        /* underlineMouseover(); */
                
      },

      async leave({
        current
      }) {

          // animate loading screen in
        await pageTransitionIn(current);
        
      },
      enter({
        next
      }) {
        // animate loading screen away
        pageTransitionOut(next);
        
      },

      afterEnter({
        next
      }) {
      
      },

      beforeEnter({next}) {
        /* underlineMouseover(); */
     },

    }],

    /*
    ================================================================================
    PREVENT / CLICKS DURRING TRANSITION AND CURRENT LINK + SCROLL TO TOP
    ================================================================================
    */
    prevent: ({
      event,
      href
    }) => {
      if (event.type === 'click') {

        // prevent the user to reload the page if the location is the same
        if (href === window.location.href) {
          event.preventDefault();
          event.stopPropagation();
          // automatically scroll to the top of the page on same location
          locoScroll.scrollTo( '#top', {
            'offset': 0,
            'duration': 1000,
            'easing': [0.25, 0.00, 0.35, 1.00],
            'disableLerp': true
          });
          //   locoScroll.scrollTo('#top')
          return true;
        }
        if (barba.transitions.isRunning) {
          event.preventDefault();
          event.stopPropagation();

          return true;
        }
      }
    }
  });


  /*
  ================================================================================
  UPDATE ACTIVE CLASS ON THE MENU - BASED ON THE GIVEN URL
  ================================================================================
  */

  function init() {
    initLoader();
  }

}

/*
================================================================================
MENU - UNDERLINE AND HAMBURGER ANIMATION
================================================================================
*/

function underlineMouseover() {


  /*
  ================================================================================
  MENU UNDERLINE
  ================================================================================
  */

  // Mouseenter function
  function enterAnimation(link, e, index) {
    link.tl.tweenFromTo(0, "midway");
  }
  // Mouseleave function
  function leaveAnimation(link, e) {
    link.tl.play();
  }
  // Animations variables
  let workLinkUnderlineAnimEnter;
  let workLinkUnderlineAnimLeave;

  // Get all links
  let workLinks = document.querySelectorAll(".link-wrapper");

  workLinks.forEach((link, index, value) => {

  let underline = link.querySelector(".underline");
  link.tl = gsap.timeline({paused: true});
  link.tl.fromTo(underline, {width: "0%", left: "0%"}, {width: "100%", duration: 0.3, ease: "power1.out"});
  link.tl.add("midway");
  link.tl.fromTo(underline, {width: "100%",left: "0%"}, {width: "0%",left: "100%", duration: 0.3, ease: "power1.in", immediateRender: false});

  // Mouseenter
  link.addEventListener("mouseenter", (e) => {
       enterAnimation(link, e, index);
  });

  // Mouseleave
  link.addEventListener("mouseleave", (e) => {
    leaveAnimation(link, e);
    });

  });

}


/*
================================================================================
HOME PAGE TITLE & HERO GALLERY
================================================================================
*/
function titleHero() {

  //Splitting();
  
 /*
 ================================================================================
 CLIPPING PATH MASK REVEAL & TEXT REVEAL
 ================================================================================
 */

 const mq = window.matchMedia('(min-width: 999px)')
if (mq.matches) {
 var animation = gsap.timeline({defaults:{ease: "power3.inOut"}})
 animation
 .from(".char", {stagger:0.02, yPercent:130, duration:1.5})
 .fromTo(".clip", {autoAlpha:0, y:200, clipPath:"polygon(40% 30%, 60% 30%, 60% 90%, 40% 90%)"}, 
 { autoAlpha:1, duration:2, y:0, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}, "-=1.8")

}
else {
var heroanimation = gsap.timeline({defaults:{ease: "power3.inOut"}})
  heroanimation
.set(".char", {autoAlpha:1} ); 
}

}

/*
================================================================================
PROJECTS - HERO ANIMACIJA
================================================================================
*/
function projectsHeroAnima() {

  //Splitting();

const mq = window.matchMedia('(min-width: 999px)')
if (mq.matches) {
  var heroanimation = gsap.timeline({defaults:{ease: "power3.inOut"}})
  heroanimation
  .from(".char", {duration:1.5, stagger:0.02, yPercent:130})
  .fromTo(".in1", {autoAlpha:0, y:40},{duration:0.8,autoAlpha:1, y:0}, "<0.6")
  .fromTo(".in2", {autoAlpha:0, y:40},{duration:0.6, autoAlpha:1, stagger:0.2, y:0}, "<0.1")
  .fromTo(".clip", {y:200, autoAlpha:0, clipPath:"polygon(40% 30%, 60% 30%, 60% 90%, 40% 90%)"}, 
  {autoAlpha:1, duration:2, y:0, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}, "-=2")

}
else {
  var heroanimation = gsap.timeline({defaults:{ease: "power3.inOut"}})
  heroanimation
.set(".in1, .in2", {autoAlpha:1} );
}

  }

  /*
================================================================================
TAILORED - HERO ANIMACIJA
================================================================================
*/
function tailoredHeroAnima() {

  Splitting();
  
const mq = window.matchMedia('(min-width: 999px)')
if (mq.matches) {
var heroanimation = gsap.timeline({defaults:{ease: "power3.inOut"}})
  heroanimation
  .from(".char", {duration:1.5, stagger:0.02, yPercent:130})
  .fromTo(".t1", {autoAlpha:0, y:40},{duration:0.8, stagger:0.02, autoAlpha:1, y:0}, "<0.6")
  .fromTo(".clip", {y:200, autoAlpha:0, clipPath:"polygon(40% 30%, 60% 30%, 60% 90%, 40% 90%)"}, 
  {autoAlpha:1, duration:2, y:0, clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}, "-=1.8")

}
else {
  var heroanimation = gsap.timeline({defaults:{ease: "power3.inOut"}})
  heroanimation
.set(".t1", {autoAlpha:1} )
.set(".clip", {autoAlpha:1} )
}

}

/*
================================================================================
CONTACT - HERO ANIMACIJA
================================================================================
*/
function contactHeroAnima() {

Splitting();

const mq = window.matchMedia('(min-width: 999px)')
if (mq.matches) {
var heroanimation = gsap.timeline({defaults:{ease: "power3.inOut"}})
heroanimation
.from(".char", {stagger:0.02, duration:1.5,yPercent:130})
.fromTo(".c1", {autoAlpha:0, y:40},{duration:0.8, autoAlpha:1, stagger:0.02, y:0}, "-=1.2")

}
else {
  var heroanimation = gsap.timeline({defaults:{ease: "power3.inOut"}})
  heroanimation
.set(".c1", {autoAlpha:1} );
}

}
 
/*
================================================================================
SWIPER - HERO ANIMACIJA
================================================================================
*/

function heroSwiper() {
  var swiper = new Swiper('.swiper-container', {
    // pagination: '.swiper-pagination',
      navigation: {
  nextEl: '.next',
  prevEl: '.prev',
},
     direction: 'horizontal',
     resistanceRatio:0.5,
     slidesPerView: 4,
     longSwipes:true,
     longSwipesRatio:0.5,
     touchRatio:5,
     //paginationClickable: true,
     spaceBetween: 20,
     //mousewheelControl: true,
     parallax: true,
     //preloadImages: true,
     updateOnImagesReady: true,
    // centeredSlides: true,
    slidesOffsetBefore: 300,
     speed: 600,
     grabCursor: true,
     breakpoints: {
                     500: {
                      //   spaceBetween: 30,
                       //  loopedSlides: 3,
                        // slidesPerView: 1
                     },
                     1e3: {
                       //  loopedSlides: 3,
                        // spaceBetween:10,
                        // slidesPerView: 1.1
                     },
                     1200: {
                      //   spaceBetween: 20,
                         // loopedSlides: 3,
                        // slidesPerView: 3.1
                     }
                 }

 });

$('.swiper-container').on('mousedown touchstart', function(event) {
gsap.to('.swiper-slide', {scale: 0.9, duration: 0.4});
});
console.log("SWIPER BISE TREBA SMANJITI");

$('.swiper-container').on('mouseup touchend', function(event) {
gsap.to('.swiper-slide', {scale:1, duration: 0.4, delay:0.2});
});
console.log("SWIPER BISE TREBA VRATITI NA STARU DIMENZIJU");
}


/*
================================================================================
LOCO ACCORDION
================================================================================
*/

function locoAccordion() {



//jQuery Accordion Stuff
var accordion = (function(){

  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');
  var $accordion_item = $('.js-accordion-item');
  var delayInMilliseconds = 100; //10th of a second
  // default settings 
  var settings = {
    // animation speed
    speed: 400,
    
    // close all other accordion items if true
    oneOpen: false
  };
    
  return {
    // pass configurable object literal
    init: function($settings) {
      $accordion_header.on('click', function() {
           
        accordion.toggle($(this));
      
        setTimeout(() => {
          $('body, html').animate({ 
            scrollTop: $(this).offset().top     
           }, 500) //pause before scroll to top
        }, 400) //duration of scroll to top
        
        setTimeout(function() { 
          locoScroll.update();
          console.log("LOCOSCROLL ACCORDION UPDATE!");
    }, delayInMilliseconds);
      });
      
      $.extend(settings, $settings); 
      
      // ensure only one accordion is active if oneOpen is true
      if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
        $('.js-accordion-item.active:not(:first)').removeClass('active');
      }
      
      // reveal the active accordion bodies
      $('.js-accordion-item.active').find('> .js-accordion-body').show();
    },
    toggle: function($this) {
            
      if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
        $this.closest('.js-accordion')
               .find('> .js-accordion-item') 
               .removeClass('active')
               .find('.js-accordion-body')
               .slideUp()
      }
      
      // show/hide the clicked accordion item
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

$(document).ready(function(){
  
  accordion.init({ speed: 1000, oneOpen: true }); //duration of opening body__contents
});



}


/*
================================================================================
LOCO ACCORDION
================================================================================
*/

function locationMap() {


mapboxgl.accessToken = 'pk.eyJ1IjoiZm9nc2VsbGVyIiwiYSI6ImNrN2VpbXlpbjAwNDIzbnM1N2ZhMW9laGkifQ.DUf-8r1jXF4o7ApMUcKVXQ';
var map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9 // starting zoom
});

map.on('load', function (e) {
var mapContainerEl = document.getElementById('map');
mapContainerEl.style.visibility = 'visible';
});
/*********************** NE RADI  */
/*3 second before zoom
var mapo = L.mapbox.map('mymap', 'mymap');

// disable scroll-zooming initially
mapo.scrollWheelZoom.disable();

var zoomTimer;

// on entering the map we're starting a timer to
// 3 seconds after which we'll enable scroll-zooming
mapo.on('mouseover', function() {
	zoomTimer = setTimeout(function(){
		mapo.scrollWheelZoom.enable();
    }, 3000);
});

// on leaving the map we're disarming not yet triggered timers
// and disabling scrolling
mapo.on('mouseout', function() {
    clearTimeout(zoomTimer);
    mapo.scrollWheelZoom.disable();
});
/*********************** */



}



/*
================================================================================
SWIPER LOCATION
================================================================================
*/

function swiperlocation() {


var menu = ['', '', '', '', '', '']  
  var mySwiper = new Swiper ('.swiper-container', {
   loop: true,
		speed: 1000,
   // spaceBetween: 100,
   // initialSlide: 0,
    //truewrapper adoptsheight of active slide
    autoHeight: false,
    updateOnWindowResize: true,
    // Optional parameters
  //  direction: 'vertical',
      // delay between transitions in ms
    	autoplay: {
				delay: 5000,
				disableOnInteraction: false,
},
   // autoplayStopOnLast: false, // loop false also
    // If we need pagination
 
    
    // Navigation arrows
   nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // And if we need scrollbar
    //scrollbar: '.swiper-scrollbar',
    // "slide", "fade", "cube", "coverflow" or "flip"
   // effect: 'slide',
    
      pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: "progressbar",
				/*renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (menu[index]) + '</span>';
},*/
    // Distance between slides in px.
  //  spaceBetween: 60,
    //
    slidesPerView: 1,
    observer: true,
  observeParents: true,
  observeSlideChildren: true,
  longSwipes: false,
  
    //
   // centeredSlides: true,
    //
   // slidesOffsetBefore: 0,
    //
    grabCursor: true,
  }
  })        
  
}

/*
================================================================================
IMAGE HOVER
================================================================================
*/


function imgoverlay() {


  var cursor = $(".cursor"),
  overlay = $(".project-overlay");

gsap.set(cursor, {opacity:0});

function moveCircle(e) {
gsap.to(cursor, {
  duration:.5,
  css: {
    left: e.pageX,
    top: e.pageY
  }
});
}

$(".p-1").hover(function(){
$(".cursor").css({"background-image": "url(https://uploads-ssl.webflow.com/6061fc4a0ad1c29787bd162c/60a0dff0289cd76afcb13a51_test12.jpg)" });
});

$(".p-2").hover(function(){
$(".cursor").css({ "background-image": "url(https://uploads-ssl.webflow.com/6061fc4a0ad1c29787bd162c/60a0dff0d8e1e225cd7c2783_test11.jpg)" });
});
$(".p-3").hover(function(){
$(".cursor").css({ "background-image": "url(https://i.pinimg.com/474x/0e/04/6e/0e046e6bf35d98e2729c389395945435.jpg)" });
});
$(".p-4").hover(function(){
$(".cursor").css({ "background-image": "url(https://i.pinimg.com/474x/0e/04/6e/0e046e6bf35d98e2729c389395945435.jpg)" });
});

var flag = false;
$(overlay).mousemove(function() {
flag = true;
gsap.to(cursor, {duration: 0.3, scale: 1, autoAlpha: 1});
$(overlay).on("mousemove", moveCircle);
});

$(overlay).mouseout(function() {
flag = false;
gsap.to(cursor, {duration: 0.3, scale: 0.1, autoAlpha: 0});
});
}


/*
================================================================================
SIMPLE ACCORDION
================================================================================
*/


function simpleaccordion() {


const sections = document.querySelectorAll('.acc-section')
const texts = document.querySelectorAll('.text')

gsap.set(texts, {
  height: 0
})

sections.forEach((section, index) => {
  section.addEventListener('click', () => {
    const text = texts[index]
    
    texts.forEach((el) => {
      if (el != text && el.classList.contains('is-active')) {
        el.classList.remove('is-active')
        gsap.to(el, 1, {
          height: 0,
          ease: 'power2.out',
          onComplete:function() {
           locoScroll.update();
           console.log("donedonedonedonedonedonedonedonedone")
          }
        })
      }
    })
   
    if (text.classList.contains('is-active')) {
      text.classList.remove('is-active')
      gsap.to(text, 1, {
        height: 0,
        ease: 'power2.out',
        onComplete:function() {
          locoScroll.update();
          console.log("donedonedonedonedonedonedonedonedone")
         }
      })
    } else {
      text.classList.add('is-active')
      gsap.set(text, {
        height: 'auto'
      })
      gsap.from(text, 1, {
        height: 0,
        ease: 'power2.out',
        onComplete:function() {
          locoScroll.update();
          console.log("donedonedonedonedonedonedonedonedone")
         }
      })
    }
  })
})

}




function heroApeli() {

/* =============================================
023  --- SIMPLE FADE IN / FADE OUT / AUTOALPHA 023 simple fadein fadeout 
================================================ */

var action = gsap.timeline({repeat:-1, defaults:{duration:0.8, ease:'none'}})

.to('.fadeheader', {autoAlpha:1, stagger:5})
.to('.fadeheader', {autoAlpha:0, stagger:5}, 4)

}