var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
$(window).on("load", function() {
    if (pixelRatio > 1) {
        $('#row1').attr('src', $('#row1').attr('src').replace(".png","@2x.png"));
        $('.ok').attr('src', $('.ok').attr('src').replace(".png","@2x.png"));
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