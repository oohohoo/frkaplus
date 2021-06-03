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
  gsap.set(loader, {
    autoAlpha: 1
  });

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
MAIN JS + LOCOMOTIVE SCROLL + SCROLL TRIGGER
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
    useKeyboard: true,
    inertia: .75,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,

    }
  });
// data direction ubačeno naknadno
  locoScroll.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  });

  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0,width: window.innerWidth,height: window.innerHeight};
    },

    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, 
    // we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    // UKLJUČITI SAMO NA MOBILNOJ VERZIJI
   // ZBOG OVOG DESKTOP IGNORIRA HORIZONTAL PIN ITD //
  /*   pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed" */
  });



 /* ============================================================================
 SCROLL TRIGGER 
================================================================================ */

 
 /* ============================================================================
INSET CLIPMASK ON FIRST
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
  scale:1.15,
  rotate:0,
  yPercent:-30
})



/*14/15 ROLL */
gsap.to(".roll-number-wrap", {
  scrollTrigger:{
  scroller: ".smooth-scroll",
    trigger: ".gi--num--wrap", 
    start: "top 85%", 
    end: "bottom top", 
   scrub: 1,
   
  },
  y: -700,
  //duration:2
});


/* COUNTER O NAMA*/
/*
var cont={val:990} , newval = 1000 ;

gsap.to(cont,2,{
scrollTrigger:{
      scroller: ".smooth-scroll",
				trigger: ".tisucu",
				start: "top 100%", 
				end: "bottom top", 
        toggleActions: "restart none none reset",
				//scrub: 1,
				
			},
val:newval,
roundProps:"val",
onUpdate:function(){
  document.getElementById("counternew").innerHTML=cont.val
  
}});
*/


/*------------/ SCROLLTRIGGER INNER IMAGE PARALLAX /------------*/

gsap.utils.toArray(".grid").forEach(section => {
	const pimages = section.querySelectorAll(".img__background");

var inparallax = gsap.timeline({
  scrollTrigger: {
    trigger: ".img__wrapper",
    scroller: ".smooth-scroll",
    scrub: true,
    pin: false,
  },
}); 
inparallax.from(pimages, {
  yPercent: -20,
  ease: "none",
}).to(pimages, {
  yPercent: 20,
  ease: "none",
}); 

});


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



$(".mapbox").hover(function () {
  locoScroll.stop();
});

$(".mapbox").mouseout(function () {
  locoScroll.start();

});

/* 
============================================================================
SHOW HIDE HEADER ON SCROLL + CUSTOM ANIMATION + CHANGE COLOR ON DIFF BACKGROUNDS
================================================================================ */

const showAnim = gsap.timeline({
  paused: true,
  defaults: { // children inherit these defaults
    duration: 0.5,
   // ease: CustomEase.create("custom", "M0,0 C0.425,0.005 0,1 1,1 "),
  },
  scrollTrigger: {
      scroller: ".smooth-scroll",
     /*  toggleClass: {
        targets: '.logofrka, .navstyle, .kontakt',
        className: 'mrak'
      },  */
      start: "top top",
      end: 99999,
      /* onEnter: () => myfunction(), */
     /*  onLeaveBack: () => myfunction(), */

      onUpdate: (self) => {
        self.direction === 1 ? showAnim.play() : showAnim.reverse()
      }
}
});

showAnim
//.to(".logofade", {autoAlpha:0 }, 0)
.to(".nav", {yPercent: -50, autoAlpha:0, stagger: 0.05},"<0.1")
.to(".header-contact--button", {scale:0.7, x:"5.1em"},"<0.2")
//.to(".kont-color", {color: "black", duration:0.2},"<0.2");


/* 
=============================================
004 - SCROLLTRIGGER BATCH - TEXT REVEAL MULTILINE / VERZIJA 1
================================================ */

gsap.set('.reveal', {autoAlpha: 0, yPercent: 200});

ScrollTrigger.batch(".batch-text", {
scroller: ".smooth-scroll",
  onEnter: batch => {
    batch.forEach((section, i) => {
      gsap.to(section.querySelectorAll(".reveal"), {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.8,
        ease: "power1.inOut", 
        stagger: 0.1,
        delay: i * 0.3,
        toggleActions: "restart none none reset"
      });
    });
  },
  start: "top 95%"
});




/* OVO JE UBAČENO NAKNADNO

ScrollTrigger.addEventListener("refreshInit", resize);
console.log("refresh init mamicu mu AJMOOOO");
*/
///////////// ///////////// ///////////// ///////////// ///////////// ///////////// 

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
///////////// ///////////// ///////////// ///////////// ///////////// ///////////// ///////////// 


// Dynamic Copyright Year
var date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;


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
  const progress = select('.progress');


  tlLoaderIn

