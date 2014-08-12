$(function () {
//    FUNCTION FORMAT NUMBER WITH COMMA
    function CommaFormatted(yourNumber) {
        var n = yourNumber.toString().split(".");
        n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //Combines the two sections
        return n.join(".");
    }

    str = $('#balance-amount').html();
    var letters = str.length;

    if (letters == 2) {
        $('.coin-balance-big').css({ 'width': '66px' });
        $('.coin-balance-bg').css({ 'width': '75px' });
        $('.coin-balance-wrapper').css({ 'width': '75px' });
        $('.coin-balance-wrapper').css({ 'left': '720px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '20px' });
    }
    else if (letters == 3) {
        $('.coin-balance-big').css({ 'width': '78px' });
        $('.coin-balance-bg').css({ 'width': '80px' });
        $('.coin-balance-wrapper').css({ 'width': '86px' });
        $('.coin-balance-wrapper').css({ 'left': '713px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '18px' });
    }
    else if (letters == 4) {
        $('.coin-balance-big').css({ 'width': '103px' });
        $('.coin-balance-bg').css({ 'width': '108px' });
        $('.coin-balance-wrapper').css({ 'width': '109px' });
        $('.coin-balance-wrapper').css({ 'left': '688px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '18px' });
    }
    else if (letters == 5) {
        $('.coin-balance-big').css({ 'width': '114px' });
        $('.coin-balance-bg').css({ 'width': '122px' });
        $('.coin-balance-wrapper').css({ 'width': '134px' });
        $('.coin-balance-wrapper').css({ 'left': '674px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '18px' });
    }
    else if (letters == 6) {
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '18px' });
    }
    else if (letters == 7) {
        $('.balance-amount').css({ 'font-size': '18.5px' });
        $('.balance-amount').css({ 'margin-top': '4.5px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '18px' });
    }
    else if (letters == 8) {
        $('.balance-amount').css({ 'font-size': '17px' });
        $('.balance-amount').css({ 'margin-top': '5.5px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '18px' });
    }
    else if (letters == 9) {
        $('.balance-amount').css({ 'font-size': '16px' });
        $('.balance-amount').css({ 'margin-top': '6.5px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '18px' });
    }
    else if (letters == 10) {
        $('.balance-amount').css({ 'font-size': '13px' });
        $('.balance-amount').css({ 'margin-top': '7.5px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '18px' });
    }
    else if (letters == 11) {
        $('.balance-amount').css({ 'font-size': '12.1px' });
        $('.balance-amount').css({ 'margin-top': '8.5px' });
        $('.coin-balance-big').css({ 'width': '131px' });
        $('.coin-balance-bg').css({ 'width': '139px' });
        $('.coin-balance-wrapper').css({ 'width': '150px' });
        $('.coin-balance-wrapper').css({ 'left': '658px' });
        $('.green-plus-wrapper').css({ 'right': '-60px' });
        $('.green-plus-wrapper').css({ 'top': '18px' });
    }
    else {

    }


    balance = CommaFormatted(str);
    $('#balance-amount').html(balance);
});







