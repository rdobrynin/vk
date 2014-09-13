<!-- Modal ANSWER-->
<div class="modal fade" id="modal-answer" tabindex="-1" role="dialog" aria-labelledby="modal-answer" data-backdrop="false" aria-hidden="true">
    <div class="modal-dialog"></div>
    <div class="answer-static">
        <div class="modal-answer">
            <div class="top-answer">
                <div class="answer-title">Что изобразил ведущий ?</div>
                <div class="close-modal-wrapper-profile">
                    <button type="button" class="btn btn-close btn-close-profile" id="answer-btn-close-modal" data-dismiss="modal">
                        <img id="modal-answer-close" src="images/close.png" alt="" width="19" height="19"/>
                    </button>
                </div>
            </div>
            <!--end answer-gift-->
            <div class="inside-bg-answer">
                <div class="bg-answer-wrapper">
                    <div class="content-answer-wrapper">
                        <div class="answer-container">
                            <div class="answer-block">
                                <span class="present-info">Награда за правильный ответ&nbsp;<img id="modal-answer-star" src="images/answer_star.png" alt="" width="34" height="34"/><span class="info-answer-amount">150</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-answer-wrapper">
                <div class="answer-btn-wrapper">
                    <button class="btn btn-answer" id="bnt-answer-1">Вариант ответа</button>
                </div>
                <div class="answer-btn-wrapper">
                    <button class="btn btn-answer" id="bnt-answer-2">Вариант ответа</button>
                </div>
                <div class="answer-btn-wrapper">
                    <button class="btn btn-answer" id="bnt-answer-3">Вариант ответа</button>
                </div>
                <div class="answer-btn-wrapper">
                    <button class="btn btn-answer" id="bnt-answer-4">Вариант ответа</button>
                </div>
                <div class="answer-btn-wrapper">
                    <button class="btn btn-answer" id="bnt-answer-5">Вариант ответа</button>
                </div>
                <div class="bottom-right-answer">
                    <span>Осталось времени на ответ</span>
                </div>
            </div>
        </div>
        <!-- END Modal ANSWER wrapper-->
    </div>
</div>
<!-- END Modal ANSWER-->
<!-- Modal ANSWER-TRUE-->
<div class="modal fade" id="modal-answer-true" tabindex="-1" role="dialog" data-backdrop="false" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="answer-true-static">
        <div class="modal-dialog">
            <div class="modal-content" id="modal-atrue-content">
                <div class="modal-body">
<!-- IF FALSE-->
                    <div class="answer-false-body">
                        <div class="answer-row">
                            <img class="img-answer-yes-row" src="images/no_answer.png" alt="" width="29" height="29"/>&nbsp;&nbsp;&nbsp;
                            <span style="font-weight: 800; color: #7f8a90; font-size: 16px;">Вы ответили неверно</span>
                        </div>
                        <div class="answer-row">
                            <div class="btn-ranswer-wrapper">
                                <button class="btn btn-riu-modal-primary btn-ranswer">Повторить попытку&nbsp;&nbsp;&nbsp;<img class="gift-costs-img" style="top:1px;" src="images/gift_costs.png" alt="" width="23" height="23"/>&nbsp;15
                                </button>
                            </div>
                        </div>
                        <div class="answer-row">
                            <div class="btn-ranswer-wrapper-green">
                                <button class="btn btn-riu-modal-primary btn-ranswer green">Оставить ответ</button>
                            </div>
                        </div>
                    </div>
<!-- END IF FALSE BODY-->

                    <!-- IF TRUE-->
                    <div class="answer-true-body">
                        <div class="answer-row">
                            <img class="img-answer-yes-row" src="images/yes_answer.png" alt="" width="19" height="19"/>&nbsp;&nbsp;&nbsp;
                            <span style="font-weight: 800; color: #7f8a90; font-size: 16px;">Вы ответили правильно</span>
                        </div>
                        <div class="answer-row">
                            <div class="answer-present-area">
                                <span class="answer-present-info"><span style=" font-size: 14px;font-weight: 600;color: #7f8a90; ">Награда</span>
                                        <img class="img-answer-star" src="images/answer_star.png" alt="" width="34" height="34"/>
                                    <span style="font-weight: 800;color: #7f8a90; font-size: 18px;">150</span></span>
                            </div>
                        </div>
                        <div class="answer-row">
                            <div class="btn-ranswer-wrapper-green">
                                <button class="btn btn-riu-modal-primary btn-ranswer green">Продолжить</button>
                            </div>
                        </div>
                    </div>
                    <!-- END IF TRUE BODY-->
                </div>
            </div>
        </div>
    </div>
</div>
<!--END  Modal ANSWER-TRUE-->