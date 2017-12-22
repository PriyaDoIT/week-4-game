$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  //decalare variables
  var target = Math.floor(Math.random() * (110 - 19 + 1)) + 19;

  // team 1
  var bears = Math.floor(Math.random() * 11) + 1;

  //team 2
  var bulls = Math.floor(Math.random() * 11) + 1;

  //team 3
  var cubs = Math.floor(Math.random() * 11) + 1;

  //team 4
  var hawks = Math.floor(Math.random() * 11) + 1;

  var counter = 0;

  // give each image a value
  $(".bears").attr("data-teamvalue", bears);
  $(".bulls").attr("data-teamvalue", bulls);
  $(".cubs").attr("data-teamvalue", cubs);
  $(".hawks").attr("data-teamvalue", hawks);

  //Reset Function

  var reset = function() {
    target = Math.floor(Math.random() * (110 - 19 + 1)) + 19;

    bears = Math.floor(Math.random() * 11) + 1;

    bulls = Math.floor(Math.random() * 11) + 1;

    cubs = Math.floor(Math.random() * 11) + 1;

    hawks = Math.floor(Math.random() * 11) + 1;

    counter = 0;

    // give each image a value
    $(".bears").attr("data-teamvalue", bears);
    $(".bulls").attr("data-teamvalue", bulls);
    $(".cubs").attr("data-teamvalue", cubs);
    $(".hawks").attr("data-teamvalue", hawks);
  };

  // Click any logo to begin game; target number to guess is displayed
  $(".btn").on("click", function() {
    $(".target").text(target);

    $(".outcome").empty();

    var teamValue = $(this).attr("data-teamvalue");
    teamValue = parseInt(teamValue);
    // We then add the btn to the user's "counter" which is a global variable.
    // Every click, from every btn adds to the global counter.
    counter += teamValue;

    // Display Sum
    $(".counter").text(counter);

    // Win or Lose
    if (counter > target) {
      $(".outcome").text("You Lose!");
      $(".losses").text(++losses);
      reset();
    } else if (counter === target) {
      $(".outcome").text("You Win!");
      $(".wins").text(++wins);
      reset();
    }
  });
});
