
/* 
=============================================
SORT STARI POBRSTI I IZBRIŠI
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
    this.colors = Array.from(document.querySelectorAll(".js-colors select"));
   /* this.styles = toArray(document.querySelectorAll('.filter-group div')); */
    this.message = document.querySelector('.js-message');
  
  
    this.shuffle = new Shuffle(element, {
      easing: "cubic-bezier(0.165, 0.840, 0.440, 1.000)", // easeOutQuart
      sizer: ".the-sizer",
       buffer: 1,
      /*DODANO*/
     /*  itemSelector: '.picture-item', */
    });
   

     /* APPEND */

    

       Demo.prototype.setupEvents = function () {
      document.querySelector('#append').addEventListener('click', this.onAppendBoxes.bind(this));
    };

/* APPEND end */

    this.filters = {
      shapes: [],
      colors: [],
     /* styles: [], */
    };
     
    
    this.setupEvents();


    this.addSorting();
  
    this._bindEventListeners();
     
  };
  



  
/**
 * Create some DOM elements, append them to the shuffle container, then notify
 * shuffle about the new items. You could also insert the HTML as a string.
 */
 Demo.prototype.onAppendBoxes = function () {
  var elements = this._getArrayOfElementsToAdd();

  elements.forEach(function (element) {
    this.shuffle.element.appendChild(element);
  }, this);

  // Tell shuffle items have been appended.
  // It expects an array of elements as the parameter.
  this.shuffle.add(elements);
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
  
    this.colors.forEach(function(select) {
      select.addEventListener("change", this._onColorChange);
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
      .filter(function(select) {
        return select.value;
      })
      .map(function(select) {
        return select.value;
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
  
  Demo.prototype._handleColorChange = function() {
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
    document.querySelector('.shuffle-search').addEventListener('input', this._handleSearchKeyup.bind(this));
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
     ScrollTrigger.refresh(true);
    console.log("SHUFFLE UČITAN i scroll refresh");
      },1000)  
  
}