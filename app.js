


gsap.registerPlugin(ScrollTrigger);

let locoScroll;

gsap.config({ nullTargetWarn: false });
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
  const container = select('#main');

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
  /* locoScroll.on("scroll", () => ScrollTrigger.update()); */
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
    /*OVO NE RADI SA DATA_SCROLL_SECTION */
   pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"  
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
///////////// ///////////// ///////////// ///////////// ///////////// ///////////// ///////////// 


// CLOSE LOKACIJE SELECT DROPDOWN ON SCROLL
if (document.querySelector('#lokacije')) {

//check object is in view
 function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top, 
        elementHeight = $(elm).height();   

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
} 

   locoScroll.on('scroll', func => {
    if (checkVisible($('#selectone'))) {
 $("#selectone, #selecttwo, #sorto").select2('close');
 console.log("skrolam i zatvaram SELECT");
} 
else {
  
}
});

} 
 
/* 
locoScroll.on('call', func => {
  if (checkVisible($('#myID1'))) {
      //do something when myID1 is in view
      console.log("test myID1");
  } 
   else {
      // do nothing
  }
}); */


/*
================================================================================
ON WINDOW RESIZE
================================================================================
*/

window.addEventListener('resize', function(){
  setTimeout(()=>{
  locoScroll.update();
  ScrollTrigger.refresh(true);
},200) 
  console.log("RESIZE ST+LS");
});



/*
================================================================================
RELOAD ON MOBILE ORIENTATION CHANGE // OVO TESTIRAJ DA LI TREBA
================================================================================
*/

/* (function(w){

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

})( this ); */
}

