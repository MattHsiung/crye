'use strict';

window.addEventListener("load",function() {
   // Set a timeout...
   setTimeout(function(){
      // Hide the address bar!
      window.scrollTo(0, 1);
   }, 0);
});
$(document).ready(function () {
   var $items = $('.carousel .item');
   var $right = $('.carousel .handle.r');
   var $left = $('.carousel .handle.l');
   var current = 0;
   function right() {
      $items.eq(current).removeClass('show');
      if (current === $items.length - 1) current = -1;
      $items.eq(++current).addClass('show');
   }
   function left() {
      $items.eq(current).removeClass('show');
      if (current === 0) current = $items.length;
      $items.eq(--current).addClass('show');
   }
   $right.on('swiperight', right);
   $left.on('swipeleft', left);
   $right.click(right);
   $left.click(left);

   $('#menuBtn').click(function () {
      $('#menu').toggleClass('show');
      $(this).toggleClass('spin');
   });
   $('#cartBtn').click(function () {
      $('.cart').toggleClass('show');
      $(this).toggleClass('spin');
   });
   $('#enter').click(function () {
      $('.splash').toggleClass('noshow');
   });
   $('#products').click(function () {
      $('.menu .main').toggleClass('show');
      $('.menu .productsmenu').toggleClass('show');
   });
   $('#mainmenu').click(function () {
      $('.menu .main').toggleClass('show');
      $('.menu .productsmenu').toggleClass('show');
   });
});