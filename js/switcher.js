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
    $('#'+param).addClass(current);

        if($('#'+param).hasClass('btn-'+param)) {
        }
        $('#'+param).attr('onclick', 'switcherNew('+'\''+new_param+'\')');
    }
}

function switcherNew(param) {
    var current_obj = $('#switcher').attr('class');
    var current = current_obj.split(' ')[1];
    var new_param = current.substring(4, current.length);
    if(param != 'current') {
        $('#switcher').removeClass(current).addClass('btn-'+param);
        $('#'+param).toggleClass(current);
        $('.'+current).removeClass('btn-'+param);
        $('#'+new_param).attr('onclick', 'switcher('+'\''+new_param+'\')');
    }
}