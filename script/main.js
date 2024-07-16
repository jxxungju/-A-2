$(function(){
    //메뉴
    // $(".sub, .sub_bg").hide();
    $(".main > li, .sub_bg").hover(function(){
        $(".sub, .sub_bg").stop().slideDown()
    },function(){
        $(".sub, .sub_bg").stop().slideUp()

});
    var n=0;

    setInterval(function(){
    if(n == 2){
        n=0;
    }else{
        n++;
    }
    console.log(n);
    pos = n * (-1200) + "px" ;

    $(".left_move").animate({left : n * (-1200) + "px"}, 500)
    },3000);

    $(".p_click").click(function(){
        $(".modal ,.pop").show();
        $(".close").click(function(){
            $(".modal ,.pop").hide();

        })
    })
})//