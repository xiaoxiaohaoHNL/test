$(function () {
    $(".lastli").click(function () {
        $('.navBox').animate({
            top: "84px"
        })
        $(".topBox").animate({
            top: "0"
        })
    })
    $(".spanlast").click(function () {
        $('.navBox').animate({
            top: "0"
        })
        $(".topBox").animate({
            top: "-84px"
        })
    })
    
    window.onscroll = function(event){
        // console.log(scroll())
        var sclTop = document.documentElement.scrollTop;
        if(sclTop > 937){
            $('.navBox').css({
                background: 'white',
                boxShadow: '0px 2px 2px 1px rgba(0,0,0,0.03)',
                height: '64px'
            })
            $('.navBox .logo').css({
                margin: '17px 0 17px 35px',
            })
            $('.navBox .header_r').css({
                margin: '17px 35px 17px 0',
            })
            $('.navBox logo img').css({
                height: '26px 0',
            })
            console.log("aaa")
        }else{
            $('.navBox').css({
                background: 'transparent',
                boxShadow: 'none',
                height: '84px'
            })
            $('.navBox .logo').css({
                margin: '27px 0 27px 35px',
            })
            $('.navBox .header_r').css({
                margin: '27px 35px 27px 0',
            })
            $('.navBox logo img').css({
                height: '30px 0',
            })
        }
        // console.log(document.documentElement.scrollTop)
    }
    
})