/*
================================================================================
PRELOADER --> vodi na --> INIT CONTENT
================================================================================
*/
function initLoader() {

  const tlLoaderIn = gsap.timeline({
    id: 'tlLoaderIn',
    defaults: {duration: 0.8, ease: 'power3.out'},
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
    .set(".imageloadicon", {autoAlpha: 0})
    .set(loaderContent, {autoAlpha: 1})
    .set(".txt", {yPercent: 100})
    .set(".imageloadicon", {autoAlpha: 0})
    .set(".l1,.l3", {scaleX: 0})
    .set(".l2", {scaleY: 0})
    .set(".freveal", {yPercent: 100})
    .set(mask, {yPercent: 0})
    .set(loaderInner, {scaleX: 0, autoAlpha:1}) 
    //.set("#main", {y: 80})

    /* OVO JE DODANO ZA PREZENTACIJU*/
   /*  .set(progress, {autoAlpha: 0}) */
   /* .to(loaderInner, {scaleY: 1, transformOrigin: 'bottom', ease: 'power1.inOut'}) */
    .to(loaderInner, {scaleX: 1,transformOrigin: 'left bottom',ease: 'power1.inOut'}, "<") 
   .to(loaderInner, {scaleX: 0,transformOrigin: 'right bottom',ease: 'power1.inOut'}) 

    .addLabel('revealImage')
    .to(".l1", {scaleX: 1, transformOrigin: 'left', duration: 0.6}, 'revealImage+=0.1')
    .to(".l2", {scaleY: 1, transformOrigin: 'bottom', duration: 0.6}, 'revealImage+=0.1')
    .to(".l3", {scaleX: 1, transformOrigin: 'left', duration: 0.6}, 'revealImage+=0.1')
    
    .to(".freveal", {yPercent: 0, stagger: 0.03}, 'revealImage+=0.2')

  // LOADER OUT
  const tlLoaderOut = gsap.timeline({
    id: 'tlLoaderOut',
    defaults: {duration: 0.8, ease: 'power3.inOut'},delay: 0.2});

  tlLoaderOut

    .to([loader, loaderContent], {yPercent: -100}, 0.2)
    //.to('#main', {y: 0}, 0);

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
/*   select('body').classList.remove('is-loading'); */

 /*  if ($('body').hasClass('page-template-lokacije')) {
    select('.lokacije--main-container').classList.remove('is-loading'); 
                }  */
  select('.fill-background').classList.add('is-loading');
  

 // (function($) {

    // your custom script
    var myscripts = {
        init: function () {
            if ($('body').hasClass('home')) {
            this.home();
        } else if ($('body').hasClass('page-template-onama')) {
            this.onama();
        } 
        else if ($('body').hasClass('page-template-lokacije')) {
          this.lokacije();
        }
        else if ($('body').hasClass('single-lokacije')) {
          this.sololokacije();
        }
        else if ($('body').hasClass('page-template-kontakt')) {
          this.kontakt();
        }
        },
        home: function () {
            homevideo();
            openMobileMenu();
            console.log('from app.js | home');
        },
        onama: function () {
            outlinehero();
            numberoll();
            horizpin();
            playpausevideo();
            smallCounteronama();
            openMobileMenu();
            onamacounter();
            console.log('from app.js | o nama');
        },
        lokacije: function () {
          fadeinlokacije();
          newSort(); 
          batchLokacije();
          sortChangeLayout();
          lokacijeBotuni();
          
          stopScrollMap();
          openMobileMenu();
          pinHover();
          lokacijehover();
          locationMap();
          console.log('from app.js | lokacije');
        },
        sololokacije: function () {
          uploadCrop();
          lokacijeBotuni();
          addAriaAttrib();
         /*  saveaspdf(); */
          lokacijeTabs(); 
          mockupSimulatorProportions();
          simulatorButton();
          openMobileMenu();
          //soloMap();
       
        
          
          
          mockupImageResizer();
          openTestYourDesign();
         
          
          console.log('from app.js | solo lokacije');
        },
        kontakt: function () {
          openMobileMenu();
          console.log('from app.js | kontakt');
        } 

    };
  //});

  
 

  
 /* ORIGINAL*/
  initScroll();
  
  /* LOAD ON EVERY PAGE ---- edit*/
  /* passiveListeners(); */
  webflowInteractions();
  customCursor();
  underlineLink();
  scrollTotop();
  hideMenu();
  openMobileMenu();
  openTestYourDesign();
  simulatorButton();
  addLinkAttrib();
  //splidesolo();
  //stopScrollMap();
  //lokacijeTabs();
  //uploadCrop();
 // splidesolo();

  console.log("initial scripts loaded...");


  myscripts.init();
/* 
  ScrollTrigger.refresh(true); // ScrollTrigger Refresh
  console.log("scrolltrigger refreshed AFTER all script load"); */
  /* $(document).ready(function() { */
  setTimeout(() => {
   /*  locoScroll.update(); */
    ScrollTrigger.refresh(true);
    console.log("Locoscrollupdated + SCROLLTRIGGER NAKON 5 SEKUNDI + shuffle");
  /* }, 5000) */

});
 

//DRUKČIJE SE PONAŠA AKO UBACIMO UNUTAR document ready/ 

 
 /* locoScroll.update(); 
console.log("LOCO FRESHH"); 
*/

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
  const tl = gsap.timeline({defaults: {duration: 0.8, ease: 'power3.out'}});
  tl
  .set(".imageloadicon", {autoAlpha: 1})
  .set(loaderInner, {autoAlpha: 0})
  .fromTo(loader, {yPercent: -100}, {yPercent: 0})
  .fromTo(loaderMask, {yPercent: 80}, {yPercent: 0}, 0)
  //.to(container, {y: 80}, 0);

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
  const tl = gsap.timeline({defaults: {duration: 0.8, ease: 'power3.inOut', delay: 0.4},
    // OVDJE SE INICIRA PONOVO SAV JS CONTENT / AKO ZATREBA
    onComplete: () => initContent()
  });
  tl

    .to(loader, {yPercent: 100})
    .to(loaderMask, {yPercent: -80}, 0)
    //.from(container, {y: -80}, 0);
    return tl;
}

/**/

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

  barba.hooks.after((data) => {
    let js = data.next.container.querySelectorAll('main script');
    if(js != null){
            js.forEach((item) => {
                console.log(js)
                eval(item.innerHTML);
            });
    }

    console.log("SCRIPTS EVALUATED NO PROBLEM");
});
  // scroll to the top of the page
/*   barba.hooks.enter(() => {
    window.scrollTo(0, 0);

  }); */
  barba.hooks.afterLeave((data) => {
    // Set <body> classes for "next" page
    var nextHtml = data.next.html;
    var response = nextHtml.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', nextHtml)
    var bodyClasses = $(response).filter('notbody').attr('class')
    $("body").attr("class", bodyClasses);
    
    console.log("BODY CLASSES UPDATED");
  });
  
  barba.hooks.enter((data) => {
    window.scrollTo(0, 0);
    
  /*   let parser = new DOMParser();
    let dom = parser.parseFromString(data.next.html, 'text/html');
    let nextHeader = parser.parseFromString(data);
    document.querySelector('.header').innerHTML = nextHeader.innerHTML; */
     });
    /*  console.log("HEADER SCRIPT"); */

  //kill scrolltrigger
  barba.hooks.beforeLeave(() => {
   locoScroll.destroy(); 
   console.log("locoscroll killed ILI ...");
     if (ScrollTrigger.getAll().length > 0) {
      ScrollTrigger.getAll().forEach((trigger) => {
          trigger.kill()
          console.log("scrolltrigger killed...");
      });
  }
    Webflow.destroy();
    console.log("webflow interactions killed...");

  /* NEW JACK SCROLLTRIGGER DESTROY*/
/*
  const cleanGSAP = () => {
    ScrollTrigger.getAll().forEach(t => t.kill(false));
    ScrollTrigger.refresh();
    window.dispatchEvent(new Event("resize"));
  };
*/
  
  });
  //init scrolltrigger
  barba.hooks.afterEnter(() => {

  });

  /*
  ================================================================================
  BARBA PREFETCH
  ================================================================================
  */
  //barba.use(barbaPrefetch);

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
              },
             
            }, {

              namespace: 'onama',
              
              beforeEnter(data) {
                playpausevideo();
                //onamacounter();
                simpleaccordion();
                zoomimage();
                accordionhover();
                smallCounteronama();
              },
             
            }, {

              namespace: 'lokacije',

              beforeEnter(data) {
                fadeinlokacije();
                newSort();
                stopScrollMap();
                webflowInteractions();
               /*  pinHover(); */
                lokacijehover();
                /* infiniteScroll(); */

                },
              beforeLeave({current}) {
              //  map.remove();
               // console.log("map removed...");
              },
            }, {

              namespace: 'lokacijesolo',

              beforeEnter(data) {

                printTOPDF();
                console.log("PRINT TO PDF");
                //soloMap();
                //splidesolo();
               // console.log("SPLIDE before enter loaded!!!");
               // openTestYourDesign();
                uploadCrop();
               /*  saveaspdf(); */
                lokacijeTabs(); 
                mockupSimulatorProportions();
                simulatorButton();
                simulatorgsapset();

              

               /*  if (document.querySelector('#solovid')) {
                document.getElementById('solovid').play();
                } */
              },
                beforeLeave(data) {
             /*  splide.on( 'destroy', function() { 
                splide.destroy(completely = true);
                 console.log("SPLIDE ODJEBAN"); 
                   });  */

             },
            }, {

              namespace: 'npp',
              beforeEnter(data) {
                simpleaccordion();
                accordionhover();
              }
            }, {

              namespace: 'uvjeti',
              once(data) {

              },
              beforeEnter(data) {
                simpleaccordion();
                accordionhover();

              }
            }, {
              namespace: 'privatnost',
              
              beforeEnter(data) {
                simpleaccordion();
                accordionhover();

              }
            }, {

              namespace: 'reference',
              
              beforeEnter(data) {
                logohover();
              }
            }, {

              namespace: 'kontakt',
              
              beforeEnter(data) {
                openMobileMenu();
                console.log("KONTAKT OPEN MOBILE MENU LOADED");
              }
            }, {

              namespace: '404',
              
              beforeEnter(data) {
                backToPrev();
                console.log("back to prev page loaded");
              }
            }, {

              namespace: 'topdftest',

              beforeEnter(data) {
                matrixtransform();
                console.log("MATRIX TRANS LOADANA");
              

              }
            }, {

}],
    /*
    ================================================================================
    BARBA TRANSITIONS
    ================================================================================
    */
    transitions: [{
   
      once({next
      }) {
       
        // do something once on the initial page load
        initLoader();
      },

      async leave({current}) {
          // animate loading screen in
        await pageTransitionIn(current);
        
      },
      enter({next}) {
        // animate loading screen away
        pageTransitionOut(next);
        
      },

   /*    	after(data) {
			let parser = new DOMParser();
			let htmlDoc = parser.parseFromString(data.next.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>', data.next.html), 'text/html');
			let bodyClasses = htmlDoc.querySelector('notbody').getAttribute('class');
			body.setAttribute('class', bodyClasses);
      console.log("BODY CLASSES UPDATED");
		//	scripts.init();
		//	borderOut(); 
		}, */

    
 
      beforeEnter({next}) {
                   
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
LOCATION MAP
================================================================================
*/
function locationMap() {
 /*  setTimeout(()=>{  */
   
  mapboxgl.accessToken = 'pk.eyJ1IjoiZnJrYXBsdXMiLCJhIjoiY2tybHY1djhuNDE4YzJ6cDhtZmkzdzFvaiJ9.hTRDicTnxDfby_3lEybkNw';

  var bounds = [
    [13.109302076751561, 42.167215037402855],
    [19.821668059258826, 46.816119904050964]
  ];

  var map = new mapboxgl.Map({
    buffer: 0,
    container: 'map', // container ID
    style: 'mapbox://styles/frkaplus/ckrm2d3v226f017lps9oqdrpm?optimize=true', // style URL / dodano optimize=true
    center: [16.527, 44.663], // starting position [lng, lat]
    zoom: 6.64, // starting zoom
    minZoom: 6.64, // note the camel-case
    maxZoom: 19,
    maxBounds: bounds,
    //bearing: 27,
   // pitch: 45
  });


/* DODANO ALI NE RADI*/
// map.addControl(new mapboxgl.NavigationControl()); 


$.getJSON('https://raw.githubusercontent.com/oohohoo/frkaplus/main/frka.geojson', function (geojson) {
  geojson.features.forEach(function(marker) {
          // create a HTML element for each feature
          var el = document.createElement('div');
          el.className = 'marker';
          new mapboxgl.Marker(el)
              .setLngLat(marker.geometry.coordinates)
              .setPopup(new mapboxgl.Popup()
              //.setHTML(marker.properties.title))
              .setHTML(
  '<h3>' +
  marker.properties.title +
  '</h3>' +
  '<p>' +
  marker.properties.description +
  '</p>'
  ))
              
              
              .addTo(map);        
      });
  
    });




map.doubleClickZoom.enable();
console.log("MAP DOUBLECLICK!"); 




/*
================================================================================
FLY TO LOCATION
================================================================================
*/

/* document.getElementById('fly').addEventListener('click', function () {
  map.flyTo({
  center: [15.9595615, 45.7768948],
  zoom: 18, // starting zoom
  essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
  });
 */

  /*
================================================================================
FLY TO REGION
================================================================================
*/
document.getElementById('croatia').addEventListener('change', function () {
  // Fly to a random location by offsetting the point -74.50, 40
  // by up to 5 degrees.
  map.flyTo({
    center: [16.455, 44.724],
    zoom: 6.93, // starting zoom
    essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });
});

document.getElementById('zagreb').addEventListener('change', function () {
  map.flyTo({
    center: [15.969, 45.802],
    zoom: 11, 
    essential: false 
  });
});

document.getElementById('sibenik').addEventListener('change', function () {
  map.flyTo({
    center: [15.900, 43.725],
    zoom: 10,
    essential: true 
  });
});

document.getElementById('osijek').addEventListener('change', function () {
  map.flyTo({
    center: [18.711, 45.570],
    zoom: 10, 
    essential: true 
  });
});

document.getElementById('koprivnica').addEventListener('change', function () {
  map.flyTo({
    center: [16.828, 46.137],
    zoom: 10,
    essential: true 
  });
});


document.getElementById('karlovac').addEventListener('change', function () {
  map.flyTo({
    center: [15.554, 45.471],
    zoom: 10, 
    essential: true 
  });
});

document.getElementById('zadar').addEventListener('change', function () {
  map.flyTo({
    center: [15.243, 44.114],
    zoom: 10,
    essential: true
  });
});

/*
================================================================================
MAP RESIZE
================================================================================
*/

 map.once('load', () => {
map.resize();
});
console.log("MAP RESIZE!"); 

/*  },5000)    */
 console.log("MAP LOADDDDDDD!"); 

/* mapboxgl.clearStorage();
console.log("STORAGE CLEARED");  */

map.on("load", function (e) {
  const mapContainerEl = document.getElementById("map");
  //mapContainerEl.style.visibility = "visible";
  mapContainerEl.style.opacity = "1";
  $('body a[href^="http"]').not('a[href*="' + location.hostname + '"]').attr({target: "_blank", rel: "noopener noreferrer nofollow"});
});

/* },200)  */ 
/*
================================================================================
FADE IN MAP
================================================================================
*/
 
var fadein = gsap.timeline({defaults:{ease:'none'}})
.to('.loader-icon', {autoAlpha:1})
.to('.loader-wrap', {rotate: 360, repeat: -1, duration:5}, "<")
//.to('.loader-txt', {autoAlpha:1, repeat: -1, duration:0.5}, "<")
//.to('.static', {autoAlpha:0, duration:1.5, delay:0.5})
.to('.loader-icon', {autoAlpha:0}, "-=1.5")
//.to('.loader-txt', {autoAlpha:0}, "<")
}
/*ADD DATA ATTRIBUTE TO MAPBOX LINKS*/
/*   document.querySelectorAll( 'a[href^="http"]:not([href*="example.com"])' ).forEach(anchor => anchor.setAttribute( 'rel', 'noopener noreferrer nofollow' )); 
 */


  
/*
================================================================================
SOLOMAP MAP
================================================================================
*/
function soloMap() {

  mapboxgl.accessToken = 'pk.eyJ1IjoiZm9nc2VsbGVyIiwiYSI6ImNrN2VpbXlpbjAwNDIzbnM1N2ZhMW9laGkifQ.DUf-8r1jXF4o7ApMUcKVXQ';

  var bounds = [
    [13.109302076751561, 42.167215037402855],
    [19.821668059258826, 46.816119904050964]
  ];

  var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/fogseller/cknip0h0j0oqm17mgvd8wwi8y?optimize=true', // style URL / dodano optimize=true
    center: [16.013, 45.812], // starting position [lng, lat]
    zoom: 17.42, // starting zoom
    minZoom: 6.64, // note the camel-case
    maxZoom: 19,
    maxBounds: bounds,
/*     bearing: 27,
    pitch: 45 */
  });


/* DODANO ALI NE RADI*/
/*  map.addControl(new mapboxgl.NavigationControl());  */





map.doubleClickZoom.enable();
console.log("MAP DOUBLECLICK!"); 



/*
================================================================================
MAP RESIZE
================================================================================
*/

 map.once('load', () => {
map.resize();
});
console.log("MAP RESIZE!"); 

/*
================================================================================
FADE IN MAP
================================================================================
*/
 
var fadein = gsap.timeline({defaults:{ease:'none'}})
.to('.loader-icon', {autoAlpha:1})
.to('.loader-wrap', {rotate: 360, repeat: -1, duration:2}, "<")
.to('.loader-txt', {autoAlpha:1, repeat: -1, duration:0.5}, "<")
.to('.lokacije-mapbox-container', {autoAlpha:1, duration:1.5, delay:2})
.to('.loader-icon', {autoAlpha:0}, "-=1.5")
.to('.loader-txt', {autoAlpha:0}, "<")

}





/*
================================================================================
WEBFLOW INTERACTIONS REINIT
================================================================================
*/

function webflowInteractions() {
  Webflow.ready();
  Webflow.require('ix2').init();
  console.log("WEBFLOW RELOAD");

}

/*
================================================================================
PREVENT SCROLL UNDER FS MENU // PODESI
================================================================================
*/
function stopScrollMap() {

function handler1() {
  locoScroll.stop();
  $(this).one("click", handler2);
}

function handler2() {
  locoScroll.start();
  $(this).one("click", handler1);
}
$(".fs-nav-butt").one("click", handler1);



$(".mapbox").mouseenter(function () {
  locoScroll.stop();
});

$(".mapbox").mouseout(function () {
  locoScroll.start();

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
           console.log("locoscroll updated after accordion...");
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
          console.log("locoscroll updated after accordion...");
          
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
          console.log("locoscroll updated after accordion...");
         }
      })
    }
  })
})

}

