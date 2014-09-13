<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Roman Dobrynin">
    <meta name="description" content="RIU application">
    <meta name="keywords" content="application">
    <link rel="icon" type="image/vnd.microsoft.icon" href="ico/favicon.ico"/>
    <title>RIU</title>
    <!-- CSS -->
    <!-- Latest compiled and minified CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/elements.css" rel="stylesheet">
    <link href="css/modal.css" rel="stylesheet">
    <link rel="stylesheet" href="http://malihu.github.io/custom-scrollbar/jquery.mCustomScrollbar.min.css" />
    <link href="css/jquery.mCustomScrollbar.css" rel="stylesheet">
    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <link href="css/retina.css" rel="stylesheet">
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js"></script>
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!--[if IE 8]>
    <script src="js/ie8-responsive-file-warning.js"></script>
    <![endif]-->
</head>
<body>
<script src="http://vkontakte.ru/js/api/openapi.js" type="text/javascript"></script>
<script type="text/javascript">
    VK.init({
        apiId: 4496769
    });
</script>
<div class="wrapper">
    <a id="test" href="#">switch</a>
    <!--TOP RIGHT REGION-->
    <div class="coin-balance-wrapper">
        <div class="coin-balance-bg">
            <div class="coin-balance-big">
                <span class="balance-amount" id="balance-amount">1238</span>
                <div class="coin-gold-icon">
                </div>
                <div class="green-plus-wrapper">
                    <div class="green-plus-bg">
                        <button class="btn add-coins" id="button-add-coins" data-toggle="modal" data-target="#modal-buy"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--END TOP_RIGHT REGION-->
    <!--ICON_GRANT_PLACE-->
    <div class="icon-wrapper-grand">
        <div class="icon-grand-bg">
            <div class="icon-grand-big">
                <!--ICON DIV-->
                <span class="cog-grand hide" id="place-1"><img src="images/1@2x.png" alt="" width="21" height="26"/></span>
                <span class="cog-grand hide" id="place-2"><img src="images/2@2x.png" alt="" width="21" height="26"/></span>
                <span class="cog-grand hide" id="place-3"><img src="images/3@2x.png" alt="" width="21" height="26"/></span>
                <span class="cog-grand hide" id="place-4"><img src="images/4@2x.png" alt="" width="21" height="26"/></span>
                <span class="cog-grand hide" id="place-5"><img src="images/5@2x.png" alt="" width="21" height="26"/></span>
                <span class="cog-grand hide" id="place-6"><img src="images/6@2x.png" alt="" width="21" height="26"/></span>
                <span class="cog-grand hide" id="place-7"><img src="images/7@2x.png" alt="" width="21" height="26"/></span>
                <span class="cog-grand hide" id="place-8"><img src="images/8@2x.png" alt="" width="21" height="26"/></span>
                <span class="cog-grand" id="place-9"><img src="images/9@2x.png" alt="" width="21" height="26"/></span>
                <span class="cog-grand hide" id="place-10"><img src="images/10@2x.png" alt="" width="34" height="26"/></span>
            </div>
        </div>
    </div>
    <div class="favourite">
        <div class="score">
            <span class="score-1">43000</span>/<span class="score-2">50000</span>
        </div>
    </div>
    <!--END ICON_GRANT_PLACE-->
    <!--ACTIVE USER WRAPPER-->
    <div class="active-user-wrapper">
        <div class="audio-wrapper">
            <div class="current-audio">
                <div class="audio-sign"></div>
                <span class="current-track">jon Hopkins-Open Signal</span>
            </div>
            <div class="sound-switch">
                <div class="sound-bg">
                    <div class="sound-default-bg">
