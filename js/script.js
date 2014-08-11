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

    if (letters == 6) {
        $('.balance-amount').css({ 'font-size': '20px' });
        $('.balance-amount').css({ 'margin-top': '4px' });
    }
    else if (letters == 7) {
        $('.balance-amount').css({ 'font-size': '17px' });
        $('.balance-amount').css({ 'margin-top': '7px' });
    }
    else if (letters == 8) {
        $('.balance-amount').css({ 'font-size': '14px' });
        $('.balance-amount').css({ 'margin-top': '9px' });
    }
    else if (letters == 9) {
        $('.balance-amount').css({ 'font-size': '13px' });
        $('.balance-amount').css({ 'margin-top': '9px' });
    }
    else if (letters == 10 || letters == 11) {
        $('.balance-amount').css({ 'font-size': '11px' });
        $('.balance-amount').css({ 'margin-top': '10px' });
    }
    else {
        $('.balance-amount').css({ 'font-size': '24px' });
    }


    balance = CommaFormatted(str);
    $('#balance-amount').html(balance);
});







