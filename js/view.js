

let popup = {
    title: {
        result: '抽獎結果',
        hero: '英雄名冊',
        award: '獎勵列表',
        content: '活動說明',
        notice: '注意事項',
        record: '抽獎紀錄',
        treasure: '龍王的寶藏'
    },
    tab: {
        exchange: `<li class="tab_a tab" data-tab="1">兌換商店</li>
        <li class="tab_a tab" data-tab="2">兌換紀錄</li>`,
        award: `<li class="tab_b tab" data-tab="1">地城競技場</li>
        <li class="tab_b tab" data-tab="2">財寶龍穴</li>`,
    },
    info: {
        content: `<li>1.活動時間:2023/11/7 12:00~2023/11/17 12:00；兌換頁面關閉時間2023/11/24 12:00。</li>
        <li>2.活動期間內，玩家每天首次儲累積滿111點，可獲得2個地城競技場代幣。</li>
        <li>3.凡儲值金額達500元即可獲得一顆至尊骰子，至尊骰子可於財寶龍穴，抽取獎勵。</li>
        <li>4.財寶龍穴有機會觸發，龍王之庫。</li>
        <li>5.龍王之庫，可抽取實體獎勵(i Phone 15、電競週邊等)、大量寶石。</li>
        <li>6.寶石可於冒險者大廳換取實體獎勵及紅利點數。 </li>
        <li>7.本活動中獲得的紅利點數、寶石將於活動頁面關閉後後全數回收 ，請玩家於此之前消耗完畢，逾期視同放棄紅利點數、寶石。</li>`,
        notice: `<li>1.本活動採累積儲金額為判斷依據，每一會員帳號不限參加活動次數，儲值獲取的地城競技場代幣、至尊骰子、寶石將即時計入持有數量，紅利點數將自動入點至紅利專區。 </li>
        <li>2.本活動中獎之獎項依官方活動系統「中獎記錄」後台記錄為準。</li>
        <li>3.本活動獲得之「寶石」，需要至活動頁面的「冒險者大廳」進行兌換，活動結束後未使用之寶石將於11/24(五) 12:00活動網頁關閉時全部回收。 </li>
        <li>4.本活動所獲得之紅利點數，需透過掘夢網平台的「紅利專區」進行轉點使用，活動結束後未轉點之紅利點數將於11/24(五) 12:00活動網頁關閉時全部回收。</li>
        <li>5.本公司有權檢視各參加者之活動參與行為及得獎情形是否涉嫌例：人為操作、惡意灌票、蓄意偽造、多開（重）帳號、短時間異常多筆參與行為、透過任何電腦程式參與活動、詐欺、任何違反會員系統服務合約及停權管，或以任何其他不正當的方式意圖以進行不實或虛偽活動參與行為，參賽者因上述情形所獲得之活動資格及獎項，本公司得一概取消之，其帳號亦將停權處份。​ ​</li>
        <li>6.本活動所獲得之紅利點數轉點不列入本公司任何遊戲之儲活動計算。</li>
        <li>7.冒險者大廳部分獎項為活動期間內每天限量兌換，每天限量獎項將於每天00:00重置可兌換次數。</li>
        <li>8.玩家參與本活動之同時，即同意接受本活動辦法與注意事項之規範，如不同意或有違反，應視為無參加資格 ，或本公司得取消其使用資格，如因此有致生損害於本公司或其他任何第三人，本公司得向參加者請求損害賠償，參加者應負一切相關責任。​ </li>
        <li>9.本活動為機會中獎活動，消費者參與活動不代表即可獲得特定商品。</li>`
    },
    alret: {
        login: '請先登入掘夢網會員',
        enoght: '不足，是否前往儲值？',
        dice_draw: '是否消耗1枚至尊骰子進行1次抽獎?​',
        coin_draw: '是否消耗1枚代幣進行1次抽獎?​',
        gia_enoght: '寶石不足，無法進行兌換​',
        exchange_done: '商品兌換成功！',
        exchange_today: '本日已兌換',
        exchange_num: '數量已兌換完畢',
        error: '發生未知的錯誤！',
        end: '活動已結束'
    },
    btn: {
        into: `<button class="into">趕緊進入</button>`,
        agree: `<button class="agree">確認</button>`,
        billing: `<button class="agree"><a href="https://www.digeam.com/member/billing" target="_blank">確認</a></button>
        `,
        close: `<button class="close" onclick="closePopup()">取消</button>`,
        ac: `<button class="close" onclick="closePopup()">確認</button>`,
        x: `<svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 0 384 512"><style>svg{fill:#ffffff}</style><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`,
        reload:`<button class="close" onclick="reload()">確認</button>`
    }
}

