$(window).load(function(){
	$('body').removeClass('loaded'); 
});
$(function(){
	
	if($.browser.msie){ 
		   $('input[placeholder]').each(function(){  
				
				var input = $(this);        
				
				$(input).val(input.attr('placeholder'));
						
				$(input).focus(function(){
					 if (input.val() == input.attr('placeholder')) {
						 input.val('');
					 }
				});
				
				$(input).blur(function(){
					if (input.val() == '' || input.val() == input.attr('placeholder')) {
						input.val(input.attr('placeholder'));
					}
				});
			});
			
		};
		if($.browser.msie){ 
		   $('textarea[placeholder]').each(function(){  
				
				var input = $(this);        
				
				$(input).val(input.attr('placeholder'));
						
				$(input).focus(function(){
					 if (input.val() == input.attr('placeholder')) {
						 input.val('');
					 }
				});
				
				$(input).blur(function(){
					if (input.val() == '' || input.val() == input.attr('placeholder')) {
						input.val(input.attr('placeholder'));
					}
				});
			});
			
		};
	
	$('input, textarea').each(function(){
		var placeholder = $(this).attr('placeholder');
		$(this).focus(function(){ $(this).attr('placeholder', ''); return false;});
		$(this).focusout(function(){			 
			$(this).attr('placeholder', placeholder); 
			return false;
		});
	});
 
	$('.lang_title').click(function(){
		$('.list_lang').slideToggle(), 
		$(this).parent().toggleClass('opened-lang'); 
		return false;
	});
	
	$(".list_lang_link").click(function(){
		var name = $(this).html();
		$(this).parents('.box_lang').find(".lang_title_text").html(name);
		$(this).parents('.list_lang').slideUp(300);
		$(this).parents('.box_lang').removeClass('opened-lang'); 
		$(this).parents('ul').find('li').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	});	
		
	
	
	$('.tab_nav a').click(function(){
		$(this).parents('.tabs').find('.tab_cont').addClass('hide');
		$(this).parents('.tabs').find('.small_img_item').removeClass('active'); 
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active'); 
		return false;
	});
	
	$('.tab_nav2 a').click(function(){
		$(this).parents('.tabs2').find('.tab_cont').addClass('hide');
		$(this).parents('ul').find('li').removeClass('active'); 
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active'); 
		return false;
	});
	
	$('.tab_nav3 a').click(function(){
		$(this).parents('ul').find('li').removeClass('active'); 
		var id = $(this).attr('href');
		$(id).removeClass('hide-slide').removeClass('moved');
		$(id).nextAll('.slide_reward').addClass('moved').removeClass('hide-slide');
		$(id).prevAll('.slide_reward').addClass('hide-slide').removeClass('moved');
		$(this).parent().addClass('active'); 
		return false;
	});
	
	$('.one_block_logo').mouseenter(function(){
		$(this).addClass('active');
		$(this).siblings('div').removeClass('active');
	});
	
	$('.anchor').click(function() {
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top}, 1000);
		return false;
	});
	
	$('.button_minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.button_plus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) + 1;
        count = count > ($input.attr("maxlength")) ? ($input.attr("maxlength")) : count;
        $input.val(count);
        $input.change();
        return false;
    });
	
	$('.list_shop_colors_item').click(function() {
		$(this).siblings().removeClass('choosed');
		$(this).toggleClass('choosed');
		return false;
	});

	
	$('.contact_map_link').click(function() {
		$(this).parent().siblings().removeClass('active');		
		$(this).parent().addClass('active');	
		return false;
	});
	
	$('.one_block_costume').hover(function() {
		$(this).addClass('hover_item');		
	},
	function() {
		$(this).removeClass('hover_item');		
	});
	
	$('.vacancy_name').click(function() {
		$(this).toggleClass('active');
		$(this).parent().find('.vacancy_open').slideToggle();
		return false;
	});
	
	$('.news_search_input').focus(function() {
		$(this).parents('.box_news_search_wrap').addClass('focused');
	});
	$('.news_search_input').focusout(function() {
		$(this).parents('.box_news_search_wrap').removeClass('focused');
	});
	
	$('.card_size_link').click(function() {
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		return false;
	});
	
	$('.img_card_small_item').click(function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var img_big = $(this).find('a').attr('href');
       	$('.img_card_big img').attr('src',img_big);
        return false;
    });
	$('.button_choose_cost').click(function(){
		$('body').addClass('opened_cost');
		$('.mask_opened_cost').show();
        return false;
    });
	$('.box_cost_link').click(function(){
		$('body').removeClass('opened_cost');
		$('.mask_opened_cost').hide();
        return false;
    });
	$('.mask_opened_cost').click(function(){
		$('body').removeClass('opened_cost');
		$('.mask_opened_cost').hide();
        return false;
    });
	$('.list_question_link').click(function(){
		$(this).parent().siblings().removeClass('active');
		$(this).parent().siblings().find('.answer').slideUp();
		$(this).parent().toggleClass('active');
		$(this).parent().find('.answer').slideToggle();
        return false;
    });
	$('.box_about_teacher').each(function(){
		var prev_but = $(this).find('.teacher_sert_prev');
		var next_but = $(this).find('.teacher_sert_next');
		$('.teacher_sert').carouFredSel({
			auto: false,
			width:'100%',
			responsive: false,
			prev: prev_but,
			next: next_but,
			align: "center",
			scroll: 1,
			mousewheel: false,
			items: {
				visible: {
					min: 2,
					max: 2
				}
			},		
			swipe: {
				onMouse: true,
				onTouch: true
			}
		});
	});
	$('.list_teacher_cont').click(function(){
		$(this).parent().siblings().removeClass('active');
		$(this).parent().siblings().find('.box_about_teacher').removeClass('visible_teacher');
		$(this).parent().find('.box_about_teacher').toggleClass('visible_teacher');
		$(this).parent().toggleClass('active');
		$(this).parent().find('.box_about_teacher').each(function(){
			var prev_but = $(this).find('.teacher_sert_prev');
			var next_but = $(this).find('.teacher_sert_next');
			$('.teacher_sert').carouFredSel({
				auto: false,
				width:'100%',
				responsive: false,
				prev: prev_but,
				next: next_but,
				align: "center",
				scroll: 1,
				mousewheel: false,
				items: {
					visible: {
						min: 2,
						max: 2
					}
				},		
				swipe: {
					onMouse: true,
					onTouch: true
				}
			});
		});
	});
	
	$('.js-fancybox-window').click(function () {
			$('html').addClass('for-window');
		});
		$('.fancybox-close').click(function () {
			$('html').removeClass('for-window');
		});
		$('.fancybox-overlay').click(function () {
			$('html').removeClass('for-window');
		});
		
		$('.select_language_link').click(function(){$(this).parent().find('.list_language').slideToggle(), $('.select_language_link').toggleClass('active'); return false;});
		
		$(".list_language li").click(function(){
			var name = $(this).html();
			$(".select_language_link").html(name);
			$(".list_language").slideUp(100);
			$('.list_language li').removeClass("active"); 
			$('.select_language_link').removeClass("active"); 
			$(this).parent().addClass("active");
			return false;
		});
		
		$(document).click(function(e){
			if ($(e.target).parents().filter('.list_language:visible').length != 1) {
				$('.list_language').hide();
			}
		});
	
	$(".link_map_1").click(function(){			
		$(this).addClass('active_link');
		$('.link_map_2').removeClass('active_link');
		$('.button_map_cont').addClass('active_link_1').removeClass('active_link_2');
		return false;
	});
	
	$(".link_map_2").click(function(){			
		$(this).addClass('active_link');
		$('.link_map_1').removeClass('active_link');
		$('.button_map_cont').addClass('active_link_2').removeClass('active_link_1');
		return false;
	});
	
	
	$('.filter_number_link').click(function(){
		$(this).parent().siblings().removeClass('active');		
		$(this).parent().addClass('active');		
        return false;
    });
	
	$('.list_letters_link').click(function(){
		$(this).parent().siblings().removeClass('active');		
		$(this).parent().addClass('active');		
        return false;
    });
	$('.filter_dates_link').click(function(){
		$(this).parent().siblings().removeClass('active');		
		$(this).parent().addClass('active');		
        return false;
    });
	$('.filter_view_link').click(function(){
		$(this).parent().siblings().removeClass('active');		
		$(this).parent().addClass('active');		
        return false;
    });
	
	
	$('.nav_programs_link').click(function(){
		var href = $(this).attr('href');
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		$('.one_block_program').addClass('invisible_item');
       	$(href).removeClass('invisible_item');
        return false;
    });
	$('.close_error').click(function(){
		$(this).parents('.error_text').slideUp();
		$(this).parent().parent().parent().find('input').removeClass('js-error');
        return false;
    });
	
	
		
	
	
});

