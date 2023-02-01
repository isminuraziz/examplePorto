$('.page').on('click', function(e){
    //ambil href
    var tujuan = $(this).attr('href');
    //ambil elemen ybs
    var elemenTujuan = $(tujuan);
    //pindahkan link
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 40
    }, 1500, 'easeInOutExpo');

    e.preventDefault();
});

//about
//$(window).on('load', function(){
//    $('.pL').addClass(pMuncul);
//    $('.pR').addClass(pMuncul);
//});

//parallax
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    //jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    })

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    })

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    })

    //portofolio
    if( wScroll > $('.portofolio').offset().top - 200 ){
        $('.portofolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portofolio .thumbnail').eq(i).addClass('muncul');
            }, 400 * ( i + 1 ));
        });
    }

})