let store = [
    {
        id: '4',
        name: 'Digeam便條紙(不挑款)',
        num: '寶石x2',
        state: '1',
        img: './img/icon/4.png'
    },
    {
        id: '5',
        name: '赤壁紀念酒杯',
        num: '寶石x40',
        state: '2',
        img: './img/icon/5.png'
    },
    {
        id: '6',
        name: '群龍默示錄紀念長型束口袋',
        num: '寶石x220',
        state: '0',
        img: './img/icon/6.png'
    },
    {
        id: '7',
        name: '武士傳奇限定馬克杯',
        num: '寶石x400',
        state: '0',
        img: './img/icon/7.png'
    },
    {
        id: '8',
        name: '武士傳奇限定地墊',
        num: '寶石x440',
        state: '0',
        img: './img/icon/8.png'
    },
    {
        id: '9',
        name: '絲路紀元掛畫',
        num: '寶石x520',
        state: '0',
        img: './img/icon/9.png'
    },
    {
        id: '10',
        name: '武士傳奇限量連衣帽<br>(XL隨機出色)',
        num: '寶石x560',
        state: '0',
        img: './img/icon/10.png'
    },
    {
        id: '11',
        name: '電競滑鼠墊<br>QcK 3XL',
        num: '寶石x1000',
        state: '0',
        img: './img/icon/11.png'
    },
    {
        id: '12',
        name: 'Aerox 3 (2022)<br> Onyx',
        num: '寶石x1250',
        state: '0',
        img: './img/icon/12.png'
    },
    {
        id: '17',
        name: '紅利點數1點',
        num: '寶石x1',
        state: '0',
        img: './img/icon/17.png'
    },
    {
        id: '18',
        name: '紅利點數55',
        num: '寶石x50',
        state: '0',
        img: './img/icon/18.png'
    },
    {
        id: '19',
        name: '紅利點數111',
        num: '寶石x100',
        state: '0',
        img: './img/icon/19.png'
    },
    {
        id: '20',
        name: '紅利點數200點',
        num: '寶石x195',
        state: '0',
        img: './img/icon/19.png'
    },
    {
        id: '21',
        name: '紅利點數500點',
        num: '寶石x485',
        state: '0',
        img: './img/icon/19.png'
    },
    {
        id: '22',
        name: '紅利點數1000點',
        num: '寶石x950',
        state: '0',
        img: './img/icon/22.png'
    },
    {
        id: '23',
        name: '紅利點數3000點',
        num: '寶石x2800',
        state: '0',
        img: './img/icon/22.png'
    },
    {
        id: '24',
        name: '紅利點數5000點',
        num: '寶石x4600',
        state: '0',
        img: './img/icon/22.png'
    },
    {
        id: '25',
        name: '紅利點數11111點',
        num: '寶石x10000',
        state: '2',
        img: './img/icon/22.png'
    }
]

let award = {
    arena: [
        {
            name: '寶石1顆',
            info: '回饋1顆寶石'
        },
        {
            name: '寶石5顆',
            info: '回饋5顆寶石'
        },
        {
            name: '寶石30顆',
            info: '回饋30顆寶石'
        },
        {
            name: '寶石100顆',
            info: '回饋100顆寶石'
        },
        {
            name: '寶石1000顆',
            info: '回饋1000顆寶石'
        },
    ],
    treasure: [
        {
            name: '寶石5顆',
            info: '回饋5顆寶石'
        }, 
        {
            name: '寶石10顆',
            info: '回饋10顆寶石'
        }, 
        {
            name: '寶石15顆',
            info: '回饋15顆寶石'
        }, 
        {
            name: '寶石30顆',
            info: '回饋30顆寶石'
        },
        {
            name: '寶石50顆',
            info: '回饋50顆寶石'
        },
        {
            name: '寶石100顆',
            info: '回饋100顆寶石'
        },
        {
            name: '寶石250顆',
            info: '回饋250顆寶石'
        },
        {
            name: '寶石500顆',
            info: '回饋500顆寶石'
        },
        {
            name: '寶石1000顆',
            info: '回饋1000顆寶石'
        },
        {
            name: '龍王之庫',
            info: '可獲得龍王之庫中隨機獎勵(大獎I Phone 15)。'
        },
    ],
    dragon:[
        {
            name: '寶石100-3000顆隨機',
            num: '寶石數量100-3000顆隨機一個數，<br>可於冒險者大廳可於冒險者大廳使用'
        }, 
        {
            name: '電競滑鼠墊',
            num: '1'
        }, 
        {
            name: '電競滑鼠',
            num: '1'
        }, 
        {
            name: '電競鍵盤',
            num: '1'
        }, 
        {
            name: 'Iphone15(256GB/不挑色)',
            num: '1'
        }, 
    ]
}

let hero = [
    {
       user:'',
       source:'',
       award:'',
    },
    {
       user:'',
       source:'',
       award:'',
    },
    {
       user:'',
       source:'',
       award:'',
    },
    {
       user:'',
       source:'',
       award:'',
    },
    {
       user:'',
       source:'',
       award:'',
    },
]