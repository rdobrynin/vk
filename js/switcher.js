/**
 * Switch items in panel
 * @param param
 */
function switcher(param) {
    var current_obj = $('#switcher').attr('class');
    var current = current_obj.split(' ')[1];
    var new_param = current.substring(4, current.length);
    if(param != 'current') {
    $('#switcher').removeClass(current).addClass('btn-'+param);

    }
}