
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
/* FilePondPluginMediaPreview */
);

// Initialise the filepond plugin with required options
// $('.upload-photo').filepond({
FilePond.create(
document.querySelector('.upload-photo'), {
labelIdle: '<div class="uploading-frame">Drag&drop fotku ili <span class="filepond--label-action fontDarkOrange"> Click za upload </span></div>',
checkValidity: true,
dropValidation: true,
/* dropOnPage:true, */
acceptedFileTypes: ['image/png', 'image/jpeg', 'video/quicktime', 'video/mp4'],
/* imageValidateSizeMinWidth: 1200,
imageValidateSizeMinHeight: 300, */
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




