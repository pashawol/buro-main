$(function() {

	$('.main-banner').slick({
		arrows: false,
		dots: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 4000
	});






	$('.reviews-wrap a').magnificPopup({
		gallery: {
			enabled: true
		},
		type: 'image'
	});





	$('input[type="tel"]').mask('+7 (999) 999-99-99');





	$('.burger').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('active');
		$('ul.mob-menu').slideToggle();
	});







	$('.similar-wrap').slick({
		slidesToShow: 5,
		arrows: false,
		responsive: [{
			breakpoint: 1300,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 1010,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 560,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$('.similar-big-wrap .prev').on('click', function(e) {
		e.preventDefault();

		$('.similar-wrap').slick('slickPrev');
	});

	$('.similar-big-wrap .next').on('click', function(e) {
		e.preventDefault();

		$('.similar-wrap').slick('slickNext');
	});	
    





    $('select').each(function() {
	    const _this = $(this),
	        selectOption = _this.find('option'),
	        selectOptionLength = selectOption.length,
	        selectedOption = selectOption.filter(':selected'),
	        duration = 200; // длительность анимации 

	    _this.hide();
	    _this.wrap('<div class="select"></div>');
	    $('<div>', {
	        class: 'new-select',
	        text: _this.children('option').first().text()
	    }).insertAfter(_this);

	    const selectHead = _this.next('.new-select');
	    $('<div>', {
	        class: 'new-select__list'
	    }).insertAfter(selectHead);

	    const selectList = selectHead.next('.new-select__list');
	    for (let i = 0; i < selectOptionLength; i++) {
	        $('<div>', {
	            class: 'new-select__item',
	            html: $('<span>', {
	                text: selectOption.eq(i).text()
	            })
	        })
	        .attr('data-value', selectOption.eq(i).val())
	        .appendTo(selectList);
	    }

	    const selectItem = selectList.find('.new-select__item');
	    selectList.hide();


	    selectHead.on('click', function() {
	    	$(this).parents('.filter').siblings().find('.new-select').removeClass('on');
	    	$(this).parents('.filter').siblings().find('.new-select__list').hide();

	        if (!$(this).hasClass('on') ) {
	            $(this).addClass('on');
	            selectList.show();

	            selectItem.on('click', function() {
	                let chooseItem = $(this).data('value');

	                $('select').val(chooseItem).attr('selected', 'selected');
	                selectHead.text( $(this).find('span').text());

	                selectList.hide();
	                selectHead.removeClass('on');
	            });

	        } else {
	            $(this).removeClass('on');
	            selectList.hide();
	        }
	    });
	});




	$(document).mouseup(function (e) {
		var div = $('.filter');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.find('.new-select').removeClass('on');
	    	div.find('.new-select__list').hide();
		}
	});








	$('.aside-mob').on('click', function(e) {
		e.preventDefault();

		$('.aside-inner').slideToggle(800);
	});







	$('.cart-section .back').on('click', function(e) {
		e.preventDefault();

		history.back();
	});









	$('.small-images .img').on('mouseover', function(e) {
		$('.big-images img').removeClass('active');
		$('.big-images .images img').eq($(this).index()).addClass('active');
	});

	$('.other-colors .img').on('click', function(e) {
		$(this).addClass('active').siblings().removeClass('active');
		$('.big-images img').removeClass('active');
		$('.big-images .colors img').eq($(this).index()).addClass('active');
	});







	$('.recently-wrap').slick({
		slidesToShow: 5,
		arrows: false,
		responsive: [{
			breakpoint: 1300,
			settings: {
				slidesToShow: 4
			}
		},
		{
			breakpoint: 1010,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 560,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$('.recently-big-wrap .prev').on('click', function(e) {
		e.preventDefault();

		$('.recently-wrap').slick('slickPrev');
	});

	$('.recently-big-wrap .next').on('click', function(e) {
		e.preventDefault();

		$('.recently-wrap').slick('slickNext');
	});









	if ($(window).width() < 960) {
		var imgH = 0;

		$('.big-images img').each(function() {
			if ($(this).height() > imgH) {
				imgH = $(this).height();
			}			
		});

		$('.big-images').css('height', imgH);
	}








	if ($(window).width() < 560) {
		$('.filters .all-filters').on('click', function(e) {
			e.preventDefault();

			$(this).toggleClass('active');

			if ($(this).hasClass('active')) {
				$(this).html('Скрыть фильтры');
				$('.filter').show();
			} else {
				$(this).html('Все фильтры');
				$('.filter').hide();
			}			
		});
	}










});