/*
================================================================================
HERO - APELI
================================================================================
*/

function heroApeli() {

var action = gsap.timeline({repeat:-1, defaults:{duration:0.8, ease:'none'}})
.to('.fadeheader', {autoAlpha:1, stagger:5})
.to('.fadeheader', {autoAlpha:0, stagger:5}, 4)

}

/*
================================================================================
DYNAMIC YEAR
================================================================================
*/

/* function yearupdate() {

  var date = new Date().getFullYear();
  document.getElementById("year").innerHTML = date;

} */


/*
================================================================================
REFERENCE LOGOTIP HOVER 
================================================================================
*/

function logohover() {

  gsap.utils.toArray(".reference--logo-wrap").forEach(container => {
        let logoitem = container.querySelector(".reference-box"),
          // silhouette = container.querySelector(".silhouette .cover"), */
          tl = gsap.timeline({
            paused: true
          });

        tl.to(logoitem, {
          color: "#ffdc52",
          backgroundColor: "#231f20",
          duration: 0.3,
          ease: 'power1.inOut',
        });

        container.addEventListener("mouseenter", () => tl.play());
        container.addEventListener("mouseleave", () => tl.reverse());
  });

}

/*
================================================================================
ACCORDION HOVER
================================================================================
*/

function accordionhover() {

  gsap.utils.toArray(".acc-header-wrapper").forEach(container => {
        let naslov = container.querySelector(".acc-header-cont"),
         ikona = container.querySelector(".right-icon"),
          tlhover = gsap.timeline({
            paused: true
          });

        tlhover.to(naslov, {
          x: 5,
          duration: 0.2,
          ease: 'power1.inOut',
        });

        tlhover.to(ikona, {
          x: -30,
          duration: 0.2,
          ease: 'power1.inOut',
        },"<" );

        container.addEventListener("mouseenter", () => tlhover.play());
        container.addEventListener("mouseleave", () => tlhover.reverse());
  });

  
  
  /* ACCORDION PLUS */
    $('.resto, .accord').click(function(){
      // If the clicked element has the rotate class, remove the rotate class from EVERY .panel-title>.state element
      if ($(this).find('.plusicon').hasClass('hide')){
        $('.panel-title').find('.plusicon').removeClass('hide');
        $(this).find('.minusicon').addClass('hide');
        $(this).find('.plusicon').removeClass('hide');
      }
           // Else, the element doesn't have the rotate class, so we remove it from every element before applying it to the element that was clicked
      else {
        $('.resto, .accord').find('.plusicon').removeClass('hide');
        $(this).find('.plusicon').addClass('hide');
        $('.resto, .accord').find('.minusicon').addClass('hide');
        $(this).find('.minusicon').removeClass('hide');
      }
     
    });
}


/*
================================================================================
LOKACIJE ITEM HOVER
================================================================================
*/

function lokacijehover() {

   gsap.set(".webinar-posts__event-item img", {scale:1}) 
  gsap.utils.toArray(".webinar-posts__event-item").forEach(container => {
        let lokacija = container.querySelector(".webinar-posts__event-item img"),
           /* colour = container.querySelector(".webinar-posts__event-list li "),  */
          tl = gsap.timeline({
            paused: true
          });

        tl.to(lokacija, {
          scale:1.05,
          duration: 0.25,
          ease: 'power1.inOut',
          overwrite: "true"
        })

       /*   tl.to(colour, {
           color: "#ffdc52",
           backgroundColor: "#231f20",
           rotate: 30,
          borderBottomWidth:3,
          duration: 0.3,
          ease: 'power1.inOut',
          overwrite: "true"
        }, "<"); 
        console.log("HOVERRRRRRRRRRRRR ITEM"); */

        container.addEventListener("mouseenter", () => tl.play());
        container.addEventListener("mouseleave", () => tl.reverse());
  });

}




/*
================================================================================
TEST YOUR DESIGN MODUL
================================================================================
*/

function openTestYourDesign() {
  if(document.querySelector('#tweenbox')) {
    

  let forwards = true;
  document.querySelector("#tweenbutton").addEventListener("click", ev => {
    if (forwards) {
      const tl = gsap.timeline({})

        .to('#tweenbox', {
          scaleY: 1,
          duration: 0.64,
          ease: 'power2.inOut',
          overwrite: "auto"
        })

        .to('.test-content', {
          autoAlpha: 1,
          duration: 0.64,
          ease: 'power2.inOut',
          overwrite: "auto"
        })

        .to('#tweenbutton', {
          scale: 0.6,
          ease: 'power2.inOut',
          overwrite: "auto"
        }, "<")
        
        .to('.vizsim-txt', {
          autoAlpha: 0,
          overwrite: "auto"
        }, "<")

        .to('.closetrigger', {
          autoAlpha: 1,
          overwrite: "auto"
        }, "<")

       
        


    } else {

      const tl2 = gsap.timeline({})

        .to('.test-content', {
          autoAlpha: 0,
          duration: 0.64,
          ease: 'power2.inOut',
          overwrite: "auto"
        })

        .to('#tweenbox', {
          scaleY: 0,
         //autoAlpha: 0,
          duration: 0.64,
          ease: 'power2.inOut',
          overwrite: "auto",

        })

        .to('#tweenbutton', {
          scale: 1,
          duration: 0.64,
          ease: 'power2.inOut',
          overwrite: "auto"
        }, "<")

        .to('.vizsim-txt', {
          autoAlpha: 1,
          duration: 0.64,
          overwrite: "auto"
        }, "<")

     
        .to('.closetrigger', {
          autoAlpha: 0,
          duration: 0.64,
          overwrite: "auto"
        }, "<")


    }
    forwards = !forwards;
  });

/* DISABLE LOCO WHEN SIMULATOR OPEN*/
  $("#tweenbox, .testbutton").mouseenter(function () {
    locoScroll.stop();
    console.log("LOCO STOP");
  });
  
  $("#tweenbox, .testbutton").mouseleave(function () {
    locoScroll.start();
    console.log("LOCO START");
  
  });
  
}

}

/*
================================================================================
MOBILE MENU
================================================================================
*/

function openMobileMenu() {
  gsap.set('#mobilemenu', {
    autoAlpha: 1,
    scaleY: 0,
    transformOrigin: 'top',

  })
  let forwards = true;
  document.querySelector("#openmobile").addEventListener("click", ev => {
    if (forwards) {
      const tl = gsap.timeline({defaults:{duration:0.64, ease: 'power2.inOut'}})

        .to('#mobilemenu', {
          scaleY: 1,
          overwrite: "auto"
        })

       .to('.stagger', {
          autoAlpha: 1,
          stagger: 0.1,
          overwrite: "auto"
        }, "-=0.1")


       .to('.hamb-icon', {
          autoAlpha: 0,
          overwrite: "auto"
        }, "<")

        .to('.x-icon', {
          autoAlpha: 1,
          overwrite: "auto"
        }, "<")

    } else {

      const tl2 = gsap.timeline({})

         .to('.hamb-icon', {
          autoAlpha: 1,
          overwrite: "auto"
        }, "<")

        .to('.x-icon', {
          autoAlpha: 0,
          overwrite: "auto"
        }, "<")

        .to('.stagger', {
          autoAlpha: 0,
          overwrite: "auto"
        }, "<")

        .to('#mobilemenu', {
          scaleY: 0,
          duration: 0.4,
          overwrite: "auto",

        }, "-=0.2")

        /* .to('#openmobile', {
          scale: 1,
           duration: 0.64,
          ease: 'power2.inOut',
          overwrite: "auto"
        }, "<") */

    }
    forwards = !forwards;
  });

 
}



