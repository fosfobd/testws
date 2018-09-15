(($) => {
  $(document).ready(function() {

    $('#officesection').click(() => {

      // office is dashboard
      // port: 8081
      window.location = 'http://' + window.location.hostname + ':8081';

    }).iror({
      image_src: 'img/office.jpg',
      behavior: 'fillcontent'
    });

    $('#gallerysection').click(() => {

      // gallery is scenery
      // port: 8090
      window.location = 'http://' + window.location.hostname + ':8090';

    }).iror({
      image_src: 'img/gallery.jpg',
      behavior: 'fillcontent'
    });

    $('#mediasection').click(() => {

      // media is media
      // port: 8085
      window.location = 'http://' + window.location.hostname + ':8085';

    }).iror({
      image_src: 'img/media.jpg',
      behavior: 'fillcontent'
    });

  });
})(jQuery);
