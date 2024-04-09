

function logout_dg() {
    console.log("登出");
    $("#logout-form").submit();
}

api = 'http://192.168.0.41:8079/api/DIGEAM/20231107/getSetting';

let user = 'minnn112';

setting();

function setting() {
    $.post(
        api,
        {
            type: 'login',
            user: user,
        },
        function (res) {
            res.hero.forEach((i, idx) => {
                hero[idx].user = i.user;
                hero[idx].source = i.source;
                hero[idx].award = i.award;
                $('.hero_user').html(i.user);
                $('.hero_award').html(i.award);
            });

            if (res.status == -99) {
                $('.coin_box , .cube_box').on('click', function () {
                    $('.popup_s , .mask').fadeIn(500);
                    $('.popup_s_wrap').html(`<pre class="popup_s_alret">${popup.alret.login}</pre>
                <div class="popup_s_btn">${popup.btn.ac}</div>`);
                })
            } else if (res.status == 1) {
                $('.user_box').html(`         
                    <p>你好，<span class="user_id">${user}</span></p>
                    <a class="login" onclick="logout_dg()"><img src="./img/icon_login.png" alt="">登出</a>`)
                $('.dice_num').html(res.dice);
                $('.coin_num').html(res.coin);
                $('.coin_check').html(res.goal == false ? '尚未獲得' : '您已獲得');
                if (res.dk_award == true) {
                    $('.cube_box , .coin_box').on('click', function () {
                        $('.popup_s , .mask').fadeIn(500);
                        $('.popup_s_wrap').html(`<p class="popup_s_title">${popup.title.result}</p>
                           <div class="popup_s_icon_list">
                           <div class="icon">
                           <img src="./img/icon/img_dragon.png" alt="">
                           <p class="icon_name">龍王之庫</p>
                           <pre class="icon_info">您發現了龍王之庫傳送門，他看起來隨時都有可能關閉。</pre>
                           </div>
                           </div>
                           <div class="popup_s_btn">
                           <button class="into" onclick="play('dragon')">趕緊進入</button>
                           </div>`);
                    })
                } else {
                    $('.coin_box , .cube_box').on("click", function () {
                        $('.popup_s , .mask').fadeIn(200);
                        let content = ''
                        let btn = ''
                        if ($(this).hasClass('coin_box')) {
                            if (localStorage.getItem('skip') == 'true') {
                                play('arena');
                                return
                            }
                            content = `<pre class="popup_s_alret">${popup.alret.coin_draw}</pre>`;
                            btn = `<div class="popup_s_btn"><button class="close" onclick="closePopup()">取消</button><button class="agree" onclick="play('arena')">確認</button></div>`
                        } else if ($(this).hasClass('cube_box')) {
                            if (localStorage.getItem('skip') == 'true') {
                                play('treasure');
                                return
                            }
                            content = `<pre class="popup_s_alret">${popup.alret.dice_draw}</pre>`;
                            btn = `<div class="popup_s_btn"><button class="close" onclick="closePopup()">取消</button><button class="agree" onclick="play('treasure')">確認</button></div>`
                        }
                        $('.popup_s_wrap').html(content + btn)
                    })
                }
            }
        }, "json"
    )
}

function exchange(id) {
    $('.mask2').show();
    $.post(
        api,
        {
            type: 'exchange',
            user: user,
            id: id
        },
        function (res) {
            $('.mask2 , .popup').fadeOut(300);
            $('.popup_s').fadeIn(200);
            if (res.status == 1) {
                $('.mask').on("click", function () {
                    reload();
                })
            }
            $('.popup_s_wrap').html(`<p class="popup_s_title">${res.status == 1 ? popup.alret.exchange_done : res.status == -98 ? `寶石不足，無法兌換` : res.status == -90 ? popup.alret.end : ''}</p><div class="popup_s_btn">${res.status == 1 ? popup.btn.reload : popup.btn.ac}</div>`);
        }, "json"
    )
}

