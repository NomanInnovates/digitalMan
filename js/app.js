$(document).foundation();


window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }

  
  var sliders1 = document.querySelectorAll('.glide');

  for (var i = 0; i < sliders1.length; i++) {
    var glide1 = new Glide(sliders1[i], {
      type: 'carousel',
      focusAt: 'center',
      startAt:0,
      gap:60,
      perView: 3,
      breakpoints: {
        1030: {
          perView: 2
        },
      600: {
          peek: 0,
          perView: 1,
          gap:20,
        }
      }
    });
    
    glide1.mount();
  }
  AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 800) {
          $('.side-nav').fadeIn();
      } else {
          $('.side-nav').fadeOut();
      }
  
  });


  console.clear();
var navExpand = [].slice.call(document.querySelectorAll('.nav-expand'));
var backLink = "<li class=\"nav-item\">\n\t<a class=\"nav-link nav-back-link\" href=\"javascript:;\">\n\t\tBack\n\t</a>\n</li>";
navExpand.forEach(function (item) {
  item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink);
  item.querySelector('.nav-link').addEventListener('click', function () {
    return item.classList.add('active');
  });
  item.querySelector('.nav-back-link').addEventListener('click', function () {
    return item.classList.remove('active');
  });
}); // ---------------------------------------
// not-so-important stuff starts here

var ham = document.getElementById('ham');
ham.addEventListener('click', function () {
  document.body.classList.toggle('nav-is-toggled');
});