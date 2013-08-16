function randomFrom(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function pushBackground() {
  $("body").css("background-color", $.cookie('color'));
}

$(document).ready(function() {
  pushBackground();

  $('.awesomeness_teller').on('click', grabAwesome);
  $('.skill_teller').on('click', grabSkill);
  $('.meal_teller').on('click', grabMeal);

  $('#colorpicker').farbtastic('#color');
  $('#makeitso').on('submit', setBackground);

  function grabAwesome(e) {
  	e.preventDefault();
  	$("#awesomeness_holder").text($(this).data("heading"));
  }

  function grabSkill(e) {
  	e.preventDefault();
  	$("#skill_holder").text(window.location.pathname.split('/').slice(-1)[0]);
  }

  function grabMeal(e) {
  	e.preventDefault();
  	$("#meal_holder").text(randomFrom(window.meals));
  }

  function setBackground(e) {
    e.preventDefault();
    $.cookie('color', $(this).find("#color").val(), {path: '/'});
    $("body").css("background-color", $.cookie('color'));
  }

});

