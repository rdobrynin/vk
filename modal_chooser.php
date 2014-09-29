<!-- Modal -->
<div class="modal fade" id="modal-chooser" tabindex="-1" role="dialog" aria-labelledby="modal-chooserLabel" aria-hidden="true">
  <div class="chooser-static">
  <div class="modal-dialog">
    <div class="modal-content">
  <div class="modal-chooser">
<!--if first player-->
      <div id="first-player">
    <div class="user-frame-modal">
      <div class="photo">
        <img src="images/photo_top_1@2x.jpg" alt="" width="59" height="58">
      </div>
    </div>
    <p><b>Вы первый игрок за столом</b></p>
    <p>Пока вы ожидаете других игроков, <br />не желаете ли попрактиковаться в рисовании?</p>
    <button class="btn btn-riu-modal-primary" id="btn-begin-draw" style="width: auto; margin-top: 20px; margin-right: 8px;">Начать рисовать</button>
    <button class="btn btn-riu-modal-success green" id="btn-wait" style="width: auto; margin-top: 20px; margin-left: 8px;">Просто подождать</button>
</div>

<div id="queue-leader">
    <div class="user-frame-modal">
        <div class="photo">
            <img src="images/photo_top_1@2x.jpg" alt="" width="59" height="58">
        </div>
    </div>
    <p><b>Ваша очередь стать ведущим</b></p>
  <p>Желаете ли вы стать ведущим или продолжите <br />угадывать то, что рисуют другие?</p>
    <button class="btn btn-riu-modal-primary" id="btn-become-leader" style="width: auto; margin-top: 20px; margin-right: 8px;">Стать ведущим</button>
    <button class="btn btn-riu-modal-success green" id="btn-guess" style="width: auto; margin-top: 20px; margin-left: 8px;">Хочу угадывать</button>
</div>
      <div id="choosing-leader">
          <p><b>Выбирается ведущий</b></p>
<div style="margin-top: 80px;"><span style="font-weight: bold; color: #00A8FF;">Подсказка:</span> Если вам понравился один из игроков и вы хотите привлеч его внимание, пошлите ему особый подарок, нажав на
    <img class="grey_gift" src="images/grey_gift.png" alt="" width="19" height="22"> рядом с его аватаркой.</div>
          <div class="choosing-leader-block">
              <div class="get-gift-img" id="img-berry"></div>
          </div>
          <div class="choosing-leader-block">
              <div class="get-gift-img" id="img-toy"></div>
          </div>
          <div class="choosing-leader-block">
              <div class="get-gift-img" id="img-whiskey"></div>
          </div>
          <div class="choosing-leader-block">
              <div class="get-gift-img" id="img-roze"></div>
          </div>
          <div class="choosing-leader-block">
              <div class="get-gift-img" id="img-beer"></div>
          </div>
      </div>
  </div>
    </div>
  </div>
    </div>
</div>