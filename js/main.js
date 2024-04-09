

var mySwiper = new Swiper('.swiper', {
    autoplay: false, //可选选项，自动滑动
    init: true,
    mousewheel: true,
    updateOnWindowResize: true,
    speed: 500,
    noSwiping: true,
    autoHeight: true, //高度随内容变化
    observer: true,
    observeParents: true,
    // slidesPerView:'auto',
    direction: 'vertical', // 垂直切换选项
    loop: false, // 循环模式选项
    roundLengths: true, //防止文字模糊
    threshold: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
})

if (localStorage.getItem('skip') == 'true') {
    $('.check').addClass('true');
    $('.check').attr('data-set', 'true');
}

$(".approve").on('click', function () {
    let check = $('.check').attr('data-set');
    if (check == 'false') {
        $('.check').addClass('true');
        $('.check').attr('data-set', 'true');
        skip(true);
    } else if (check == 'true') {
        $('.check').removeClass('true');
        $('.check').attr('data-set', 'false');
        skip(false);
    }
})

function skip(val) {
    localStorage.setItem('skip', val);
}

function closePopup() {
    $('.mask , .popup , .mask2 , .popup_s').fadeOut(500);
}

function reload() {
    location.reload();
}

$('.mask , .close').on('click', function () {
    closePopup();
})

function login() {
    $('.popup').fadeOut(200);
    $('.popup_s').fadeIn(500);
    $('.popup_s_wrap').html(`<p class="popup_s_title">${popup.alret.login}</p><div class="popup_s_btn">${popup.btn.ac}</div>`);
}