<!--button switch sounds tracks-->
                        <button class="btn sound-on-off"></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="user-frame-active">
            <div class="photo-active" data-toggle="modal" data-target="#modal-profile">
                <img src="images/photo_right_1@2x.jpg" alt="" width="24" height="23"/>
            </div>
        </div>
    </div>
    <!--END_ACTIVE USER WRAPPER-->
    <!--ICON-SETTINGS-->
    <div class="icon-wrapper-settings icon-wrapper-big">
        <div class="icon-big-bg">
            <div class="icon-big">
                <!--BUTTON_SETTING-->
                <button class="btn cog-icon icon-inside-big-hover" id="button-1" data-toggle="tooltip" data-placement="bottom" title="установки">
                </button>
            </div>
        </div>
    </div>
    <!--END ICON_SETTINGS-->
    <!--ICON_CUP-->
    <div class="icon-wrapper-cup icon-wrapper-big">
        <div class="counter-wrapper">
            <div class="counter-bg">
                <span class="gift-count" id="gift-count"></span>
            </div>
        </div>
        <div class="icon-big-bg">
            <div class="icon-big">
                <!--BUTTON_SETTING-->
                <button class="btn cup-icon icon-inside-big-hover">
                </button>
            </div>
        </div>
    </div>
    <!--END_ICON_CUP-->
    <!--TOP_USERS_BLOCK-->
    <div class="top-users-block" id="top-users-block">
        <!--1 user-->
        <div class="user-block block-left">
            <div class="user-frame">
                <div class="user-gift-image">
                    <div class="gift"><img src="images/gift_tiger.png" alt="" width="35" height="33"/></div>
                </div>
                <div class="photo" data-toggle="modal" data-target="#modal-profile">
                    <img src="images/photo_top_1@2x.jpg" alt="" width="59" height="58"/>
                </div>
                <!--ADD GIFT BUTTON-->
                <div class="add-gift">
                    <div class="icon-add-gift-default-bg">
                        <div class="gift-default-bg">
                            <button class="btn icon-add-gift-default" data-toggle="modal" data-target="#modal-gift"></button>
                        </div>
                    </div>
                </div>
                <span class="username" id="username-1">евгений</span>
            </div>
        </div>
        <!--2 user-->
        <div class="user-block block-left">
            <div class="user-frame">
                <div class="user-gift-image">
                    <div class="gift"><img src="images/gift_roze.png" alt="" width="35" height="33"/></div>
                </div>
                <div class="photo" data-toggle="modal" data-target="#modal-profile">
                    <img src="images/photo_top_2@2x.jpg" alt="" width="59" height="58"/>
                </div>
                <!--ADD GIFT BUTTON-->
                <div class="add-gift">
                    <div class="icon-add-gift-default-bg">
                        <div class="gift-default-bg">
                            <button class="btn icon-add-gift-default" data-toggle="modal" data-target="#modal-gift"></button>
                        </div>
                    </div>
                </div>
                <span class="username" id="username-2">маша</span>
            </div>
        </div>
        <!--4 user-->
        <div class="user-block block-right">
            <div class="user-frame">
                <div class="user-gift-image">
                    <div class="gift"><img src="images/gift_diamond.png" alt="" width="35" height="33"/></div>
                </div>
                <div class="photo" data-toggle="modal" data-target="#modal-profile">
                    <img src="images/photo_top_4@2x.jpg" alt="" width="59" height="58"/>
                </div>
                <!--ADD GIFT BUTTON-->
                <div class="add-gift">
                    <div class="icon-add-gift-default-bg">
                        <div class="gift-default-bg">
                            <button class="btn icon-add-gift-default" data-toggle="modal" data-target="#modal-gift"></button>
                        </div>
                    </div>
                </div>
                <span class="username" id="username-4">наташа</span>
            </div>
        </div>
        <!--3 user-->
        <div class="user-block block-right">
            <div class="user-frame">
                <div class="user-gift-image">
                    <div class="gift"><img src="images/gift_puma.png" alt="" width="35" height="33"/></div>
                </div>
                <div class="photo" data-toggle="modal" data-target="#modal-profile">
                    <img src="images/photo_top_3@2x.jpg" alt="" width="59" height="58"/>
                </div>
                <!--ADD GIFT BUTTON-->
                <div class="add-gift">
                    <div class="icon-add-gift-default-bg">
                        <div class="gift-default-bg">
                            <button class="btn icon-add-gift-default" data-toggle="modal" data-target="#modal-gift"></button>
                        </div>
                    </div>
                </div>
                <span class="username" id="username-3">александра</span>
            </div>
        </div>
    </div>
<!--ICON_NOTE_LG-->
<div class="icon-wrapper-big icon-wrapper-place">
    <div class="icon-big-bg">
        <div class="icon-big">
            <!--BUTTON_SETTING-->
            <button class="btn place-icon icon-inside-big-hover">
            </button>
        </div>
    </div>
</div>
<!--END ICON_LG_NOTE-->
<!--ICON_NOTE_LG-->
<div class="icon-wrapper-big icon-wrapper-lg-note">
    <div class="icon-big-bg">
        <div class="icon-big">
            <!--BUTTON_SETTING-->
            <button class="btn note-lg-icon icon-inside-big-hover">
            </button>
        </div>
    </div>
