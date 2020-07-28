document.getElementById("generate-button").onclick = function randomColor() {
  var randomColor = "#000000".replace(/0/g, function() {
    return (~~(Math.random() * 16)).toString(16);
  });

  document.getElementById("color-hex").innerHTML = randomColor;

  document.getElementById('color-container').style.backgroundColor = randomColor;

  document.getElementById('generate-button').style.backgroundColor = randomColor;
}

var $buttonIcon = $('.button-icon');

$buttonIcon.on('click', function() {
  $(this).addClass('button-icon-spin');
  window.setTimeout(function() {
    $buttonIcon.removeClass('button-icon-spin');
  }, 1000);
});