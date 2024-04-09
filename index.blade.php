<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,  minimum-scale=1.0">
    <meta name="title" content="digeam">
    <meta name="description" content="掘夢網是由一群遊戲的同好所創辦，他們憑著一股創業熱情，打造出夢想中的企業。">
    <meta name="keywords" content="digeam, 掘夢網">
    <meta property="og:type" content="article">
    <meta property="og:title" content="掘夢網">
    <meta property="og:description" content="掘夢網是由一群遊戲的同好所創辦，他們憑著一股創業熱情，打造出夢想中的企業。">
    <meta property="og:image" content="https://www.digeam.com/images/FB_1200x628.png">
    <meta name="csrf-token" content="e5Pd5f43IqplKPvyHPPrrnYD86gsH9bZrNGzxXxz">
    <title>DiGeam | ⚔️11龍王地下城🐉</title>
    <link rel="shortcut icon" href="/images/favicon.ico">
    <link rel="stylesheet" href="/event/20231111/css/style.css?v0.8">
</head>

<body>
    {{-- @php
        $_COOKIE_DOMAIN = '.digeam.com';
        SetCookie('return_url', base64_encode('https://www.digeam.com/event/20231107/index'), 0, '/', $_COOKIE_DOMAIN);
    @endphp
    @php
        if (!isset($_SERVER['HTTP_CF_CONNECTING_IP'])) {
            $userip_get = '0.0.0.0';
        } else {
            $userip_get = $_SERVER['HTTP_CF_CONNECTING_IP'];
        }
    @endphp --}}

    <!-- Google Tag Manager (noscript) -->
    {{-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PB8RXNM" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript> --}}
    <!-- End Google Tag Manager (noscript) -->
    {{-- <form id="logout-form" action="{{ secure_url('/logout') }}" method="POST" style="display: none;">
        <input type="hidden" name="return_url" id="return_url"
            value="@php echo base64_encode("https://www.digeam.com/event/20231107/index"); @endphp">
        {{ csrf_field() }}
    </form> --}}

    {{-- @php
        if (!isset($_SERVER['HTTP_CF_CONNECTING_IP'])) {
        } else {
            $find_blockip = \App\Model\read\BlockIP::where('ip', $userip_get)->first();
            if ($find_blockip['id']) {
                $ts1 = strtotime(date('Y-m-d H:i:s'));
                $ts2 = strtotime($find_blockip['created_at']);
                $diff = abs($ts1 - $ts2) / 3600;
                if ($diff >= 1) {
                    \App\Model\write\BlockIP::where('ip', $userip_get)->delete();
                }
            }
        }
    @endphp --}}
    {{-- @if (\App\Model\read\BlockIP::where('ip', $userip_get)->count() > 0)
        <script>
            alert(
                '親愛的玩家您好，\n《掘夢網》資安機制偵測到您的帳號遭多次異常登入，\n為保障您的會員權益，我們將暫時凍結本帳號1小時。\n基於安全考量，建議您立即更改帳號密碼，以降低盜用風險。\n\n※※※更改密碼後，將自動解除封鎖的IP※※※'
            );
            location.href = '{{ secure_url('/blocking') }}';
        </script>
    @endif
    @if (Auth::check())
        @if (\App\Model\read\BlockUser::where('user_id', Auth::user()->id)->count() > 0)
            <script>
                alert('你的帳號已被封鎖!');
                document.getElementById('logout-form').submit();
            </script>
        @endif
    @endif --}}
    <nav>
        <a href="https://digeam.com" target="_blank" class="logo"></a>
        <div class="bar">
            <div class="user_box">
                {{-- @if (Auth::guest())
                    <a href="https://www.digeam.com/login" class="login"><img src="/event/20231111/img/icon_login.png"
                            alt="">登入</a>
                @else
                    <p>你好，<span class="user_id"
                            data-user="{{ Auth::user()->user_id }}">{{ Auth::user()->user_id }}</span></p>
                    <a class="login" onclick="logout_dg()"><img src="/event/20231111/img/icon_login.png"
                            alt="">登出</a>
                @endif --}}

                <p>你好，<span class="user_id"
                    data-user="minnn112">minnn112</span></p>
            <a class="login" onclick="logout_dg()"><img src="/event/20231111/img/icon_login.png"
                    alt="">登出</a>

            </div>

            <a href="https://www.digeam.com/register" target="_blank" class="register"><img
                    src="/event/20231111/img/icon_register.png" alt="">註冊</a>
            <a href="https://www.digeam.com/member/billing" target="_blank" class=""><img
                    src="/event/20231111/img/icon_billing.png" alt="">儲值</a>
        </div>
    </nav>
    <div class="swiper">
        <div class="swiper-wrapper">
            <section class="swiper-slide sec1">
                <div class="sec1_box">
                    <div class="title"></div>
                    <div class="phone">
                    </div>
                    <div class="spolight">
                        <div class="spolight2"></div>
                        <div class="star"></div>
                    </div>
                </div>
                <div class="arrow_d"></div>
            </section>
            <section class="swiper-slide sec2">
                <div class="sec2_box">
                    <div class="title"></div>
                    <p class="sec_info sec2_info">目前代幣<span class="coin_num"></span>枚&emsp;<span
                            class="coin_check"></span>本日代幣
                    </p>
                    <div class="coin_box">
                        <article class="back"></article>
                        <article class="middle"></article>
                        <article class="middle"></article>
                        <article class="middle"></article>
                        <article class="middle"></article>
                        <article class="middle"></article>
                        <article class="middle"></article>
                        <article class="middle"></article>
                        <article class="middle"></article>
                        <article class="middle"></article>
                        <article class="front"></article>
                    </div>
                    <div class="spolight">
                        <div class="spolight2"></div>
                        <div class="star"></div>
                    </div>
                    <ul class="sec_list">
                        <li class="award pop" data-pop="award"></li>
                        <li class="record pop" data-pop="record"></li>
                    </ul>
                    <div class="approve">
                        <div data-set="false" class="check"></div>
                        <p>略過確認、動畫</p>
                    </div>
                </div>
                <div class="hero_box">
                    <div class="hero_wrap">
                        <div class="hero_led">
                            <pre>恭喜<span class="hero_user"></span>獲得<span class="hero_award"></span></pre>
                            <pre>恭喜<span class="hero_user"></span>獲得<span class="hero_award"></span></pre>
                            <pre>恭喜<span class="hero_user"></span>獲得<span class="hero_award"></span></pre>
                        </div>
                    </div>
                    <button class="hero_book pop" data-pop="hero">英雄名冊</button>

                </div>
            </section>
            <section class="swiper-slide sec3">
                <div class="sec3_box">
                    <div class="title"></div>
                    <p class="sec_info sec3_info">目前持有骰子<span class="dice_num"></span>顆</p>
                    <div class="cube_box">
                        <div class="scene">
                            <div class="cube">
                                <div class="face front"></div>
                                <div class="face back"></div>
                                <div class="face right"></div>
                                <div class="face left"></div>
                                <div class="face top"></div>
                                <div class="face bottom"></div>
                            </div>
                        </div>
                    </div>

                    <div class="spolight">
                        <div class="spolight2"></div>
                        <div class="star"></div>
                    </div>
                    <ul class="sec_list">
                        <li class="award pop" data-pop="award"></li>
                        <li class="record pop" data-pop="record"></li>
                    </ul>
                    <div class="approve">
                        <div data-set="false" class="check"></div>
                        <p>略過確認、動畫</p>
                    </div>
                </div>
                <div class="dragon_box pop" data-pop="box"></div>
                <div class="hero_box">
                    <div class="hero_wrap">
                        <div class="hero_led">
                            <pre>恭喜<span class="hero_user"></span>獲得<span class="hero_award"></span></pre>
                            <pre>恭喜<span class="hero_user"></span>獲得<span class="hero_award"></span></pre>
                            <pre>恭喜<span class="hero_user"></span>獲得<span class="hero_award"></span></pre>
                        </div>
                    </div>
                    <button class="hero_book pop" data-pop="hero">英雄名冊</button>

                </div>
            </section>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <aside>
        <ul class="list">
            <li><img src="/event/20231111/img/icon_section2.png" alt="">
                <p>競技場卡池</p>
            </li>
            <li><img src="/event/20231111/img/icon_section3.png" alt="">
                <p>財寶龍穴卡池</p>
            </li>
            <li class="pop" data-pop="content"><img src="/event/20231111/img/icon_description.png"
                    alt="">
                <p>活動說明</p>
            </li>
            <li class="pop" data-pop="notice"><img src="/event/20231111/img/icon_point.png" alt="">
                <p>注意事項</p>
            </li>
        </ul>
    </aside>
    <div class="door pop" data-pop="store"></div>
    <div class="mask3"></div>
    <div class="mask2" onclick="close()"></div>
    <div class="mask" onclick="close()"></div>
    <div class="popup">
        <p class="popup_gia">您持有寶石<b class="gia_num">0</b>顆</p>
        <div class="popup_wrap">
            <p class="popup_title"></p>
            <ul class="popup_tab"></ul>
            <pre class="popup_alret"></pre>
            <div class="tab_content" data-tab="1">
                <div class="icon_list"></div>
                <div class="popup_table"></div>
            </div>
            <div class="tab_content" data-tab="2">
                <div class="popup_table"></div>
            </div>
            <ul class="popup_list"></ul>
            <div class="popup_table2">
            </div>
            <div class="popup_x close">
                <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 384 512">
                    <style>
                        svg {
                            fill: #ffffff
                        }
                    </style>
                    <path
                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
            </div>
        </div>
    </div>
    <div class="popup_s">
        <div class="popup_s_wrap">
            <p class="popup_s_title"></p>
            <pre class="popup_s_alret"></pre>
            <div class="popup_s_icon_list"></div>
            <div class="popup_s_btn"></div>
        </div>
    </div>

    <script src="/event/20231111/js/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/js/swiper.min.js"
        integrity="sha512-VHsNaV1C4XbgKSc2O0rZDmkUOhMKPg/rIi8abX9qTaVDzVJnrDGHFnLnCnuPmZ3cNi1nQJm+fzJtBbZU9yRCww=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="/event/20231111/js/view.js?v1.25"></script>
    <script src="/event/20231111/js/login.js?v1.25"></script>
    <script src="/event/20231111/js/main.js?v1.25"></script>
</body>

</html>
