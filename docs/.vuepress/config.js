const moment = require('moment');

module.exports = {
  title: 'Как стать разработчиком',
  description: 'Сборник материалов и вопросов для самостоятельного изучения',
  plugins: [
    ['@vuepress/google-analytics', { ga: 'UA-155355230-1' }],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require('moment')
          moment.locale('ru-RU')
          return moment(timestamp).fromNow()
        }
      }
    ]
  ],
  themeConfig: {
    docsDir: 'docs',
    lastUpdated: 'Последнее обновление: ',
    repo: 'flags8192/developers-roadmap',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: 'Помогите нам улучшить эту страницу!',
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: 'Поиск...',
    logo: '/assets/img/logo.png',
    /* algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>'
    },*/
    nav: [{
        text: 'Frontend',
        link: '/frontend/junior-1/html'
      },
      {
        text: 'Backend',
        link: '/backend/junior-1/haskel'
      },
      {
        text: 'Стандарты',
        link: '/standarts/initiation'
      }
    ],
    sidebar: [
      {
        type : 'group',
        title: 'Стандарты',
        collapsable: true,
        children: [
          ['/standarts/initiation', 'Инициация'],
          ['/standarts/html', 'HTML'],
          ['/standarts/css', 'CSS'],
          ['/standarts/js', 'JS']
        ]
      },
      {
        type : 'group',
        title: 'Frontend разработчик',
        collapsable: true,
        children: [
          {
            type: 'group',
            title: 'Junior 1',
            collapsable: true,
            children: [
              ['/frontend/junior-1/html', 'HTML'],
              ['/frontend/junior-1/css', 'CSS'],
              ['/frontend/junior-1/javascript', 'JavaScript'],
              ['/frontend/junior-1/testing','Тестирование']
            ]
          },
          {
            type: 'group',
            title: 'Junior 2',
            collapsable: true,
            children: [
              ['/frontend/junior-2/html', 'HTML'],
              ['/frontend/junior-2/css', 'CSS'],
              ['/frontend/junior-2/javascript', 'JavaScript'],
              ['/frontend/junior-2/dom','DOM'],
              ['/frontend/junior-2/testing','Тестирование'],
              ['/frontend/junior-2/git','Git'],
              ['/frontend/junior-2/mobilebrowser','Мобильный браузеры'],
              ['/frontend/junior-2/time','Работа с датой'],
              ['/frontend/junior-2/books','Литература'],
              ['/frontend/junior-2/typescript','TypeScript'],
              ['/frontend/junior-2/react','React']
            ]
          },
          {
            type: 'group',
            title: 'Junior 3',
            collapsable: true,
            children: [
              ['/frontend/junior-3/build', 'Системы сборки'],
              ['/frontend/junior-3/data', 'Работа с данными'],
              ['/frontend/junior-3/css','CSS'],
              ['/frontend/junior-3/javascript', 'JavaScript'],
              ['/frontend/junior-3/security','Безопасность'],
              ['/frontend/junior-3/dom','DOM'],
              ['/frontend/junior-3/git','Git'],
              ['/frontend/junior-3/api','API'],
              ['/frontend/junior-3/testing','Тестирование'],
              ['/frontend/junior-3/books','Литература'],
              ['/frontend/junior-3/typescript','TypeScript'],
              ['/frontend/junior-3/react','React']
            ]
          },
          {
            type: 'group',
            title: 'Middle 1',
            collapsable: true,
            children: [
              ['/frontend/middle-1/oop', 'ООП'],
              ['/frontend/middle-1/fp', 'ФП'],
              ['/frontend/middle-1/dataStructures', 'Структуры данных'],
              ['/frontend/middle-1/design','Базовые принципы проектирования'],
              ['/frontend/middle-1/async','Асинхронность в JS'],
              ['/frontend/middle-1/generators','Генераторы'],
              ['/frontend/middle-1/isomorphism','Изоморфный рендеринг'],
              ['/frontend/middle-1/testing','Тестирование'],
              ['/frontend/middle-1/typescript','TypeScript']
            ]
          },
          {
            type: 'group',
            title: 'Middle 2',
            collapsable: true,
            children: [
              ['/frontend/middle-2/patterns', 'Паттерны проектирования'],
              ['/frontend/middle-2/design', 'Базовые принципы проектирования'],
              ['/frontend/middle-2/oop', 'ООП'],
              ['/frontend/middle-2/fp','Функциональное программирование'],
              ['/frontend/middle-2/serviceWorkers','Сервис воркеры'],
              ['/frontend/middle-2/network','Сеть']
            ]
          },
          {
            type: 'group',
            title: 'Middle 3',
            collapsable: true,
            children: [
              ['/frontend/middle-3/fp', 'Функциональное программирование']
            ]
          }
        ]
      },
      {
        type : 'group',
        title: 'Backend разработчик',
        collapsable: true,
        children: [
          {
            type: 'group',
            title: 'Junior 1',
            collapsable: true,
            children: [
              ['/backend/junior-1/haskel', 'Haskel'],
              ['/backend/junior-1/db', 'Базы данных'],
              ['/backend/junior-1/linux', 'Администрирование Linux'],
              ['/backend/junior-1/network','Сети']
            ]
          },
          {
            type: 'group',
            title: 'Junior 3',
            collapsable: true,
            children: [
              ['/backend/junior-3/aws', 'AWS'],
              ['/backend/junior-3/db', 'Базы данных'],
              ['/backend/junior-3/haskel', 'Haskel']
            ]
          }
        ]
      }
    ]
  }
}
