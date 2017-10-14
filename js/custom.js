$(document).on('ready',function(){
	"use strict";

	/*
	  ==============================================================
		   Main Banner Script Start
	  ============================================================== 
	*/
	if($('.slider').length){
      $('.slider').slick({
          fade:true,
          arrows:false,
          dots:true,
          autoplay: true,
          autoplaySpeed: 2000,
      });
    }
    /*
	============================================================== 
			DL Responsive Menu
	============================================================== 
	*/
    if(typeof($.fn.dlmenu) == 'function'){
      $('#mg-responsive-navigation').each(function(){
        $(this).find('.dl-submenu').each(function(){
        if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
          var parent_nav = $('<li class="menu-item mg-parent-menu"></li>');
          parent_nav.append($(this).siblings('a').clone());
          
          $(this).prepend(parent_nav);
        }
        });
        $(this).dlmenu();
      });
    }
    /*
    =======================================================================
         Pretty Photo Script Script
    =======================================================================
  */
    if($("a[data-rel^='prettyPhoto']").length){
      $("a[data-rel^='prettyPhoto']").prettyPhoto();
    }
	/*
	==============================================================
	 Blog Slider
	==============================================================
	*/
	if($('.blog-slider').length){
		$('.blog-slider').slick({
		  slidesToShow: 3,
		  dots: false,
		  autoplay:true,
		  centerMode: true,
		  arrows: true,
		  responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        arrows: true,
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 481,
		      settings: {
		        arrows: false,
		        slidesToShow: 1
		      }
		    }
		  ]
		});
	}
	/*
	==============================================================
	  TESTIMONIAL SLIDER
	==============================================================
	*/
	if($('.testimonial-slider').length){
		$('.testimonial-slider').slick({
		  slidesToShow: 2,
		  dots: true,
		  autoplay:true,
		  centerMode: true,
		  arrows: false,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 481,
		      settings: {
		        arrows: false,
		        slidesToShow: 1
		      }
		    }
		  ]
		});
	}
	/*
	==============================================================
	 Courses SLIDER 
	==============================================================
	*/
	if($('.courses-slider,.related-slider').length){
		$('.courses-slider,.related-slider').slick({
		  slidesToShow: 3,
		  dots: true,
		  autoplay:true,
		  centerMode: true,
		  arrows: false,
		  responsive: [
		  {
		      breakpoint: 992,
		      settings: {
		        arrows: false,
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 481,
		      settings: {
		        arrows: false,
		        slidesToShow: 1
		      }
		    }
		  ]
		});
	}
	/*
	==============================================================
	 Brnd SLIDER
	==============================================================
	*/
	if($('.brnd-slider').length){
		$('.brnd-slider').slick({
		  slidesToShow: 5,
		  dots: false,
		  autoplay:true,
		  centerMode: true,
		  arrows: true,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        slidesToShow: 1
		      }
		    },
		    {
		      breakpoint: 481,
		      settings: {
		        arrows: false,
		        slidesToShow: 1
		      }
		    }
		  ]
		});
	}
	/*
	==============================================================
	 Feedback SLIDER 
	==============================================================
	*/
	if($('.feedback-wrap').length){
		$('.feedback-wrap').slick({
			slidesToShow: 2,
			dots: true,
			autoplay:true,
			vertical:true,
			arrows: false,
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
				    arrows: false,
				    slidesToShow: 1
				  }
				},
				{
				  breakpoint: 481,
				  settings: {
				  	dots: false,
				    arrows: false,
				    slidesToShow: 1
				  }
				}
			]
		});
	}
	/*
	  ==============================================================
		  Calendar Script
	  ============================================================== 
	*/
	if($('#calendar').length){
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay,listWeek'
			},
			defaultDate: '2017-08-14',
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: 'All Day Event',
					start: '2017-08-14'
				},
				{
					title: 'Long Event',
					start: '2017-07-07',
					end: '2017-05-10'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-07-09T16:00:00'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-07-16T16:00:00'
				},
				{
					title: 'Conference',
					start: '2017-07-11',
					end: '2017-05-13'
				},
				{
					title: 'Meeting',
					start: '2017-07-12T10:30:00',
					end: '2017-05-12T12:30:00'
				},
				{
					title: 'Lunch',
					start: '2017-07-12T12:00:00'
				},
				{
					title: 'Meeting',
					start: '2017-07-12T14:30:00'
				},
				{
					title: 'Happy Hour',
					start: '2017-07-12T17:30:00'
				},
				{
					title: 'Dinner',
					start: '2017-07-12T20:00:00'
				},
				{
					title: 'Birthday Party',
					start: '2017-07-13T07:00:00'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2017-07-28'
				}
			]
		});
	}
	/*
	  =======================================================================
		  		 	Filterable Gallery Script
	  =======================================================================
	*/
	if($('#filterable-item-holder-1').length){
	    jQuery(window).on('load',function($) {
	      var filter_container = jQuery('#filterable-item-holder-1');

	      filter_container.children().css('position','relative'); 
	      filter_container.masonry({
	        singleMode: true,
	        itemSelector: '.filterable-item:not(.hide)',
	        animate: true,
	        animationOptions:{ duration: 800, queue: false }
	      }); 
	      jQuery(window).resize(function(){
	        var temp_width =  filter_container.children().filter(':first').width();
	        filter_container.masonry({
	          columnWidth: temp_width,
	          singleMode: true,
	          itemSelector: '.filterable-item:not(.hide)',
	          animate: true,
	          animationOptions:{ duration: 800, queue: false }
	        });   
	      }); 
	      jQuery('ul#filterable-item-filter-1 a').on('click',function(e){ 

	        jQuery(this).addClass("active");
	        jQuery(this).parents("li").siblings().children("a").removeClass("active");
	        e.preventDefault();
	        
	        var select_filter = jQuery(this).attr('data-value');
	        
	        if( select_filter == "All" || jQuery(this).parent().index() == 0 ){   
	          filter_container.children().each(function(){
	            if( jQuery(this).hasClass('hide') ){
	              jQuery(this).removeClass('hide');
	              jQuery(this).fadeIn();
	            }
	          });
	        }else{
	          filter_container.children().not('.' + select_filter).each(function(){
	            if( !jQuery(this).hasClass('hide') ){
	              jQuery(this).addClass('hide');
	              jQuery(this).fadeOut();
	            }
	          });
	          filter_container.children('.' + select_filter).each(function(){
	            if( jQuery(this).hasClass('hide') ){
	              jQuery(this).removeClass('hide');
	              jQuery(this).fadeIn();
	            }
	          });
	        }
	        
	        filter_container.masonry(); 
	        
	      });
	    });
	  }
	/*
	==============================================================
	 SLICK SLIDER TESTIMONIAL
	==============================================================
	*/
	if($('.lessons-slider').length){
      $('.lessons-slider').slick({
          fade:true,
          autoplay: true,
          autoplaySpeed: 1200,
      });
    }

	/*
	  =======================================================================
		  		 	Map Script
	  =======================================================================
	*/
	if($('#map-canvas').length){
		google.maps.event.addDomListener(window, 'load', initialize);
	}
	
	/*
	  ==============================================================
		   Counter Script Start
	  ============================================================== 
	*/
	if($('.counter').length){
		$('.counter').counterUp({
	        delay: 10,
	        time: 1000
	    });
	}	
	

});
/*
  ==============================================================
	  Progress Bar Script Start
  ============================================================== 
*/
if($('.iq-progress [data-toggle="tooltip"]').length){
  $('.iq-progress [data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
}

if($('.progress-bar').length){
  $(".progress-bar").each(function(){
	each_bar_width = $(this).attr('aria-valuenow');
	$(this).width(each_bar_width + '%');
  });
}


function initialize() {
		
	"use strict";
	
	var MY_MAPTYPE_ID = 'custom_style';
	var map;
	var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
	var featureOpts = [ { "elementType": "geometry", "stylers": [ { "color": "#ebe3cd" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#523735" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f1e6" } ] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#c9b2a6" } ] }, { "featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [ { "color": "#dcd2be" } ] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [ { "color": "#ae9e90" } ] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [ { "color": "#dfd2ae" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#dfd2ae" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#93817c" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#a5b076" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#447530" } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "color": "#f5f1e6" } ] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [ { "color": "#fdfcf8" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#f8c967" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#e9bc62" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [ { "color": "#e98d58" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [ { "color": "#db8555" } ] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ { "color": "#806b63" } ] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [ { "color": "#dfd2ae" } ] }, { "featureType": "transit.line", "elementType": "labels.text.fill", "stylers": [ { "color": "#8f7d77" } ] }, { "featureType": "transit.line", "elementType": "labels.text.stroke", "stylers": [ { "color": "#ebe3cd" } ] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [ { "color": "#dfd2ae" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#b9d3c2" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#92998d" } ] } ];
	var mapOptions = {
		zoom: 12,
		center: brooklyn,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		mapTypeId: MY_MAPTYPE_ID
	};

	map = new google.maps.Map(
		document.getElementById('map-canvas'),
		mapOptions
	);

	var styledMapOptions = {
		name: 'Custom Style'
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}
