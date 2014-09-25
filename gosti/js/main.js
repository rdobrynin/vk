var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
$(window).on("load", function() {
    if (pixelRatio > 1) {
        $('#row1').attr('src', $('#row1').attr('src').replace(".png","@2x.png"));
        $('.ok').attr('src', $('.ok').attr('src').replace(".png","@2x.png"));
        $('#thumb1').attr('src', $('#thumb1').attr('src').replace(".png","@2x.png"));
        $('#thumb2').attr('src', $('#thumb2').attr('src').replace(".png","@2x.png"));
        $('#thumb3').attr('src', $('#thumb3').attr('src').replace(".png","@2x.png"));
        $('#thumb4').attr('src', $('#thumb4').attr('src').replace(".png","@2x.png"));
        $('#thumb5').attr('src', $('#thumb5').attr('src').replace(".png","@2x.png"));
        $('#thumb6').attr('src', $('#thumb6').attr('src').replace(".png","@2x.png"));
        $('#stripe').attr('src', $('#stripe').attr('src').replace(".png","@2x.png"));
        $('#arrow1').attr('src', $('#arrow1').attr('src').replace(".png","@2x.png"));
        $('#arrow2').attr('src', $('#arrow2').attr('src').replace(".png","@2x.png"));
        $('#arrow3').attr('src', $('#arrow3').attr('src').replace(".png","@2x.png"));
        $('.star').attr('src', $('.star').attr('src').replace(".png","@2x.png"));
        $('#info-1').attr('src', $('#info-1').attr('src').replace(".png","@2x.png"));
        $('#info-2').attr('src', $('#info-2').attr('src').replace(".png","@2x.png"));
        $('#avatar').attr('src', $('#avatar').attr('src').replace(".png","@2x.png"));
        $('#profile').attr('src', $('#profile').attr('src').replace(".png","@2x.png"));
        $('.corner-2').attr('src', $('.corner-2').attr('src').replace(".png","@2x.png"));
        $('.corner-1').attr('src', $('.corner-1').attr('src').replace(".png","@2x.png"));
        $('#row-4').attr('src', $('#row-4').attr('src').replace(".png","@2x.png"));
        $('#tiz-1').attr('src', $('#tiz-1').attr('src').replace(".jpg","@2x.jpg"));
        $('#tiz-2').attr('src', $('#tiz-2').attr('src').replace(".jpg","@2x.jpg"));
        $('#tiz-3').attr('src', $('#tiz-3').attr('src').replace(".jpg","@2x.jpg"));
        $('#tiz-4').attr('src', $('#tiz-4').attr('src').replace(".jpg","@2x.jpg"));


        $('body').addClass('retina');
    }
});

$(function () {

    $('li').click(function(e) {
        var $this = $(this);
        var target = '.'+$this.context.id;
        $('li').removeClass('active');
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });



});