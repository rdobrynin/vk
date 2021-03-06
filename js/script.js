var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
$(window).on("load", function() {
    if (pixelRatio > 1) {
        $('#top-chest').attr('src', $('#top-chest').attr('src').replace(".png","@2x.png"));
        $('#gold-gift').attr('src', $('#gold-gift').attr('src').replace(".png","@2x.png"));

        $('#modal-buy-close').attr('src', $('#modal-buy-close').attr('src').replace(".png","@2x.png"));
        $('#modal-level-close').attr('src', $('#modal-level-close').attr('src').replace(".png","@2x.png"));
        $('#modal-profile-close').attr('src', $('#modal-profile-close').attr('src').replace(".png","@2x.png"));
        $('#modal-gift-close').attr('src', $('#modal-gift-close').attr('src').replace(".png","@2x.png"));
        $('#modal-achievements-close').attr('src', $('#modal-achievements-close').attr('src').replace(".png","@2x.png"));


        $('.left-col-btn-present-img').attr('src', $('.left-col-btn-present-img').attr('src').replace(".png","@2x.png"));
        $('.left-col-btn-vk-img').attr('src', $('.left-col-btn-vk-img').attr('src').replace(".png","@2x.png"));
        $('.left-col-btn-vase-img').attr('src', $('.left-col-btn-vase-img').attr('src').replace(".png","@2x.png"));
        $('#title-choose-color').attr('src', $('#title-choose-color').attr('src').replace(".png","@2x.png"));
        $('#title-choose-tint').attr('src', $('#title-choose-tint').attr('src').replace(".png","@2x.png"));
        $('#top-gift-img').attr('src', $('#top-gift-img').attr('src').replace(".png","@2x.png"));
        $('#ok_true').attr('src', $('#ok_true').attr('src').replace(".png","@2x.png"));
        $('#modal-answer-star').attr('src', $('#modal-answer-star').attr('src').replace(".png","@2x.png"));
        $('#ok_false').attr('src', $('#ok_false').attr('src').replace(".png","@2x.png"));
        $('.gift-costs-img').attr('src', $('.gift-costs-img').attr('src').replace(".png","@2x.png"));
        $('#modal-top-close').attr('src', $('#modal-top-close').attr('src').replace(".png","@2x.png"));
        $('.top-btn-vk-img').attr('src', $('.top-btn-vk-img').attr('src').replace(".png","@2x.png"));
        $('.map-img').attr('src', $('.map-img').attr('src').replace(".png","@2x.png"));
        $('.img-answer-yes-row').attr('src', $('.img-answer-yes-row').attr('src').replace(".png","@2x.png"));
        $('.img-answer-star').attr('src', $('.img-answer-star').attr('src').replace(".png","@2x.png"));
        $('.ach-starF-img').attr('src', $('.ach-starF-img').attr('src').replace(".png","@2x.png"));
        $('.ach-starE-img').attr('src', $('.ach-starE-img').attr('src').replace(".png","@2x.png"));
        $('.ach-award-img').attr('src', $('.ach-award-img').attr('src').replace(".png","@2x.png"));
        $('.top-star-img').attr('src', $('.top-star-img').attr('src').replace(".png","@2x.png"));
        $('.grey_gift').attr('src', $('.grey_gift').attr('src').replace(".png","@2x.png"));
        $('body').addClass('retina');
    }
});

$(window).load(function(){
//    $('#modal-chooser').modal('show');
//    $('#modal-choose-word').modal('show');
//    $('#modal-answer').modal('show');
    $("#members").mCustomScrollbar({
        theme:"rounded-dark",
        scrollButtons:{
            enable:false
        }
    });
});

//restrict selection

(function($){

    $.fn.ctrlCmd = function(key) {

        var allowDefault = true;

        if (!$.isArray(key)) {
            key = [key];
        }

        return this.keydown(function(e) {
            for (var i = 0, l = key.length; i < l; i++) {
                if(e.keyCode === key[i].toUpperCase().charCodeAt(0) && e.metaKey) {
                    allowDefault = false;
                }
            };
            return allowDefault;
        });
    };

    $.fn.disableSelection = function() {

        this.ctrlCmd(['a', 'c']);

        return this.attr('unselectable', 'on')
            .css({'-moz-user-select':'-moz-none',
                '-moz-user-select':'none',
                '-o-user-select':'none',
                '-khtml-user-select':'none',
                '-webkit-user-select':'none',
                '-ms-user-select':'none',
                'user-select':'none'})
            .bind('selectstart', false);
    };

})(jQuery);


