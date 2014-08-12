$(function () {

    $('#button-add-coins').click(function () {
        alert('test for javascript');
    });
//    FUNCTION FORMAT NUMBER WITH COMMA
    function CommaFormatted(yourNumber) {
        var n = yourNumber.toString().split(".");
        n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //Combines the two sections
        return n.join(".");
    }

    str = $('#balance-amount').html();
    var letters = str.length;

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

    }


    balance = CommaFormatted(str);
    $('#balance-amount').html(balance);
});