/*
================================================================================
TRANSFORM MATRIX 3d GENERATOR
================================================================================
*/

function matrixtransform() {
 
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
================================================================================
ZOOM IMAGE
================================================================================
*/

function zoomimage() {

  $(document).ready(function(){ 
    var elements = document.querySelectorAll( '.demo-image' );
    Intense( elements );
    }); 
}

/*
================================================================================
SPLIDE
================================================================================
*/

function splidesolo() {
/*   if(document.querySelector('.splide')) {
  const splide = new Splide(".splide", {
       // Desktop on down
	perPage: 1,
	perMove: 1,
  focus: 0, // 0 = left and 'center' = center
  type: 'loop', // 'loop' or 'slide'
 // gap: '2em', // space between slides
  arrows: 'slider', // 'slider' or false
  pagination: 'slider', // 'slider' or false
  speed : 600, // transition speed in miliseconds
  dragAngleThreshold: 60, // default is 30
  autoWidth: false, // for cards with differing widths
  rewind : false, // go back to beginning when reach end
  rewindSpeed : 400,
  waitForTransition : false,
  updateOnMove : true,
  // fixedHeight: '10em', 
  trimSpace: false, 

} ).mount();
  } */
}


/* 
=============================================================================================================================================
=============================================================================================================================================
SCROLLTRIGGERS
=============================================================================================================================================
============================================================================================================================================= 
*/

/*
================================================================================
O NAMA // OUTLINE HERO
================================================================================
*/

function outlinehero() {
  /* gsap.set('.filled-text, .outline-text', {x:-500}); */
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
  
  /* gsap.set('.filledtwo, .outlinetwo', {x:500}); */
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
}

/*
================================================================================
O NAMA // HORIZONTAL PIN
================================================================================
*/

function horizpin() {

  let horizontalSections = document.querySelectorAll(".horizontal-scroll");

  horizontalSections.forEach(horizontalSection => {
    let pinWrap = document.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    gsap.to(pinWrap, {
      scrollTrigger: {
        scroller: ".smooth-scroll",
        scrub: 1,
        trigger: ".horizontal-scroll",
        pin: ".stophor",
        /* anticipatePin: 1, */
        //markers: true,
        start: "top top",
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true
      },
      x: -horizontalScrollLength,
      ease: "none"
    });
  });
}

/*
================================================================================
SCROLLTRIGGER INNER IMAGE PARALLAX 
================================================================================
*/

function imageparallax() {

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
}

/*
================================================================================
HOME // VIDEO
================================================================================
*/

function homevideo() {

  /* let videoroll = gsap.timeline() */

  let cover = document.querySelector('.hero-video--container')
  let firstSection = document.querySelector('.big-logo')
  let apelTrigger = document.querySelector('.hero--header--wrapper')
  let apelo = document.querySelector('.apeli--hero-wrap')

 

  ScrollTrigger.matchMedia({
	
    // desktop
    "(min-width: 992px)": function() {
      // setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
      // ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
      let tl = gsap.timeline({
        scrollTrigger: {
        scroller: ".smooth-scroll",
        trigger: firstSection,
        start: 'top 20%',
        end: "+=30%",
        scrub: 2,
          }
        });
        tl.to(cover, {scale: 1.15, yPercent: -30, overwrite: "auto"});
 
        let tl2 = gsap.timeline({
         scrollTrigger: {
            scroller: ".smooth-scroll",
            trigger: apelTrigger,
            start: "top 70%",
            toggleActions: "restart none none reverse",  
          },
        });
        tl2.to(apelo, {autoAlpha:1, duration:2, overwrite: "auto"});
      }, 

      
    // mobile
    "(max-width: 991px)": function() {
      // Any ScrollTriggers created inside these functions are segregated and get
      // reverted/killed when the media query doesn't match anymore. 
      let tl = gsap.timeline({ 
          scrollTrigger:{
            scroller: ".smooth-scroll",
            trigger: firstSection,
            start: 'top 20%',
            end: "+=30%",
            scrub: 2,
          }
        });
        tl.to(cover, {scale: 1, overwrite: "true"});

        let tl2 = gsap.timeline({
         
         });
         tl2.to(apelo, {autoAlpha:1, yPercent: -30, overwrite: "true"});
       
    }, 
    
    // all 
    "all": function() {
      // ScrollTriggers created here aren't associated with a particular media query,
      // so they persist.
    }
    
   });
   


  
   

    /* gsap.set(".apeli--hero-wrap", {autoAlpha: 0})
    gsap.to(".apeli--hero-wrap", {
      scrollTrigger: {
        scroller: ".smooth-scroll",
        trigger: apelTrigger,
        start: "top 60%",
        toggleActions: "restart none none reverse",  
      },
      duration: 2,
      autoAlpha: 1,
    }); */

}

/*
================================================================================
O NAMA // 14/15 ROLL
================================================================================
*/

function numberoll() {
  gsap.to(".roll-number-wrap", {
    scrollTrigger: {
      scroller: ".smooth-scroll",
      trigger: ".gi--num--wrap",
      start: "top 85%",
      end: "bottom top",
      scrub: 1,
    },
    y: -700,
  });
}


/*
================================================================================
TEST YOUR BUTTON PIN
================================================================================
*/

function simulatorButton() {
  if(document.querySelector('#tweenbutton')) {
  gsap.to(".testbutton", {
    scrollTrigger: {
      scroller: ".smooth-scroll",
      trigger: ".vizualbutton",
      start: "top top",
       end: 'bottom 50%', 
      pin: true,
      //anticipatePin: true,
       /* markers: true,  */
      toggleActions: "restart none none reverse"

    },
    autoAlpha:0,
   
  });
}
console.log("TWEENBUTTON");




}

/*
const alwaysPin = document.querySelector(".always-center");
ScrollTrigger.create({
  trigger: alwaysPin,
  pin: true,
  pinSpacing: false,
  start: "center center",
  end: innerHeight * 2
})
*/
/*
================================================================================
SHOW HIDE HEADER ON SCROLL + CUSTOM ANIMATION + CHANGE COLOR ON DIFF BACKGROUNDS
================================================================================
*/

function hideMenu() {
  const showAnim = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.5,
      ease: "power1.inOut",
    },
    scrollTrigger: {
      scroller: ".smooth-scroll",
      start: "top top",
      end: 99999,
      force3D: true,


      onUpdate: (self) => {
        self.direction === 1 ? showAnim.play() : showAnim.reverse()
      }
    }
  });

showAnim
//.to(".logofade", {autoAlpha:0 }, 0)
.to(".header-nav-list, .slogan", {yPercent: -50, autoAlpha:0, stagger: 0.05},"<0.1")
//.to(".header-contact--button", {scale:0.7, /*x:"3.1em"*/},"<0.2")
/* .to(".freveal", {y: 100, duration: 0.6, stagger: 0.02}, "<0.1")
.to(".l2", {scaleY: 0, transformOrigin: 'bottom', duration: 0.3}, "<0.2")
.to(".l3", {scaleX: 0, transformOrigin: 'left', duration: 0.3}, "<0.2")
.to(".l1", {scaleX: 0, transformOrigin: 'left', duration: 0.3}, "<0.2") */

}

/*
================================================================================
BATCH MULTILINE TXT // OVO NIJE SPOJENO
================================================================================
*/

function multilinereveal() {
  gsap.set('.reveal', {
    autoAlpha: 0,
    yPercent: 200
  });

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

}

/*
================================================================================
O NAMA - COUNTER
================================================================================
*/

function onamacounter() {

  var startCount = 997,
  endCount,
  activeIndex = 1,
  tm = 2,
  num = { var: startCount },
  triggeraj = ".tisucuwrap",
  numbers = document.getElementById("numbers");
 
  
function countIt() {
activeIndex == 1 ? endCount = 1000 : endCount = 1000;

gsap.to(num, tm, {
var: endCount, 
onUpdate:changeNumber, 
ease:Linear.easeNone,
scrollTrigger: {
  scroller: ".smooth-scroll",
   trigger: triggeraj,  
  start: "top 100%",
  /*  markers:true,  */
 end: "bottom bottom", 
  toggleActions: "restart none none reset",
/*  scrub: 1, */
 /* refreshPriority: 1, */
  },

});


}

function changeNumber() {
numbers.innerHTML = (num.var).toFixed();  
}

countIt();
console.log("COUNTER TRIGGERED NEWWWW");
  /*
  $(".counts").each(function () {
    var count = $(this),
      zero = {
        val: 990
      },
      num = count.data("number"),
      split = (num + "").split("."),
      decimals = split.length > 1 ? split[1].length : 0;

    gsap.to(zero, {
      scrollTrigger: {
        scroller: ".smooth-scroll",
        trigger: ".mogucnosti",
        start: "top 85%",
      end: "bottom top",
        toggleActions: "restart none none reset",
        //scrub: 1,

      },
      val: num,
      duration: 2,
      onUpdate: function () {
        count.text(zero.val.toFixed(decimals));
      }
    });
  });

  */
}