var handler2 = function(){
	var left_wrap = $('.wrapper_cont').offset().left;
	var left_pad = $('.wrapper_cont').css('paddingLeft');
	var num1 = parseFloat(left_pad, 10);
	var num2 = parseFloat(left_wrap, 10);
	var margin_new = num1+num2;
	
	$('.one_block_logo_title').css({'left':left_wrap});	
	$('.month_one').css({'margin-left':margin_new});
	
	$(".list_new").mCustomScrollbar({
		axis:"x",
		advanced:{
			autoExpandHorizontalScroll:true
		},
		scrollButtons:{enable:true},
		mouseWheel:false
	});
	
	$(".box_opened_cost").mCustomScrollbar({
		axis:"y",
		advanced:{
			autoExpandHorizontalScroll:true
		},
		scrollButtons:{enable:false}
	});
	
	$('.box_news_list .mCSB_scrollTools').css({'margin-left':margin_new-10, 'margin-right':margin_new-10});
	
	$(window).load(function(){
		var footer_top = $('footer').offset().top;	
		var cont_height = $('.content').height();	
		if ($(window).scrollTop() > footer_top-300) {
			$('.box_button_back').css({'top':cont_height-300, 'position':'absolute'});
		} else{
			$('.box_button_back').css({'top':'auto', 'position':'fixed'});
		};
		
		if ($(window).scrollTop() > footer_top-550) {
			$('.box_button_back2').css({'top':cont_height-550, 'position':'absolute'});
		} else{
			$('.box_button_back2').css({'top':'auto', 'position':'fixed'});
		};
	});
	$(window).scroll(function(){
		var footer_top = $('footer').offset().top;	
		var cont_height = $('.content').height();	
		if ($(window).scrollTop() > footer_top-300) {
			$('.box_button_back').css({'top':cont_height-300, 'position':'absolute'});
		} else{
			$('.box_button_back').css({'top':'auto', 'position':'fixed'});
		};
		if ($(window).scrollTop() > footer_top-550) {
			$('.box_button_back2').css({'top':cont_height-550, 'position':'absolute'});
		} else{
			$('.box_button_back2').css({'top':'auto', 'position':'fixed'});
		};
	});
	
	$(window).scroll(function(){
		var offset_top = $('.box_scroll_line').offset().top;
		if ($(window).scrollTop() > offset_top) {
			$('.scrollgress').addClass("fixed");
		} else{
			$('.scrollgress').removeClass("fixed")	
		}
	});
	
	$(window).load(function(){
		var offset_top = $('.box_scroll_line').offset().top;
		if ($(window).scrollTop() > offset_top) {
			$('.scrollgress').addClass("fixed");
		} else{
			$('.scrollgress').removeClass("fixed")	
		};
		
		
	});
	
	$('.list_shop_item').each(function(){
		var height_wrapper = $(this).find('.list_shop_cont').height();
		$(this).find('.list_shop_open_cont').css('padding-top',height_wrapper+20)
	});
	
	
	var win_w = $(window).width();
	$('.box_about_teacher').width(win_w);
	$('.list_teacher_cont').click(function(){		
		var offset_li = $(this).offset().left;
		$(this).parent().find('.box_about_teacher').css({'margin-left':-offset_li});
	});
	
	
}
$(window).bind('load', handler2);
$(window).bind('resize', handler2);



