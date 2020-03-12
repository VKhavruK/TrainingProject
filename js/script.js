// маска вводу
jQuery('document').ready(function() {
	$(function() {
		$('#data').mask('99.99.9999', {placeholder: 'дд.мм.гггг'});
	});

	$(function() {
		$('#phone').mask('+38 (099) 999-99-99');
	});
	$(function() {
		$('#phone1').mask('+38 (099) 999-99-99');
	});

	$(document).on('click','.hide-nav', function(){
	var nav = $('.menu');
		$('.hide-nav').toggleClass('active');
	if(nav.is(':visible')) {
		nav.slideUp();
	} else {
		nav.slideDown();
	}
	});

//////////////////////////////////////////////////////////////////////////////
		$('.comercial').css('display', 'none')
	
	$('#living').on('click', function () {
		$(this).prop('checked', 'checked')
		$('#commerce').prop('checked', '')
		$('.comercial').css('display', 'none')
		$('.living').css('display', 'block')
	});
	$('#commerce').on('click', function() {
		$(this).prop('checked', 'checked')
		$('#living').prop('checked', '')
		$('.living').css('display', 'none')
		$('.comercial').css('display', 'block')
	})



});

