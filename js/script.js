$(document).ready(function(){
	// $('.slide-wrapper .slide:first-of-type, .nav-dots a:first-of-type').addClass('active')

	// $('.nav-dots a').click(function(e){
	// 	e.preventDefault();
	// 	$(this).addClass('active').siblings().removeClass('active')
	// 	var active_slide = $(this).attr('href')
	// 	console.log(active_slide)
	// 	$(active_slide).addClass('active').animate({ 
	// 		'bottom': '0'
	// 	},1000).siblings().removeClass('active').animate({
	// 		'bottom': '-200%'
	// 	},1000)
	// })

	$('.skill').each(function(e){
		var skill_name = $(this).attr('data-skill-name')
		var skill_val = $(this).attr('data-value') + "%";
		$(this).find('.skill-name').html(skill_name)

		$(this).find('.progress-bar').css({
			'width' : skill_val
		});
		$(this).find('.skill-value').html((parseInt(skill_val)/10) + " / 10")
		console.log("skill : ", skill_val);
	})


	
	

 			$('#fullpage').fullpage({
				anchors: ['about_me', 'experience', 'skills', 'hire_me'],
				// sectionsColor: ['#DAC500', '#1BBC9B', '#7E8F7C'],
				menu: '#menu',
				navigation: true,
				navigationPosition: 'right',
				verticalCentered: false,
				scrollOverflow: true,
				scrollOverflowReset: true
				// navigationTooltips: ['First page', 'Second page', 'Third and last page']
				
				// responsiveWidth: 100%
			});
	



	// $('#fullpage').fullpage({
	// 	//Navigation
	// 	menu: '#menu',
	// 	lockAnchors: false,
	// 	anchors:['firstPage', 'secondPage'],
	// 	navigation: false,
	// 	navigationPosition: 'right',
	// 	navigationTooltips: ['firstSlide', 'secondSlide'],
	// 	showActiveTooltip: false,
	// 	slidesNavigation: false,
	// 	slidesNavPosition: 'right',

	// 	//Scrolling
	// 	css3: true,
	// 	scrollingSpeed: 700,
	// 	autoScrolling: true,
	// 	fitToSection: true,
	// 	fitToSectionDelay: 1000,
	// 	scrollBar: false,
	// 	easing: 'easeInOutCubic',
	// 	easingcss3: 'ease',
	// 	loopBottom: false,
	// 	loopTop: false,
	// 	loopHorizontal: true,
	// 	continuousVertical: false,
	// 	continuousHorizontal: false,
	// 	scrollHorizontally: false,
	// 	interlockedSlides: false,
	// 	dragAndMove: false,
	// 	offsetSections: false,
	// 	resetSliders: false,
	// 	fadingEffect: false,
	// 	normalScrollElements: '#element1, .element2',
	// 	scrollOverflow: true,
	// 	scrollOverflowReset: true,
	// 	scrollOverflowOptions: null,
	// 	touchSensitivity: 15,
	// 	normalScrollElementTouchThreshold: 5,
	// 	bigSectionsDestination: null,

	// 	//Accessibility
	// 	keyboardScrolling: true,
	// 	animateAnchor: true,
	// 	recordHistory: true,

	// 	//Design
	// 	controlArrows: true,
	// 	verticalCentered: false,
	// 	// sectionsColor : ['#ccc', '#fff'],
	// 	paddingTop: '3em',
	// 	paddingBottom: '10px',
	// 	fixedElements: '#header, .footer',
	// 	responsiveWidth: 0,
	// 	responsiveHeight: 0,
	// 	responsiveSlides: false,
	// 	parallax: false,
	// 	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

	// 	//Custom selectors
	// 	sectionSelector: '.section',
	// 	slideSelector: '.slide',

	// 	lazyLoading: true,

	// 	//events
	// 	onLeave: function(index, nextIndex, direction){},
	// 	afterLoad: function(anchorLink, index){},
	// 	afterRender: function(){},
	// 	afterResize: function(){},
	// 	afterResponsive: function(isResponsive){},
	// 	afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
	// 	onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	// });
})