.set(loaderContent, {autoAlpha: 1})
    .set(".txt", {yPercent: 100})
    .set(".l1, .l3", {scaleX: 0})
    .set(".freveal", {yPercent: 100})
    .set(mask, {yPercent: 0})
    //.set(image, {yPercent: 100})
    .set("#main", {y: 80})

    /* OVO JE DODANO ZA PREZENTACIJU*/
    .set(progress, {autoAlpha: 0})
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

//.to(lines, {yPercent: -500, stagger: 0.2}, 0)
    .to([loader, loaderContent], {yPercent: -100}, 0.2)
    .to('#main', {y: 0, force3D:true}, 0);

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
  outlinehero();
  horizpin(); 
  console.log("OUTLINE HERO INIT  + HORIZ PIN lOADLOAD");
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
  const tl = gsap.timeline({defaults: {duration: 0.8,ease: 'power3.out'}});
  tl

  .set(loaderInner, {autoAlpha: 0})
  .fromTo(loader, {yPercent: -100}, {yPercent: 0})
  .fromTo(loaderMask, {yPercent: 80}, {yPercent: 0}, 0)
  .to(container, {y: 80, force3D:true}, 0);

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
  const tl = gsap.timeline({defaults: {duration: 0.8, ease: 'power3.inOut'},
    // OVDJE SE INICIRA PONOVO SAV JS CONTENT / AKO ZATREBA
    onComplete: () => initContent()
  });
  tl

    .to(loader, {yPercent: 100})
    .to(loaderMask, {yPercent: -80}, 0)
    .from(container, {y: -80}, 0);
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
     //KILL SCROLLTRIGGERRRRR PREBAČEN
     if (ScrollTrigger.getAll().length > 0) {
      ScrollTrigger.getAll().forEach((trigger) => {
          trigger.kill()
      });
  }
  console.log("LOCO*SCROLLTRIGGER DESTROYED");
  
  });
  //init scrolltrigger
  barba.hooks.afterEnter(() => {
   /*
    ScrollTrigger.refresh(true); // ScrollTrigger Refresh
    console.log("scrolltrigger refreshed after enter");
    */
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
          timeout: 7000, 
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
                heroApeli();
                document.getElementById('homevid').play();

              }
            }, {

              namespace: 'onama',
              beforeEnter(data) {
                outlinehero();
               /* 
                */
                console.log("HORIZ LOAD ON TRANSITION");
                simpleaccordion();
                zoomimage();

              }
            }, {

              namespace: 'lokacije',
              once() {
                sorting();
              },
              beforeEnter({
                next
              }) {
                sorting();
                locationMap();
                console.log("location SORTING pa MAP LOADED");
              },
              beforeLeave({
                current
              }) {

              }
            }, {

              namespace: 'sort',
              beforeEnter({
                next
              }) {

              }
            }, {

              namespace: 'lokacijesolo',
              once(data) {

              },
              beforeEnter(data) {
                locationMap();
                swiperlocation();
                scrolltriggerupdate();
                openTestYourDesign();
                saveaspdftest();

              }
            }, {

              namespace: 'npp',
              beforeEnter(data) {
                simpleaccordion();
              }
            }, {

              namespace: 'uvjeti',
              once(data) {

              },
              beforeEnter(data) {
                simpleaccordion();

              }
            }, {
              namespace: 'privatnost',
              beforeEnter(data) {
                simpleaccordion();

              }
            }, {

              namespace: 'reference',
              beforeEnter(data) {
                logohover();
              }
            }, {

              namespace: 'topdftest',

              beforeEnter(data) {
                matrixtransform();
                console.log("MATRIX TRANS LOADANA");
                saveaspdftest();

              }
            }, {

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
        
        /* kontaktfs();
        console.log("FSKONTAKT LOADED"); */
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
        magnetic();
       
      /*   heroSwiper(); */
     /*    kontaktfs();
        console.log("FSKONTAKT LOADED"); */
       /*  counteriOnama(); */
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
/*
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
*/

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


 /*  setTimeout(()=>{
    myMap = createMapbox(data.next.container);
},3000)  */

    setTimeout(()=>{ 
mapboxgl.accessToken = 'pk.eyJ1IjoiZm9nc2VsbGVyIiwiYSI6ImNrN2VpbXlpbjAwNDIzbnM1N2ZhMW9laGkifQ.DUf-8r1jXF4o7ApMUcKVXQ';

var map = new mapboxgl.Map({
 /*  width: 1280,
  height: 800,  */
container: 'map', // container ID
style: 'mapbox://styles/fogseller/cknip0h0j0oqm17mgvd8wwi8y?optimize=true', // style URL / dodano optimize=true
center: [16.527, 44.663], // starting position [lng, lat]
zoom: 6.64 // starting zoom
});




/* FLY TO LOCATION*/

document.getElementById('fly').addEventListener('click', function () {
  // Fly to a random location by offsetting the point -74.50, 40
  // by up to 5 degrees.
  map.flyTo({
  center: [15.9595615, 45.7768948],
  zoom: 12, // starting zoom
  essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
  });


map.on('load', function(e) {

  /*FOTKA PRIJE UČITAVANJA */
  /*const mapContainerEl = document.getElementById("map");
  mapContainerEl.style.visibility = "visible";
*/



  // Create a popup
  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  function showPopup(e) {
    // Change the cursor
    map.getCanvas().style.cursor = 'pointer';

    // Show the popup
    popup.setLngLat(e.features[0].geometry.coordinates)
      .setHTML(checkEmpty(e.features[0].properties.name))
      .addTo(map);
  }

  function hidePopup() {
    map.getCanvas().style.cursor = '';
    popup.remove();
  }

  function checkEmpty(info) {
    return (info) ? info : "No data";
  }

   map.on('mouseenter', 'places', showPopup);
   map.on('mouseleave', 'places', hidePopup);
});
/*
map.on('click', function(e) {
  // If the user clicked on one of your markers, get its information.
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['frkaplus'] // replace with your layer name
  });
  if (!features.length) {
    return;
    console.log("interactivityyyyy");
  }
  var feature = features[0];

    /* 
    Create a popup, specify its options 
    and properties, and add it to the map.
  */
 /*
    var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      '<h3>' + feature.properties.title + '</h3>' 
      '<p>' + feature.properties.description + '</p>'
      )
    .addTo(map);
    
});
/*
map.on('load', function (e) {
var mapContainerEl = document.getElementById('map');
mapContainerEl.style.visibility = 'visible';
});

*/
/* map.on('idle',function(){
  map.resize()
  console.log("MAP RESIZEEEEE!");
  }) */

 map.once('load', () => {
map.resize();
});
console.log("MAP RESIZE!"); 


/* MAP POP UP INTERACTIVITY */

/* 
Add an event listener that runs
  when a user clicks on the map element.
*/


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


 },2000)  

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
    	/* autoplay: {
				delay: 5000,
				disableOnInteraction: false,
}, */
   // autoplayStopOnLast: false, // loop false also
    // If we need paginationg
 
    
    
    // Navigation arrows
/*    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev', */
    
    // And if we need scrollbar
    //scrollbar: '.swiper-scrollbar',
    // "slide", "fade", "cube", "coverflow" or "flip"
   // effect: 'slide',
    
    /*   pagination: {
				el: '.swiper-pagination',
				clickable: true,
				type: "progressbar", */
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
 /*  } */
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

/* =============================================
O NAMA COUNTERI
================================================ */



/* function counteriOnama() {



 const items = document.querySelectorAll(".data");

gsap.from(items, {
scrollTrigger:{
      scroller: ".smooth-scroll",
				trigger: ".counter-container",
				start: "top center", 
				end: "bottom top", 
        toggleActions: "restart none none reset",
				//scrub: 1,
				
			},
  textContent: 0,
  duration: 4,
  ease: "power1.in",
  snap: { textContent: 1 },
  stagger: {
    each: 1.0,
    onUpdate: function() {
      this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
    },
  }
});


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} 
 */

/* NUMBER COUNT from some value 01 */

/* var cont={val:195} , newval = 200 ;

gsap.to(cont,2,{
scrollTrigger:{
      scroller: ".smooth-scroll",
				trigger: ".numbercounter",
				start: "top 90%", 
				end: "bottom top", 
        toggleActions: "restart none none reset",
				//scrub: 1,
				
			},
      
val:newval,
roundProps:"val",
onUpdate:function(){
  document.getElementById("counterx").innerHTML=cont.val
  
}}); */



/* NUMBER COUNT from some value 02 */

/*
var cont={val:197} , newval = 200 ;

gsap.to(cont,2.5,{
scrollTrigger:{
      scroller: ".smooth-scroll",
				trigger: ".numbercounter2",
				start: "top 90%", 
				end: "bottom top", 
        toggleActions: "restart none none reset",
				//scrub: 1,
				
			},
      
val:newval,
roundProps:"val",
onUpdate:function(){
  document.getElementById("countery").innerHTML=cont.val
  
}});

}
*/
/* =============================================
O NAMA COUNTERI
================================================ */
/*


function kontaktfs() {
// Timeline created and paused
var tl = gsap.timeline({ paused: true });

function openNav() {
  animateOpenNav();
  var navBtn = document.getElementById("nav");
  navBtn.onclick = function (e) {
    // Toggle reversed to it's opposite value
    tl.reversed(!tl.reversed());
    // Use the toggle method in the classList API
    navBtn.classList.toggle("active");
  };
}



/* =============================================
KONTAKT FULLSCREEW OPEN
================================================ */

/*

function animateOpenNav() {
  var mobileNav = document.getElementById("krug");
  tl
  .set('body', { overflow: 'hidden' })
  .to(mobileNav, {duration: 0.6, ease: "power1.in", scale:30 })
  .to(".fs--menu", {duration: 0.6, ease: "power1.in", autoAlpha:0 })
  
  //.to('.kontakt-back', {y, ease: "power1.in"})
    .to(".nav__link", {opacity: 1, y: 0,duration: 0.2, stagger: {// wrap advanced options in an object
      each: 0.2,
      //ease: "power1.in"
    }
  })
  

  
  .reverse(); // Finally reverse the timeline. reversed() is true
}

// init
openNav();
  

}
*/




  /* =============================================
NUMBER COUNT from some value 01
================================================ */





function scrolltriggerupdate() {
  ScrollTrigger.update();
  }
  





/* =============================================
DOWNLOAD AS PDF *** TESTNA STRANICA *** NIJE PRODUKCIJA
================================================ */

function saveaspdftest() {

  
/*STARI KOD KOJI RADI*/

let btn = document.getElementById('btn');
let page = document.getElementById('page');

btn.addEventListener('click', function(){
  html2PDF(page, {
    jsPDF: {
      format: 'a4',
      orientation: "landscape",
      background: '#fff',
      
    },
    html2canvas: {
       imageTimeout: 15000,
     /*logging: true, */
      useCORS: true,
      backgroundColor:	"#ffffff",
      onrendered: function(canvas) {

        /* doc.addPage(newWidth, newHeight); */
        
        var imgData = canvas.toDataURL('image/jpeg');
 
        doc.addImage(imgData, 'JPEG', 15, 0, 34, 37);
        console.log(imgData);
        /* doc.text(10, 10, 'Hello everybody'); */ 
 
        $('#page').append(canvas);
        doc.save('Spec_Sheet.pdf');
        alert('did it');
     },  

      scrollX: 0,
  scrollY: -window.scrollY, 

    },
    imageType: 'image/jpeg',
    imageQuality: 100,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },








/*STARI KOD KOJI RADI*/
/*
  let btn = document.getElementById('btn');
  let page = document.getElementById('page');
  
  btn.addEventListener('click', function(){
   
   
   
    html2PDF(page, {
      jsPDF: {
        format: 'a4',
      },
      html2canvas: {
        imageTimeout: 15000,
        logging: true,
        useCORS: true,

        scrollX: 0,
    scrollY: -window.scrollY,


      },
      imageType: 'image/jpeg',
      imageQuality: 100,
      /*margin: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      },*/
    /*
      output: './pdf/generate.pdf',
      init: function() {},
      success: function(pdf) {
        pdf.save(this.output);
      }
    });
*/



  })



})

}


/* =============================================
REFERENCE LOGOTIP HOVER 
================================================ */

function logohover() {
/* 
  gsap.utils.toArray(".reference-box").forEach(logo => {
    gsap.to(logo, {
      color: "#231f20",
      backgroundColor: "#231f20",
      duration: 0.6,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: logo,
        //scrub: 1
      }
    });
  }) */
  


  gsap.utils.toArray(".reference--logo-wrap").forEach(container => {
    let logoitem = container.querySelector(".reference-box"),
       // silhouette = container.querySelector(".silhouette .cover"), */
        tl = gsap.timeline({ paused: true });
    
    tl.to(logoitem, { color: "#ffdc52", backgroundColor: "#231f20",  duration:0.2, ease: 'power1.inOut', });
    
    container.addEventListener("mouseenter", () => tl.play() );
    container.addEventListener("mouseleave", () => tl.reverse() );
  });





}


/* 
=============================================
MAGNETIC KONTAKT BUTTON
================================================ 
*/

function magnetic() {

var mWrap = document.querySelectorAll(".magnetic-wrap");

function parallaxIt(e, wrap, movement = 1) {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var boundingRect = wrap.mArea.getBoundingClientRect();
  var halfDiff = Math.abs(boundingRect.width - boundingRect.height) / 2;
  var relX = e.pageX - boundingRect.left - halfDiff;
  var relY = e.pageY - boundingRect.top;

  gsap.to(wrap.mContent, {
    x: (relX - boundingRect.width / 2) * movement,
    y: (relY - boundingRect.height / 2 - scrollTop) * movement,
    ease: "power1",
    duration: 0.6
  });
}

mWrap.forEach(function (wrap) {
  wrap.mContent = wrap.querySelector(".js-magnetic-content");
  wrap.mArea = wrap.querySelector(".js-magnetic-area");
  
  wrap.mArea.addEventListener("mousemove", function(e) {
    parallaxIt(e, wrap);
  });
  
  wrap.mArea.addEventListener("mouseleave", function (e) {
    gsap.to(wrap.mContent, {
      scale: 1,
      x: 0,
      y: 0,
      ease: "power3",
      duration: 0.6
    });
  });
});

}



/* 
=============================================
TEST YOUR DESIGN MODUL
================================================ 
*/

function openTestYourDesign() {
  gsap.set('#tweenbox', {
    scaleY: 0,
    transformOrigin: 'top',
  
 })
  let forwards = true;
  document.querySelector("#tweenbutton").addEventListener("click", ev => {
    if(forwards) {
      
      const tl = gsap.timeline({ })
      

      .to('#tweenbox', {
         scaleY: 1,
          /* rotate:0, */
        duration: 0.64,
        ease: 'power2.inOut',
        overwrite: "auto"
      })

      .to('.test-content', {
        autoAlpha:1,
        /* scaleY: 1.3, */
        rotate:360,
         /* rotate:0, */
       duration: 0.64,
       ease: 'power2.inOut',
       overwrite: "auto"
     })

     .to('#tweenbutton', {
      rotate:20,
      scale:0.7,
 backgroundColor: "#ff0000",
     duration: 0.64,
     ease: 'power2.inOut',
     overwrite: "auto"
   }, "<")

      
    } else {
      
      const tl2 = gsap.timeline({ })

      .to('.test-content', {
        autoAlpha:0,
        /* scaleY: 1, */
        rotate:-360,
      /*  transformOrigin: 'top', */
       /* rotate:30, */
        duration: 0.64,
        ease: 'power2.inOut',
        overwrite: "auto"
      })


     .to('#tweenbox', {
        
       scaleY: 0,
      /*  transformOrigin: 'top', */
       /* rotate:30, */
        duration: 0.64,
        ease: 'power2.inOut',
        overwrite: "auto",
        
      })

      .to('#tweenbutton', {
        rotate:0,
        scale:1,
   backgroundColor: "#ffffff",
       duration: 0.64,
       ease: 'power2.inOut',
       overwrite: "auto"
     }, "<")

      
    }
    /* tl.reverse(); */
    forwards = !forwards;
  });
  

  const button = document.querySelector('.printtopdf');
button.addEventListener('click', () => {window.print()});



}






function matrixtransform() {
 

/*TRANSFORM MATRIX 3d GENERATOR*/
(function() {
  var $, applyTransform, getTransform, makeTransformable;

  $ = jQuery;

  getTransform = function(from, to) {
    var A, H, b, h, i, k, k_i, l, lhs, m, ref, rhs;
    console.assert((from.length === (ref = to.length) && ref === 4));
    A = []; // 8x8
    for (i = k = 0; k < 4; i = ++k) {
      A.push([from[i].x, from[i].y, 1, 0, 0, 0, -from[i].x * to[i].x, -from[i].y * to[i].x]);
      A.push([0, 0, 0, from[i].x, from[i].y, 1, -from[i].x * to[i].y, -from[i].y * to[i].y]);
    }
    b = []; // 8x1
    for (i = l = 0; l < 4; i = ++l) {
      b.push(to[i].x);
      b.push(to[i].y);
    }
    // Solve A * h = b for h
    h = numeric.solve(A, b);
    H = [[h[0], h[1], 0, h[2]], [h[3], h[4], 0, h[5]], [0, 0, 1, 0], [h[6], h[7], 0, 1]];
// Sanity check that H actually maps `from` to `to`
    for (i = m = 0; m < 4; i = ++m) {
      lhs = numeric.dot(H, [from[i].x, from[i].y, 0, 1]);
      k_i = lhs[3];
      rhs = numeric.dot(k_i, [to[i].x, to[i].y, 0, 1]);
      console.assert(numeric.norm2(numeric.sub(lhs, rhs)) < 1e-9, "Not equal:", lhs, rhs);
    }
    return H;
  };

  applyTransform = function(element, originalPos, targetPos, callback) {
    var H, from, i, j, p, to;
    // All offsets were calculated relative to the document
    // Make them relative to (0, 0) of the element instead
    from = (function() {
      var k, len, results;
      results = [];
      for (k = 0, len = originalPos.length; k < len; k++) {
        p = originalPos[k];
        results.push({
          x: p[0] - originalPos[0][0],
          y: p[1] - originalPos[0][1]
        });
      }
      return results;
    })();
    to = (function() {
      var k, len, results;
      results = [];
      for (k = 0, len = targetPos.length; k < len; k++) {
        p = targetPos[k];
        results.push({
          x: p[0] - originalPos[0][0],
          y: p[1] - originalPos[0][1]
        });
      }
      return results;
    })();
    // Solve for the transform
    H = getTransform(from, to);
    
    // Apply the matrix3d as H transposed because matrix3d is column major order
    // Also need use toFixed because css doesn't allow scientific notation
    $(element).css({
      'transform': `matrix3d(${((function() {
        var k, results;
        results = [];
        for (i = k = 0; k < 4; i = ++k) {
          results.push((function() {
            var l, results1;
            results1 = [];
            for (j = l = 0; l < 4; j = ++l) {
              results1.push(H[j][i].toFixed(20));
            }
            return results1;
          })());
        }
        return results;
      })()).join(',')})`,
      'transform-origin': '0 0'
    });
    return typeof callback === "function" ? callback(element, H) : void 0;
  };

  makeTransformable = function(selector, callback) {
    return $(selector).each(function(i, element) {
      var controlPoints, originalPos, p, position;
      $(element).css('transform', '');
      
      // Add four dots to corners of `element` as control points
      controlPoints = (function() {
        var k, len, ref, results;
        ref = ['left top', 'left bottom', 'right top', 'right bottom'];
        results = [];
        for (k = 0, len = ref.length; k < len; k++) {
          position = ref[k];
          results.push($('<div>').css({
            border: '5px solid red',
            borderRadius: '10px',
            cursor: 'move',
            position: 'absolute',
            zIndex: 100000
          }).appendTo('body').position({
            at: position,
            of: element,
            collision: 'none'
          }));
        }
        return results;
      })();
      // Record the original positions of the dots
      originalPos = (function() {
        var k, len, results;
        results = [];
        for (k = 0, len = controlPoints.length; k < len; k++) {
          p = controlPoints[k];
          results.push([p.offset().left, p.offset().top]);
        }
        return results;
      })();
      
      // Transform `element` to match the new positions of the dots whenever dragged
      $(controlPoints).draggable({
        start: () => {
          return $(element).css('pointer-events', 'none'); // makes dragging around iframes easier 
        },
        drag: () => {
          return applyTransform(element, originalPos, (function() {
            var k, len, results;
            results = [];
            for (k = 0, len = controlPoints.length; k < len; k++) {
              p = controlPoints[k];
              results.push([p.offset().left, p.offset().top]);
            }
            return results;
          })(), callback);
        },
        stop: () => {
          applyTransform(element, originalPos, (function() {
            var k, len, results;
            results = [];
            for (k = 0, len = controlPoints.length; k < len; k++) {
              p = controlPoints[k];
              results.push([p.offset().left, p.offset().top]);
            }
            return results;
          })(), callback);
          return $(element).css('pointer-events', 'auto');
        }
      });
      return element;
    });
  };

  makeTransformable('.panel', function(element, H) {
    var i, j;
    console.log($(element).css('transform'));
    return $(element).html($('<table>').append($('<tr>').html($('<td>').text('matrix3d('))).append((function() {
      var k, results;
      results = [];
      for (i = k = 0; k < 4; i = ++k) {
        results.push($('<tr>').append((function() {
          var l, results1;
          results1 = [];
          for (j = l = 0; l < 4; j = ++l) {
            results1.push($('<td>').text(H[j][i] + ((i === j && j === 3) ? '' : ',')));
          }
          return results1;
        })()));
      }
      return results;
    })()).append($('<tr>').html($('<td>').text(')'))));
  });

}).call(this);



}





/* 
=============================================
ZOOM IMAGE
================================================ 
*/

function zoomimage() {


  
  
  $(document).ready(function(){ 
    var elements = document.querySelectorAll( '.demo-image' );
    Intense( elements );
    }); 
     
    console.log("imagezoom loaded");

}





/* 
=============================================
SORT FINAL
================================================ 
*/

function sorting() {



  "use strict";

  var Shuffle = window.Shuffle;
  
  
  // ES7 will have Array.prototype.includes.
  function arrayIncludes(array, value) {
    return array.indexOf(value) !== -1;
  }
  
  // Convert an array-like object to a real array.
  function toArray(thing) {
    return Array.prototype.slice.call(thing);
  }
  
  
  /**/
    
  
  
  var Demo = function(element) {
   
    /*dodano*/
    this.element = element;
    this.gridItems = this.element.querySelectorAll('.picture-item');
    this.shapes = Array.from(document.querySelectorAll(".js-shapes select"));
    this.colors = Array.from(document.querySelectorAll(".js-colors button"));
   /* this.styles = toArray(document.querySelectorAll('.filter-group div')); */
    this.message = document.querySelector('.js-message');
  
  
    this.shuffle = new Shuffle(element, {
      easing: "cubic-bezier(0.165, 0.840, 0.440, 1.000)", // easeOutQuart
      sizer: ".the-sizer",
       buffer: 1,
      /*DODANO*/
      itemSelector: '.picture-item',
    });
   
  
    
    this.filters = {
      shapes: [],
      colors: [],
     /* styles: [], */
    };
      
        this.addSorting();
  
    this._bindEventListeners();
     
  
  };
  
  
  
  
  
  
  Demo.prototype.setupEvents = function () {
    document.querySelector('#append').addEventListener('click', this.onAppendBoxes.bind(this));
  };
  
  /**
   * Create some DOM elements, append them to the shuffle container, then notify
   * shuffle about the new items. You could also insert the HTML as a string.
   */
  Demo.prototype.onAppendBoxes = function () {
    var elements = this._getArrayOfElementsToAdd();
  
    elements.forEach(function (element) {
      this.element.appendChild(element);
    }, this);
  
    // Tell shuffle elements have been appended.
    // It expects an array of elements as the parameter.
    this.shuffle.add(elements);
    console.log("NEW CHILDREN ADDED");
  };
  
  
  
  
  
  /**
   * Sorting
   */
  Demo.prototype.addSorting = function () {
    document.querySelector('.sort-order').addEventListener('change', this._handleSortChange.bind(this));
    document.querySelector('.sort-options').addEventListener('change', this._handleSortChange.bind(this));
  };
  
  Demo.prototype._handleSortChange = function (event) {
    //var value = event.target.value;
    var value = document.querySelector('.sort-options').value;
  
    function reverseOrder() {
      if (document.querySelector('.sort-order').checked) {
        return true;
      } 
      return false;
    }
    reverseOrder();
    
    function sortByShape(element) {
      return element.getAttribute('data-shape');
    }
  
    function sortByColor(element) {
      return element.getAttribute('data-color');
    }
     function sortByTitle(element) {
      return element.getAttribute('data-title');
    }
  
  
    var options;
    if (value === 'shape') {
      options = {
        reverse: reverseOrder(),
        by: sortByShape,
      };
    } else if (value === 'color') {
      options = {
        reverse: !reverseOrder(),
        by: sortByColor,
      };
      } else if (value === 'title') {
      options = {
        reverse: !reverseOrder(),
        by: sortByTitle,
      };
    } else {
      options = {};
    }
    this.shuffle.sort(options);
  };
  
  
  
  
   
  /**
   * Bind event listeners for when the filters change.
   */
  Demo.prototype._bindEventListeners = function() {
    this._onShapeChange = this._handleShapeChange.bind(this);
    this._onColorChange = this._handleColorChange.bind(this);
  /*  this._onStyleChange = this._handleStyleChange.bind(this); */
    
    
    this.shapes.forEach(function(select) {
      select.addEventListener("change", this._onShapeChange);
    }, this);
  
    this.colors.forEach(function(button) {
      button.addEventListener("click", this._onColorChange);
    }, this);
  
   /*this.styles.forEach(function (div) {
      div.addEventListener('click', this._onStyleChange);
    }, this);    */
    
    
    /* */
    this.addSearchFilter();
  };
  
  
  /**
   * Get the values of each checked input.
   * @return {Array.<string>}
   */
  Demo.prototype._getCurrentShapeFilters = function() {
    return this.shapes
      .filter(function(select) {
        return select.value;
      })
      .map(function(select) {
        return select.value;
      });
  };
  
  /**
   * Get the values of each `active` button.
   * @return {Array.<string>}
   */
  Demo.prototype._getCurrentColorFilters = function() {
    return this.colors
      .filter(function(button) {
        return button.classList.contains("active");
      })
      .map(function(button) {
        return button.getAttribute("data-value");
      });
  };
  
  /*
  Demo.prototype._getCurrentStyleFilters = function () {
    return this.styles.filter(function (div) {
      return div.classList.contains('active');
    }).map(function (div) {
      return div.getAttribute('data-group');
    });
  };
  */
  
  
  /**
   * A shape input check state changed, update the current filters and filte.r
   */
  Demo.prototype._handleShapeChange = function() {
    this.filters.shapes = this._getCurrentShapeFilters();
    this.filter();
  };
  
  /**
   * A color button was clicked. Update filters and display.
   * @param {Event} evt Click event object.
   */
  Demo.prototype._handleColorChange = function(evt) {
    var button = evt.currentTarget;
  
    // Treat these buttons like radio buttons where only 1 can be selected.
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    } else {
      this.colors.forEach(function(btn) {
        btn.classList.remove("active");
      });
  
      button.classList.add("active");
    }
  
    this.filters.colors = this._getCurrentColorFilters();
    this.filter();
  };
  
  /*
  Demo.prototype._handleStyleChange = function (ev) {
    var div = ev.currentTarget;
  
    // Treat these buttons like radio buttons where only 1 can be selected.
    if (div.classList.contains('active')) {
      div.classList.remove('active');
    } else {
      this.colors.forEach(function (dv) {
        //dv.classList.remove('active');
      });
  
      div.classList.add('active');
    }
  
    this.filters.styles = this._getCurrentStyleFilters();
    this.filter();
  };
  
  */
  
  
  
  /**
   * Filter shuffle based on the current state of filters.
   */
  Demo.prototype.filter = function() {
    if (this.hasActiveFilters()) {
      this.shuffle.filter(this.itemPassesFilters.bind(this));
      
       /* UBAČENO*/
    /*   this.shuffle.update();
      console.log("Hshuffle updated"); */
      
        setTimeout(()=>{
     locoScroll.update();
      console.log("Locoscrollupdated 1");
  },200)  
      
    } else {
      this.shuffle.filter(Shuffle.ALL_ITEMS);
       setTimeout(()=>{
        locoScroll.update();
      console.log("Locoscrollupdated 2");
      },200)  
    }
    
    if(this.shuffle.visibleItems == 0){
        this.message.innerHTML = (this.shuffle.visibleItems) + " items";
     setTimeout(()=>{
     locoScroll.update();
      console.log("Locoscrollupdated 3");
       },200)  
      
    } else{
    this.message.innerHTML = "";
    
     }
    
  
  };
  
  /**
   * If any of the arrays in the `filters` property have a length of more than zero,
   * that means there is an active filter.
   * @return {boolean}
   */
  Demo.prototype.hasActiveFilters = function() {
    return Object.keys(this.filters).some(function(key) {
      return this.filters[key].length > 0;
    }, this);
  };
  
  
  
  
  
  
  
  
  
  /**
   * Determine whether an element passes the current filters.
   * @param {Element} element Element to test.
   * @return {boolean} Whether it satisfies all current filters.
   */
  Demo.prototype.itemPassesFilters = function(element) {
    var shapes = this.filters.shapes;
    var colors = this.filters.colors;
    /* var styles = this.filters.styles; */
    var shape = element.getAttribute("data-shape");
    var color = element.getAttribute("data-color");
     /* var style = element.getAttribute('data-groups'); */
  
   // If there are active shape filters and this shape is not in that array.
    if (shapes.length > 0 && !arrayIncludes(shapes, shape)) {
      return false;
    }
   // If there are active color filters and this color is not in that array.
    if (colors.length > 0 && !arrayIncludes(colors, color)) {
      return false;
    }
    /*
     // If there are active color filters and this color is not in that array.
    if (styles.length > 0 && !arrayIncludes(styles, style)) {
      return false;
    }
    */
    return true;
  };
  
  
  
  
  
  
  /* S E A R C H */
  
  
  // Advanced filtering
  Demo.prototype.addSearchFilter = function () {
    document.querySelector('.shuffle-search').addEventListener('keyup', this._handleSearchKeyup.bind(this));
  };
  
  // Filter the shuffle instance by items with a title that matches the search input.
  Demo.prototype._handleSearchKeyup = function (evt) {
    var searchText = evt.target.value.toLowerCase();
    var searchInput = document.querySelector('.shuffle-search');
    
    
    
       // Check if Search input has value to toggle class
    if (searchInput && searchInput.value) {
      $('.catalog-search').addClass('input--filled');
    } else {
      $('.catalog-search').removeClass('input--filled');
    }
      
      setTimeout(()=>{
     locoScroll.update();
      console.log("Locoscrollupdated SEARCH");
       },200)   
    
    this.shuffle.filter(function (element, shuffle) {
      
      /**OVAJ DIO KODA SREDI***************************************************/
      
      
        // If there is a current filter applied, ignore elements that don't match it.
      if (shuffle.group !== Shuffle.ALL_ITEMS) {
        // Get the item's groups.
        var groups = JSON.parse(element.getAttribute('data-groups'));
        var isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;
  
        // Only search elements in the current group
        if (!isElementInCurrentGroup) {
          return false;
        }
      }
      
      
   /*****************************************************/
   
      
      
      var titleElement = element.querySelector('.lokacije-small-header');
      var titleText = titleElement.textContent.toLowerCase().trim();
  
      return titleText.indexOf(searchText) !== -1;
      
         
    });
  };
   
  setTimeout(()=>{ 
  /*document.addEventListener("DOMContentLoaded", function() { */
    window.demo = new Demo(document.querySelector(".js-shuffle"));
     //locoScroll.update();
    console.log("SHUFFLE UČITAN i loco updated");
     },1000)  
  
   

}


/* 
=============================================
OUTLINE ONAMA HERO
================================================ 
*/

function outlinehero() {

/*OUTLINE TEXT OVER IMAGE MASK */

/*$(document).ready(function(){ */
 /*  ScrollTrigger.refresh();
  console.log("FUCKER IS REFRESHED"); */
gsap.set('.filled-text, .outline-text', {x:-500});
gsap.to(".filled-text, .outline-text", {
  scrollTrigger:{
  scroller: ".smooth-scroll",
    trigger: ".filled-text, .outline-text", 
    start: "top bottom", 
    end: "bottom top", 
    scrub: 1
  },
  x: 500
});

gsap.set('.filledtwo, .outlinetwo', {x:500});
gsap.to(".filledtwo, .outlinetwo", {
  scrollTrigger:{
  scroller: ".smooth-scroll",
    trigger: ".filledtwo, .outlinetwo", 
    start: "top bottom", 
    end: "bottom top", 
    scrub: 1
  },
  x: -500
});

/*
}) */
}


function horizpin() {
/**/
// Pinning and horizontal scrolling

let horizontalSections = document.querySelectorAll(".horizontal-scroll");

horizontalSections.forEach(horizontalSection => {
   let pinWrap = document.querySelector(".pin-wrap");
   let pinWrapWidth = pinWrap.offsetWidth;
   let horizontalScrollLength = pinWrapWidth - window.innerWidth;
   gsap.to(pinWrap, {
     scrollTrigger: {
      scroller: ".smooth-scroll",
       scrub: 2,
       trigger: ".horizontal-scroll",
       pin: ".stophor",
       /* anticipatePin: 1, */
       //markers: true,
       start: "top top",
       
       end: () => `+=${pinWrapWidth}`,
       invalidateOnRefresh: true 
       },

     x: -horizontalScrollLength,
     ease: "none" });

 });

}