
/* IMAGE */
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


/* FILEPOND+CROP*/

// Register filepond plugins
$.fn.filepond.registerPlugin(
FilePondPluginFileValidateSize,
FilePondPluginFileValidateType,
FilePondPluginImageValidateSize,
FilePondPluginFileEncode,
FilePondPluginMediaPreview
);

// Initialise the filepond plugin with required options
// $('.upload-photo').filepond({
FilePond.create(
document.querySelector('.upload-photo'), {
labelIdle: '<div class="uploading-frame">Drag&drop fotku ili <span class="filepond--label-action fontDarkOrange"> Click za upload </span></div>',
checkValidity: true,
dropValidation: true,
dropOnPage:true,
acceptedFileTypes: ['image/png', 'image/jpeg', 'video/quicktime', 'video/mp4'],
imageValidateSizeMinWidth: 1200,
imageValidateSizeMinHeight: 300,
maxFileSize: '11MB',
labelMaxFileSize: 'Maksimalna dozvoljena težina datoteke je {filesize}',
labelFileProcessing: 'Pripremam za crop',
labelFileProcessingComplete: '',
server: {
  process: function (fieldName, file, metadata, load, error, progress, abort) {
    load();
  },
  fetch: null,
  revert: null
}
});

const pond = document.querySelector('.filepond--root');
// Container to show the preview of uploaded image
var photo_crop_container = $('.photo-crop-container');
var crop_preview_cont = photo_crop_container.find('.crop-preview-cont');
var filepond_img_Container = $('.img_container')
var photo_preview_container = $('#user_cropped_img');
var img_cropping = '';

// pond.getFile();
pond.addEventListener('FilePond:processfile', function (e, file) {
crop_preview_cont.slideDown('slow');
const image = new Image();
image.src = URL.createObjectURL(e.detail.file.file);
filepond_img_Container.append(image);
img_cropping = filepond_img_Container.find('img');
img_cropping.attr('src', image.src);
img_cropping.cropper({
viewMode: 1,
dragMode: 'move',
//aspectRatio: 2.62 / 1.6,
guides: false,
modal:true,
highlight:true,
cropBoxResizable: true,

});
var cropped_img = '';
$('#crop_img').on('click', function (ev) {
/*   $('html,body').animate({
    scrollTop: $(".photo-crop-container").offset().top - 80
  },
  'slow'); */
photo_crop_container.addClass('show-loader show-result');
cropped_img = img_cropping.cropper('getCroppedCanvas', {

  //width: 677,
  //height: 158,
  imageSmoothingEnabled: false,
  imageSmoothingQuality: 'high',
}).toDataURL('image/png');
//       "cropped_img" use this for reteriving cropped image data for further processing like saving in datase, etc.
photo_preview_container.html('').append('<img src=""/>');
photo_preview_container.find('img').attr('src', cropped_img);
setTimeout(function () {
  photo_crop_container.removeClass('show-loader');
}, 1900);
});

});

// Empty the photo preivew containers once the user remove the image from the uploader
pond.addEventListener('FilePond:removefile', function (e) {
setTimeout(function () {
photo_crop_container.removeClass('show-result');
}, 1000);
crop_preview_cont.slideUp();
// crop_preview_cont.html('');
img_cropping.cropper('destroy').html('');
photo_preview_container.html('');
filepond_img_Container.html('');
});

/* VIDEJO UPLOADER
*/

//const videoupload = document.querySelector('.video-uploader');
const videoplace = document.querySelector('.filepond--media-preview-wrapper');
const botun = document.querySelector('.botun');

const pondvideo = FilePond.create({
name: 'filepondvideo',
      acceptedFileTypes: ['image/png', 'image/jpeg', 'video/quicktime', 'video/mp4'],
      checkValidity: true,
      dropValidation: true,
      dropOnPage:true,
});

$(document).ready(function()
{    
$('#movevideo').click(function(){

    //  var toAdd = $('input[name=checkListItem]').val();
      var item = $('.filepond--media-preview video');
      $('.mobile').append(item);
      //  document.querySelector('.filepond--media-preview video').play();
     // document.getElementById('homevid').play();
     video.play();
      console.log("APPEND");
 
});
});






/* 3DMATRIX */   

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
      border: '10px solid black',
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

makeTransformable('.panelio', function(element, H) {
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