/*
================================================================================
PLAY/PAUSE VIDEO ON SCROLL TRIGGER
================================================================================
*/
function playpausevideo() {
  let allVideoDivs = gsap.utils.toArray('.vid');

  allVideoDivs.forEach((videoDiv, i) => {

    let videoElem = videoDiv.querySelector('video')

    ScrollTrigger.create({
      trigger: videoElem,
      start: 'top 100%',
      end: 'bottom top',
      scroller: ".smooth-scroll",
      onEnter: () => videoElem.play(),
      onEnterBack: () => videoElem.play(),
      onLeave: () => videoElem.pause(),
      onLeaveBack: () => videoElem.pause(),
    });
  });
}

/*
================================================================================
LOCOMOTIVE 4 SCROLL TO TOP
================================================================================
*/
function scrollTotop() {

  $("#tomain, #tomaino").on("click", function () {
    locoScroll.scrollTo('#top', {
      'offset': 0,
      'duration': 1500,
      'easing': [0.25, 0.00, 0.35, 1.00],
      'disableLerp': true
    });

  });
 /*  $("#tomainipad").on("click", function () {
    locoScroll.scrollTo('#top', {
      'offset': 0,
      'duration': 1500,
      'easing': [0.25, 0.00, 0.35, 1.00],
      'disableLerp': true
    });
  }); */
}

/*
================================================================================
CUSTOM CURSOR QUICK SETTER BLAKE + AKAPOWL GSAP CSS
================================================================================
*/

/*
================================================================================
SET TO CENTER
================================================================================
*/

function customCursor() {

gsap.set(".cursory", {xPercent: -50, yPercent: -50});

/*
================================================================================
SET VARIABLE
================================================================================
*/
var ball = document.querySelector(".cursory");
var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var mouse = { x: pos.x, y: pos.y };
var speed = 0.15;

var fpms = 60 / 1000;

var xSet = gsap.quickSetter(ball, "x", "px");
var ySet = gsap.quickSetter(ball, "y", "px");


/*
================================================================================
SET OUT OF WINDOW ANIMATION 
================================================================================
*/
var showAnimation = gsap.to(ball, {
  opacity: 1,
  paused: true

});

var timer = gsap.delayedCall(5, () => {
  showAnimation.reverse();
}).pause();

/*
================================================================================
MOUSE MOVE LISTENER
================================================================================
*/

window.addEventListener("mousemove", init);

function init() {
   
  window.removeEventListener("mousemove", init);
  
  window.addEventListener("mousemove", e => {    
    mouse.x = e.x;
    mouse.y = e.y;  
  });
  
/*
================================================================================
OUT OF WINDOW LISTENER
================================================================================
*/  
  document.addEventListener("mouseleave", e => {
    showAnimation.reverse();
     
  });
  
  document.addEventListener("mouseenter", e => {
    showAnimation.play();
   
  
/*
================================================================================
GSAP TICKER -- NE ZNAM DETALJE
================================================================================
*/  
  
    mouse.x = pos.x = e.x;
    mouse.y = pos.y = e.y;
  });

  gsap.ticker.add((time, deltaTime) => {

    var delta = deltaTime * fpms;
    var dt = 1.0 - Math.pow(1.0 - speed, delta); 

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });
  
  showAnimation.play();
}


// Variables
// ************
var cursor = document.querySelector('.cursor__dot1');
var buttonText = document.querySelector('.cursor__text');
var followArea = document.querySelectorAll('.button-link');
var reference = document.querySelectorAll('.reference-box');
var sorty = document.querySelectorAll('.sorty');
var ugasi = document.querySelectorAll('.ugasi');
var zoom = document.querySelectorAll('.zoom-container');

/* var page = document.querySelector('.posts'); */

// zoom
// ************

zoom.forEach(function (el) {

  gsap.set(cursor, {autoAlpha: 1, backgroundColor: "#231f20", scale: 1});

  el.addEventListener('mouseenter', () => {
    gsap.to(cursor, 0.25, {scale: 12});
     $('.cursor__text').text('+'); 
  gsap.to(buttonText, 0.25, {
    autoAlpha:1
  });
  });

  el.addEventListener('mouseleave', () => {
    gsap.to(cursor, 0.25, {scale: 1});
    gsap.to(buttonText, 0.25, {
      autoAlpha:0
    });
  });

  

})


// turn off
// ************

ugasi.forEach(function (el) {

  gsap.set(cursor, {autoAlpha: 1, backgroundColor: "#231f20", scale: 1});

  el.addEventListener('mouseenter', () => {
    gsap.to(cursor, 0.25, {scale: 0.1, autoAlpha: 0 });
  });

  el.addEventListener('mouseleave', () => {
    gsap.to(cursor, 0.25, {scale: 1, autoAlpha: 1 });
  });

})




// Sort change layout
// ************

sorty.forEach(function (el) {

  gsap.set(cursor, {autoAlpha: 1, backgroundColor: "#231f20", scale: 1});

  el.addEventListener('mouseenter', () => {
    gsap.to(cursor, 0.25, {scale: 8, backgroundColor: "#C9B64B",  autoAlpha: .5 });
    /*     page.addEventListener('mousemove', moveCircle);*/
  });

  el.addEventListener('mouseleave', () => {
    gsap.to(cursor, 0.25, {scale: 1,backgroundColor: "#231f20",  autoAlpha: 1 });
  });


/* 
  el.addEventListener('mousedown', () => {
    gsap.to(cursor, 0.5, {
      css: {
      transform: 'translate(-50%, -50%) scale(0.75)'}
    });

    $('.cursor__text').text('OPEN');
    gsap.to(buttonText, 0.25, {
      css: {
        opacity: 1
      }
    });
  }); */



/*   el.addEventListener('mouseup', () => {
    gsap.to(cursor, 1, {
      css: {
        background: '#231f20'
      }
    });

    gsap.to(cursor, 0.5, {
      css: {
        transform: 'translate(-50%, -50%) scale(1)'      
      }
    });

    gsap.to(buttonText, 0.25, {
      css: {
        opacity: 1
      }
    });
  }); */
})



// Bijeli dot
// ************

followArea.forEach(function (el) {

  gsap.set(cursor, {autoAlpha: 1, backgroundColor: "#231f20", scale: 1});

  el.addEventListener('mouseover', () => {
    gsap.to(cursor, 0.25, {scale: 3, backgroundColor: "#FFFCF0", /* autoAlpha: 1 */});
    /*     page.addEventListener('mousemove', moveCircle);*/
  });

  el.addEventListener('mouseout', () => {
    gsap.to(cursor, 0.25, {scale: 1,backgroundColor: "#231f20", /* autoAlpha: 0 */});
  });

 /*  el.addEventListener('mousedown', () => {
    gsap.to(cursor, 0.5, {
      css: {
      transform: 'translate(-50%, -50%) scale(0.75)'}
    });

    $('.cursor__text').text('OPEN');
    gsap.to(buttonText, 0.25, {
      css: {
        opacity: 1
      }
    });
  }); */
/* 
  el.addEventListener('mouseup', () => {
    gsap.to(cursor, 1, {
      css: {
        background: 'transparent'
      }
    });

    gsap.to(cursor, 0.5, {
      css: {
        transform: 'translate(-50%, -50%) scale(1)'      
      }
    });

    gsap.to(buttonText, 0.25, {
      css: {
        opacity: 1
      }
    });
  }); */
})


/**/

reference.forEach(function (el) {

  gsap.set(cursor, {autoAlpha: 1, backgroundColor: "#231f20", scale: 1});

  el.addEventListener('mouseover', () => {
    gsap.to(cursor, 0.25, {scale: 3, backgroundColor: "#FFFCF0", /* autoAlpha: 1 */});
    /*     page.addEventListener('mousemove', moveCircle);*/
  });

  el.addEventListener('mouseout', () => {
    gsap.to(cursor, 0.25, {scale: 1,backgroundColor: "#231f20", /* autoAlpha: 0 */});
  });

/*   el.addEventListener('mousedown', () => {
    gsap.to(cursor, 0.5, {
      css: {
      transform: 'translate(-50%, -50%) scale(0.75)'}
    });

  }); */

/*   el.addEventListener('mouseup', () => {
    gsap.to(cursor, 1, {
      css: {
        background: 'transparent'
      }
    });

    gsap.to(cursor, 0.5, {
      css: {
        transform: 'translate(-50%, -50%) scale(1)'      
      }
    });

    gsap.to(buttonText, 0.25, {
      css: {
        opacity: 1
      }
    });
  }); */
})

}


/*
================================================================================
GSAP UNDERLINE
================================================================================
*/

function underlineLink() {
  if(document.querySelector('.underline')) {
  // --- 022 - MENU ANIMATION - TL - UNDERLINE ------------------------------------------------------------------

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
let workLinks = document.querySelectorAll(".link-inline");

workLinks.forEach((link, index, value) => {
  
  let underline = link.querySelector(".underline");
    link.tl = gsap.timeline({paused: true});
  
  link.tl.fromTo(underline, {width: "0%", left: "0%",}, 
  {width: "100%", duration: 0.3, ease: "power1.out",});
  		
  link.tl.add("midway");
  
  link.tl.fromTo(underline, {width: "100%", left: "0%",}, 
  {width: "0%", left: "100%", duration: 0.3, ease: "power1.in", immediateRender: false});

  // Mouseenter
  link.addEventListener("mouseenter", (e) => {
    enterAnimation(link, e, index);
  });

  // Mouseleave
  link.addEventListener("mouseleave", (e) => {
    leaveAnimation(link, e);
  });

});

/* 
  gsap.utils.toArray(".underline--wrap").forEach(container => {

    let underlinetab = container.querySelector(".underlinetab"),
      // silhouette = container.querySelector(".silhouette .cover"), */
 /*      tl = gsap.timeline({
        paused: true
      });
  
    tl.from("underlinetab", { xPercent: -101 })
  
    container.addEventListener("mouseenter", () => tl.play());
    container.addEventListener("mouseleave", () => tl.reverse());
  });
 */
  }
}



