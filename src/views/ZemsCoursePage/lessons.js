import Link from './LessonView/Link';

export default {
  1: {
    title: '1. Вводный урок',
    description: 'Всякие там важные нюансы, без которых курс ваще не зайдёт',
    toLearn: [
      'что будет в курсе',
      'как правильно его смотреть',
      'другую важную информацию, которая облегчит вам процесс обучения:)'
    ],
    result: 'Вы сможете легко и просто подготовиться к прохождению этого курса',
    videoId: '1d7pWTJITaLQg_xkDn7xSM9jh6-k00Y6w'
  },
  2: {
    title: '2. Установка SketchUp',
    description: 'Как скачать, как установить и что делать, если «аааа ничего не работает!!!»',
    toLearn: [
      'где и как скачать официальную версию SketchUp бесплатно',
      'как установить программу на MAC и Windows'
    ],
    result: 'Вы установите и запустите программу SketchUp на своём компьютере или ноутбуке',
    videoId: '1A56sLbNTS49tBbz196wEu5pAkYgGZq5d',
    additionalInfo: [
      {
        type: 'link',
        text: 'Скачать пробную версию:',
        link: {
          label: 'https://www.sketchup.com/ru',
          href: 'https://www.sketchup.com/ru'
        }
      },
      {
        type: 'link',
        text: 'Справочный центр SketchUp:',
        link: {
          label: 'https://help.sketchup.com/ru/downloading-sketchup',
          href: 'https://help.sketchup.com/ru/downloading-sketchup'
        }
      }
    ]
  },
  3: {
    title: '3. Настройка SketchUp',
    description: 'Разберемся, что и где расположено в SketchUp',
    toLearn: [
      'как устроено рабочее пространство SketchUp',
      'как удалять и добавлять инструменты на панель быстрого доступа',
      'почему горячие клавиши нужно знать и использовать даже новичкам'
    ],
    result: 'Вы настроите удобное рабочее пространство с минимальным набором панелей без лишних элементов',
    videoId: '14Z40T5l6QRQTBIdlBGUiflXxzSyz4-rD'
  },
  4: {
    title: '4. Навигация в SketchUp',
    description: 'Научимся перемещаться по рабочему пространству, чтобы выполнять построения с любого ракурса и расстояния',
    toLearn: [
      'как приближать и отдалять нужные элементы модели',
      'как быстро перемещаться по модели',
      'как поворачивать модель вокруг оси',
      'почему в SketchUp без мышки никак'
    ],
    result: 'Вы сможете уверенно перемещаться по рабочему пространству SketchUp с помощью мышки и минимального количества действий',
    videoId: '1HLHZ2lFJrFkniCqrpzXqX6DXRxDGhTrG'
  },
  5: {
    title: '5. Основные инструменты SketchUp',
    description: 'Узнаем, как использовать минимум инструментов',
    toLearn: [
      'какие инструменты SketchUp пригодятся при оцифровке квартиры',
      'как освоить эти новые инструменты'
    ],
    result: 'Вы сможете начертить плоские и объёмные фигуры в SketchUp',
    videoId: '1mq9V-9tzV22dt9e3FpLjHQ3dtyrx6IdJ',
    additionalInfo: [
      {
        type: 'table',
        text: 'Список горячих клавиш в SketchUp:',
        table: {
          columns: [
            {
              name: 'icon',
              title: 'Иконка инструмента'
            },
            {
              name: 'name',
              title: 'Название из видео'
            },
            {
              name: 'hotkey',
              title: 'Горячая клавиша'
            },
            {
              name: 'originalNameWindows',
              title: 'Полное название для Windows'
            },
            {
              name: 'originalNameMacOs',
              title: 'Полное название для Mac OS'
            }
          ],
          values: [
            {
              icon: '/toolIcons/tapeMeasure.png',
              name: 'Рулетка',
              hotkey: 'R',
              originalNameWindows: 'Инструменты/Рулетка',
              originalNameMacOs: 'Инструменты/Рулетка'
            },
            {
              icon: '/toolIcons/pencil.png',
              name: 'Линия (карандаш)',
              hotkey: 'W',
              originalNameWindows: 'Нарисовать/Линии/Линия',
              originalNameMacOs: 'Нарисовать/Линии/Линия'
            },
            {
              icon: '/toolIcons/eraser.png',
              name: 'Ластик',
              hotkey: 'E',
              originalNameWindows: 'Инструменты/Ластик',
              originalNameMacOs: 'Инструменты/Ластик'
            },
            {
              icon: null,
              name: 'Удалить направляющие',
              hotkey: 'Y',
              originalNameWindows: 'Правка/Удалить направляющие',
              originalNameMacOs: 'Правка/Удалить направляющие'
            },
            {
              icon: '/toolIcons/rectangle.png',
              name: 'Прямоугольник',
              hotkey: 'Q',
              originalNameWindows: 'Нарисовать/Фигуры/Прямоугольник',
              originalNameMacOs: 'Нарисовать/Фигуры/Прямоугольник'
            },
            {
              icon: '/toolIcons/volume.png',
              name: 'Объём',
              hotkey: 'T',
              originalNameWindows: 'Инструменты/Вдавить-вытянуть',
              originalNameMacOs: 'Инструменты/Вдавить/Вытянуть'
            },
            {
              icon: '/toolIcons/move.png',
              name: 'Перемещение',
              hotkey: 'V',
              originalNameWindows: 'Инструменты/Переместить',
              originalNameMacOs: 'Инструменты/Переместить'
            },
            {
              icon: null,
              name: 'Группировка',
              hotkey: 'G',
              originalNameWindows: 'Правка/Создать группу',
              originalNameMacOs: 'Правка/Создать группу'
            },
            {
              icon: '/toolIcons/filling.png',
              name: 'Заливка',
              hotkey: 'B',
              originalNameWindows: 'Инструменты/Заливка',
              originalNameMacOs: 'Инструменты/Заливка'
            }
          ]
        }
      }
    ]
  },
  6: {
    title: '6. Удобные фишки SketchUp',
    description: 'Слои, сцены и всякие другие крутые штуки',
    toLearn: [
      'зачем нужно цветовое кодирование в модели',
      'почему использовать слои — это удобно',
      'как и зачем создавать сцены',
      'как расставлять размеры и текстовые выноски'
    ],
    result: 'Вы сможете создавать сцены, распределять элементы по слоям, кодировать модель по цвету и добавлять размеры и текстовые аннотации на модель',
    videoId: '1tjB7GjNYeZeTxJgp_3GL-RLSYJ2QE2Fh',
    additionalInfo: [
      {
        type: 'link',
        text: 'Скачать шаблон SketchUp:',
        link: {
          label: 'Шаблон.skp',
          href: 'https://drive.google.com/file/d/1PW-PoidVB0Rrc8xRb5CFhLue9qqUF8Kr/view?usp=sharing'
        }
      }
    ]
  },
  7: {
    title: '7. Общие правила замера',
    description: 'Как снимать и проверять размеры, как их округлять и как избежать проблем с замером',
    toLearn: [
      'как снимать размеры максимально точно',
      'как оптимизировать процесс замера, чтобы не совершать лишних движений и избежать ошибок'
    ],
    result: 'Вы сможете снимать точные замеры в любом помещении правильной формы',
    videoId: '1IImglIqYsfUBe579Ma5WidxEu2yYoQ_a'
  },
  8: {
    title: '8. Оборудование для замера',
    description: 'Что купить, как не переплатить, почему купить именно это и всё такое',
    toLearn: [
      'какие инструменты для замера нужны обязательно, а без каких можно обойтись',
      'примерную стоимость базового комплекта инструментов',
      'на что точно не нужно тратить деньги:)'
    ],
    result: 'Вы сможете подготовить все необходимое оборудование для замера',
    videoId: '1ZLLkwA0jUIKy-uyu8c8efFUDHfh3Gj_6',
    additionalInfo: [
      {
        type: 'table',
        text: 'Таблица оборудования:',
        table: {
          columns: [
            {
              name: 'number',
              title: '№',
              align: 'center'
            },
            {
              name: 'name',
              title: 'Название',
              align: 'left'
            },
            {
              name: 'priority',
              title: 'Важность',
              align: 'center'
            },
            {
              name: 'price',
              title: 'Стоимость',
              align: 'center',
              render: (row) => `${row.price} ₽`
            },
            {
              name: 'model',
              title: 'Рекомендуемая модель',
              align: 'center',
              render: (row) => <Link href={row.model} label={'Ссылка'} />
            }
          ],
          values: [
            {
              number: 1,
              name: 'Рулетка механическая 5 м',
              priority: 1, // обязательно
              price: 850,
              model: 'https://www.ozon.ru/product/ruletka-so-sverhshirokim-polotnom-kraftool-extrem-5m-h-32mm-887213144/?asb=2L7THX%252BJJPQA%252FFaEo0q%252FZRCrweJKeA7n4g%252BhbvrvA8I%253D&asb2=AcPcHffu-oLED7Y0wVjoSJREvxX5fveHs_W_G0clq7XSxL_FDVfOKrCQjTKWGUwA&avtc=1&avte=2&avts=1690468568&keywords=%D1%80%D1%83%D0%BB%D0%B5%D1%82%D0%BA%D0%B0&sh=2vxBSRiy8Q'
            },
            {
              number: 2,
              name: 'Лазерный дальномер',
              priority: 1, // обязательно
              price: 1800,
              model: 'https://www.ozon.ru/product/dalnomer-hilda-120-m-2-mm-1064340804/?asb=aGyHpnFjTOHG%252FnbtQvoTF14amIHp2RLDbIavHqtvaks%253D&asb2=IZtegJlmj089oaOFzHFzejaBIfgg3o1NXFcFlMZ0ta4melARD0ejDQazZJTwn9uo&avtc=1&avte=2&avts=1690468711&keywords=%D0%BB%D0%B0%D0%B7%D0%B5%D1%80%D0%BD%D0%B0%D1%8F+%D1%80%D1%83%D0%BB%D0%B5%D1%82%D0%BA%D0%B0&sh=2vxBSZp_Cw'
            },
            {
              number: 3,
              name: 'Молоток 800 гр',
              priority: 1, // обязательно
              price: 400,
              model: 'https://www.ozon.ru/product/molotok-slesarnyy-s-fiberglasovoy-rukoyatkoy-800-gr-944601322/?asb=JmB8L9COZQpIQLsaH%252B0QbP9UQtDgWE9VgSuzhZ7K4i7b6RXL73myGWooLPcMgx75&asb2=-2-rc6M_Zh2YOf7CSQDXrjqI3y-iwmYkB4JIEsEn5I59VmaEWw7iKkEHvbWRqYPJSvKvt0UFHebzRsOK3yzemwicHDrbEKS4PF_iF8sLgv3WXsfURYrSrvbE4IfSP8cF5Vv5xYbfbY10ZyYasNejzg&avtc=1&avte=2&avts=1690468788&keywords=%D0%BC%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%BA+800+%D0%B3%D1%80&sh=2vxBSUtpmA'
            },
            {
              number: 4,
              name: 'Лазерный осепостроитель',
              priority: 2, // желательно
              price: 9000,
              model: 'https://www.ozon.ru/product/uroven-lazernyy-ada-cube-360-basic-edition-1061721099/?asb=FrW5iYqyZz%252BfBIKO%252BurTzGuvra%252BNSj4JMMykh7NOcx8%253D&asb2=T55A9QigG0fwR8oZSiGtgveh9p22GhaR1kiJEcc4YHd3Dy7Iq_u8wC7pRGZES8fj&avtc=1&avte=1&avts=1690468890&keywords=%D0%BB%D0%B0%D0%B7%D0%B5%D1%80%D0%BD%D1%8B%D0%B9+%D1%83%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C&sh=2vxBSRjiXQ'
            },
            {
              number: 5,
              name: 'Элевационный штатив',
              priority: 3, // для проф. работы
              price: 850,
              model: 'https://www.ozon.ru/product/elevatsionnyy-shtativ-amo-a160-799974628/?asb=fRldd2uiD4WbsF4MTHaeGzd5ybDRAkIe%252FPKWVq9O02U%253D&asb2=y8yB7BHhvxR6kWuZOcIK7PWUS6Z2HDU3JsqP5ZKuJh2H_0uOB91SCzJM8jBytGsc&avtc=1&avte=2&avts=1690474140&keywords=%D1%8D%D0%BB%D0%B5%D0%B2%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9+%D1%88%D1%82%D0%B0%D1%82%D0%B8%D0%B2&sh=2vxBSX6sLw'
            },
            {
              number: 6,
              name: 'Перфоратор аккумуляторный',
              priority: 3, // для проф. работы
              price: 25000,
              model: 'https://www.vseinstrumenti.ru/product/akkumulyatornyj-perforator-hilti-te-2-a22-korobka-2043485-1343638/'
            },
            {
              number: 7,
              name: 'Бур 10 х 400 мм',
              priority: 3, // для проф. работы
              price: null,
              model: null
            },
            {
              number: 8,
              name: 'Отвёртка шлицевая 3 мм (не диэлектрическая)',
              priority: 2, // желательно
              price: 150,
              model: 'https://www.ozon.ru/product/otvertka-ploskaya-shlitsevaya-shlits-sl-pryamoy-3-2x100mm-dvuhkomponentnaya-rukoyatka-1044846798/?asb=%252FYydSqK53UKfbPCSn88YKeR4hjhk0KNHUI8mkynmP1tQcSvSiGVFbH8gL%252Bk20HWR&asb2=oa2u1wZXCo4wVGSA2_Ws_yVpAPOkwZ1SFBh69T0F49dxFhhT10eJ9hJhtX6wyDDUoLCCvc59BdqExzhPkUBUNN8JCdoBr5OK7tQ6U410oYTKb5O8PBPBeLUcHyZ64Lk5rv6b1orH6RKDocbcdr8QLw&avtc=1&avte=2&avts=1690469297&keywords=%D0%BE%D1%82%D0%B2%D0%B5%D1%80%D1%82%D0%BA%D0%B0+%D1%88%D0%BB%D0%B8%D1%86%D0%B5%D0%B2%D0%B0%D1%8F+3+%D0%BC%D0%BC&sh=2vxBSSGcqg'
            },
            {
              number: 9,
              name: 'Стол с переменной высотой ножек',
              priority: 3, // для проф. работы
              price: 15000,
              model: 'https://www.foroffice.ru/products/description/128010.html'
            },
            {
              number: 10,
              name: 'Стул раскладной (2-3 шт)',
              priority: 3, // для проф. работы
              price: null,
              model: null
            },
            {
              number: 11,
              name: 'Рюкзак для инструментов',
              priority: 3, // для проф. работы
              price: 17000,
              model: 'https://www.ozon.ru/product/ryukzak-milwaukee-jobsite-backpack-48228200-911346714/?advert=E-DvE6bnZu6qISvt3E5iRm2cqfJNavst9Hm8DxNtL2eAYIt_HqNlaZ9DPFuXRQnc7Zyq0yfghAVtlgo4H6EjOI92VDilkuufm8NMHU_Vtlp_ycTO__d6UCi608vjCUc-wfQbseQTiEK2_OA3lT_cN_SIh5oWYo2PEEaDcZ5uTnV2g6w_sxXPHYcF1ntKUWdNKnMUrelqL7Xv9rRx4oUlR4EGn61g7YxOZyHtxNurr0GlwkGMUC_oLlg1V6ux4gamiDmKY4-oUZ3tbVp-9G7f5XCl-ShlxPK_S5YnMojgVU7ZBi8wZ9aSx4r1_UvzvbC6GUAzWfbkst50bPVvbnFWQg&avtc=1&avte=2&avts=1690469448&keywords=%D1%80%D1%8E%D0%BA%D0%B7%D0%B0%D0%BA+milwaukee&sh=2vxBSSEnYg'
            },
            {
              number: 12,
              name: 'Налобный фонарик',
              priority: 3, // для проф. работы
              price: 7000,
              model: 'https://fenix-russia.ru/fonar-fenix-hl40r-cree-xp-g3-s4/'
            },
            {
              number: 13,
              name: 'Мешки для мусора 200 л',
              priority: 2, // желательно
              price: null,
              model: null
            },
            {
              number: 14,
              name: 'Влажные салфетки',
              priority: 2, // желательно
              price: null,
              model: null
            }
          ]
        }
      },
      {
        type: 'list',
        text: 'Внимание, НЕ ПОКУПАТЬ!!!',
        list: [
          'Угломер электронный',
          'Уровень строительный пузырьковый',
          'Уровень строительный электронный',
          'Отвес строительный',
          'Ручной фонарь',
          'Компас'
        ]
      },
      {
        type: 'video',
        text: 'Видео про измерение стен с помощью осепостроителя:',
        videoId: '1vjmCP0_V2dGq_JpZvyguJFKmunqdHC_3'
      }
    ]
  },
  9: {
    title: '9. Фотосъёмка объекта',
    description: 'Как и на что снимать, порядок фотосъёмки, точный список фотографий',
    toLearn: [
      'зачем делать фотосъёмку объекта',
      'какое оборудование для этого нужно',
      'как нужно фотографировать помещения',
      'полный список необходимых фотографий:)'
    ],
    result: 'Вы сможете провести фотосъёмку объекта и зафиксировать все важные детали на объекте',
    videoId: '1KxfLy2_p2UhKUokCAm41qu-uD6dJIqBz',
    additionalInfo: [
      {
        type: 'picture',
        text: 'Схема фотографирования объекта:',
        src: '/Схема фотографирования объекта.jpg'
      }
    ]
  },
  10: {
    title: '10. Построение плана квартиры',
    description: 'Главный урок о том, как построить геометрию объекта на примере однушки',
    toLearn: [
      'алгоритм снятия размеров и построения плоского контура'
    ],
    result: 'Вы сможете начертить высокоточный план своей квартиры',
    videoId: '1AJDBxeY7thTNFdUaXktc_dvoPrY4itLV'
  },
  11: {
    title: '11. Построение сложных контуров',
    description: 'Как построить непрямоугольные помещения и изогнутые стены',
    toLearn: [
      'на какие 5 групп можно разделить все сложные контуры',
      'как отстраивать скошенные и скруглённые стены',
      'как проверить прямой угол с помощью осепостроителя'
    ],
    result: 'Вы сможете отстроить контур помещения сложной формы',
    videoId: '1gjh-I6FrwfFXCUW7lM-Oi-2j4-sRmtVg'
  },
  12: {
    title: '12. Создание объёмной модели',
    description: 'Превращение «плоской» квартиры в объёмную и формирование проёмов',
    toLearn: [
      'как замерить высоту квартиры',
      'как задать толщину всех внешних стен',
      'как не забыть замерить самое важное',
      'как замерить уровень будущей стяжки',
      'зачем чертить общий коридор'
    ],
    result: 'Вы сможете создать высокоточную копию вашей квартиры в объёме',
    videoId: '1pyG-BnKQSeiOPn4p965-VW6mpI4e1PTi'
  },
  13: {
    title: '13. Построение балконов и лоджий',
    description: 'Как точно «привязать» лоджию к квартире и как отстроить её геометрию',
    toLearn: [
      'как пристроить лоджию к объёмной модели',
      'алгоритм замера лоджии с парапетом и без парапета:)'
    ],
    result: 'Вы сможете пристроить лоджию к объёмной модели вашей квартиры',
    videoId: '1DmR_9Ut1m4AbRFuR1UW3y_En50L4rbVR'
  },
  14: {
    title: '14. Построение несущих стен и коммуникаций',
    description: 'Как измерить и отстроить коммуникации и несущие участки, а затем разделить всё по слоям',
    toLearn: [
      'как отрисовывать все трубы',
      'как узнать положение несущих конструкций, если стены оштукатурены',
      'какой короб вентиляции ни в коем случае нельзя ломать',
      'как замерить вентиляционные каналы внутри короба'
    ],
    result: 'Вы сможете с высокой точностью начертить вентканалы, трубы и несущие участки стен вашей квартиры, а также распределить их по слоям',
    videoId: '1p49t93hdpfXXmgEqbwS12bdxxzNtgm-j'
  },
  15: {
    title: '15. Замер квартиры без перегородок',
    description: 'Ещё один метод оцифровки квартиры, связанный с «вычитанием» контуров',
    toLearn: [
      'отличия алгоритма замера квартиры с перегородками и без них',
      'в чем особенность приёма «вычитание»'
    ],
    result: 'Вы сможете создать точную объёмную модель квартиры без перегородок',
    videoId: '1gggpAA1mdz0WhrHX5DQz5MBQFT4e0sI9'
  },
  16: {
    title: '16. Замер квартиры с ремонтом и мебелью',
    description: 'Нюансы замера квартиры с отделкой, а также оцифровки мебели и дверей',
    toLearn: [
      'чем отличается замер квартиры с ремонтом и без',
      'в каком случае можно не отрисовывать коммуникации',
      'как можно просто и быстро оцифровать мебель',
      'способы отображения дверей в открытом состоянии:)'
    ],
    result: 'Вы сможете оцифровать квартиру с мебелью и дверьми и сделать виртуальную перестановку',
    videoId: '136ftuJCTQT2-I8QrZqKB7FT--V1ai8Wq'
  },
  17: {
    title: '17. Создание обмерного плана',
    description: 'Создание плоского чертежа с размерами из объемной модели',
    toLearn: [
      'как сделать плоскую схему из объёмной 3 способами',
      'как пользоваться инструментом «Секущая плоскость»',
      'как посчитать площадь всей квартиры или отдельных элементов'
    ],
    result: 'Вы сможете подготовить обмерный план — с проёмами, размерами, площадями и текстовыми комментариями',
    videoId: '1sEIjd-i5dF25CRjlAc0BgDbRtw85Md74'
  }
};