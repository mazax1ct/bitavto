$(document).ready(function() {
  //кастомный селект
	$('.js-select').each(function() {
   var $p = $(this).closest('.select-wrapper__container');
   $(this).select2({
		 minimumResultsForSearch: Infinity,
     dropdownPosition: 'below',
     dropdownParent: $p,
     placeholder: $(this).attr('placeholder'),
		 dropdownAutoWidth : true,
		 width: 'element'
   });
	}).on("select2:open", function (e) {
		var $p = $(this).closest('.select-wrapper__container');
		$p.addClass('open');
	}).on("select2:close", function (e) {
		var $p = $(this).closest('.select-wrapper__container');
		$p.removeClass('open');
	});
});

//скролл по якорю
$(document).on('click', '.js-scroll-to', function () {
	event.preventDefault();
	var id  = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1000);
});

//инпут type file
$('.input-file').each(function() {
	var input = $(this).find('input[type="file"]'),
		label = $(this).find('.input-file__text');
	input.on('change', function(element) {
		var fileName = '';
		if (element.target.value) {
			fileName = element.target.value.split('\\').pop();
			label.text(fileName);
		}
	});
});