/*
================================================================================
UPLOAD CROP
================================================================================
*/

function uploadCrop() {



/* document.querySelector('button').addEventListener('click', () => {
  pond.browse();
}); */

/*  document.querySelector('.upload-video').pond.addEventListener('FilePond:addfile', function (e) {
  $('.movevideo').toggleClass('hide'); 
    console.log("SHOW BUTTON ON ADD FILE");
   
}); */







// Show PDF Button

$('#crop_img').click(function () {
  setTimeout(() => {
    $('.linkos.opacity').removeClass('hide');
    console.log("SHOW PDFio*");
  }, 1500)
});




/* VIDEO BUTTOINs*/
$('.upload-video').on('FilePond:addfile', function () {
    $('.movevideo').removeClass('hide');
    console.log("SHOW VIDEO TRANSFER AAAA");
});

/* VIDEO BUTTOINs*/
 $('.upload-video').on('FilePond:removefile', function () {
  $('.movevideo').addClass('hide');
  $('.videjos').children().filter("video").each(function () {
    this.pause(); // can't hurt
    delete this; // @sparkey reports that this did the trick (even though it makes no sense!)
    $(this).remove(); // this is probably what actually does the trick
  });

});


 $('.movevideo').click(function () {
  $('.movevideo').addClass('hide');
}); 


$('.closetrigger').click(function () {
  $('.upload-photo').filepond('removeFile');
  $('.upload-video').filepond('removeFile');
  console.log("BOTH FILEPOND and Video slot cleared on exit...");
});
 

 $('.tabs-li').click(function () {
  $('.upload-photo').filepond('removeFile');
  $('.upload-video').filepond('removeFile');

  console.log("BOTH FILEPOND and Video slot cleared on tabs...");
});

$('.upload-photo').on('FilePond:removefile', function () {
  $('.linkos.opacity').addClass('hide');
  });








/* VIDEJO UPLOADER
*/

/* const videoupload = document.querySelector('.video-uploader');
const videoplace = document.querySelector('.filepond--media-preview-wrapper');
const botun = document.querySelector('.botun'); */

/* const pondvideo = FilePond.create({
  name: 'filepondvideo',
          acceptedFileTypes: ['video/quicktime', 'video/mp4'],
          checkValidity: true,
          dropValidation: true,
          }); */

// Add it to the DOM
//videoupload.appendChild(pondvideo.element);


//onclick = function(){ botun.appendChild(".filepond--media-preview"); }
$(document).ready(function()
  {    
  $('#movevideo').click(function(){

          //  var toAdd = $('input[name=checkListItem]').val();
            var item = $('.filepond--media-preview video');
            $('.videjos').append(item);
            //  document.querySelector('.filepond--media-preview video').play();
           // document.getElementById('destination').play();
          $('video').trigger('play');
           $('video').attr({'autoplay':'true', 'loop':'true'});
           
           //setTimeout(function () {
          //  photo_crop_container.removeClass('show-result');
          //  }, 1000);
           // $('#destination').get(0).play();
           //video.play();
            console.log("APPEND AND PLAY & LOOP");
       
   });
  });


  $('#removevideox').click(function(){

    $('.videjos').children().filter("video").each(function(){
      this.pause(); // can't hurt
      delete this; // @sparkey reports that this did the trick (even though it makes no sense!)
      $(this).remove(); // this is probably what actually does the trick
    });
   // $('#mobile').empty();

    
/*       var item = $('#destination');
      $('.mobile').remove(item); */
      console.log("VIDEO AJDEEEE");
});





}

/*
================================================================================
O NAMA MALI BROJEVI COUNTER - LOKACIJE
================================================================================
*/

function smallCounteronama() {

  // adds commas and forces 2 decimal places.
  function formatNumber(value) {
    let s = (+value).toLocaleString('en-US').split(".");
    return s[0] + "." + ((s[1] || "") + "00").substr(0, 2);
  }


  $(".counter").each(function () {
    var count = $(this),
      zero = {
        val: 0
      },
      num = count.data("number"),
      split = (num + "").split("."),
      decimals = split.length > 1 ? split[1].length : 0;

    gsap.to(zero, {
      scrollTrigger: {
        scroller: ".smooth-scroll",
        trigger: ".counter",
        start: "top 100%",
        end: "bottom top",
        toggleActions: "restart none none reset",

      },
      val: num,
      duration: 2,
      onUpdate: function () {
        count.text(zero.val.toFixed(decimals));
      }
    });
   
  });

}


/*
================================================================================
LOKACIJE - SHUFFLE.JS
================================================================================
*/

function newSort() {

'use strict';

 $("#selectone, #selecttwo, #sorto").select2(); 

 //dropdownParent: $('.select2-container')
//select2 start
if ($("#selectone, #selecttwo, #sorto").length) {
  setTimeout(function () {
    $("#selectone, #selecttwo, #sorto").each(function (index, item) {
      var text = $(item).data("placeholder");
      $(item).select2({
        placeholder: text,
        dropdownAutoWidth: true,
        minimumResultsForSearch: -1,
        
      });
    });
  }, 100);
}

$("#selectone, #selecttwo, #sorto").each(function (index, item) {
  $(item).select2({
    minimumResultsForSearch: -1
  });
  $(item).on("change", function (e) {
    var current = $(item).val();
    if($(item).closest(".filter-group").length>0) {
      $(item).closest(".filter-group").find(".checkboxes input").prop( "checked", false );
      $(item).closest(".filter-group").find("[data-value='" + current + "']").trigger("click");
    }
  });
});
//select2 end

$('select.combobox').select2({ width: 'style' });

$(document).on('mouseenter', '.select2-selection__rendered', function () { $(this).removeAttr('title');  });


/* $("#sorto").select2({
  // dropdownParent: $('.upad'), 
  dropdownAutoWidth: true,
  adaptDropdownCssClass: function(c) { if (c.indexOf("s2-dropdown")===0) return c; }
   });
 */
   


/*
$($('#sorto').data('select2')).css('background-color', 'red');
console.log("RED BACK"); 
*/

/*
 $('select2-'#sorto'-container').parent().css('background-color', 'red');
*/

/* .select2-container--default .select2-selection--single {
  background-color: #ffdc52;
  margin-top: 0.9em;
  border: 1px solid #231f20;
  border-radius: 0.5px;
} */

/* $(':scrollable').scroll(function() {
  $(".select2-container.select2-dropdown-open").not($(this)).select2('positionDropdown');
  console.log("Dropdown Close");
}); */

var Shuffle = window.Shuffle;

 // ES7 will have Array.prototype.includes.
 function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
}

// Convert an array-like object to a real array.
function toArray(thing) {
  return Array.prototype.slice.call(thing);
}


var Demo = function (element) {
  this.element = element;
  this.regions = Array.from(document.querySelectorAll('.js-regions input'));
	this.categories = Array.from(document.querySelectorAll('.js-categories input'));
  this.sorte = Array.from(document.querySelectorAll('.js-sort input'));
  this.message = document.querySelector('.js-message');

	this.shuffle = new Shuffle(element, {
  //  buffer: 0,
		easing: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)', // easeOutQuart
		/* sizer: '.sizer', */ 
    buffer:0,
    gutterWidth: 20,
    roundTransforms: true,
   useTransforms: true,
    itemSelector: '.webinar-posts__event-item',
    //staggerAmount: 15, // Transition delay offset for each item in milliseconds.
    //staggerAmountMax: 150, // Maximum stagger delay in milliseconds.
    //throttle: throttle, // By default, shuffle will throttle resize events. This can be changed or removed.
    //throttleTime: 300,

  });

	this.filters = {
		regions: [],
		categories: [],
	};

  this.addSorting();
  this._bindEventListeners();
};


/*
================================================================================
SHUFFLE.JS - SORT 
================================================================================
*/
Demo.prototype.addSorting = function () {
  document.querySelector('.sort-order').addEventListener('change', this._handleSortChange.bind(this));
  //document.querySelector('.sort-options').addEventListener('input', this._handleSortChange.bind(this));
  document.querySelector('.location-switcher_wrap').addEventListener('click', this._handleupdate.bind(this));

};

/*
================================================================================
SHUFFLE.JS - SWITCH LAYOUT LOKACIJE ITEMS
================================================================================
*/
Demo.prototype._handleupdate = function (evt) {
 
  setTimeout(() => {
    this.shuffle.layout();
     locoScroll.update(); 
     ScrollTrigger.refresh(true); 
    console.log("Locoscrollupdated + SCROLLTRIGGER NUOVO");
  }, 200)
  locoScroll.update(); 
  ScrollTrigger.refresh(true); 
  this.shuffle.layout();
};

/*
================================================================================
SHUFFLE.JS - SORTING
================================================================================
*/

