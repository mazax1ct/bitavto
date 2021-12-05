$(document).ready(function() {
  $('.js-price').prop('checked', '');
});

$(document).on('change', '.js-price', function () {
  $('.section_1__form-dropdown').slideToggle();
  return false;
});