function play(source) {
    $('.mask2').show();
    if (source == 'dragon') {
        var $loding = drAni();
    }
    $.post(
        api,
        {
            type: 'play',
            user: user,
            source: source,
        },
        function (res) {
            $('.mask2').fadeOut(300);
            let _time = 0;
            localStorage.getItem('skip') == 'true' ? _time = 0 : _time = 3000;
            let _cube = localStorage.getItem('skip') == 'true' ? '' : cubeAni();
            if (source == 'dragon' && res.status == 1) {
                setTimeout(function () {
                    $loding.remove();
                    $('.mask3').hide();
                    $('.popup_s').fadeIn(500);
                    $('.popup_s_wrap').html(`<p class="popup_s_title">${popup.title.result}</p>
                <div class="popup_s_icon_list">
                      <div class="icon">
                      <img src="./img/icon/${res.img == 1 ? '50' : res.img == 2 ? '12' : res.img == 3 ? '11' : 'img_diamond'}.png" alt="">
                      <p class="icon_name">${res.name}</p>
                      </div>
                      </div>
                      <div class="popup_s_btn">
                      ${popup.btn.reload}
                      </div>
                </div>
                `)
                }, 3000);
                $('.mask').on("click", function () {
                    reload();
                })
            } else if (res.status == 1) {
                $('.mask').on("click", function () {
                    reload();
                })
                _cube;
                setTimeout(function () {
                    $('.mask3').hide();
                    $('.mask').show();
                    $('.popup_s').fadeIn();
                    $('.popup_s_wrap').html(`<p class="popup_s_title">${popup.title.result}</p>
                    <div class="popup_s_icon_list">
                          <div class="icon">
                          <img src="./img/icon/${source == 'dragon' ? 'img_dragon' : 'img_diamond'}.png" alt="">
                          <p class="icon_name">${res.name}</p>
                          </div>
                          </div>
                          <div class="popup_s_btn">
                          ${popup.btn.reload}
                          </div>
                    </div>
                     `)
                     $('.mask').on("click", function () {
                        reload();
                    })
                }, _time);
            } else if (res.status == 2) {
                $('.mask').on("click", function () {
                    reload();
                })
                setTimeout(function () {
                    $('.popup_s_wrap').html(`<p class="popup_s_title">${popup.title.result}</p>
                    <div class="popup_s_icon_list">
                          <div class="icon">
                          <img src="./img/icon/img_dragon.png" alt="">
                          <p class="icon_name">龍王之庫</p>
                          <pre class="icon_info">您發現了龍王之庫傳送門，他看起來隨時都有可能關閉。</pre>
                          </div>
                          </div>
                          <div class="popup_s_btn">
                          <button class="into">趕緊進入</button>
                          </div>
                    </div>`);
                    $('.into').on("click", function () {
                        play('dragon');
                    })
                }, _time);
            } else if (res.status == -98) {
                $('.popup_s_wrap').html(`<p class="popup_s_title">${source == 'arena' ? '代幣' : '骰子'}不足，是否前往儲值?</p>
                      <div class="popup_s_btn">
                      ${popup.btn.close}
                      ${popup.btn.billing}
                      </div>
                </div>
            `)
            } else if (res.status == -90) {
                $('.popup_s_wrap').html(`<p class="popup_s_title">${popup.alret.end}</p>
                <div class="popup_s_btn">
                ${popup.btn.close}
                ${popup.btn.billing}
                </div>`)
            }
        }, "json"
    )
};

function drAni() {
    $('.mask3').show();
    var $loading = $('<div class="dr_box"><div class="dr"></div></div>').appendTo('body');
    $('.popup_s').fadeOut(500);
    return $loading;
}

function cubeAni() {
    $('.mask3').show();
    $('.cube').addClass('rolling');
    $('.coin_box').addClass('rolling');
    $('.popup_s , .mask').fadeOut(500);
}




