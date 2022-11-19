import { useEffect } from 'react'
// import AnimatedCursor from "react-animated-cursor"
import "swiper/css";
import "swiper/css/pagination";
import Routes from './router/Routes';

// import required modules
// import { Pagination } from "swiper";



function App() {

  useEffect(() => {
    /*========== Responsive Menu  ==========*/
    $('.meanmenu-responsive').meanmenu({
      meanMenuContainer: '.responsive-menu',
      meanScreenWidth: '991',
      meanMenuOpen: '<span></span><span></span><span></span>',
      meanMenuClose: '<i class="fal fa-times"></i>'
    });
  }, []);


  useEffect(() => {
    /*==========  sidebar popup  ==========*/
    $('.header__area-box-sidebar-popup-icon i').on("click", function() {
      $('.header__area-box-sidebar-popup').addClass('active');
    });
    $('.header__area-box-sidebar-popup .sidebar-close-btn').on("click", function() {
      $('.header__area-box-sidebar-popup').removeClass('active');
    });
    $('.header__area-box-sidebar-popup-icon i').on("click", function() {
      $('.sidebar-overlay').addClass('show');
    });
    $('.header__area-box-sidebar-popup .sidebar-close-btn').on("click", function() {
      $('.sidebar-overlay').removeClass('show');
    });

  }, []);



  useEffect(() => {
    /*==========  Skill Bar (Home 02)  ==========*/
    if($('.skill__area-right-skill-item-bar').length) {
      $('.skill__area-right-skill-item-bar').appear(function() {
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent + '%');
      }, {
        accY: 0
      });
    };
    
  },[]);

  useEffect(() => {
    /*==========  Skill Bar Two (Home 3)  ==========*/
    if($('.skill__area-two-right-skill-item-bar').length) {
      $('.skill__area-two-right-skill-item-bar').appear(function() {
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent + '%');
      }, {
        accY: 0
      });
	};
  }, []);

  useEffect(() => {
    /*==========  isotope (Home - 3)  ==========*/
    $(window).on('load', function() {
      /*========== Project Grid  ==========*/

      /*========== Project Active  ==========*/
      // $('.portfolio__area-two-btn').on('click', 'li', function() {
      //   $(this).siblings('.active').removeClass('active');
      //   $(this).addClass('active');
      // });
    });
  }, []);
  
  useEffect(() => {
    
    /*==========  counterUp (About) ==========*/
    var counter = $('.counter');
    counter.counterUp({
      time: 2500,
      delay: 100
    });
    $('.toggle-menu ul').hide();
    $(".toggle-menu a").click(function() {
      $(this).parent(".toggle-menu").children("ul").slideToggle("100");
      $(this).find(".change").toggleClass("fal fa-angle-up fal fa-angle-down");
    });
  }, []);


  /*========== Custom Cursor  ==========*/


//  color="2px solid rgb(249 77 29)"

  return (
    <div className='metier_all_wrap'>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.3}
        outerAlpha={0}
        hasBlendMode={false}
        outerStyle={{
          border: '2px solid rgb(249 77 29)'
        }}
      /> */}

      <Routes/>
    </div>
  )
}

export default App
