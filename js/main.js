"use strict";
(function() {
    document.addEventListener('DOMContentLoaded', function() {

    })
})()

var currentLanguage = 'eng';

var cardsItems = [{
        "title": "Modern Tanks",
        "logo": 'img/games/cards/modern_tanks/logo.png',
        "src": "img/games/cards/modern_tanks/card.jpg"
    },
    {
        "title": "Battle Tanks",
        "logo": 'img/games/slides/battle_tanks/logo.png',
        "src": "img/games/cards/battle_tanks/card.jpg"
    },
    {
        "title": "Code Of War",
        "logo": 'img/games/slides/code_of_war/logo.png',
        "src": "img/games/cards/code_of_war/card.jpg"
    },
    // {
    //     "title": "Ghosts Of War",
    //     "logo": 'img/games/slides/ghost_of_war/logo.png',
    //     "src": "img/games/cards/ghost_of_war/card.jpg"
    // },
    {
        "title": "Grand Tanks",
        "logo": 'img/games/slides/grand_tanks/logo.png',
        "src": "img/games/cards/grand_tanks/card.jpg"
    },
    {
        "title": "Naval Armada",
        "logo": 'img/games/slides/naval_armada/logo.png',
        "src": "img/games/cards/naval_armada/card.jpg"
    },
    {
        "title": "Tank Force",
        "logo": 'img/games/slides/tank_force/logo.png',
        "src": "img/games/cards/tank_force/card.jpg"
    },
    {
        "title": "War Lords",
        "logo": 'img/games/slides/war_lords/logo.png',
        "src": "img/games/cards/war_lords/card.jpg"
    },
    {
        "title": "Navy War",
        "logo": 'img/games/slides/navy_war/logo.png',
        "src": "img/games/cards/navy_war/card.jpg"
    },
    {
        "title": "Coming soon",
        "logo": '',
        "src": "img/games/cards/blank.png"
    },
];

var slides = [{
        title: 'Modern Tanks',
        logo: 'img/games/slides/modern_tanks/logo.png',
        src: 'img/games/slides/modern_tanks/slide1.jpg',
    },
    {
        title: 'Tank Force',
        logo: 'img/games/slides/tank_force/logo.png',
        src: 'img/games/slides/tank_force/slide1.jpg',
    },
    {
        title: 'Battle Tanks',
        logo: 'img/games/slides/battle_tanks/logo.png',
        src: 'img/games/slides/battle_tanks/slide1.jpg',
    },
    {
        title: 'War Lords',
        logo: 'img/games/slides/war_lords/logo.png',
        src: 'img/games/slides/war_lords/slide1.jpg',
    },
    // {
    //     title: 'Ghosts of War',
    //     logo: 'img/games/slides/ghost_of_war/logo.png',
    //     src: 'img/games/slides/ghost_of_war/slide1.jpg',
    // },
    {
        title: 'Naval Armada',
        logo: 'img/games/slides/naval_armada/logo.png',
        src: 'img/games/slides/naval_armada/slide1.jpg',
    },
    {
        title: 'Code Of War',
        logo: 'img/games/slides/code_of_war/logo.png',
        src: 'img/games/slides/code_of_war/slide1.jpg',
    },
    {
        title: 'Grand Tanks',
        logo: 'img/games/slides/grand_tanks/logo.png',
        src: 'img/games/slides/grand_tanks/slide1.jpg',
    },
    {
        title: 'Navy War',
        logo: 'img/games/slides/navy_war/logo.png',
        src: 'img/games/slides/navy_war/slide1.jpg',
    },
    // {
    //     title: 'Metal Force',
    //     logo: 'img/games/slides/metal_force/logo.png',
    //     src: 'img/games/slides/metal_force/slide1.png',
    // },
    // {
    //     title: 'Navy War',
    //     logo: 'img/games/slides/navy_war/logo.png',
    //     src: 'img/games/slides/navy_war/slide1.png',
    // },
    // {
    //     title: 'Force of Warships',
    //     logo: 'img/games/slides/fow/logo.png',
    //     src: 'img/games/slides/fow/slide1.png',
    // },
    // {
    //     title: 'Striker Zone',
    //     logo: 'img/games/slides/striker_zone/logo.png',
    //     src: 'img/games/slides/striker_zone/slide1.png',
    // },
    // {
    //     title: 'World Of Warfare Robots',
    //     logo: 'img/games/slides/wwr/logo.png',
    //     src: 'img/games/slides/wwr/slide1.png',
    // },
]


var gamemenucards = [{
        gameId: "modern-tanks",
        title: "Modern Tanks",
        logosrc: 'img/games/logo/modern_tanks.png'
    },
    {
        gameId: "battle-tanks",
        title: "Battle Tanks",
        logosrc: 'img/games/logo/battle_tanks.png'
    },
    {
        gameId: "code-of-war",
        title: "Code of War",
        logosrc: 'img/games/logo/code_of_war.png'
    },
    // {
    //     gameId: "ghosts-of-war",
    //     title: "Ghosts of War",
    //     logosrc: 'img/games/logo/ghost_of_war.png'
    // },
    {
        gameId: "grand-tanks",
        title: "Grand Tanks",
        logosrc: 'img/games/logo/grand_tanks.png'
    },
    {
        gameId: "naval-armada",
        title: "Naval Armada",
        logosrc: 'img/games/logo/naval_armada.png'
    },
    {
        gameId: "tank-force",
        title: "Tank Force",
        logosrc: 'img/games/logo/tank_force.png'
    },
    {
        gameId: "war-lords",
        title: "War Lords",
        logosrc: 'img/games/logo/war_lords.png'
    },
    {
        gameId: "navywar",
        title: "Navy War",
        logosrc: 'img/games/logo/navywar.png'
    },
    {
        gameId: "fow",
        title: "Force of Warships",
        logosrc: 'img/games/logo/force_of_warships.png'
    },
    {
        gameId: "world-of-warfare-robots",
        title: "World Of Warfare Robots",
        logosrc: 'img/games/logo/world_of_warfare_robots.png'
    },
    {
        gameId: "metal-force",
        title: "Metal Force",
        logosrc: 'img/games/logo/metal_force.png'
    },
    {
        gameId: "striker-zone",
        title: "Striker Zone",
        logosrc: 'img/games/logo/striker_zone.png'
    },
]

