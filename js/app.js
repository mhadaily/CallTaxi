var path   = document.querySelector('.st0');
var length = path.getTotalLength();
//console.log(length);
// Clear any previous transition
//path.style.transition = path.style.WebkitTransition = 'none';
// Set up the starting positions
path.style.strokeDasharray  = length + ' ' + length;
path.style.strokeDashoffset = length;
// Trigger a layout so styles are calculated & the browser
// picks up the starting position before animating
//path.getBoundingClientRect();
// Define our transition
//path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 10s ease-in-out';
// Go!
//path.style.strokeDashoffset = '0';

function init() {
  var mysvg  = $('#rect');
  var svgimg = $('#logo_img');

  TweenMax.set('.main_menu > li', { y: "+=100" });
  function menuanim() {
    TweenMax.staggerTo(['.main_menu > li:first-child', '.main_menu > li:nth-child(2)', '.main_menu > li:nth-child(3)', '.main_menu > li:nth-child(4)', '.main_menu > li:nth-child(5)', '.main_menu > li:nth-child(6)', '.main_menu > li:nth-child(7)'], 1, {
      y: "0",
      opacity: 1
    }, 0.2);
  }

  var tl = new TimelineMax();

  tl.to(mysvg, 1.5, {
    css: {
      strokeDashoffset: 0
    }
  });
  tl.to(svgimg, 0.5, {
    css: {
      opacity: 1
    }, onComplete: menuanim
  });
  tl.to('.scene_1, .slogan', 1, { className: "+=anim" });

}
var controller;
$(document).ready(function ($) {
  // init controller
  controller = new ScrollMagic();
});

