$(function () {

//    INVITE USER
    $('.add-user').click(function () {

        $('#placeholder-6').html('<div class="user-frame"><div class="photo"><img src="images/photo_right_2@2x.jpg" width="59" height="58"/></div><div class="add-gift add-gift-left"><div class="icon-add-gift-default-bg"><div class="gift-default-bg"><div class="icon-add-gift-default"></div></div></div></div><span class="username">Роман</span></div>');
        $('.test').html('Роман здесь');
    });

    $('#button-add-coins').click(function () {

        $('.test').html(' test for javascript ').animate( { 'height':'auto' },5000 );
    });
//    FUNCTION FORMAT NUMBER WITH COMMA
    function CommaFormatted(yourNumber) {
        var n = yourNumber.toString().split(".");
        n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //Combines the two sections
        return n.join(".");
    }

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


    if(letters == 1) {
        $('.green-plus-wrapper').css({ 'right': '-23px' });
        $('.green-plus-wrapper').css({ 'top': '-55px' });
    }

    if (letters == 2) {
        $('.coin-balance-big').css({ 'width': '66px' });
        $('.coin-balance-bg').css({ 'width': '75px' });
        $('.coin-balance-wrapper').css({ 'width': '75px' });
        $('.coin-balance-wrapper').css({ 'left': '720px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-15px' });
    }
    else if (letters == 3) {
        $('.coin-balance-big').css({ 'width': '78px' });
        $('.coin-balance-bg').css({ 'width': '80px' });
        $('.coin-balance-wrapper').css({ 'width': '86px' });
        $('.coin-balance-wrapper').css({ 'left': '713px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-15px' });
    }
    else if (letters == 4) {
        $('.coin-balance-big').css({ 'width': '103px' });
        $('.coin-balance-bg').css({ 'width': '108px' });
        $('.coin-balance-wrapper').css({ 'width': '109px' });
        $('.coin-balance-wrapper').css({ 'left': '688px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-15px' });
    }
    else if (letters == 5) {
        $('.coin-balance-big').css({ 'width': '114px' });
        $('.coin-balance-bg').css({ 'width': '122px' });
        $('.coin-balance-wrapper').css({ 'width': '134px' });
        $('.coin-balance-wrapper').css({ 'left': '674px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-15px' });
    }
    else if (letters == 6) {
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-15px' });
    }
    else if (letters == 7) {
        $('.balance-amount').css({ 'font-size': '18.5px' });
        $('.balance-amount').css({ 'top': '0' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-9px' });
        $('.coin-gold-icon').css({ 'top': '-30px' });
    }
    else if (letters == 8) {
        $('.balance-amount').css({ 'font-size': '17px' });
        $('.balance-amount').css({ 'top': '2px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-6px' });
        $('.coin-gold-icon').css({ 'top': '-27px' });
    }
    else if (letters == 9) {
        $('.balance-amount').css({ 'font-size': '16px' });
        $('.balance-amount').css({ 'top': '2px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-4px' });
        $('.coin-gold-icon').css({ 'top': '-25px' });
    }
    else if (letters == 10) {
        $('.balance-amount').css({ 'font-size': '13px' });
        $('.balance-amount').css({ 'top': '3.5px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-3px' });
        $('.coin-gold-icon').css({ 'top': '-23px' });
    }
    else if (letters == 11) {
        $('.balance-amount').css({ 'font-size': '12.1px' });
        $('.balance-amount').css({ 'top': '3.5px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '-2px' });
        $('.coin-gold-icon').css({ 'top': '-23px' });
    }
    else {
//
    }
});







