Mike de Snoo  
/**////////////// */

export default {
    namespace: 'home',
    enter(){
       // add events and run your custom functions
       window.addEventListener('resize', this.doSomething);
    },
    leave(){
       // remove all events
       window.removeEventListener('resize', this.doSomething);
    },
    doSomething(){
       // do stuff during resize
    }
 }

/**////////////// */

@fogseller Well, i made a folder structure like this:
/js
├── index.js
└── /scripts
    └── resize.js (snippet above)
Now in index.js we can simply import all the scripts from the js folder and export an array
// index.js
import resize from './scripts/resize';
export default [
   resize
]
In the file where you actually initialise barba, you can then use the on the after and enter  hooks to run this.
import scripts from './js/'
const runScripts = (hook, namespace) => {
   // loop through script and trigger functions
   scripts.forEach(script => {
      // trigger function if namespace is the same
      if(script.namespace === namespace){
         script[hook];
      }
   });
}
barba.init({
 ...
})
// actually using after so we are sure all elements are available
barba.hooks.after(({ current }) => {
   // run scripts leave functions
   const { namespace } = currrent;
   runScripts('leave', namespace);
})
barba.hooks.enter(({ current }) => {
   // run scripts enter functions
   const { namespace } = currrent;
   runScripts('enter', namespace);
})




////////
nije povezano ali je od istog lika

import slick from 'slick';
export default {
   // namespace
   namespace: 'home',
   // variables
   element: document.querySelector('.slick-slider'),
   // enter function
   enter(){
      this.element.slick({
         ... //options
      });
   },
   // leave function
   leave(){
      this.element.unslick();
   }
}



In order to call slick, the library code of slick would need to be loaded first, which in my case is not the case. Like for example the user starts from the index page, and the library script is not included in the script section, when the user navigates to a page where the library IS included in the script section it will not be loaded as every script section of any page except the one the user is starting at, will be ignored. So loading of scripts happens only once, at the first page visited by the user, anything coming after this will be ignored..and thats what i find so hard to solve


Mike de Snoo  9 months ago
@Manuel Neumayer this is a whole different issue on another level, i did however tackle this as well myself because of using Wordpress with Gravity forms, which uses inline scripts to load the form.
The main issue, as it seems, is that barba uses innerHTML or outerHTML to inject the new page, this does not execute scripts.. What you will have to do is manually get the scripts tag and re-injecting them. Either by using eval() (if its an inline scripts) or by using appendChild (if the script contains a src) (edited) 
Added to your saved items

Mike de Snoo  9 months ago
barba.hooks.after() => {
   const parent = document.querySelector('.parent');
   const script = parent.querySelector('script');
   if(script.hasAttribute('src')){
      const clone = script.cloneNode();
      script.remove();
      parent.appendChild(clone);
   }else{
      const innerScript = script.innerHTML;
      eval(innerScript);
   }
}