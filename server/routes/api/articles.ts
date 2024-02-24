export default defineEventHandler(() => {
  return {
    category: 'Articles',
    slug: 'articles',
    value: [
      {
        id: 1,
        img: '_nuxt/assets/img/articles/adobe.jpeg',
        title: 'Инструкция по применению Adobe Zii',
        description: 'Adobe Zii Patcher - лучший инструмент от TNT team для активации любого продукта Adobe. К сожалению, патчер перестал обновляться в начале 2022 года.',
        date: "23.04.22"
      },
      {
        id: 2,
        img: '_nuxt/assets/img/articles/comp.jpeg',
        title: 'Ошибки при установке приложений на Мак',
        description: 'В этой статье собраны возможные ошибки и инструкции для их устранения, при запуске приложений на Мак. Все ошибки актуальны для macOS Catalina.',
        date: "12.10.21"
      },
      {
        id: 3,
        img: '_nuxt/assets/img/articles/jetbrains.jpeg',
        title: 'Активация любой IDE от JetBrains',
        description: 'В данной статье мы расскажем вам все известные нам методы бесплатного использования любой IDE от компании JetBrains',
        date: "7.11.22"
      },
      {
        id: 4,
        img: '_nuxt/assets/img/articles/min.jpeg',
        title: 'Добавление цифровой подписи',
        description: 'Apple периодически выпускает патчи безопасности, в которых отзывает сертификаты (цифровые подписи) некоторых "специфических" разработчиков. Запуск приложений без сертификата приводит к сообщению об ошибке и неожиданному завершению этого приложения',
        date: "17.01.24"
      },
      {
        id: 5,
        img: '_nuxt/assets/img/articles/sip.jpeg',
        title: 'Что такое SIP и как его отключить?',
        description: 'В 2015 году компания Apple внедрила в OS X El Capitan (10.11) новый механизм защиты пользовательских данных от вредоносного ПО, получивший название System Integrity Protection (также известная как SIP или rootless)',
        date: "24.05.24"
      },
      {
        id: 6,
        img: '_nuxt/assets/img/articles/usb.jpeg',
        title: 'Создание загрузочной флешки с macOS',
        description: 'В данной статье описывается процесс установки любой* версии macOS (OS X) на Мак. Включая не только создание загрузочной флешки...но и ссылки на скачивание дистрибутивов, и инструкцию по их установке',
        date: "10.10.24"
      }
    ]
  }
})