if ($.browser.msie  && parseInt($.browser.version, 10) === 7 ) {
    $('body').empty();
    $('body').html('<p style="text-align:center; padding-top: 100px; font-weight: bold; font-size: 30px;">Пожалуйста обновите Internet Explorer</p>');
}

$(function () {


    $(".activation-tab").click(function(){
        // If this isn't already active

        if($(this).hasClass('lock')) {
            return false;
        }
        else {
            if (!$(this).hasClass("active")) {
                // Remove the class from anything that is active
                $(".activation-tab.active").children('button').removeClass('active-button');
                $(".activation-tab.active").removeClass("active");
                // And make this active
                $(this).addClass("active");
                $(this).children('button').addClass('active-button');

            }
        }
    });


    $(".btn-word").click(function(){
        if ($(".btn-word").hasClass('active')) {
            $(".btn-word").removeClass('active');
        }
        $(this).addClass('active');
    });

//    CHANGE MODALS

    $('#queue-leader, #choosing-leader').hide();

    $('#btn-wait').click(function () {
        $('#first-player').hide();
        $('#queue-leader').show();
    });

    $('#btn-become-leader').click(function () {
        $('#modal-chooser').modal('hide');
    });


    $('#btn-begin-draw').click(function () {
        $('#first-player').hide();
        $('#choosing-leader').show();
    });
// END CHANGE MODALS

    $('.place-icon').click(function () {
        $('#modal-top').modal('show');
    });

    $('.btn-answer').click(function () {
        $('#modal-answer-true').modal('show');
    });

    $('.btn-trash').click(function () {
        $(".timer").text(plz(0) + ":" + plz(0));
    });

    $('.icon-grand-bg').click(function () {
        $('#modal-level').modal('show');
    });

    $('.color-palette-bg').click(function () {
        $('#modal-palette').modal('show');
    });

//restrict drugging images
    $('img').on('dragstart', function(event) { event.preventDefault(); });
//    timer start on load document
    startCount();

    $('.lock').tooltip();
    $('.eraser').tooltip();
    $('.painter').tooltip();
    $('.pencil').tooltip();
    $('.cog-icon').tooltip();
    $('.brush-icon-wrapper').tooltip();
    $('.btn').tooltip();

//    INVITE USER
    $('.add-user').click(function () {
        $('#placeholder-6').html('<div class="user-frame"><div class="user-gift-image"><div class="gift"></div></div><div class="photo" data-toggle="modal" data-target="#modal-profile"><img src="images/photo_right_2@2x.jpg" width="59" height="58"/></div><div class="add-gift add-gift-left"><div class="icon-add-gift-default-bg"><div class="gift-default-bg"><button class="btn icon-add-gift-default" data-toggle="modal" data-target="#modal-gift"></button></div></div></div><span class="username" id="username-7">роман</span></div>');
//IF after click username length >10
        if (($("#username-7").length > 0)) {
            var user_7 = $('#username-7').html();
            if (user_7.length > 10) {
                var username7 = user_7.slice(0, 10);
                $('#username-7').html(username7 + ' ...');
            }
        }
    });
    $('.sound-on-off').click(function () {
        $('.current-track').html('L. Utesov- U Samovara');
        if (($(".current-track").length > 0)) {
            var track = $('.current-track').html();
            if (track.length > 30) {
                var tracklength = track.slice(0, 30);
                $('.current-track').html(tracklength + ' ...');
                $('.current-audio').css({ 'left': '-15px' });
                $('.user-frame-active').css({ 'left': '-15px' });
            }
            else {
                $('.current-audio').css({ 'left': '0' });
                $('.user-frame-active').css({ 'left': '0' });
            }
        }
    });

//    SWITCH LAYOUT

    $('#test').click(function () {
        $('.box-content-empty-blur').fadeIn( "fast");
        $('.box-content-empty-blur').removeClass( "hide");
        $('.box-content-paint-blur').fadeToggle( "fast");

    });
//    FUNCTION FORMAT NUMBER WITH COMMA
    function CommaFormatted(yourNumber) {
        var n = yourNumber.toString().split(".");
        n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //Combines the two sections
        return n.join(".");
    }

    setInterval(function() {
        strBalance = $('#balance-amount').html();
        strScore1 = $('.score-1').html();
        strScore2 = $('.score-2').html();
        var letters = strBalance.length;
        var balance = CommaFormatted(strBalance);
        $('#balance-amount').html(balance);

        var score1 = CommaFormatted(strScore1);
        $('.score-1').html(score1);

        var score2 = CommaFormatted(strScore2);
        $('.score-2').html(score2);

    if (letters == 2) {
        $('.coin-balance-big').css({ 'width': '66px' });
        $('.coin-balance-bg').css({ 'width': '75px' });
        $('.coin-balance-wrapper').css({ 'width': '75px' });
        $('.coin-balance-wrapper').css({ 'left': '720px' });
    }
    else if (letters == 3 ) {
        $('.coin-balance-big').css({ 'width': '78px' });
        $('.coin-balance-bg').css({ 'width': '80px' });
        $('.coin-balance-wrapper').css({ 'width': '86px' });
        $('.coin-balance-wrapper').css({ 'left': '713px' });
    }
    else if (letters == 4) {
        $('.coin-balance-big').css({ 'width': '103px' });
        $('.coin-balance-bg').css({ 'width': '108px' });
        $('.coin-balance-wrapper').css({ 'width': '109px' });
        $('.coin-balance-wrapper').css({ 'left': '688px' });
    }
    else if (letters == 5) {
        $('.coin-balance-big').css({ 'width': '114px' });
        $('.coin-balance-bg').css({ 'width': '122px' });
        $('.coin-balance-wrapper').css({ 'width': '134px' });
        $('.coin-balance-wrapper').css({ 'left': '674px' });
    }
    else if (letters == 6) {
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
    }
    else if (letters == 7) {
        $('.balance-amount').css({ 'font-size': '18.5px' });
        $('.balance-amount').css({ 'top': '0' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
    }
    else if (letters == 8) {
        $('.balance-amount').css({ 'font-size': '17px' });
        $('.balance-amount').css({ 'top': '2px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
    }
    else if (letters == 9) {
        $('.balance-amount').css({ 'font-size': '16px' });
        $('.balance-amount').css({ 'top': '2px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
    }
    else if (letters == 10) {
        $('.balance-amount').css({ 'font-size': '13px' });
        $('.balance-amount').css({ 'top': '3.5px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
    }
    else if (letters == 11) {
        $('.balance-amount').css({ 'font-size': '12.1px' });
        $('.balance-amount').css({ 'top': '3.5px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
    }
    }, 10);

//USER SHORT TEXT
//    If username length >10, username name = username...

    if (($("#username-1").length > 0)) {
        var user_1 = $('#username-1').html();
        if (user_1.length > 10) {
            var username1 = user_1.slice(0, 10);
            $('#username-1').html(username1 + ' ...');
        }
    }
    if (($("#username-2").length > 0)) {
        var user_2 = $('#username-2').html();
        if (user_2.length > 10) {
            var username2 = user_2.slice(0, 10);
            $('#username-2').html(username2 + ' ...');
        }
    }
    if (($("#username-3").length > 0)) {
        var user_3 = $('#username-3').html();
        if (user_3.length > 10) {
            var username3 = user_3.slice(0, 10);
            $('#username-3').html(username3 + ' ...');
        }
    }
    if (($("#username-4").length > 0)) {
        var user_4 = $('#username-4').html();
        if (user_4.length > 10) {
            var username4 = user_4.slice(0, 10);
            $('#username-4').html(username4 + ' ...');
        }
    }
    if (($("#username-5").length > 0)) {
        var user_5 = $('#username-5').html();
        if (user_5.length > 10) {
            var username5 = user_5.slice(0, 10);
            $('#username-5').html(username5 + ' ...');
        }
    }
    if (($("#username-6").length > 0)) {
        var user_6 = $('#username-6').html();
        if (user_6.length > 10) {
            var username6 = user_6.slice(0, 10);
            $('#username-6').html(username6 + ' ...');
        }
    }
    if (($("#username-7").length > 0)) {
        var user_7 = $('#username-7').html();
        if (user_7.length > 10) {
            var username7 = user_7.slice(0, 10);
            $('#username-7').html(username7 + ' ...');
        }
    }
    if (($("#current-user").length > 0)) {
        var userCurrent = $('#current-user').html();
        if (userCurrent.length > 10) {
            var username = userCurrent.slice(0, 10);
            $('#current-user').html(username + ' ...');
        }
    }
    if (($(".current-track").length > 0)) {
        var track = $('.current-track').html();
        if (track.length > 26) {
            var tracklength = track.slice(0, 26);
            $('.current-track').html(tracklength + ' ...');
            $('.current-audio').css({ 'left': '-15px' });
            $('.user-frame-active').css({ 'left': '-15px' });
        }
        else {
            $('.current-audio').css({ 'left': '0' });
            $('.user-frame-active').css({ 'left': '0' });
        }
    }
// switcher brush
    $(".brush-icon-wrapper").click(function(e) {
        $('.brush-icon-wrapper').removeClass('active');
        $(this).addClass('active');
    });

    $(".brush-form-wrapper").click(function(e) {
        $('.brush-form-wrapper').removeClass('active');
        $(this).addClass('active');
    });

//switch color
    $(".btn-choose-color").click(function(){
        // If this isn't already active
        if (!$(this).hasClass("active")) {
            // Remove the class from anything that is active
            $(".btn-choose-color.active").removeClass("active");
            // And make this active
            $(this).addClass("active");
        }
    });
//    switch tint
    $(".btn-choose-tint").click(function(){
        // If this isn't already active
        if (!$(this).hasClass("active")) {
            // Remove the class from anything that is active
            $(".btn-choose-tint.active").removeClass("active");
            // And make this active
            $(this).addClass("active");
        }
    });
//    LOGIN
    $("#password").keydown(function() {
        $('#ok').removeAttr("disabled");
    });
    $( "#ok" ).click(function() {
        var form_data = {
            password: $("#password").val(),
            email: $("#email").val()
        };
        $.ajax({
            url: "username.php",
            type: 'POST',
            data: form_data,
            dataType: 'json',
            success: function (msg) {
                if(msg.result!=true) {
                   $('#err').fadeIn('slow');
                }
                else {
                    $('#err').hide();
                    $('#modal-username').modal('hide');

                }
            }
        });
    });

    $('#gift-tabs').tab();
    $('#btn-next').click(function () {
        $('#btn-first').attr('disabled', false);
        $(this).attr('disabled', true);
        $('#radio-1, #gift-tab-1').removeClass('active');
        $('#radio-2, #gift-tab-2').addClass('active');
    });

    $('#btn-first').click(function () {
        $('#btn-next').attr('disabled', false);
        $(this).attr('disabled', true);
        $('#radio-1, #gift-tab-1').addClass('active');
        $('#radio-2, #gift-tab-2').removeClass('active');
    });

    $('#gift-btn-close-modal').click(function () {
        $('#btn-first').attr('disabled', true);
        $('#btn-next').attr('disabled', false);
        $('#radio-1, #gift-tab-1').addClass('active');
        $('#radio-2, #gift-tab-2').removeClass('active');
    });


    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    $('#li-2, #li-3').click(function () {
$('#tab-content').css({"border-top-left-radius":"14px"});
    });

    $( "#li-1" ).mouseover(function() {
        $('#tab-content').css({"border-top-left-radius":"0"});
    });

    if ($("#li-1").hasClass("active")) {
        $('#tab-content').css({"border-top-left-radius":"0"});
    }

    $('#bnt-answer-1, #bnt-answer-2').click(function () {
        $(this).css({"text-decoration":"line-through", "height":"42px"});
        $(this).prop("disabled", true);
        $(this).append('<img class="img-answer-no" src="images/no_answer.png" alt="" width="29" height="29"/>');
        $('.answer-false-body').show();
        $('.answer-true-body').hide();
    });

    $('#bnt-answer-3, #bnt-answer-4,  #bnt-answer-5').click(function () {
        $(this).css({"text-decoration":"line-through", "height":"42px"});
        $(this).prop("disabled", true);
        $(this).append('<img class="img-answer-yes" src="images/yes_answer.png" alt="" width="19" height="19"/>');
        $('.answer-true-body').show();
        $('.answer-false-body').hide();
    });


    $('.btn-ranswer').click(function () {
        $('#modal-answer-true').modal('hide');
    });

//    PROGRESSIVE BAR

    $('.cup-icon').click(function () {
        $('#modal-achievements').modal('show');
        $('.bar-percentage[data-amount]').each(function () {
            var progress = $(this);
            var percentage = Math.ceil($(this).attr('data-amount'));
            $({countNum: 0}).animate({countNum: percentage}, {
                duration: 1000,
                easing:'linear',
                step: function() {
                    // What todo on every count
                    var pct = '';
                    if(percentage == 0){
                        pct = Math.floor(this.countNum) + '%';
                    }else{
                        pct = Math.floor(this.countNum+1) + '%';
                    }
                    progress.text(pct) && progress.siblings().children().children().css('width',pct);
                }
            });
        });

    });

//    PIE TIMER
        $('div#pietimer').pietimer({
            seconds: 8,
            colour: 'rgba(255,255,255, 1)',
            target: 'pie_timer',
            canvas: 'pie_timer'
        }, function() {
//            $('.done').fadeIn(400).delay(400).fadeOut(400);
            console.log('time is over');

        });

//    2




});