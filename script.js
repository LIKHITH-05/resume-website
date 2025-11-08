$(document).ready(function(){
  $(".card h3, .card h2").click(function(){
    $(this).next().slideToggle(400);
  });
});