</div>
<!--END ICON_LG_NOTE-->
<!--LEFT USERS BLOCK-->
<div class="left-users-block">
    <!--1 user-->
    <div class="user-block-side">
        <div class="user-frame">
            <div class="user-gift-image">
                <div class="gift"><img src="images/gift_tiger.png" alt="" width="35" height="33"/></div>
            </div>
            <div class="photo" data-toggle="modal" data-target="#modal-profile">
                <img src="images/photo_left_1@2x.jpg" alt="" width="59" height="58"/>
            </div>
            <!--ADD GIFT BUTTON-->
            <div class="add-gift">
                <div class="icon-add-gift-default-bg">
                    <div class="gift-default-bg">
                        <button class="btn icon-add-gift-default" data-toggle="modal" data-target="#modal-gift"></button>
                    </div>
                </div>
            </div>
            <span class="username" id="username-6">анатолий</span>
        </div>
    </div>
    <!--2 user-->
    <div class="user-block-side">
        <div class="user-frame">
            <div class="user-gift-image">
                <div class="gift"><img src="images/gift_roze.png" alt="" width="35" height="33"/></div>
            </div>
            <div class="photo" data-toggle="modal" data-target="#modal-profile">
                <img src="images/photo_left_2@2x.jpg" alt="" width="59" height="58"/>
            </div>
            <!--ADD GIFT BUTTON-->
            <div class="add-gift">
                <div class="icon-add-gift-default-bg">
                    <div class="gift-default-bg">
                        <button class="btn icon-add-gift-default" data-toggle="modal" data-target="#modal-gift"></button>
                    </div>
                </div>
            </div>
            <span class="username" id="username-5">виктория</span>
        </div>
    </div>
</div>
<!--END_LEFT_USER_BLOCK-->
<div class="right-users-block">
    <!--1 user-->
    <div class="user-block-side">
        <div class="user-frame">
            <div class="user-gift-image-left">
                <div class="gift"><img src="images/gift_tiger.png" alt="" width="35" height="33"/></div>
            </div>
            <div class="photo" data-toggle="modal" data-target="#modal-profile">
                <img src="images/photo_right_1@2x.jpg" alt="" width="59" height="58"/>
            </div>
            <!--ADD GIFT BUTTON-->
            <div class="add-gift add-gift-left">
                <div class="icon-add-gift-default-bg">
                    <div class="gift-default-bg">
                        <button class="btn icon-add-gift-default" data-toggle="modal" data-target="#modal-gift"></button>
                    </div>
                </div>
            </div>
            <span class="username" id="current-user">ваге</span>
        </div>
    </div>
    <div class="user-block-side" id="placeholder-6">
        <!--INVITE CONTAINER-->
        <div class="user-wrapper-invite">
            <div class="user-invite-bg">
                <button class="btn add-user"></button>
            </div>
            <span class="username invite">пригласить</span>
        </div>
    </div>
</div>
<!--empty container-->
<div class="box-content-empty-blur hide">
    <div class="content-frame-empty-outside">
        <div class="content-frame-white">
            <div class="content-frame-white-blur">
                <!--HERE IS CONTENT-->
                <div class="white"></div>
                <!--END OF CONTENT-->
            </div>
        </div>
    </div>
