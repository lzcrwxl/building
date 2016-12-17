/**
 * Created by lx on 2016/12/8.
 */
$(function(){
  $.fn.switch=function(){
    $(this).on('click','li',function(){
      $(this).addClass('current').siblings('.current').removeClass();
    })
    return $(this);
  };
  //左侧切图

  /*$('.subSideList-2').on('click','li',function(){
    $(this).addClass('current').siblings('.current').removeClass('current');
  })*/
  $('.subSideList-2').switch();
  $('.subSideList').switch();
});

