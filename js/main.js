function landing(){
    $(".landing-page").slideDown(1500,function(){
        $(".welcome-caption").animate(
            {
                marginTop : '50px'
            }
        ,500);

        $(".multimedia-caption").animate({
            marginLeft : '0px'
        },1700)

        $(".services-wrapper").animate({
            marginRight : '0px'
        },1700)

        $(".button-wrapper-one").animate({
            marginLeft : '0px'
        },1700)

        $(".button-wrapper-two").animate({
            marginRight : '0px'
        },1700)
    });
}
