function landing(){
    $(".landing-page").slideDown(300,function(){
        
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
        //happens when the services button is basically clicked
        $(".work-button").click(function(){

            $(".welcome-caption").animate(
                {
                    marginLeft : '-600px'
                }
            ,700,function(){
                $(".welcome-caption").fadeIn(function(){
                    var welcome = document.getElementsByClassName("welcome-caption");
                    welcome[0].innerText = "Our Portfolio";
                    welcome[0].style.color = "gold";
                });

                $(".welcome-caption").animate({
                    marginLeft : '0px'
                },1300)

            });
            
            $(".multimedia-caption").animate({
                marginLeft : '-600px'
            },900)
            
            $(".services-wrapper").animate({
                marginRight : '-600px'
            },1200,function(){
                $(".services-wrapper").fadeOut();
            });

            $(".button-wrapper-one").animate({
                marginLeft : '-400px'
            },1200)

            $(".button-wrapper-two").animate({
                marginRight : '-600px'
            },1200,function(){
                $(".button-wrapper-two").fadeOut();
            })

            
            $(".portfolio-wrapper").animate({
                marginTop : '-130px'
            },1400,function(){
                $(".portfolio-wrapper").animate({
                    marginLeft : '0px'
                },1200)
            });

        })

    });
}
