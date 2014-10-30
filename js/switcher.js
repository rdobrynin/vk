/**
 * Switch items in panel
 * @param param
 */
function switcher(param) {
    $(document).on('click', 'button', function () {
    currentId = this.id;
    var current_obj = $('#switcher').attr('class');
    var current = current_obj.split(' ')[1];
    var new_param = current.substring(4, current.length);
    if(param != 'current') {
    $('#'+currentId).removeClass('btn-'+param);
    $('#switcher').removeClass(current).addClass('btn-'+param);
    $('#'+currentId).addClass(current);
        $('#'+currentId).attr('onclick', 'switcherNew('+'\''+new_param+'\')');
    }
    });
}

function switcherNew(param) {
    $(document).on('click', 'button', function () {
    var current_obj = $('#switcher').attr('class');
    var current = current_obj.split(' ')[1];
    var new_param = current.substring(4, current.length);
    if(param != 'current') {
            currentId = this.id;
        console.log(current_obj.split(' '));
            $('#'+currentId).removeClass('btn-'+param).addClass(current);
        $('#switcher').toggleClass('btn-'+param);
        $('#switcher').removeClass(current);
        $('#'+currentId).attr('onclick', 'switcher('+'\''+new_param+'\')');
        $('#switcher').removeClass(current).addClass('btn-'+param);
    }
    });
}