var nice = false;
jQuery(document).ready(function () {
  nice = $("body").niceScroll().hide();
  //$.material.init();

  function sniffer() {
    var WinWidth = $(window).width();
    $('.scene_1').height(WinWidth * 42.47 / 100);
    $('.scene_3 .car_scene').height(WinWidth * 17.43 / 100);
    $('.scene_4').height(WinWidth * 25 / 100);
    $('.scene_map').height(WinWidth * 35 / 100);
    $('.road_scene').height(WinWidth * 1 / 3);
  }

  sniffer();

  $('#toggle_menu').click(function () {
    $(this).toggleClass('anim');
  })

  $('#toggle_menu_lower').click(function () {
    $(this).toggleClass('anim');
  })

  $(window).resizeEnd({}, function () {
    sniffer();
  });


  var toggle_menu_lower = new TimelineMax()
    .add([
      TweenMax.to(".lower_menu", 0.5, { className: "+=animhide" })
    ]);

  // build scene
  var toggle_menu_lower_scene = new ScrollScene({ triggerElement: "#scene_2", triggerHook: 'onLeave' })
    .setTween(toggle_menu_lower)
    .addTo(controller);


  var scene_1_buildings = new TimelineMax()
    .add([
      TweenMax.fromTo("#scene_1 .scene_1_buildings", 1, {
        backgroundPosition: "30% 50%",
        ease: Linear.easeNone
      }, { backgroundPosition: "100% 50%", ease: Linear.easeNone })
    ]);

  // build scene
  var scene_1_buildings_scene = new ScrollScene({
    triggerElement: ".slogan h1",
    duration: ($(window).height()) * 2,
    triggerHook: 'onEnter'
  })
    .setTween(scene_1_buildings)
    .addTo(controller);


  var scene_1_houses = new TimelineMax()
    .add([
      TweenMax.fromTo("#scene_1 .scene_1_houses", 1, {
        backgroundPosition: "80% 50%",
        ease: Linear.easeNone
      }, { backgroundPosition: "10% 50%", ease: Linear.easeNone })
    ]);

  // build scene
  var scene_1_houses_scene = new ScrollScene({
    triggerElement: ".slogan h1",
    duration: ($(window).height()) * 2,
    triggerHook: 'onEnter'
  })
    .setTween(scene_1_houses)
    .addTo(controller);


  var scene_2_cars = new TimelineMax()
    .add([
      TweenMax.staggerFrom('#scene_2 img[alt="cars"]', 1, { y: "-220", ease: Back.easeOut }, 0.2)
    ]);

  // build scene
  var scene_2_cars_scene = new ScrollScene({ triggerElement: "#scene_2 main" })
    .setTween(scene_2_cars)
    .addTo(controller);


  var scene_2_articles = new TimelineMax()
    .add([
      TweenMax.to('.scene_2', 1, { className: "+=anim" })

    ])
    .add([
      TweenMax.staggerFromTo('.article_right ul li', 1, { y: "60", opacity: 0, ease: Back.easeOut }, {
        y: "0",
        opacity: 1,
        ease: Back.easeOut
      }, 0.2)
    ])

  // build scene
  var scene_2_articles_scene = new ScrollScene({ triggerElement: "#scene_2 .headings" })
    .setTween(scene_2_articles)
    .addTo(controller);


  var scene_2_singlecar = new TimelineMax()
    .add([
      TweenMax.fromTo('.scene_2 #scene_2_car_on_line', 3, { y: 0, ease: Linear.easeNone }, {
        y: 900,
        ease: Linear.easeNone
      })
    ])

  // build scene
  var scene_2_singlecar_scene = new ScrollScene({
    triggerElement: "#scene_2 .article_right h1",
    duration: ($(window).height() * 1.5)
  })
    .setTween(scene_2_singlecar)
    .addTo(controller);


  /******************************************* SCENE 3***********************************************/

  var scene_3_bg = new TimelineMax()
    .add([
      TweenMax.to('.scene_3', 2, { backgroundPosition: "0% 0%", ease: Linear.easeNone })
    ])

  // build scene
  var scene_3_bg_scene = new ScrollScene({
    triggerElement: ".scene_3",
    duration: ($(window).height() * 1.5),
    triggerHook: 'onEnter'
  })
    .setTween(scene_3_bg)
    .addTo(controller);


  /*** scene_3_car****/

  var scene_3_car = new TimelineMax()
    .add([
      TweenMax.fromTo('.scene_3 .scene_3_car', 1, { x: '0', ease: Linear.easeNone }, {
        x: '60%',
        ease: Linear.easeNone
      })
    ])

  // build scene
  var scene_3_car_scene = new ScrollScene({
    triggerElement: ".scene_3 .scene_3_car",
    duration: ($(window).height() * 1.3),
    triggerHook: 'onEnter'
  })
    .setTween(scene_3_car)
    .addTo(controller);


  /*** scene_3_houses****/

  var scene_3_houses = new TimelineMax()
    .add([
      TweenMax.to('.scene_3 .scene_3_houses', 1, { backgroundPosition: "-100px 50%", ease: Linear.easeNone })
    ])

  // build scene
  var scene_3_houses_scene = new ScrollScene({
    triggerElement: ".scene_3 .scene_3_houses",
    duration: ($(window).height() * 1.3),
    triggerHook: 'onEnter'
  })
    .setTween(scene_3_houses)
    .addTo(controller);


  /******************************************* SCENE 4 ***********************************************/

  var scene_4_house = new TimelineMax()
    .add([
      TweenMax.to('.scene_4 .scene_4_house', 1, { backgroundPosition: "20% 65%", ease: Linear.easeNone })
    ])

  // build scene
  var scene_4_house_scene = new ScrollScene({
    triggerElement: ".scene_4",
    duration: ($(window).height() * 1.3),
    triggerHook: 'onEnter'
  })
    .setTween(scene_4_house)
    .addTo(controller);


  /******************************************* SCENE 5 ***********************************************/

  var scene_5_article = new TimelineMax()
    .add([
      TweenMax.staggerFromTo('.scene_5 article', 1, { y: "50", opacity: 0, ease: Linear.easeNone }, {
        y: "0",
        opacity: 1,
        ease: Linear.easeNone
      })
    ])

  // build scene
  var scene_5_article_scene = new ScrollScene({ triggerElement: ".scene_5 .headings" })
    .setTween(scene_5_article)
    .addTo(controller);


  var scene_5_singlecar = new TimelineMax()
    .add([
      TweenMax.fromTo('.scene_5 #scene_5_car_on_line', 3, { y: 0, ease: Linear.easeNone }, {
        y: 400,
        ease: Linear.easeNone
      })
    ])

  // build scene
  var scene_5_singlecar_scene = new ScrollScene({
    triggerElement: "#scene_5 h1.headings",
    duration: ($(window).height() * 1.5)
  })
    .setTween(scene_5_singlecar)
    .addTo(controller);


  /******************************************* SCENE MAP *******************************************/


  var scene_map = new TimelineMax()
    .add(
      TweenMax.to("#scene_map_no_1", 0.2, {
        onStart: function () {
          options1 = {
            useEasing: true,
            useGrouping: true,
            separator: '',
            decimal: '',
            prefix: '',
            suffix: ''
          }

          var demo1 = new countUp("scene_map_no_1", 0, 1500, 0, 5, options1);
          demo1.start();

          var demo2 = new countUp("scene_map_no_2", 0, 866, 0, 5, options1);
          demo2.start();

          var demo3 = new countUp("scene_map_no_3", 0, 3200, 0, 5, options1);
          demo3.start();

          var demo4 = new countUp("scene_map_no_4", 0, 2200, 0, 5, options1);
          demo4.start();
        }
      })
    )

  // build scene
  var scene_map_scene = new ScrollScene({
    triggerElement: ".scene_map",
    duration: ($('.scene_map').height()),
    triggerHook: 'onEnter'
  })
    .setTween(scene_map)
    .addTo(controller);


  /******************************************* SCENE SERVICES ***************************************/

  var scene_6 = new TimelineMax()
    .add(TweenMax.to(".scene_6 #service_article_1, .scene_6 #service_article_4", 0.2, { className: "+=anim" }))

  // build scene
  var scene_6_scene = new ScrollScene({ triggerElement: ".scene_6 h1.headings" })
    .setTween(scene_6)
    .addTo(controller);


  var service_article_2 = new TimelineMax()
    .add(TweenMax.to("#service_article_2", 0.2, { className: "+=anim" }))

  // build scene
  var service_article_2_scene = new ScrollScene({ triggerElement: "#service_article_2", triggerHook: 'onEnter' })
    .setTween(service_article_2)
    .addTo(controller);


  var service_article_6 = new TimelineMax()
    .add(TweenMax.to("#service_article_6, #service_article_3", 0.2, { className: "+=anim" }))

  // build scene
  var service_article_6_scene = new ScrollScene({ triggerElement: "#service_article_6", triggerHook: 'onEnter' })
    .setTween(service_article_6)
    .addTo(controller);


  var service_article_5 = new TimelineMax()
    .add(TweenMax.to("#service_article_5", 0.2, { className: "+=anim" }))

  // build scene
  var service_article_5_scene = new ScrollScene({ triggerElement: "#service_article_5", triggerHook: 'onEnter' })
    .setTween(service_article_5)
    .addTo(controller);


  var scene_6_singlecar = new TimelineMax()
    .add([
      TweenMax.fromTo('.scene_6 #scene_6_car_on_line', 3, { y: 0, ease: Linear.easeNone }, {
        y: 900,
        ease: Linear.easeNone
      })
    ])

  // build scene
  var scene_6_singlecar_scene = new ScrollScene({
    triggerElement: "#scene_6 h1.headings",
    duration: ($(window).height() * 1.5)
  })
    .setTween(scene_6_singlecar)
    .addTo(controller);


  var scene_7_singlecar = new TimelineMax()
    .add([
      TweenMax.fromTo('.scene_7 #scene_7_car_on_line', 3, { y: 0, ease: Linear.easeNone }, {
        y: 600,
        ease: Linear.easeNone
      })
    ])

  // build scene
  var scene_7_singlecar_scene = new ScrollScene({
    triggerElement: "#scene_7 h1.headings",
    duration: ($(window).height() * 1.5)
  })
    .setTween(scene_7_singlecar)
    .addTo(controller);


  /******************************************* SCENE THANKS ***************************************/



  var scene_thanks_cars = new TimelineMax()
    .add([
      TweenMax.staggerFrom('.scene_thanks .cars img', 1, { y: "220", ease: Back.easeOut }, 0.2)
    ]);

  // build scene
  var scene_thanks_cars_scene = new ScrollScene({ triggerElement: ".scene_thanks hgroup" })
    .setTween(scene_thanks_cars)
    .addTo(controller);


  $(".main_menu a[href^='#']").on('click', function (e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top - 0
    }, 900, function () {

      // when done, add hash to url
      // (default click behaviour)
      // window.location.hash = hash;
    });

  });

// Cache selectors
  var topMenu     = $(".main_menu"),
      //topMenuHeight = topMenu.outerHeight()+15,
      // All list items
      menuItems   = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if(item.length) {
          return item;
        }
      });

// Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + 100;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur     = cur[cur.length - 1];
    var id  = cur && cur.length ? cur[0].id : "";
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href=#" + id + "]").parent().addClass("active");
  });

});

