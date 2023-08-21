export default {
  1: {
    title: '1. Вводный урок',
    description: 'Всякие там важные нюансы, без которых курс ваще не зайдёт',
    toLearn: [
      'что будет в курсе',
      'как правильно его смотреть',
      'другую важную информацию, которая облегчит вам процесс обучения:)'
    ],
    result: 'Вы сможете легко и просто подготовиться к прохождению этого курса'
  },
  2: {
    title: '2. Установка SketchUp',
    description: 'Как скачать, как установить и что делать, если «аааа ничего не работает!!!»',

    toLearn: [
      'где и как скачать официальную версию SketchUp бесплатно',
      'как установить программу на MAC и Windows'
    ],
    result: 'Вы установите и запустите программу SketchUp на своём компьютере или ноутбуке',
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
    result: 'Вы настроите удобное рабочее пространство с минимальным набором панелей без лишних элементов'
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
    result: 'Вы сможете уверенно перемещаться по рабочему пространству SketchUp с помощью мышки и минимального количества действий'
  },
  5: {
    title: '5. Основные инструменты SketchUp',
    description: 'Узнаем, как использовать минимум инструментов',
    toLearn: [
      'какие инструменты SketchUp пригодятся при оцифровке квартиры',
      'как освоить эти новые инструменты'
    ],
    result: 'Вы сможете начертить плоские и объёмные фигуры в SketchUp',
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
              id: 1,
              icon: '/toolIcons/tapeMeasure.png',
              name: 'Рулетка',
              hotkey: 'R',
              originalNameWindows: 'Инструменты/Рулетка',
              originalNameMacOs: 'Инструменты/Рулетка'
            },
            {
              id: 2,
              icon: '/toolIcons/pencil.png',
              name: 'Линия (карандаш)',
              hotkey: 'W',
              originalNameWindows: 'Нарисовать/Линии/Линия',
              originalNameMacOs: 'Нарисовать/Линии/Линия'
            },
            {
              id: 3,
              icon: '/toolIcons/eraser.png',
              name: 'Ластик',
              hotkey: 'E',
              originalNameWindows: 'Инструменты/Ластик',
              originalNameMacOs: 'Инструменты/Ластик'
            },
            {
              id: 4,
              icon: null,
              name: 'Удалить направляющие',
              hotkey: 'Y',
              originalNameWindows: 'Правка/Удалить направляющие',
              originalNameMacOs: 'Правка/Удалить направляющие'
            },
            {
              id: 5,
              icon: '/toolIcons/rectangle.png',
              name: 'Прямоугольник',
              hotkey: 'Q',
              originalNameWindows: 'Нарисовать/Фигуры/Прямоугольник',
              originalNameMacOs: 'Нарисовать/Фигуры/Прямоугольник'
            },
            {
              id: 6,
              icon: '/toolIcons/volume.png',
              name: 'Объём',
              hotkey: 'T',
              originalNameWindows: 'Инструменты/Вдавить-вытянуть',
              originalNameMacOs: 'Инструменты/Вдавить/Вытянуть'
            },
            {
              id: 7,
              icon: '/toolIcons/move.png',
              name: 'Перемещение',
              hotkey: 'V',
              originalNameWindows: 'Инструменты/Переместить',
              originalNameMacOs: 'Инструменты/Переместить'
            },
            {
              id: 8,
              icon: null,
              name: 'Группировка',
              hotkey: 'G',
              originalNameWindows: 'Правка/Создать группу',
              originalNameMacOs: 'Правка/Создать группу'
            },
            {
              id: 9,
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
};