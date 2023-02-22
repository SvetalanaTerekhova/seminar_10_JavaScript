/* Задание 1
1. Поиск в интернете (бесплатные api примеры).
2. Найти любые данные, на произвольную тему.
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api. */
const bored = `[
    {
        "activity": "Donate blood at a local blood center",
        "type": "charity",
        "participants": 1,
        "price": 0,
        "link": "https://www.redcross.org/give-blood",
        "key": "6509779",
        "accessibility": 0.35
    },
    {
        "activity": "Make a bucket list",
        "type": "busywork",
        "participants": 1,
        "price": 0,
        "link": "",
        "key": "2735499",
        "accessibility": 0
    },
    {
        "activity": "Buy a new house decoration",
        "type": "recreational",
        "participants": 1,
        "price": 0.4,
        "link": "",
        "key": "3456114",
        "accessibility": 0.3
    }
]`
/* Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка загловок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию). */
const catsInfo = `[
    {
        "src": "https://lapkins.ru/upload/iblock/47b/47bb121df27d33a36d8e84091b83ee5c.jpg",
        "alt": "Черный кот мейн-кун",
        "breed": "Мейн-кун",
        "info": "Одна из самых крупных пород кошки в мире, если не самая крупная. Это пушистый гигант, который к тому же отличается весьма миролюбивым нравом."
    },
    {
        "src": "img/savanna.jpg",
        "alt": "Кошка породы Саванна на природе",
        "breed":"Саванна",
        "info": "Гибрид дикого африканского сервала и домашней кошки сиамо-ориентальной группы и одна из самых больших кошек в мире. Кошеки этой породы живой ум, высокая активность и развитый охотничий инстинкт."    
    },
    {
        "src": "img/ragdoll.jpg",
        "alt": "Кошка породы Рэгдолл на светло-бордовом фоне",
        "breed": "Рэгдолл",
        "info": "Одна из крупнейших домашних кошек, третья после саванны и мейн-куна. Самцы значительно превосходят самочек по длине и весу. Если котов можно назвать массивными, то кошек - стройными и изящными."    
    },
    {
        "src": "img/Chausie.jpg",
        "alt": "Кошка породы Чаузи на поле в одуванчиках",
        "breed": "Чаузи(Хауси)",
        "info": " Гибрид дикого камышового кота и абиссинской кошки. Кошки этой породы унаследовали от дикого предка внешность, а от домашнего — ласковый нрав."    
    }
]`