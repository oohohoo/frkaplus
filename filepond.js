
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
      labelIdle: '<div class="uploading-frame">DRAG&DROP OR CLICK</div>',
      checkValidity: true,
      dropValidation: true,
      iconRemove: '<svg> class="pdfoff" width="0.83em" height="0.83em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.89468 9.20147L13.9565 15.2633L15.3708 13.8491L9.3089 7.78726L15.3948 1.70132L13.9806 0.287109L7.89468 6.37305L1.80874 0.287109L0.394531 1.70132L6.48047 7.78726L0.418607 13.8491L1.83282 15.2633L7.89468 9.20147Z" fill="#ffdc52" </svg>',
      acceptedFileTypes: ['image/png', 'image/jpeg'],
      imageValidateSizeMinWidth: 1200,
    /*   imageValidateSizeMaxHeight: 800,  */
imageValidateSizeMinHeight: 300,
    maxFileSize: '1MB',
    labelMaxFileSize: 'Maksimalna dozvoljena težina datoteke je {filesize}',
    /*     labelMaxHeight: 'Maksimalna dozvoljena visina datoteke je {filesize}',
     */
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


/* VIDEOOOOOOOOOOOOO*/
FilePond.create(
    document.querySelector('.upload-video'), {
        labelIdle: '<div class="uploading-frame">DRAG&DROP OR CLICK</div>',
        checkValidity: true,
        dropValidation: true,
        iconRemove: '<svg> class="pdfoff" width="0.83em" height="0.83em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.89468 9.20147L13.9565 15.2633L15.3708 13.8491L9.3089 7.78726L15.3948 1.70132L13.9806 0.287109L7.89468 6.37305L1.80874 0.287109L0.394531 1.70132L6.48047 7.78726L0.418607 13.8491L1.83282 15.2633L7.89468 9.20147Z" fill="#ffdc52" </svg>',
        acceptedFileTypes: ['video/quicktime', 'video/mp4'],
        imageValidateSizeMinWidth: 1200,
        /*   imageValidateSizeMaxHeight: 800,  */
        imageValidateSizeMinHeight: 300,
        maxFileSize: '30MB',
        labelMaxFileSize: 'Maksimalna dozvoljena težina datoteke je {filesize}',
        /*     labelMaxHeight: 'Maksimalna dozvoljena visina datoteke je {filesize}',
         */ // labelFileProcessing: 'Pripremam za crop',
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
var pdfbutton = $('.linkos.opacity')
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
        viewMode: 3,
        dragMode: 'move',
        //aspectRatio: 6.77 / 1.58,
        guides: true,
        modal: true,
        highlight: true,
        cropBoxResizable: true,

    });
    var cropped_img = '';
    $('#crop_img').on('click', function (ev) {
        /* $('html,body').animate({
             scrollTop: $(".photo-crop-container").offset().top - 80
              },
           'slow');
           console.log("02 crop slide down");*/
        photo_crop_container.addClass('show-loader show-result');
        cropped_img = img_cropping.cropper('getCroppedCanvas', {

            //width: 677,
            //height: 158,
            imageSmoothingEnabled: true,
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
    $('.linkos.opacity').toggleClass('hide');
    console.log("HIDE ON REMOVE FILE");
    /* pdfbutton.toggleClass('hide');
     console.log("HIDE PDF");*/
    setTimeout(function () {
        photo_crop_container.removeClass('show-result');
    }, 1000);
    crop_preview_cont.slideUp();
    console.log("03 slide up");
    // crop_preview_cont.html('');
    img_cropping.cropper('destroy').html('');
    photo_preview_container.html('');
    filepond_img_Container.html('');




});