Demo.prototype._handleSortChange = function (event) {
    //var value = event.target.value;
    var value = document.querySelector('.sort-options').value;

    function reverseOrder() {
      if (document.querySelector('.sort-order').checked) {
        return false;
      }
      return true;
    }
    reverseOrder();

    function sortByRegion(element) {
      return element.getAttribute('data-region');
    }

    function sortByCategory(element) {
      return element.getAttribute('data-category');
    }

    function sortByTitle(element) {
      return element.getAttribute('data-title');
    }
    
    var options;
    if (value === 'region') {
      options = {
        reverse: reverseOrder(),
        by: sortByRegion,
        
      };
    } else if (value === 'category') {
      options = {
        reverse: !reverseOrder(),
        by: sortByCategory,
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

  /*   this.shuffle.update();
    locoScroll.update();
    ScrollTrigger.refresh(true);
     console.log("Locoscrollupdated + SCROLLTRIGGER NAKON SORTA"); */

     setTimeout(() => {
      this.shuffle.layout();
      locoScroll.update();
      ScrollTrigger.refresh(true);
      console.log("Locoscrollupdated + SCROLLTRIGGER NUOVO");
    }, 200)

  };
  
/*
================================================================================
SHUFFLE.JS - Bind event listeners for when the filters change.
================================================================================
*/

Demo.prototype._bindEventListeners = function () {
	this._onregionChange = this._handleregionChange.bind(this);
	this._oncategoryChange = this._handlecategoryChange.bind(this);
  this._onsortChange = this._handleSortChange.bind(this);

	this.regions.forEach(function (input) {
		input.addEventListener('change', this._onregionChange);
	}, this);

	this.categories.forEach(function (input) {
		input.addEventListener('change', this._oncategoryChange);
	}, this);

  this.sorte.forEach(function (input) {
		input.addEventListener('change', this._onsortChange);
	}, this);
};

/*
================================================================================
SHUFFLE.JS - Get the values of each checked input.
================================================================================
*/
/**
 * Get the values of each checked input.
 * @return {Array.<string>}
 */
Demo.prototype._getCurrentregionFilters = function () {
	return this.regions.filter(function (input) {
		return input.checked;
	}).map(function (input) {
		return input.value;
	});
};

/*
================================================================================
SHUFFLE.JS - Get the values of each `active` button.
================================================================================
*/
/**
 * 
 * @return {Array.<string>}
 */
 Demo.prototype._getCurrentcategoryFilters = function () {
	return this.categories.filter(function (input) {
		return input.checked;
	}).map(function (input) {
		return input.value;
	});
};


/*
================================================================================
SHUFFLE.JS - OVDJE SE DEŠAVA KLIKANJE NA CHECKBOX
A region input check state changed, update the current filters and filter
================================================================================
*/

Demo.prototype._handleregionChange = function (evt) {
	this.filters.regions = this._getCurrentregionFilters();
	if(this.filters.regions[0]!='all') {
		this.filter();
	} else {
		var regionArray = Array.from(document.querySelectorAll('.js-regions .checkboxes input'));
		regionArray.forEach(function (input) {
			input.checked = true;
		});
		this.filters.regions = [];
		this.filter();
	}
};

Demo.prototype._handlecategoryChange = function (evt) {
	this.filters.categories = this._getCurrentcategoryFilters();
	if(this.filters.categories[0]!='all') {
		this.filter();
	} else {
		var regionArray = Array.from(document.querySelectorAll('.js-categories .checkboxes input'));
		regionArray.forEach(function (input) {
			input.checked = true;
		});
		this.filters.categories = [];
		this.filter();
	}

  var button = evt.currentTarget;
	if(button.dataset.value!='all') {
		// Treat these buttons like radio buttons where only 1 can be selected.
		if (button.classList.contains('active')) {
			button.classList.remove('active');
		} else {
			this.categories.forEach(function (btn) {
				btn.classList.remove('active');
			});
			button.classList.add('active');
		}
		this.filters.categories = this._getCurrentcategoryFilters();
		this.filter();
	} else {
		this.categories.forEach(function (btn) {
			btn.classList.remove('active');
		});
		button.classList.add('active');
		this.filters.categories = [];
		this.filter();
	}
  


};




/*
================================================================================
SHUFFLE.JS - A category button was clicked. Update filters and display.
================================================================================
*/
/**
 * 
 * @param {Event} evt Click event object.
 */
/*
Demo.prototype._handlecategoryChange = function (evt) {
  var button = evt.currentTarget;
  if (button.dataset.value != 'all') {
    // Treat these buttons like radio buttons where only 1 can be selected.
    if (button.classList.contains('active')) {
      button.classList.remove('active');
      console.log("active removed");
    } else {
      this.categories.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      console.log("active added");
    }
    this.filters.categories = this._getCurrentcategoryFilters();
    this.filter();
  } else {
    this.categories.forEach(function (btn) {
      btn.classList.remove('active');
      console.log("active removed");
    });
    button.classList.add('active');
    console.log("active added");
    this.filters.categories = [];
    this.filter();

  }
  */
//};

/*
================================================================================
SHUFFLE.JS - Filter shuffle based on the current state of filters.
================================================================================
*/

Demo.prototype.filter = function () {
    if (this.hasActiveFilters()) {
      this.shuffle.filter(this.itemPassesFilters.bind(this));

      setTimeout(() => {
        this.shuffle.layout();
        locoScroll.update();
        ScrollTrigger.refresh(true);
        console.log("Locoscrollupdated + SCROLLTRIGGER 01");
      }, 200)

    } else {
      this.shuffle.filter(Shuffle.ALL_ITEMS);
      setTimeout(() => {
        this.shuffle.layout();
        locoScroll.update();
        ScrollTrigger.refresh(true);
        console.log("Locoscrollupdated + SCROLLTRIGGER 2");
      }, 200)
    }

    if (this.shuffle.visibleItems == 0) {
      this.message.innerHTML = (this.shuffle.visibleItems) + " rezultata";
      this.shuffle.layout();
      locoScroll.update();
      ScrollTrigger.refresh(true);
      console.log("Locoscrollupdated + SCROLLTRIGGER 3");

    } else {
      this.message.innerHTML = "";
 }
};
/*
================================================================================
SHUFFLE.JS - If any of the arrays in the `filters` property have a length of 
more than zero,that means there is an active filter.
================================================================================
*/
/**

 * @return {boolean}
 */
Demo.prototype.hasActiveFilters = function () {
	return Object.keys(this.filters).some(function (key) {
		return this.filters[key].length > 0;
	}, this);
};

/*
================================================================================
SHUFFLE.JS - Determine whether an element passes the current filters.
================================================================================
*/
/**
 * 
 * @param {Element} element Element to test.
 * @return {boolean} Whether it satisfies all current filters.
 */
Demo.prototype.itemPassesFilters = function (element) {
	var regions = this.filters.regions;
	var categories = this.filters.categories;
	var region = element.getAttribute('data-region');
	var category = element.getAttribute('data-category');
	// If there are active region filters and this region is not in that array.
	if (regions.length > 0 && !regions.includes(region)) {
		return false;
	}
	// If there are active category filters and this category is not in that array.
	if (categories.length > 0 && !categories.includes(category)) {
		return false;
	}
	return true;
};

/* document.addEventListener('DOMContentLoaded', function () {
	window.demo = new Demo(document.querySelector('.js-shuffle'));
});
 */

/* setTimeout(()=>{   */
      window.demo = new Demo(document.querySelector(".js-shuffle"));
      /*  },200)   */

      /*  setTimeout(()=>{  
     //   locoScroll.update(); 
       ScrollTrigger.refresh(true);
       console.log("DELAY SORT REFRESH");
      },1000)  */

}

/*
================================================================================
SHUFFLE.JS - CHANGE LAYOUT ICON
================================================================================
*/
function sortChangeLayout() {

$('.location-switcher_wrap').click(function () {
  $('.webinar-posts__event-item').toggleClass('full');
  $('.newsminigrid').toggleClass('full');
  $('.newsimgwrap').toggleClass('full');
  $('.item--flex__inner').toggleClass('full');
   $('.pin-button-link').toggleClass('full');
  $('.location-switcher_column').toggleClass('hide');
  $('.location-switcher_full').toggleClass('hide');
});
}
  
/*
================================================================================
LOKACIJE BOTUNI // PROČISTI
================================================================================
*/

function lokacijeBotuni() {

  $('.linkos').hover(function() {
	/* $('.cursor').toggleClass('link-hover'); */
  
	let textOne = $(this).find('.link_text').eq(0).text();
  $(this).find('.link_text.is--2').text(textOne);
});

/* $( ".options .linkos input" ).change(function() {
	$(this).closest('.shapeso').find('.selected-toggle').removeClass('selected-toggle');
  $(this).closest('.linkos').addClass('selected-toggle');
});
 */
/*  $( ".check .linkos input" ).change(function() { */
 
  $('.linkos').click(function() {
    $(".linkos").removeClass("selected-toggle");
    $(this).addClass("selected-toggle");
 /*  $(this).closest('.linkos').toggleClass('selected-toggle'); */
});

    
}


/*
================================================================================
LOKACIJE SOLO // TABS
================================================================================
*/

function lokacijeTabs() {


let targets = document.querySelectorAll(".tabs-li");
let articles = document.querySelectorAll(".article");
let activeTab = 0;
let old = 0;
let heights = [];
let dur = 0.4;
let animation;

for (let i = 0; i < targets.length; i++) {
  targets[i].index = i;
  //heights.push(articles[i].offsetHeight); // get height of each article
  gsap.set(articles[i], {top: 0, autoAlpha:0, y:0}); // push all articles up out of view
  targets[i].addEventListener("click", doCoolStuff);
}
// set initial article and position bubble slider on first tab 
gsap.set(articles[0], {y:0,autoAlpha:1});
gsap.set(".slider", {x:targets[0].offsetLeft, width:targets[0].offsetWidth});
gsap.set(targets[0], {color:"#231f20"});
//gsap.set(".article-block", {height:heights[0]});

function doCoolStuff() {
  // check if clicked target is new and if the timeline is currently active
  if(this.index != activeTab) {
    //if there's an animation in-progress, jump to the end immediately so there aren't weird overlaps. 
    if (animation && animation.isActive()) {
      animation.progress(1);
    }
    animation = gsap.timeline({defaults:{duration:0.4}});
    old = activeTab;
    activeTab = this.index;
    // animate bubble slider to clicked target
    animation.to(".slider", {x:targets[activeTab].offsetLeft, width:targets[activeTab].offsetWidth});
    // change text color on old and new tab targets
    /* animation.to(targets[old], {color:"#231f20", ease:"none"}, 0);
    animation.to(targets[activeTab], {color:"#231f20", ease:"none"}, 0); */
    // slide current article down out of view and then set it to starting position at top
    animation.to(articles[old], {autoAlpha:0, ease:"none" }, 0);
    animation.set(articles[old], {y:0});
    // resize article block to accommodate new content
    animation.to(".article-block", {height:heights[activeTab]});
    // slide in new article
    animation.to(articles[activeTab], {duration: 0.5, y:0, autoAlpha:1, ease: "none"}, "-=0.25");
  }

  window.addEventListener('resize', function(){
 
    animation.to(".slider", {x:targets[activeTab].offsetLeft, width:targets[activeTab].offsetWidth});
    
  });


}





}



/*
================================================================================
MOCKUP SIMULATOR PROPORTIONS
================================================================================
*/

function mockupSimulatorProportions() {
  if(document.querySelector('#tweenbox')) {
(function() {

  
  /* Mockup responsiveness */
  var body = docElem = window.document.documentElement,
    wrap = document.getElementById( 'wrap' ),
    mockup = wrap.querySelector( '.mockup' ),
    mockupWidth = mockup.offsetWidth;

  scaleMockup();

  function scaleMockup() {
    var wrapWidth = wrap.offsetWidth,
      val = wrapWidth / mockupWidth;

    mockup.style.transform = 'scale3d(' + val + ', ' + val + ', 1)';
  }
  
  window.addEventListener( 'resize', resizeHandler );

  function resizeHandler() {
    function delayed() {
      resize();
      resizeTimeout = null;
    }
    if ( typeof resizeTimeout != 'undefined' ) {
      clearTimeout( resizeTimeout );
    }
    resizeTimeout = setTimeout( delayed, 50 );
  }

  function resize() {
    scaleMockup();
  }
  console.log("P R O P O R T I O N S");
})();

}
}


/*
================================================================================
BACK TO PREV PAGE
================================================================================
*/

function backToPrev() {

$( document ).ready(function() {
  $( ".goback" ).click(function() {
    window.history.back();
  });
});

}

/*
================================================================================
PIN HOVER
================================================================================
*/

function pinHover() {
  $(".pin-button-link").each(function() {
    $(this).on("mouseover", function() {
      $(".pinicon", this).addClass("hide");
      $(".piniconblack", this).removeClass("hide");
     
    }).on("mouseleave", function() {
      $(".piniconblack", this).addClass("hide");
      $(".pinicon", this).removeClass("hide");
    });
  });

}


/*
================================================================================
SIMULATOR IMAGE + MOCKUP RESIZER
================================================================================
*/

function mockupImageResizer() {

(function() {
  //new Slideshow( document.getElementById( 'slideshow' ) );

  /* Mockup responsiveness */
  var body = docElem = window.document.documentElement,
    wrap = document.getElementById( 'wrap' ),
    mockup = wrap.querySelector( '.mockup' ),
    mockupWidth = mockup.offsetWidth;

  scaleMockup();

  function scaleMockup() {
    var wrapWidth = wrap.offsetWidth,
      val = wrapWidth / mockupWidth;

    mockup.style.transform = 'scale3d(' + val + ', ' + val + ', 1)';
  }
  
  window.addEventListener( 'resize', resizeHandler );

  function resizeHandler() {
    function delayed() {
      resize();
      resizeTimeout = null;
    }
    if ( typeof resizeTimeout != 'undefined' ) {
      clearTimeout( resizeTimeout );
    }
    resizeTimeout = setTimeout( delayed, 50 );
  }

  function resize() {
    scaleMockup();
  }
})();

}



/*
================================================================================
SIMULATOR IMAGE + MOCKUP RESIZER
================================================================================
*/

function simulatorgsapset() {

gsap.set('#tweenbox', {
scaleY: 0,
transformOrigin: 'top',
});
}
                

/*
================================================================================
PRINT TO PDF
================================================================================
*/

function printTOPDF() {

/* setTimeout(function () {  */
  $(function() {
    $('.butonio').click(function(){
      $(".vizuale").printThis({
      //debug: true,               // show the iframe for debugging
      importCSS: true,            // import parent page css
     importStyle: true,         // import style tags
      printContainer: true,       // print outer container/$.selector
     // loadCSS: "",                // path to additional css file - use an array [] for multiple
    //  pagetitle:"Two-dimensional code",            // add title to print page
     // removeInline: false,        // remove inline styles from print elements
    //  removeInlineSelector: "*",  // custom selectors to filter inline styles. removeInline must be true
      printDelay:1000,            // variable print delay
    //  header: null,               // prefix to html
    //  footer: null,               // postfix to html
    //  base: false,                // preserve the BASE tag or accept a string for the URL
    //  formValues: true,           // preserve input/form values
   /*  canvas: true,  */             // copy canvas content
    //  doctypeString: '...',       // enter a different doctype for older markup
    //  removeScripts: false,       // remove script tags from print content
    //  copyTagClasses: false,      // copy classes from the html & body tag
    //  beforePrintEvent: null,     // function for printEvent in iframe
   //   beforePrint: null,          // function called before iframe is filled
    //  afterPrint: null            // function called before iframe is removed
  });
    });
   });
   console.log("PRINTTHIS LOADED");
 /*  }, 4000);  */

}



/*
================================================================================
INFINITE SCROLL
================================================================================
*/

function infiniteScroll() {

  $('.js-shuffle').infiniteScroll({
    // options
     path: '.webinar-posts__event-item', 
    append: '.webinar-posts__event-item',
    history: true,
    /* scrollThreshold: 100; */
  });

 /*  $('.container').infiniteScroll({
    path: getPenPath,
    append: '.post',
    status: '.page-load-status',
  }); */

}


/*
================================================================================
BATCH
================================================================================
*/

function batchLokacije() {

  /* gsap.set(".webinar-posts__event-item", {y: 100}); */

  ScrollTrigger.batch(".webinar-posts__event-item", {
    //interval: 0.1, // time window (in seconds) for batching to occur. 
    //batchMax: 3,   // maximum batch size (targets)
    onEnter: batch => gsap.to(batch, {opacity: 1, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
    onLeave: batch => gsap.set(batch, {opacity: 0, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, overwrite: true})
    // you can also define things like start, end, etc.
  });
  
  
  // when ScrollTrigger does a refresh(), it maps all the positioning data which 
  // factors in transforms, but in this example we're initially setting all the ".box"
  // elements to a "y" of 100 solely for the animation in which would throw off the normal 
  // positioning, so we use a "refreshInit" listener to reset the y temporarily. When we 
  // return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
  /* ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".box", {y: 0})); */
}



function fadeinlokacije() {
var fadein = gsap.timeline({defaults:{ease:'none'}})
.to('.is--full_location', {autoAlpha:1})

}

function addLinkAttrib() {
      $('body a[href^="http"]').not('a[href*="' + location.hostname + '"]').attr({target: "_blank", rel: "noopener noreferrer nofollow"});
}
function addAriaAttrib() {
$('.splide__video__play').attr('aria-label',  '<?php the_title(); ?>');
}

function passiveListeners() {
  ! function (e) {
    "function" == typeof define && define.amd ? define(e) : e()
  }(function () {
    var e, t = ["scroll", "wheel", "touchstart", "touchmove", "touchenter", "touchend", "touchleave", "mouseout", "mouseleave", "mouseup", "mousedown", "mousemove", "mouseenter", "mousewheel", "mouseover"];
    if (function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0
            }
          });
          window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
        } catch (e) {}
        return e
      }()) {
      var n = EventTarget.prototype.addEventListener;
      e = n, EventTarget.prototype.addEventListener = function (n, o, r) {
        var i, s = "object" == typeof r && null !== r,
          u = s ? r.capture : r;
        (r = s ? function (e) {
          var t = Object.getOwnPropertyDescriptor(e, "passive");
          return t && !0 !== t.writable && void 0 === t.set ? Object.assign({}, e) : e
        }(r) : {}).passive = void 0 !== (i = r.passive) ? i : -1 !== t.indexOf(n) && !0, r.capture = void 0 !== u && u, e.call(this, n, o, r)
      }, EventTarget.prototype.addEventListener._original = e
    }
  });
  
console.log("PASSIVE LISTENERS HEJ");
}

