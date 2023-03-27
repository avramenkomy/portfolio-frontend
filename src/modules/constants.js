export const DELAY_FOR_API = 2000;

const LOREM_TEXT = ```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique augue sed blandit
tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin quis aliquam
elit. Mauris malesuada commodo varius. Fusce eget purus mollis, hendrerit dui eu, tincidunt
massa. Quisque tristique leo nec neque tristique, at varius urna ultricies. Nunc rutrum
iaculis rutrum.
In consequat diam vel rhoncus accumsan. Nunc iaculis nibh nec orci tempor ornare. Maecenas eu
sapien et tortor gravida consequat gravida ut tortor. Suspendisse at nunc mi. Nam sollicitudin
sapien orci, a pretium justo efficitur a. Nunc eget volutpat lectus. Morbi aliquet augue risus,
at consequat tortor pellentesque vitae. Pellentesque congue, mi vel semper accumsan, neque metus
imperdiet tortor, eu imperdiet neque ex semper arcu. Aliquam aliquet urna eget luctus venenatis.
Nam tristique vulputate quam tincidunt tristique. Quisque et augue arcu. Vivamus porta feugiat
felis in venenatis. Etiam ipsum diam, imperdiet mattis auctor ut, molestie vitae tellus.
```

const TODOS_DESC = ```
Это приложение для повышения продуктивности. Создавайте, изменяйте или удаляйте цели и задачи
для повседневной жизни. Здесь вы сможете поставить напоминание, чтобы не забыть о предстоящем
деле. В приложении используется React JS, Redux, HTML, CSS.
Простой список задач, поле для ввода текста ограничение в 300 символов, кнопка "Добавить". Все
новые задачи создаются и сохраняются в SessionStorage для дальнейшей работы с ними. При первом
запуске будет существовать одна тестовая запись. При отображении записи, для каждой будет отрисовано
поле с текстом задачи и датой создания и датой выполнения и кнопки действий "Изменить", "Удалить",
"Выполнено", "Добавить напоминание". Приложение должно запросить у пользователя права на использование
памяти, cookies, отправку уведомлений. Без прав на использование памяти, приложение не будет работать,
показывая при этом страницу заглушку с запросом на использование внутренней памяти компьютера пользователя.
При отсутствии прав на отправку уведомлений, кнопка "Добавить напоминание"  будет недоступна.
```

export const PROJECTS_LIST = [
  { id: 0, title: 'Todos', description: TODOS_DESC, create: new Date('2023-03-27'), lastUpdate: new Date(), img: '', url: '' },
  { id: 1, title: 'TestApp1', description: LOREM_TEXT, create: new Date('2023-03-27'), lastUpdate: new Date(), img: '', url: '' },
  { id: 2, title: 'TestApp2', description: LOREM_TEXT, create: new Date('2023-03-27'), lastUpdate: new Date(), img: '', url: '' },
  { id: 3, title: 'TestApp3', description: LOREM_TEXT, create: new Date('2023-03-27'), lastUpdate: new Date(), img: '', url: '' },
  { id: 4, title: 'TestApp4', description: LOREM_TEXT, create: new Date('2023-03-27'), lastUpdate: new Date(), img: '', url: '' },
  { id: 4, title: 'TestApp5', description: LOREM_TEXT, create: new Date('2023-03-27'), lastUpdate: new Date(), img: '', url: '' },
  { id: 4, title: 'TestApp6', description: LOREM_TEXT, create: new Date('2023-03-27'), lastUpdate: new Date(), img: '', url: '' },
  { id: 4, title: 'TestApp7', description: LOREM_TEXT, create: new Date('2023-03-27'), lastUpdate: new Date(), img: '', url: '' },
  { id: 4, title: 'TestApp8', description: LOREM_TEXT, create: new Date('2023-03-27'), lastUpdate: new Date(), img: '', url: '' },
];