$(function(){
    
    $('.buger').on('click',function(){
        $(this).toggleClass('active');
        $('.nav nav').toggleClass('active');
    });

    $('.visual img').on('click',function(){
       $('.visual img').animate({
           left:'0'
       },2000,function(){
           $('.visual img').animate({
               left:'-25%'
           },2000)
       }) 
    });
    
    $('.visual a').on('click',function(e){
        e.preventDefault();
        $('.popup').addClass('active');
    });
    $('.popup a').on('click',function(e){
        e.preventDefault();
       $('.popup').removeClass('active'); 
    });
    
});