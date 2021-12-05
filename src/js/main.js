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


	//счётчик символов в textarea
	$('.textarea').each(function () {
		if($(this).val().length > 0) {
			$(this).parent('.input-label').addClass('changed');
		}
		$(this).closest('.input-label').find('.message-count span').text(this.value.replace(/{.*}/g, '').length);
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
$('.input-file input[type="file"]').change(function() {
  if ($(this).val() != '') {
		$(this).closest('.input-file').find('.input-file__text').text('Выбрано файлов: ' + $(this)[0].files.length);
	} else {
		$(this).closest('.input-file').find('.input-file__text').text('Фото авто');
	}
});

//счётчик символов в textarea
$('.textarea').keyup(function() {
	var characters_Limit = $(this).attr('data-limit');
  if ($(this).val().length > characters_Limit) {
		$(this).val($(this).val().substr(0, characters_Limit));
  }
	$(this).closest('.input-label').find('.message-count span').text(this.value.replace(/{.*}/g, '').length);
});