$('.pop').on('click', function () {
    $('.popup_gia , .icon_list').hide();
    $('.popup_title,.popup_tab,.popup_alret,.icon_list,.popup_list,.popup_btn,.popup_table,.popup_table2').html('');
    $('.popup , .mask , .popup_x').fadeIn(500);
    let type = $(this).attr('data-pop');
    let str = '';
    switch (type) {
        case 'content':
            $('.popup_title').show().html(popup.title.content);
            $('.popup_list').html(popup.info.content);
            break;
        case 'box':
            $('.popup_title').show().html(popup.title.treasure);
            $('.popup_table2').html(`<table>
            <thead>
                <th width="30%">獎勵項目</th>
                <th>獎勵詳細</th>
            </thead>
            <tbody>
                <tr>
                   <td>寶石100-1000顆隨機</td>
                   <td>寶石數量100-1000顆隨機一個數，可於冒險者大廳可於冒險者大廳使用</td>
               </tr>
               <tr>
                    <td>寶石1001-2000顆隨機</td>
                    <td>寶石數量1001-2000顆隨機一個數，可於冒險者大廳可於冒險者大廳使用</td>
                </tr>
                <tr>
                    <td>寶石2001-2500顆隨機</td>
                    <td>寶石數量2001-2500顆隨機一個數，可於冒險者大廳可於冒險者大廳使用</td>
                </tr>
                <tr>
                    <td>寶石2501-3000顆隨機</td>
                    <td>寶石數量2501-3000顆隨機一個數，可於冒險者大廳可於冒險者大廳使用</td>
                </tr>
                <tr>
                    <td>龍王大哥大</td>
                    <td>i Phone 15 256GB隨機不挑色</td>
                </tr>
            </tbody>
        </table>`);
            break;
        case 'notice':
            $('.popup_title').show().html(popup.title.notice);
            $('.popup_list').html(popup.info.notice);
            break;
        case 'hero':
            $('.popup_title').show().html(popup.title.hero);
            let str3 = '';
            hero.forEach((i) => {
                str3 += `<tr><td>${i.user}</td>
                <td>${i.source}</td>
                <td>${i.award}</td> </tr>`
                $('.popup_table2').html(`<table>
                <thead>
                    <th>玩家帳號</th>
                    <th>闖關地點</th>
                    <th>獲得獎勵</th>
                </thead>
                <tbody>
                      ${str3}
                    
                </tbody>
            </table>`)
            })
            break;
        case 'store':
            $.post(
                api,
                {
                    type: 'shop',
                    user: user,
                },
                function (res) {
                    $('.gia_num').html(res.gia);
                    let update = '';
                    // $('.popup_table').html('');
                    store.forEach((i) => {
                        let match = res.store.find(response => response.id == i.id);
                        if (match) {
                            i.state = match.exc;
                        }
                        if (i.state == '0') {
                            update = res.status == -99 ? `<button class="change" onclick="login()">兌換</button>` : `<button class="change" onclick="exchange(${i.id})">兌換</button>`
                        } else if (i.state == '1') {
                            update = `<button class="change done">今日已兌換</button>`
                        } else if (i.state == '2') {
                            update = `<button class="change done">兌換完畢</button>`
                        }
                        str += `<div class="icon">
                        <img src="${i.img}" alt="">
                        <pre class="icon_name">${i.name}</pre>
                        <pre class="icon_info">${i.num}</pre>
                        ${update}
                        </div>`
                        $('.icon_list').html(str);
                    });
                    $('.popup_gia , .icon_list').show();
                    $('.popup_title').hide();
                    $('.popup_tab').html(popup.tab.exchange);

                    let str2 = ''
                    if (res.record == '') {
                        str2 += `<td colspan="3">無兌換紀錄</td>`
                    } else {
                        res.record.forEach((i) => {
                            str2 += `<tr>
                                        <td>${i.name}</td>
                                        <td>${i.gia}</td>
                                        <td>${i.date}</td>
                                    </tr>
                                `;
                        })
                    }
                    $('.tab_content[data-tab="2"] > .popup_table').html(`
                        <table>
                            <thead>
                                <th>兌換名稱</th>
                                <th>兌換數量</th>
                                <th>兌換日期</th>
                            </thead>
                            <tbody>
                                ${str2}
                            </tbody>
                        </table>
                        `)
                    tabClick('store');


                }, "json"
            )

            break;
        case 'record':
            $.post(
                api,
                {
                    type: 'play_record',
                    user: user,
                },
                function (res) {
                    let str = ''
                    if (res.list == '') {
                        str += `<td colspan="3">無兌換紀錄</td>`
                    } else {
                        res.list.forEach((i) => {
                            str += `<tr>
                                        <td>${i.name}</td>
                                        <td>${i.source}</td>
                                        <td>${i.date}</td>
                                    </tr>
                                `;
                        })
                    }
                    $('.popup_title').show().html(popup.title.record);
                    $('.popup_table2').html(`<table>
                         <thead>
                             <th>獎勵項目</th>
                             <th>獲取路徑</th>
                             <th>獲取時間</th>
                         </thead>
                         <tbody>
                            ${str}
                         </tbody>
                     </table>
                    `);
                }, "json"
            )

            break;
        case 'award':
            $('.popup_title').show().html(popup.title.award);
            $('.popup_tab').html(popup.tab.award);
            tabClick('award');
            break;
        default:
            console.log('未知錯誤');
    }
});

function tabClick(type) {
    const tabs = $('.tab');
    const content = $('.tab_content');
    function activeTab(val, Id) {
        content.hide().removeClass('active');
        tabs.removeClass('active');
        $(`.tab_content[data-tab="${Id}"]`).show().addClass('active');
        $(`.tab[data-tab="${Id}"]`).addClass('active');
        switch (val) {
            case 'award-1':
                $('.popup_table').html(renderTable(award.arena));
                break;
            case 'award-2':
                $('.popup_table').html(renderTable(award.treasure));
                break;
            case 'store-1':
                break;
            case 'store-2':
                break;
        }
    }
    const val = `${type}-1`;
    activeTab(val, 1);
    tabs.on('click', function () {
        const tabId = $(this).data('tab');
        activeTab(`${type}-${tabId}`, tabId);
    })
}

function renderTable(data) {
    let str = '';
    data.forEach(i => {
        str += `
            <tr>
                <td>${i.name}</td>
                <td>${i.info}</td>
            </tr>
        `;
    });
    return `
        <table>
            <thead>
                <th width="30%">獎勵項目</th>
                <th>獎勵詳細</th>
            </thead>
            <tbody>
                ${str}
            </tbody>
        </table>
    `;
}

