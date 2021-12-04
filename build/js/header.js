//открытие/закрытие мобильного меню
$(document).on('click', '.js-header-burger', function () {
	var _this = $(this);
  _this.toggleClass('is-active');

	if(_this.hasClass('is-active')) {
		$('.header__contacts').addClass('is-active');
		setTimeout(function () {
      $('.header__contacts').addClass('animate');
    },100);
  } else {
		$('.header__contacts').removeClass('animate');
		setTimeout(function () {
      $('.header__contacts').removeClass('is-active');
    },100);
  }
  return false;
});