</div>
<!--END empty container-->
<!--paint container-->
<div class="box-content-paint-blur">
    <div class="content-frame-paint-outside">
        <div class="content-frame-paint">
            <div class="content-frame-paint-blur">
                <div class="paint-frame">
                    <div class="left-corner-bg">
                        <div class="left-corner">
                            <button class="btn btn-pencil" data-toggle="tooltip" data-placement="bottom" title="карандаш">
                            </button>
                        </div>
                    </div>
                    <div class="left-panel-paint">
                        <div class="brush-form-wrapper color-form-1">
                            <div class="brush-form-inside">
                                <div class="brush-form brush-form-1"></div>
                            </div>
                        </div>
                        <div class="brush-form-wrapper color-form-2">
                            <div class="brush-form-inside">
                                <div class="brush-form brush-form-2"></div>
                            </div>
                        </div>
                        <div class="brush-form-wrapper active color-form-3">
                            <div class="brush-form-inside">
                                <div class="brush-form brush-form-3"></div>
                            </div>
                        </div>
                        <div class="brush-form-wrapper color-form-4">
                            <div class="brush-form-inside">
                                <div class="brush-form brush-form-4"></div>
                            </div>
                        </div>
                        <div class="brush-form-wrapper color-form-5">
                            <div class="brush-form-inside">
                                <div class="brush-form brush-form-5"></div>
                            </div>
                        </div>
                        <div class="brush-form-wrapper color-form-6">
                            <div class="brush-form-inside">
                                <div class="brush-form brush-form-6"></div>
                            </div>
                        </div>
                        <div class="brush-form-wrapper color-form-7">
                            <div class="brush-form-inside">
                                <div class="brush-form brush-form-7"></div>
                            </div>
                        </div>
                        <div class="brush-form-wrapper color-form-8">
                            <div class="brush-form-inside">
                                <div class="brush-form brush-form-8"></div>
                            </div>
                        </div>
                      <div class="color-palette-wrapper">
                          <div class="color-palette-bg">
                            <span class="palette"></span>
                          </div>
                      </div>
                    </div>
                    <div class="canvas-wrapper-bg">
                        <!-- canvas-->
                        <div class="canvas" id="canvas">
                        </div>
                        <!-- end canvas-->
                        <div class="bottom-panel-paint">
                            <div class="brush-icon-wrapper brush-dim-1" data-toggle="tooltip" data-placement="top" title="21">
                                <div class="brush-inside">
                                    <div class="brush size-1"></div>
                                </div>
                            </div>
                            <div class="brush-icon-wrapper brush-dim-2" data-toggle="tooltip" data-placement="top" title="15">
                                <div class="brush-inside">
                                    <div class="brush size-2"></div>
                                </div>
                            </div>
                            <div class="brush-icon-wrapper brush-dim-3" data-toggle="tooltip" data-placement="top" title="13">
                                <div class="brush-inside">
                                    <div class="brush size-3"></div>
                                </div>
                            </div>
                            <div class="brush-icon-wrapper brush-dim-4" data-toggle="tooltip" data-placement="top" title="11">
                                <div class="brush-inside">
                                    <div class="brush size-4"></div>
                                </div>
                            </div>
                            <div class="brush-icon-wrapper brush-dim-5 active" data-toggle="tooltip" data-placement="top" title="8">
                                <div class="brush-inside">
                                    <div class="brush size-5"></div>
                                </div>
                            </div>
                            <div class="brush-icon-wrapper brush-dim-6" data-toggle="tooltip" data-placement="top" title="5">
                                <div class="brush-inside">
                                    <div class="brush size-6"></div>
                                </div>
                            </div>
                            <div class="time-wrapper">
                                <div class="time-wrapper-bg">
                                    <span class="timer">00:00</span>
                                </div>
                            </div>
                            <button class="btn btn-undo" disabled="disabled" data-toggle="tooltip" data-placement="top" title="шаг назад"></button>
                            <button class="btn btn-redo" disabled="disabled" data-toggle="tooltip" data-placement="top" title="шаг вперед"></button>
                            <button class="btn btn-trash" data-toggle="tooltip" data-placement="top" title="начать с начала"></button>
                            <div class="ready"><button class="btn btn-riu-success" >готово!</button></div>
                        </div>
                        <div class="activation-panel">
                            <button class="btn btn-painter" data-toggle="tooltip" data-placement="bottom" title="кисть"></button>
                            <button class="btn btn-eraser" data-toggle="tooltip" data-placement="bottom" title="резинка"></button>
                            <div class="empty-1">
                                <button class="btn lock lock-1" data-toggle="tooltip" data-placement="bottom" title="открыть 1">
                                   <img src="images/lock@2x.png" alt="" width="21" height="26"/></button>
                            </div>
                            <div class="empty-2">
                                <button class="btn lock lock-2" data-toggle="tooltip" data-placement="bottom" title="открыть 2">
                                    <img src="images/lock@2x.png" alt="" width="21" height="26"/></button>
                            </div>
                            <div class="empty-3">
                                <button class="btn lock lock-3" data-toggle="tooltip" data-placement="bottom" title="открыть 3">
                                    <img src="images/lock@2x.png" alt="" width="21" height="26"/></button>
                            </div>
                            <div class="empty-4">
                                <button class="btn lock lock-4" data-toggle="tooltip" data-placement="bottom" title="открыть 4">
                                    <img src="images/lock@2x.png" alt="" width="21" height="26"/></button>
                            </div>
                            <div class="empty-5">
                                <button class="btn lock lock-5" data-toggle="tooltip" data-placement="bottom" title="открыть 5">
                                    <img src="images/lock@2x.png" alt="" width="21" height="26"/></button>
                            </div>
                            <div class="empty-6">
                                <button class="btn lock lock-6" data-toggle="tooltip" data-placement="bottom" title="открыть 6">
                                    <img src="images/lock@2x.png" alt="" width="21" height="26"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--END paint container-->
</div><!--END WRAPPER-->
<?php include('modal_buy.php')?>
<?php include('modal_profile.php')?>
<?php include('modal_level.php')?>
<?php include('modal_username.php')?>
<?php include('modal_palette.php')?>
<?php include('modal_gift.php')?>
<?php include('modal_top.php')?>
<?php include('modal_answer.php')?>
<?php include('modal_achievments.php')?>

<script src="//oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<script src="//oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="js/function.js"></script>
<script src="js/canvas.js"></script>
<script src="js/script.js"></script>
<script src="js/pietimer.js"></script>
<script src="js/jquery.preload.min.js"></script>
<script src="js/bootstrap.min.js"></script>

</body>
</html>