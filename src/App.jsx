import { useEffect } from 'react'
import AnimatedCursor from "react-animated-cursor"
import "swiper/css";
import "swiper/css/pagination";
import Routes from './router/Routes';

// import required modules
import { Pagination } from "swiper";



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
    	/*========== scroll to top  ==========*/
      // var scrollPath = document.querySelector('.scroll-up path');
      // var pathLength = scrollPath.getTotalLength();
      // scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
      // scrollPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      // scrollPath.style.strokeDashoffset = pathLength;
      // scrollPath.getBoundingClientRect();
      // scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
      // var updatescroll = function() {
      //   var scroll = $(window).scrollTop();
      //   var height = $(document).height() - $(window).height();
      //   var scroll = pathLength - (scroll * pathLength / height);
      //   scrollPath.style.strokeDashoffset = scroll;
      // }
      // updatescroll();
      // $(window).scroll(updatescroll);
      // var offset = 50;
      // var duration = 950;
      // jQuery(window).on('scroll', function() {
      //   if(jQuery(this).scrollTop() > offset) {
      //     jQuery('.scroll-up').addClass('active-scroll');
      //   } else {
      //     jQuery('.scroll-up').removeClass('active-scroll');
      //   }
      // });
      // jQuery('.scroll-up').on('click', function(event) {
      //   event.preventDefault();
      //   jQuery('html, body').animate({
      //     scrollTop: 0
      //   }, duration);
      //   return false;
      // });
  },[]);

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
      $('.portfolio__area-two-btn').on('click', 'li', function() {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
      });
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

    useEffect(() => {
    /*========== Custom Cursor  ==========*/
//    if($(".custom__cursor").length) {
//      var cursor = document.querySelector('.custom__cursor-one');
//      var cursorinner = document.querySelector('.custom__cursor-two');
//      var a = document.querySelectorAll('a');
//      document.addEventListener('mousemove', function(e) {
//        var x = e.clientX;
//        var y = e.clientY;
//        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
//      });
//      document.addEventListener('mousemove', function(e) {
//        var x = e.clientX;
//        var y = e.clientY;
//        cursorinner.style.left = x + 'px';
//        cursorinner.style.top = y + 'px';
//      });
//      document.addEventListener('mousedown', function() {
//        cursor.classList.add('click');
//        cursorinner.classList.add('custom__cursor-hover')
//      });
//      document.addEventListener('mouseup', function() {
//        cursor.classList.remove('click')
//        cursorinner.classList.remove('custom__cursor-hover')
//      });
//      a.forEach(item => {
//        item.addEventListener('mouseover', () => {
//          cursor.classList.add('custom__cursor__hover');
//        });
//        item.addEventListener('mouseleave', () => {
//          cursor.classList.remove('custom__cursor__hover');
//        });
//      })
//    }

 });



  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/home-two' element={<HomeTwo />} />
          <Route path='/home-three' element={<HomeThree />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services-details' element={<ServiceDetails />} />
          <Route path='/error' element={<Error />} />
          <Route path='/portfolio-one' element={<PortfolioOne />} />
          <Route path='/portfolio-two' element={<PortfolioTwo />} />
          <Route path='/portfolio-three' element={<PortfolioThree />} />
          <Route path='/portfolio-details-one' element={<PortfolioDetailsOne />} />
          <Route path='/portfolio-details-two' element={<PortfolioDetailsTwo />} />
          <Route path='/news' element={<News />} />
          <Route path='/news-details' element={<NewsDetails />} />
          <Route path='/contact' element={<Contact />} />


          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter> */}
      <Routes/>
    </>
  )
}

export default App
