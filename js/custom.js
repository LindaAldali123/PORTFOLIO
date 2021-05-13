$(document).ready(function(e){
 $win=$(window);
 $navbar=$('#header');
 $toggle=$('.mobile-nav-toggle');
 var width=$navbar.width();

 $toggle.click(function(e){
     $navbar.toggleClass("mobile-nav-active");
 })
});