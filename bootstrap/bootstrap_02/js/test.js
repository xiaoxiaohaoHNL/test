$(function(){

    
    $('.dropdown-toggle').click(function(){
        $(this).css('background','white');
    })
    $('.navbar-toggle').mouseover(function(){
        $(this).css('background','white');
    })
    $('.navbar-toggle').click(function(){
            $(this).css('background','white')
            $('.dropdown-toggle').css('background','white')
    })
})