var games = [{
        id: 'modern-tanks',
        title: 'Modern Tanks',
        header: 'img/games/gamepage/modern_tanks/header.jpg',
        description: [{
                lang: 'eng',
                text: `Modern Tanks transfers you to the world of epic tank battles!
Prepare your hangar full of war machines and participate in online PvP battles with players all over the world!`
            },
            {
                lang: 'rus',
                text: `Modern Tanks переносит вас в мир эпических танковых сражений!
Собери ангар боевых машин и участвуй в онлайн PvP сражениях с миллионами бойцов со всего света!`
            }
        ],
        markets: [
            { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.armada' },
            { market: 'apple', link: 'https://geo.itunes.apple.com/app/id1137864805' },
            { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9PMQCWD418SB' },
            // { market: 'installer', link: '' },
            { market: 'amazon', link: 'https://www.amazon.com/dp/B01M8QPA6R' },
            { market: 'vkplay', link: 'https://vkplay.com/play/game/modern_tanks/' },
            { market: 'vk', link: 'https://vk.com/app5591040?cid=0&queue=1&sid=0'},
            { market: 'ok', link: 'https://ok.ru/game/armada_world_of_modern_tanks'},
            { market: 'mailru', link: 'http://my.mail.ru/apps/746811'},
            { market: 'steam', link: 'https://store.steampowered.com/app/782660/Modern_Tanks/' },
            // { market: 'huawei', link: '' },
        ],
        cards: [
            { video: 'video/modern_tanks/1920x1080_eng.mp4', poster: 'video/modern_tanks/1920x1080_eng.jpg' },
            { src: 'img/games/gamepage/modern_tanks/cards/scr_1.jpg' },
            { src: 'img/games/gamepage/modern_tanks/cards/scr_2.jpg' },
            { src: 'img/games/gamepage/modern_tanks/cards/scr_3.jpg' },
            //{ src: 'img/games/gamepage/modern_tanks/cards/scr_4.jpg' },
            { src: 'img/games/gamepage/modern_tanks/cards/scr_5.jpg' },
            { src: 'img/games/gamepage/modern_tanks/cards/scr_6.jpg' },
            { src: 'img/games/gamepage/modern_tanks/cards/scr_7.jpg' },
            { src: 'img/games/gamepage/modern_tanks/cards/scr_8.jpg' },
        ]
    },
    {
        id: 'tank-force',
        title: 'Tank Force',
        header: 'img/games/gamepage/tank_force/header.jpg',
        description: [{
                lang: 'eng',
                text: `Millions of players from around the world fighting on the best modern tanks!
Join the world of modern tank battles:
- Cross-platform online PVP battles 7x7
- Fight till the total annihilation or capture the base
- Upgrade and customize your own tank
- Wide range of modern tanks and wheeled war machines
- Realistic combat arenas that represent different geographical zones
- Take several tanks into the battle`
            },
            {
                lang: 'rus',
                text: `Миллионы игроков со всего мира сражаются на лучших представителях современной танковой техники.
Погрузитесь в мир, где сражаются танки онлайн:
- Кроссплатформенные PVP блиц-сражения 7x7
- Различные боевые режимы -
42 вида проработанных танков на гусеничном и колесном ходу
- Реалистичные боевые арены, представляющие разные географические зоны
- Возможность взять в бой до 10 танков`
            }
        ],
        markets: [
            { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.tankforce' },
            { market: 'apple', link: 'https://geo.itunes.apple.com/app/id1211576995' },
            { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9NP8W374D7L3' },
            { market: 'installer', link: 'https://cdn.xdevs.games/tankforce/installer/tank_force-x64.msi', text: '' },
            { market: 'amazon', link: 'https://www.amazon.com/dp/B0773QBTKK/' },
            { market: 'vkplay', link: 'https://vkplay.com/play/game/tank_force' },
            { market: 'vk', link: 'https://vk.com/app6110471_1585310' },
            { market: 'ok', link: 'https://ok.ru/game/1252182528' },
            { market: 'steam', link: 'https://store.steampowered.com/app/604500/Tank_Force/' },
            { market: 'huawei', link: 'https://store.steampowered.com/app/604500/Tank_Force/' },
        ],
        cards: [
            { video: 'video/tank_force/tank_force_ad_eng_1920x1080.mp4', poster: 'video/tank_force/poster.jpg' },
            { src: 'img/games/gamepage/tank_force/cards/scr_1.jpg' },
            //{ src: 'img/games/gamepage/tank_force/cards/scr_2.jpg' },
            { src: 'img/games/gamepage/tank_force/cards/scr_3.jpg' },
            { src: 'img/games/gamepage/tank_force/cards/scr_4.jpg' },
            { src: 'img/games/gamepage/tank_force/cards/scr_5.jpg' },
            { src: 'img/games/gamepage/tank_force/cards/scr_6.jpg' },
            { src: 'img/games/gamepage/tank_force/cards/scr_7.jpg' },
            { src: 'img/games/gamepage/tank_force/cards/scr_8.jpg' },
        ]
    },
    {
        id: 'grand-tanks',
        title: 'Grand Tanks',
        header: 'img/games/gamepage/grand_tanks/header.jpg',
        description: [{
                lang: 'eng',
                text: `Grand Tanks is a Tank MMO with modern graphics, realistic physics and a huge amount of different tanks from World War 2 to present days. Most famous tanks will meet each other in the hot battles to protect the Honor of their Country!`
            },
            {
                lang: 'rus',
                text: `Grand Tanks — танковый MMO с потрясающей графикой, реалистичной физикой и огромным разнообразием техники от Второй мировой войны до современности. Самые известные танки сходятся в жарком сражении, чтобы отстоять честь своей страны!`
            }
        ],
        markets: [
            { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.grandtanks' },
            { market: 'apple', link: 'https://geo.itunes.apple.com/app/id1227399554' },
            { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9P1GF5ZL13WG' },
            // { market: 'installer', link: '' },
            { market: 'amazon', link: 'https://www.amazon.com/dp/B071FC9CB5' },
            { market: 'vkplay', link: 'https://vkplay.com/play/game/grand_tanks/' },
            { market: 'vk', link: 'https://vk.com/app6014330_15317653'},
            { market: 'ok', link: 'https://ok.ru/game/grandtanks'},
            { market: 'mailru', link: 'https://my.mail.ru/apps/753746'},
            // { market: 'steam', link: '' },
            // { market: 'huawei', link: '' },
        ],
        cards: [
            { video: 'video/grand_tanks/gt_1920x1080_eng.mp4', poster: 'video/grand_tanks/poster1.jpg', lang: 'eng' },
            { src: 'img/games/gamepage/grand_tanks/cards/scr_1.jpg' },
            { src: 'img/games/gamepage/grand_tanks/cards/scr_2.jpg' },
            { src: 'img/games/gamepage/grand_tanks/cards/scr_3.jpg' },
            { src: 'img/games/gamepage/grand_tanks/cards/scr_4.jpg' },
            { src: 'img/games/gamepage/grand_tanks/cards/scr_5.jpg' },
            { src: 'img/games/gamepage/grand_tanks/cards/scr_6.jpg' },
            { src: 'img/games/gamepage/grand_tanks/cards/scr_7.jpg' },
            { src: 'img/games/gamepage/grand_tanks/cards/scr_8.jpg' },
        ]
    },
    {
        id: 'code-of-war',
        title: 'Code of War',
        header: 'img/games/gamepage/code_of_war/header.jpg',
        description: [{
                lang: 'rus',
                text: `Code of War — это динамичный шутер от третьего лица, с потрясающей 3D графикой, реалистичной физикой и огромным выбором оружия.
Испытай острые ощущения в онлайн сражениях с другими игроками и проверь свою реакцию и мастерство.`
            },
            {
                lang: 'eng',
                text: `Code of War is the online shooter game with the best 3D graphics, realistic physics and the huge selection of actual guns.
Try your skills and mastery in the dynamic online action versus other players from the whole world!`
            }
        ],
        markets: [
            { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.codeofwar' },
            { market: 'apple', link: 'https://geo.itunes.apple.com/app/id1310260923' },
            { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9PDCK6NPF4TX' },
            // { market: 'installer', link: '' },
            { market: 'amazon', link: 'https://www.amazon.com/dp/B0796TGKHG' },
            { market: 'vkplay', link: 'https://vkplay.com/play/game/codeofwar/' },
            { market: 'vk', link: 'https://vk.com/app6337927_422484047'},
            { market: 'ok', link: 'https://ok.ru/game/codeofwar'},
            // { market: 'steam', link: '' },
            // { market: 'huawei', link: '' },
        ],
        cards: [
            { video: 'video/code_of_war/cow_1920x1080_eng.mp4', poster: 'video/code_of_war/poster1.jpg' },
            { src: 'img/games/gamepage/code_of_war/cards/scr_1.jpg' },
            { src: 'img/games/gamepage/code_of_war/cards/scr_2.jpg' },
            //{ src: 'img/games/gamepage/code_of_war/cards/scr_3.jpg' },
            { src: 'img/games/gamepage/code_of_war/cards/scr_4.jpg' },
            { src: 'img/games/gamepage/code_of_war/cards/scr_5.jpg' },
            { src: 'img/games/gamepage/code_of_war/cards/scr_6.jpg' },
            { src: 'img/games/gamepage/code_of_war/cards/scr_7.jpg' },
            { src: 'img/games/gamepage/code_of_war/cards/scr_8.jpg' },
        ]
    },
    {
        id: 'battle-tanks',
        title: 'Battle Tanks',
        header: 'img/games/gamepage/battle_tanks/header.jpg',
        description: [{
                lang: 'eng',
                text: `Use your knowledge and your experience in WW2 tank battles, invite your friends, and fire in enemy, PvP battle war!
Are you ready for combat? Download it right now!
This is the best tank games multiplayer!
Be the best at battles World War 2, choose your side, and load your gun.
Clash your enemy, destroy your opponents. You will wait for action in a great game!
The war for world has already begun!`
            },
            {
                lang: 'rus',
                text: `Вы готовы воевать? Скачайте эту невероятно захватывающую игру про танки прямо сейчас!
Выбирайте танк и сражайтесь с друзьями в динамичных боях в реальном времени.
Сражайся в формате «10 на 10» в одиночку или с друзьями, исследуй и улучшай бронированную технику, применяй разные тактики и, конечно, побеждай!
Война за мир уже началась!`
            }
        ],
        markets: [
            { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.battletanks' },
            { market: 'apple', link: 'https://geo.itunes.apple.com/app/id1442191403' },
            { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9NSJCH6WL3CJ' },
            // { market: 'installer', link: '' },
            { market: 'amazon', link: 'https://www.amazon.com/Battle-Tanks-3D-Tank-Games/dp/B07KLS1BB2' },
            { market: 'vkplay', link: 'https://store.my.games/play/game/Battle_Tanks/' },
            // { market: 'vk', link: ''},
            // { market: 'ok', link: ''},
            { market: 'steam', link: 'https://store.steampowered.com/app/782670/Battle_Tanks_Legends_of_World_War_II/' },
            // { market: 'huawei', link: '' },
        ],
        cards: [
            { video: 'video/battle_tanks/bt_1920x1080_eng.mp4', poster: 'video/battle_tanks/poster1.jpg', lang: 'eng' },
            { src: 'img/games/gamepage/battle_tanks/cards/scr_1.jpg' },
            { src: 'img/games/gamepage/battle_tanks/cards/scr_2.jpg' },
            { src: 'img/games/gamepage/battle_tanks/cards/scr_3.jpg' },
            { src: 'img/games/gamepage/battle_tanks/cards/scr_4.jpg' },
            { src: 'img/games/gamepage/battle_tanks/cards/scr_5.jpg' },
            { src: 'img/games/gamepage/battle_tanks/cards/scr_6.jpg' },
            { src: 'img/games/gamepage/battle_tanks/cards/scr_7.jpg' },
            { src: 'img/games/gamepage/battle_tanks/cards/scr_8.jpg' },
        ]
    },
    {
        id: 'naval-armada',
        title: 'Naval Armada',
        header: 'img/games/gamepage/naval_armada/header.jpg',
        description: [{
                lang: 'rus',
                text: `Любишь морской бой? Тебя ждут лучшие командные сражения, и все это абсолютно бесплатно!
Веди захватывающие морские ММОРПГ сражения онлайн, выбирай боевые корабли и управляй ими.
Стань лучшим! Война за мир уже началась! `
            },
            {
                lang: 'eng',
                text: `Do you like battleships? The best team fights are waiting for you! Absolutely for free!
Fight exciting sea MMORPG online battles, choose battleships and navigate them!
Become the best! The war for world has already begun!`
            }
        ],
        markets: [
            { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.navalarmada' },
            { market: 'apple', link: 'https://geo.itunes.apple.com/app/id1465585452' },
            { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9NSR11NDQPG4' },
            // { market: 'installer', link: '' },
            { market: 'amazon', link: 'https://www.amazon.com/dp/B07XL3YTVP' },
            { market: 'vkplay', link: 'https://vkplay.com/play/game/naval_armada/' },
            { market: 'vk', link: 'https://vk.com/app6998929_-182791909?section_type=public_r_app'},
            { market: 'ok', link: 'https://ok.ru/game/navalarmada'},
            { market: 'steam', link: 'https://store.steampowered.com/app/618620/Naval_Armada/' },
            { market: 'huawei', link: 'https://appgallery.huawei.com/app/C103005193' },
        ],
        cards: [
            { video: 'video/naval_armada/na_ar_1920x1080_eng.mp4', poster: 'video/naval_armada/poster1.jpg', lang: 'eng' },
            { src: 'img/games/gamepage/naval_armada/cards/scr_1.jpg' },
            { src: 'img/games/gamepage/naval_armada/cards/scr_2.jpg' },
            { src: 'img/games/gamepage/naval_armada/cards/scr_3.jpg' },
            //{ src: 'img/games/gamepage/naval_armada/cards/scr_4.jpg' },
            { src: 'img/games/gamepage/naval_armada/cards/scr_5.jpg' },
            { src: 'img/games/gamepage/naval_armada/cards/scr_6.jpg' },
            { src: 'img/games/gamepage/naval_armada/cards/scr_7.jpg' },
            { src: 'img/games/gamepage/naval_armada/cards/scr_8.jpg' },
        ]
    },
//     {
//         id: 'ghosts-of-war',
//         title: 'Ghosts of War',
//         header: 'img/games/gamepage/ghost_of_war/header.jpg',
//         description: [{
//                 lang: 'rus',
//                 text: `Шутер про Вторую Мировую Войну.
// Выбирайте противоборствующую сторону!
// Вас ждёт захватывающий онлайн шутер с игроками со всего мира с красивой и проработанной графикой.
// Вы получите незабываемый опыт ведения боевых действий в условиях динамичного экшена! `
//             },
//             {
//                 lang: 'eng',
//                 text: `Second World War shooter. Choose your side. Exciting online shooter with players all over the world and with beautiful well-designed graphics is waiting for you. You will get unforgettable experience of warfare in form of dynamic action! `
//             }
//         ],
//         markets: [
//             { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.ghostsofwar' },
//             { market: 'apple', link: 'https://geo.itunes.apple.com/app/id1567361764' },
//             { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9n23s5vpxf1b' },
//             // { market: 'installer', link: '' },
//             // { market: 'amazon', link: '' },
//             { market: 'vkplay', link: 'https://vkplay.com/play/game/ghostsofwar/' },
//             // { market: 'vk', link: ''},
//             // { market: 'ok', link: ''},
//             { market: 'steam', link: 'https://store.steampowered.com/app/1755120/Ghosts_of_War_Battle_Royale_WW2_Shooting_games/' },
//             // { market: 'huawei', link: '' },
//         ],
//         cards: [
//             { video: 'video/ghost_of_war/trailer.mp4', poster: 'video/ghost_of_war/poster1.jpg' },
//             { src: 'img/games/gamepage/ghost_of_war/cards/scr_1.jpg' },
//             { src: 'img/games/gamepage/ghost_of_war/cards/scr_2.jpg' },
//             { src: 'img/games/gamepage/ghost_of_war/cards/scr_3.jpg' },
//             { src: 'img/games/gamepage/ghost_of_war/cards/scr_4.jpg' },
//             { src: 'img/games/gamepage/ghost_of_war/cards/scr_5.jpg' },
//             { src: 'img/games/gamepage/ghost_of_war/cards/scr_6.jpg' },
//             { src: 'img/games/gamepage/ghost_of_war/cards/scr_7.jpg' },
//             { src: 'img/games/gamepage/ghost_of_war/cards/scr_8.jpg' },
//         ]
//     },
    {
        id: 'war-lords',
        title: 'War Lords',
        header: 'img/games/gamepage/war_lords/header.jpg',
        description: [{
                lang: 'eng',
                text: `Welcome to free RPG games!
How long can worlds be saved?
It's time to start conquering them and putting them in order!
It's time to choose, who you want to be magic, warrior or hunter?
Instead of saving the world - conquer it! Summon heroes, lead a squad and make your rules!
Become the best commander in tactical turn-based RPG battle!`
            },
            {
                lang: 'rus',
                text: `Добро пожаловать в гильдия героев, великие волшебники и герои RPG игры!
Сколько можно спасать миры?
Пора начинать их захватывать и наводить свой порядок!
Вместо того, чтобы спасать мир - захвати его!
Лучшая гильдия героев, возглавь отряд и установи свой порядок!
Стань лучшим полководцем в тактических пошаговых боях!`
            }
        ],
        markets: [
            { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.warlords' },
            { market: 'apple', link: 'https://geo.itunes.apple.com/app/id1513530600' },
            { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9nz3l0pscrr6' },
            // { market: 'installer', link: '' },
            // { market: 'amazon', link: '' },
            { market: 'vkplay', link: 'https://vkplay.com/play/game/warlords/' },
            // { market: 'vk', link: ''},
            // { market: 'ok', link: ''},
            { market: 'steam', link: 'https://store.steampowered.com/app/616710/Warlords_Age_of_Shadow_Magic_Tactical_Action_RPG/' },
            // { market: 'huawei', link: '' },
        ],
        cards: [
            { video: 'video/war_lords/warlords_1920x1080_eng.mp4', poster: 'video/war_lords/poster1.jpg', lang: 'eng' },
            { src: 'img/games/gamepage/war_lords/cards/scr_1.jpg' },
            { src: 'img/games/gamepage/war_lords/cards/scr_2.jpg' },
            { src: 'img/games/gamepage/war_lords/cards/scr_3.jpg' },
            { src: 'img/games/gamepage/war_lords/cards/scr_4.jpg' },
            { src: 'img/games/gamepage/war_lords/cards/scr_5.jpg' },
            { src: 'img/games/gamepage/war_lords/cards/scr_6.jpg' },
            { src: 'img/games/gamepage/war_lords/cards/scr_7.jpg' },
            { src: 'img/games/gamepage/war_lords/cards/scr_8.jpg' },
        ]
    },
    //added
    {
        id: 'navywar',
        title: 'Navy War',
        header: 'img/games/gamepage/navywar/header.png',
        description: [{
                lang: 'rus',
                text: ``
            },
            {
                lang: 'eng',
                text: `Exciting PvP naval battles!
Steer a legendary battle ship of yesteryear, use naval tactics and destroy enemy ships!
Direct your fleet to glorious victory! What are you waiting for, captain?!`
            }
        ],
        markets: [
            { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.navywar' },
            { market: 'apple', link: 'https://geo.itunes.apple.com/app/id1556643299' },
            { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9nmw3w017wlj' },
            // { market: 'installer', link: '' },
            { market: 'amazon', link: 'https://www.amazon.com/dp/B09VFGJ4HY' },
            { market: 'vkplay', link: 'https://vkplay.com/play/game/navywar/' },
            // { market: 'vk', link: ''},
            // { market: 'ok', link: ''},
            { market: 'steam', link: 'https://store.steampowered.com/app/1991850/Navy_War/' },
            { market: 'huawei', link: 'https://geo.itunes.apple.com/app/id1556643299' },
        ],
        cards: [
            { src: 'img/games/gamepage/navywar/cards/nw_scr_1.png' },
            { src: 'img/games/gamepage/navywar/cards/nw_scr_2.png' },
            { src: 'img/games/gamepage/navywar/cards/nw_scr_3.png' },
            { src: 'img/games/gamepage/navywar/cards/nw_scr_4.png' },
            { src: 'img/games/gamepage/navywar/cards/nw_scr_5.png' },
        ]
    },
    {
        id: 'fow',
        title: 'Force of Warships',
        header: 'img/games/gamepage/fow/header.png',
        description: [{
                lang: 'rus',
                text: ``
            },
            {
                lang: 'eng',
                text: `Force of Warships is the dynamic battleship game!
The game will give you a valuable experience of participation in military battles!
Use all the weapons of the warship - torpedoes, missiles, guns, and the latest equipment to complete the combat missions of the navy.
Become the captain of a real battleship and fight against players from all over the world!`
            }
        ],
        markets: [
            { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.forceofwarships' },
            { market: 'apple', link: 'https://geo.itunes.apple.com/app/id1609068907' },
            { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9mv55l093nrx' },
            // { market: 'installer', link: '' },
            // { market: 'amazon', link: '' },
            { market: 'vkplay', link: 'https://vkplay.com/play/game/fow/' },
            // { market: 'vk', link: ''},
            // { market: 'ok', link: ''},
            { market: 'steam', link: 'https://store.steampowered.com/app/1991860/Force_of_Warships/' },
            { market: 'huawei', link: 'https://geo.itunes.apple.com/app/id1609068907' },
        ],
        cards: [
            { src: 'img/games/gamepage/fow/cards/fow_scr_1.png' },
            { src: 'img/games/gamepage/fow/cards/fow_scr_2.png' },
            { src: 'img/games/gamepage/fow/cards/fow_scr_3.png' },
            { src: 'img/games/gamepage/fow/cards/fow_scr_4.png' },
            { src: 'img/games/gamepage/fow/cards/fow_scr_5.png' },
            { src: 'img/games/gamepage/fow/cards/fow_scr_6.png' },
            { src: 'img/games/gamepage/fow/cards/fow_scr_7.png' },
            { src: 'img/games/gamepage/fow/cards/fow_scr_8.png' },
        ]
    },
    {
        id: 'world-of-warfare-robots',
        title: 'World Of Warfare Robots',
        header: 'img/games/gamepage/wwr/header.png',
        description: [{
                lang: 'rus',
                text: ``
            },
            {
                lang: 'eng',
                text: `War robots are waiting for you!
Join epic war robots game and shooting multiplayer against rivals from all over the world! Challenging decisions, tricky maneuvers and tactical tricks are waiting for you!
But remember: the most formidable enemy is you yourself!`
            }
        ],
        markets: [
            { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.navywar' },
            { market: 'apple', link: 'https://apps.apple.com/ru/app/wwr-%D0%BF%D0%B2%D0%BF-%D0%B1%D0%BE%D0%B5%D0%B2%D1%8B%D0%B5-%D1%80%D0%BE%D0%B1%D0%BE%D1%82%D1%8B-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1151825700' },
            { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9N8G7H6KVDXR' },
            // { market: 'installer', link: '' },
            { market: 'amazon', link: 'https://www.amazon.com/dp/B07KLTSMYK' },
            // { market: 'vkplay', link: '' },
            { market: 'vk', link: 'https://vk.com/app6725603'},
            { market: 'ok', link: 'https://ok.ru/game/wwr'},
            { market: 'steam', link: 'https://store.steampowered.com/app/659840/WWR/' },
            // { market: 'huawei', link: '' },
        ],
        cards: [
            { src: 'img/games/gamepage/wwr/cards/wwr_scr_1.png' },
            { src: 'img/games/gamepage/wwr/cards/wwr_scr_2.png' },
            { src: 'img/games/gamepage/wwr/cards/wwr_scr_3.png' },
            { src: 'img/games/gamepage/wwr/cards/wwr_scr_4.png' },
            { src: 'img/games/gamepage/wwr/cards/wwr_scr_5.png' },
            { src: 'img/games/gamepage/wwr/cards/wwr_scr_6.png' },
        ]
    },
    {
        id: 'metal-force',
        title: 'Metal Force',
        header: 'img/games/gamepage/metal_force/header.png',
        description: [{
                lang: 'rus',
                text: ``
            },
            {
                lang: 'eng',
                text: `Fill your life with intense sensations - Start your own battle!
You will have various combat military vehicles in your battle arsenal.
Each machine represents a unique tactic, a unique warfare style.
Use a light tank for recon missions on the enemy territory and hit-and-run tactics! Pick a heavy and powerful tank to get the blow on your powerful armor and strike back! `
            }
        ],
        markets: [
            { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.metalforce' },
            { market: 'apple', link: 'https://geo.itunes.apple.com/app/id1223391730' },
            { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9P3SXQRZ2WNR' },
            // { market: 'installer', link: '' },
            { market: 'amazon', link: 'https://www.amazon.com/dp/B0719DDKVZ' },
            // { market: 'vkplay', link: '' },
            { market: 'vk', link: 'https://vk.com/app6014326'},
            { market: 'ok', link: 'https://ok.ru/game/1250983168'},
            { market: 'mailru', link: 'https://my.mail.ru/apps/753745' },
            // { market: 'steam', link: '' },
            { market: 'huawei', link: 'https://appgallery.huawei.com/app/C106777459' },
        ],
        cards: [
            { src: 'img/games/gamepage/metal_force/cards/mf_scr_1.png' },
            { src: 'img/games/gamepage/metal_force/cards/mf_scr_2.png' },
            { src: 'img/games/gamepage/metal_force/cards/mf_scr_3.png' },
            { src: 'img/games/gamepage/metal_force/cards/mf_scr_4.png' },
            { src: 'img/games/gamepage/metal_force/cards/mf_scr_5.png' },
            { src: 'img/games/gamepage/metal_force/cards/mf_scr_6.png' },
            { src: 'img/games/gamepage/metal_force/cards/mf_scr_7.png' },
            { src: 'img/games/gamepage/metal_force/cards/mf_scr_8.png' },
        ]
    },
    {
        id: 'striker-zone',
        title: 'Striker Zone',
        header: 'img/games/gamepage/striker_zone/header.png',
        description: [{
                lang: 'rus',
                text: ``
            },
            {
                lang: 'eng',
                text: `Welcome to the Striker Zone - best shooting game!
Come to the world of the most dynamic PVP first person shooting games online. Huge choice of weapons, equipments and upgrades to your soldier. Choose a suitable gun and go to PVP battles!`
            }
        ],
        markets: [
            { market: 'google', link: 'https://play.google.com/store/apps/details?id=com.extremedevelopers.strikerzone' },
            { market: 'apple', link: 'https://geo.itunes.apple.com/app/id1465225358' },
            { market: 'microsoft', link: 'https://www.microsoft.com/store/apps/9PPFRZB5MJRQ' },
            // { market: 'installer', link: '' },
            { market: 'amazon', link: 'https://www.amazon.com/dp/B07VM86NLL' },
            { market: 'vkplay', link: 'https://vkplay.com/play/game/striker_zone/' },
            { market: 'vk', link: 'https://vk.com/app7039574?cid=0&mid=54310274&section_type=undefined&sid=0'},
            { market: 'ok', link: 'https://ok.ru/game/strikerzone'},
            // { market: 'steam', link: '' },
            { market: 'huawei', link: 'https://geo.itunes.apple.com/app/id1465225358' },
        ],
        cards: [
            { src: 'img/games/gamepage/striker_zone/cards/sz_scr_1.png' },
            { src: 'img/games/gamepage/striker_zone/cards/sz_scr_2.png' },
            { src: 'img/games/gamepage/striker_zone/cards/sz_scr_3.png' },
            { src: 'img/games/gamepage/striker_zone/cards/sz_scr_4.png' },
            { src: 'img/games/gamepage/striker_zone/cards/sz_scr_5.png' },
            { src: 'img/games/gamepage/striker_zone/cards/sz_scr_6.png' },
        ]
    },
    {
        id: 'navy-war',
        title: 'Navy War',
    },
]

var availableGames = games.map(game => `#${game.id}`);

const AVAILABLE_MARKETS = [
    { market: 'google', logo: 'img/markets/google_play.png' },
    { market: 'apple', logo: 'img/markets/app_store.png' },
    { market: 'huawei', logo: 'img/markets/huawei.png' },
    { market: 'installer', logo: 'img/markets/installer.png', text: '' },
    { market: 'amazon', logo: 'img/markets/amazon.png'},
    { market: 'microsoft', logo: 'img/markets/microsoft.png'},
    { market: 'steam', logo: 'img/markets/steam.png'},
    { market: 'vk', logo: 'img/markets/vk.png'},
    { market: 'ok', logo: 'img/markets/ok.png'},
    { market: 'ok', logo: 'img/markets/ok.png'},
    { market: 'mailru', logo: 'img/markets/mailru.png'},
    { market: 'vkplay', logo: 'img/markets/vkplay.png'},
    // {title: 'facebook', logo: 'img/markets/facebook.png'},
]

var pages = [
    {id: 'contacts', label: 'Contacts', url: 'pages/contacts.html'},
    { id: 'eula', label: 'Terms of service', url: 'pages/eula.html' },
    { id: 'privacy', label: 'Privacy Policy', url: 'pages/privacy.html' },
]

var availablePages = pages.map(page => `#${page.id}`);

window.mainController = function() {
    return {
        hash: window.location.hash,
        prevHash: '',
        navbarHidden: true,
        dropdownHidden: true,
        toggleDropdown($dispatch, action) {
            $dispatch('toggleropdownnavbar', action);
            this.dropdownHidden = !this.dropdownHidden;
        },
        toggleNavbar() {
            this.navbarHidden = !this.navbarHidden;
        },
        showPage(title) {
            const hash = title.toLowerCase().replace(/[: -]+/g, "-");
            if (hash === 'navy-war') {
                window.location = './navy-war/'
                return;
            }
            window.location.hash = hash;
        },
        showGame(gameTitle) {
            const hash = gameTitle.toLowerCase().replace(/[: -]+/g, "-");
            if (hash === 'navy-war') {
                window.location = './navy-war/'
                return;
            }
            window.location.hash = hash;
        },
        update($dispatch) {
            this.prevHash = this.hash;
            this.hash = window.location.hash;
            let videoCards = document.querySelectorAll('#gameMain .gamecard video');
            for (let video of videoCards) {
                if (!video) continue;
                video.pause();
                video.src = '';
                video.load();
            }
            window.scroll(0, 0);
            this.toggleDropdown($dispatch, false);
            this.navbarHidden = false;
        },
        isPage(page) {
            let hash = window.location.hash;
            let isMain = ['/', '#', ""].includes(hash);
            let isGame = availableGames.includes(hash);
            let isPage = availablePages.includes(hash);
            if (!isGame && !isMain && !isPage) {
                window.location.hash = '';
            }
            if (page === 'contacts') {
                return hash === '#contacts';
            }
            if (page === 'page') {
                return isPage;
            }
            if (page === 'main') {
                return isMain;
            }
            if (page === 'game') {
                return isGame;
            }
        }
    }
}

window.gameController = function() {
    return {
        isActive: false,
        availableMarkets: AVAILABLE_MARKETS,
        game: {},
        playToggle(card, status) {
            if (status) {
                if (status === 'play') {
                    card.play = true;
                    return;
                }
                card.play = false;
                return;
            }
        },
        init() {
            let hash = window.location.hash;
            const gameId = hash && hash.split("#").pop();
            this.game = Object.assign({}, games.find(game => game.id === gameId));
            this.isActive = gameId && this.game;
            if(!this.game ) return;
            if (!this.isActive) {
                window.location.hash = '';
                return;
            }
            if (this.game && this.game.description) {
                let description = this.game.description.find((el) => el.lang === currentLanguage);
                this.game.description = description ? description.text : '';
            }
            if (this.game && this.game.markets) {
                this.game.markets.map((gameMarket) => {
                    let market = AVAILABLE_MARKETS.find(el => el.market === gameMarket.market);
                    gameMarket.logo = market && market.logo;
                    gameMarket.text = gameMarket.text || market && market.text;
                    return gameMarket;
                });
            }
            if (this.game && this.game.cards) {
                this.game.cards.map((card) => {
                    let text = card.text && card.text.split(' ') || '';
                    card.highlitedText = text && text.shift();
                    card.unhighlitedText = text && text.join(' ');
                    card.play = false;
                    return card;
                })
            }
        }
    }
}

window.gameCardsController = function(cardsItems) {
    return {
        dataLoaded: false,
        title: '',
        gameCards: [],
        init() {
            this.title = '';
            this.cards = cardsItems;
            //this.dataLoaded = true;
        },

        get cards() {
            return this.gameCards;
        },

        set cards(cards) {
            this.gameCards = cards;
        },

    }
}

function dropdown(games) {
    return {
        menuIsVisible: false,
        maxSlidesOnScreen: 0,
        slideWidth: 200,
        sliderContainerRatio: 0.8,
        visibleSlides: [],
        games: [],
        updateCurrent() {
            this.games = this.games.map((game) => { game.isCurrent = `#${game.gameId}` === window.location.hash; return game; });
            this.menuIsVisible = availableGames.includes(window.location.hash);
            this.setVisibleSlides(this.getCurrentGameId());
        },
        setCurrentCenter() {
            const targetPosition = Math.ceil(this.visibleSlides.length / 2);
            const currentGame = this.games.find((game) => { return game.isCurrent === true });
            if(!currentGame){
                return;
            }
            const currentPosition = this.visibleSlides.indexOf(currentGame.id);
            if(targetPosition === currentPosition){
                return;
            }
            if(targetPosition > currentPosition){
                const startIndex = currentPosition;
                const endIndex = 0;
                const slice = this.visibleSlides.splice(startIndex, endIndex - startIndex);
                if(!slice){
                    return;
                }
                this.visibleSlides.unshift(...slice);
            }else{
                const startIndex = targetPosition;
                const endIndex = this.visibleSlides.length;
                const slice = this.visibleSlides.splice(startIndex, endIndex - startIndex);
                if(!slice){
                    return;
                }
                this.visibleSlides.push(...slice);
            }
            console.log('upd setCurrentCenter', JSON.stringify(this.visibleSlides));
            console.log('upd setCurrentCenter2', JSON.stringify(this.visibleSlides), targetPosition, currentPosition);
            this.setVisibleSlides();
        },
        controlIsAvailable() {
            return this.games && this.visibleSlides && this.games.length > this.visibleSlides.length;
        },
        toggleMenu(action) {
            this.menuIsVisible = action === undefined ? !this.menuIsVisible : action;
        },
        setCurrent($dispatch, index) {
            //this.toggleMenu(false)
            $dispatch('showgame', this.games[index].gameId);
        },
        getGame(index) {
            let game = this.games[index];
            return game ? game : {};
        },
        setVisibileOfGames() {
            this.games = this.games.map((game, index) => {
                game.isVisible = this.visibleSlides.includes(game.id);
                return game;
            })
        },
        getCurrentGameId() {
            return this.games.find((game) => { return game.isCurrent === true })?.id;
        },
        setVisibleSlides(centerGameId = -1) {
            let maxSlidesOnScreen = Math.floor((window.outerWidth * this.sliderContainerRatio) / this.slideWidth);
            maxSlidesOnScreen = Math.min(maxSlidesOnScreen, this.games.length);

            this.maxSlidesOnScreen = maxSlidesOnScreen;
            let newSlidesFrame = Array.from({ length: this.maxSlidesOnScreen }).map((_, index) => index)

            let startIndexGame = centerGameId && centerGameId > 1 && this.visibleSlides.indexOf(centerGameId) === -1 ? centerGameId : this.games.findIndex((_, index) => index === this.visibleSlides[0]);
            let newOrder = [].concat(this.games.slice(startIndexGame).map((game) => game.id), this.games.map((_, index) => index));
            this.visibleSlides = newOrder.slice(0, newSlidesFrame.length);
            this.setVisibileOfGames();
        },
        init() {
            games = [...games].filter(el => el.gameId);
            if (!games && !games.length) return;
            this.games = games.map((game, index) => {
                game.id = index;
                game.isVisible = false;
                game.isCurrent = `#${game.gameId}` === window.location.hash;
                return game;
            });
            this.menuIsVisible = availableGames.includes(window.location.hash);
            this.setVisibleSlides(this.getCurrentGameId());
        },
        prev() {
            let min = this.visibleSlides[0];
            if (isNaN(min)) {
                return;
            }
            if (min < 1) {
                min = this.games.length - 1;
            }
            this.visibleSlides.pop();
            this.visibleSlides.unshift(--min);
            this.setVisibileOfGames();
        },
        next() {
            let max = this.visibleSlides[this.visibleSlides.length - 1];
            if (isNaN(max)) {
                return;
            }
            if (max >= this.games.length - 1) {
                max = -1;
            }
            this.visibleSlides.shift();
            this.visibleSlides.push(++max);
            this.setVisibileOfGames();
        }
    }
}

// Alpine 2.3.5
function slider(slides) {
    return {
        sliderIsVisible: true,
        autoPlayEnabled: false,
        title: 'XDevs LTD Highlighted Projects',
        state: {
            moving: false,
            currentSlide: 0,
            looping: false,
            order: [],
            nextSlideDirection: '',
            userInteracted: false,
            usedKeyboard: false,
        },
        autoplayTimer: null,
        attributes: {
            direction: 'right-left',
            duration: 2000,
            timer: 1000,
        },
        slides: [],
        update(hash) {
            this.sliderIsVisible = hash === '';
        },
        setup() {
            this.slides = slides.map((slide, index) => { slide.id = index + Date.now(); return slide })

            // Cache the original order so that we can reorder on transition (to skip inbetween slides)
            this.state.order = this.slides.map(slide => slide.id)
            const newSlideOrder = this.slides.filter(slide => this.current.id != slide.id)
            newSlideOrder.unshift(this.current)
            this.slides = newSlideOrder

            // Start the autoslide
            this.attributes.timer && this.autoPlay()
        },
        get current() {
            return this.slides.find(slide => slide.id == this.state.order[this.state.currentSlide])
        },
        get previousSlide() {
            return (this.state.currentSlide - 1) > -1 ? this.state.currentSlide - 1 : this.state.currentSlide
        },
        get nextSlide() {
            return (this.state.currentSlide + 1) < this.slides.length ? this.state.currentSlide + 1 : this.state.currentSlide
        },
        prev() {
            const prev = ((this.state.currentSlide - 1) === (-1)) ? this.slides.length - 1 : this.state.currentSlide - 1
            this.updateCurrent(prev)
        },
        next() {
            const next = (this.state.currentSlide === (this.slides.length - 1)) ? 0 : this.state.currentSlide + 1
            this.updateCurrent(next)
        },
        updateCurrent(nextSlide) {
            if (nextSlide == this.state.currentSlide) return
            if (this.state.moving) return
            this.state.moving = true

            const next = this.slides.find(slide => slide.id == this.state.order[nextSlide])

            // Reorder the slides for a smoother transition
            const newSlideOrder = this.slides.filter(slide => {
                return ![this.current.id, this.state.order[nextSlide]].includes(slide.id)
            })

            const activeSlides = [this.current, next]

            this.state.nextSlideDirection = nextSlide > this.state.currentSlide ? 'right-to-left' : 'left-to-right'
                // newSlideOrder.unshift(...(this.state.nextSlideDirection == 'right-to-left' ? activeSlides : activeSlides.reverse()))

            newSlideOrder.unshift(...activeSlides)

            this.slides = newSlideOrder
            this.state.currentSlide = nextSlide
            if (!this.autoPlayEnabled) {
                this.state.moving = false
                return;
            }
            setTimeout(() => {
                this.state.moving = false
                    // TODO: possibly a better check to determine whether autoplay should resume
                this.attributes.timer && !this.autoplayTimer && this.autoPlay()
            }, this.attributes.duration)

        },
        transitions(state, $dispatch) {
            // const rightToLeft = this.state.nextSlideDirection === 'right-to-left'
            switch (state) {
                case 'enter':
                    return `transition-opacity ease-out duration-${this.attributes.duration}`
                case 'enter-start':
                    return 'opacity-0'
                case 'enter-end':
                    return 'opacity-100'
                case 'leave':
                    return `transition-opacity ease-in duration-${this.attributes.duration}`
                case 'leave-start':
                    return 'opacity-100'
                case 'leave-end':
                    return 'opacity-0'
                        // case 'enter':
                        //     return `transition-all duration-${this.attributes.duration}`
                        // case 'enter-start':
                        //     return rightToLeft ? 'transform translate-x-full' : 'transform -translate-x-full'
                        // case 'enter-end':
                        //     return 'transform translate-x-0'
                        // case 'leave':
                        //     return `absolute top-0 transition-all duration-${this.attributes.duration}`
                        // case 'leave-start':
                        //     return 'transform translate-x-0'
                        // case 'leave-end':
                        //     return rightToLeft ? 'transform -translate-x-full' : 'transform translate-x-full'
            }
        },
        autoPlay() {
            if (!this.autoPlayEnabled) return;
            this.loop = () => {
                const next = (this.state.currentSlide === (this.slides.length - 1)) ? 0 : this.state.currentSlide + 1
                this.updateCurrent(this.state.looping ? next : this.currentSlide)
                this.autoplayTimer = setTimeout(() => {
                    requestAnimationFrame(this.loop)
                }, this.attributes.timer + this.attributes.duration)

            }
            this.autoplayTimer = setTimeout(() => {
                this.state.looping = true
                requestAnimationFrame(this.loop)
            }, this.attributes.timer)
        },
        stopAutoplay() {
            clearTimeout(this.autoplayTimer)
            this.autoplayTimer = null
        }
    }
}

window.footerMenu = function() {
    return {
        items: pages,
        go($dispatch, route) {
            $dispatch('showpage', route);
        }
    }
}

window.otherPageContoller = function() {
    return {
        state: null,
        isLoading: false,
        html: ``,
        toggleLoading(loadingState) {
            this.isLoading = loadingState !== undefined ? loadingState : !this.isLoading;
            document.body.style.overflow = this.isLoading ? 'hidden' : 'unset';
        },
        init() {
            window.scroll(0,0);
            this.state = 'init';
            let hash = window.location.hash;
            const pageId = hash && hash.split("#").pop();
            let page = pages.find((page)=>{return page.id == pageId});
            if (!pageId || !page) return;
            this.toggleLoading(true);
            let url = page.url? page.url : `pages/${pageId}.html`;
            fetch(url).then((resp) => {
                if (!resp.ok) {
                    throw Error(resp.statusText);
                }
                return resp.text()
            }).then((html) => {
                this.html = html;
                this.state = 'inited';
            }).catch((err) => {
                this.state = 'error';
                console.error('error', err);
                window.location.hash = '';
            }).finally(() => {
                setTimeout(() => {
                    this.toggleLoading(false);
                }, 500)
            });
        }
    }
}
