# HTML

---

> Отступы делать пробелами. В проекте во всех файлах html, pug, etc должен быть одинаковый отступ — либо 4, либо 2 пробела;

## Семантика

### Объединять блоки не по их визуальному расположению, а по их смыслу

Объединяем блоки вот так:

![Хороший Пример](/assets/img/665a3fda6b3847e687c4ed5fdbbaec22.png)

А не вот так:

![Плохой Пример](/assets/img/ea6179004eb9493e90a4ceae4dad2a7c.png)

Как минимум это очень легко позволит потом добавить новый элемент, когда надо будет по требованию заказчика сделать лист из 4 элементов, а не трех, как тут. Плюс второй подход очень неудобен, если контент генерируется динамически. Так что если вы создаете верстку, которую потом будут прикручивать к бэкенду заказчики и сделаете такую верстку - проклятия от их программистов и порча всей нашей кармы обеспечены.

### Если есть что-то похожее на список, проверяем как будет выглядеть при большем количестве элементов

![Список](/assets/img/blob.png)

Если непонятно, что будет при 4-х элементах, как в этом случае - обязательно спросить, а не принимать решение самостоятельно

### Все элементы, где контент выглядит динамическим - проверяем если количество знаков будет больше, чем в макете

В имена подставляем знаменитое [Константин Константинопольский](https://tema.livejournal.com/1322108.html).

В идеале моменты, которые будет трудно масштабировать текстом, находить еще на стадии знакомства с макетом и задавать вопросы дизайнеру

### Не вставлять блочные элементы внутрь инлайновых

Никаких `<span><div></div></span>`

### Заголовки

Использовать `h1..h6` только для заголовков, причем `h1` должен встречаться в одной странице всего один раз

### Использовать `<table>` только для реальных таблиц

Если перед таблицей есть её текстовое описание, сделать это внутри тега `<table>` через `<caption>`.
Если у таблицы первая строка идет заголовком, то использовать `<thead>` и вложенные `<th>` для этого и использовать "scope" для этих ячеек.

Пример:

```html
<table>
  <caption>
    First two U.S. presidents
  </caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Took office</th>
      <th scope="col">Party</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>George Washington</td>
      <td>April 30, 1789</td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>John Adams</td>
      <td>March 4, 1797</td>
      <td>Federalist</td>
    </tr>
  </tbody>
</table>
```

### Не использовать `<br>` нигде, кроме случаев, когда соблюдены все требования

- Новые строки семантически значимы;
- Отступ не является семантически значимым (в противном случае вы должны использовать `<pre>`);
- Не существует другого семантически подходящего тега, такого как тег абзаца или заголовка;

### Использовать семантические теги

`<header>` - Заголовок страницы или секции на странице. Их может быть несколько на странице, главное, чтобы они находились в начале какого-либо секционного тега или всей страницы.

Примеры:

Заголовок всей страницы

```html
<body>
 <header>...</header>
 - заголовок всей страницы
 <p>...</p>
 <section>...</section>
 <section>...</section>
</body>
```

Заголовок статьи внутри страницы

```html
<body>
 <section>...</section>
 <article>
   <header>...</header>
   - заголовок статьи
   <p>...</p>
   <p>...</p>
 </article>
 <section>...</section>
</body>
```

Заголовок секции внутри страницы

```html
<body>
 <article>
   <header>...</header>
   - заголовок статьи
   <p>...</p>
   <p>...</p>
 </article>
 <section class="sidebar">
   - отдельная секция с боковым меню
   <header>...</header>
   - заголовок секции
   <ul>
     <li>...</li>
     <li>...</li>
     <li>...</li>
   </ul>
 </section>
</body>
```

`<article>` - независимая часть страницы, которая не теряет смысла, если ее показать пользователю отдельно. У статьи может быть свой заголовок, как показано выше. Статьи могут содержать секции и сами находиться в секциях.

`<section>` - какая-либо обособленная часть страницы, например, блок внутри сайдбара или блок баннеров после статьи.

`<footer>` - подвал страницы, может содержать несколько секций.

`<nav>` - навигационное меню, состоящее из ссылок, причем ссылки должны быть видны и работать даже с отключенным js.

`<aside>` - любой блок доп. информации, может быть с интерактивными элементами и доп. функционалом, чаще всего одинаков сразу на многих страницах сайта.

Есть еще несколько типов стандартных тегов, их использование по назначению только поощряется - однако перед применением обязательно изучите тонкости работы с такого рода элементами.

С какой версии браузера поддерживается тэг можно узнать [здесь](http://htmlbook.ru/) или [здесь](http://caniuse.com/)

Если в проекте требуется поддержка старых браузеров, использовать такие теги все равно можно - их просто будут игнорировать. А значит для работы в старых IE нужно просто соблюдать правила:

- Не присваивать этим тегам классов и id, которые потом могут повлиять на приложения (то есть классы, на которые повешены стили и обработчики, либо id, на которые могут быть ссылки для прокрутки)
- Всегда внутрь таких тегов располагать запасную обертку `<div>` и уже ей давай стили и айдишники

Либо есть вариант интересней - вы можете заставить даже ИЕ6 поддерживать эти с помощью [пары трюков.](http://code.tutsplus.com/tutorials/how-to-make-all-browsers-render-html5-mark-up-correctly-even-ie6--net-8669)

### Схема для выбора HTML5 семантических тегов

![Блок-схема](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf)

## Теги

### Все теги должны работать даже без CSS и JS

Все тексты, видимые сначала при открытии страницы так же должны быть доступны, формы должны сабмититься, ссылки должны переходить (а ссылки по которым вообще не должно быть перехода и для которых принято ставить `href="#"` вообще не использовать, это будет далее).

### Структура тегов в первую очередь должна идти от содержания, а не от дизайна

![Пример](/assets/img/a89c1aed00f14864851989caceacd59d.png) - например, такой элемент можно оформить как четыре подряд идущих элемента - иконка сообщений, бадж с цифрой 10, иконка аватара и имя пользователя. Но тут надо явно объединить с помощью `<div>` два блока, чтобы семантически они были отдельными - блок с информацией по сообщению и блок про пользователя. Для css потом, возможно, придется писать лишние стили, но верстка будет более осмысленной и не привязанной лишний раз к дизайну

### Создание нового html файла

Начинаем новый .html файл с `<!DOCTYPE html>`, как следует по HTML5 стандарту, если этот файл не предназначен для расширения другими файлами через какой-нибудь шаблонизатор

1. Перед `<!DOCTYPE html>` не должно быть никаких символов, включая пробелов и переносов строк

2. Внутри `<head>` первым тегом должно идти `<meta charset="utf-8">`

3. У каждой страницы должны быть теги `title` и мета теги `keywords`, `description` (на содержимое спросить контент у менеджера)

4. В `head` добавлять `<meta name="viewport" content="initial-scale=1.0, width=device-width">` - на мобильных браузерах можно избежать горизонтального скролла и масштабировать контент на всю ширину экрана

### Не использовать самозакрывающиеся теги, если они не поддерживают другого режима

Нельзя:

```html
<div />
<span />
```

Можно:

```html
<link />
<img />
<input />
```

### Все атрибуты должны быть внутри двойных кавычек

Нельзя:

```html
<img width="200" />
<div class="block">
  <a href="/some/url"></a>
</div>
```

Можно:

```html
<img width="200" />
<div class="block">
  <a href="/some/url"></a>
</div>
```

Плюс, если в проекте нет других соглашений, атрибуты должны именоваться lower-case-hyphenated (имена только маленькими буквами и через дефис) и если значение строковое и показывает какое-то имя, то тоже должно быть lower-case-hyphenated. Кастомные атрибуты стараться начинать с data- (это стандартная практика, рекомендованная для HTML5).

Пример:

`<a href="/" data-index="33" data-page-name="main-page">Home</a>`

### Не использовать `id`, кроме случаев, когда они семантически востребованы

- Когда гарантируется их уникальность например на уровне базы данных и когда вам нужно
- Когда требуется рабочая навигация в рамках одной страницы (например, как на Википедии или на этом сайте сборника [best-practices](https://isobar-idev.github.io/code-standards/#javascript_javascript);
- Когда требуется связать `<label>` и `<input />`, которые находятся в совершенно разных ветках дерева DOM (вообще, лучше всегда просто `<input />` внутрь `<label>` ставить и тогда никакие айдишники не нужны);

### Теги и классы

Все теги идут только с классами - никаких пустых `<div>`, `<section>` и тд. Но можно для инлайновых элементов, если есть четкое понимание зачем. Это очень сильно мешает новым людям входить в проект и вам через некоторое время разобраться в собственной верстке.

### Инлайновые стили

Избегать по-максимуму инлайновые стили и обработчики событий в `html` (то есть никаких `<div onclick="func()">`)

### Изображения

Все изображения должны содержать `alt`

### Ссылки

Не использовать ссылки с пустым или невалидным `href` (никаких `<a href="#">`) - тогда лучше использовать ссылку-заглушку на несуществующий урл, который явно говорит, что ссылка не проставлена

1. Если вы верстаете проект, в котором есть страницы, которых нет в дизайне (допустим они потом при интеграции с сервером динамически создаваться будут), то лучше ставьте адрес, который явно говорит, что это ссылка-заглушка. Причем все ссылки-заглушки должны в рамках проекта иметь один адрес, например `<a href="/mock-address/change-me"></a>` - тогда после сдачи

2. Для SPA иногда приходится динамически js-ом генерить такие ссылки (как минимум в angular, там для этого даже отдельный атрибут ng-href), которые бы поддерживали динамическую генерацию на основе чистого клиентского роутинга

3. Не надо никаких `<a href="#">` или `<a href="javascript:someFunc(1)">`. Плюс не надо сюда сохранять урлы до методов API на сервере, надеясь, что JS-ом вы сможете потом обработать клик, отправить ajax запрос на сервер по этому урлу и сами обработать ответ. Этого не произойдет, если юзер откроет ссылку в новой вкладке через контекстное меню или клик колесом мыши, например. Все урлы, указанные в `href` должны открывать читаемый для человека контент, который целиком зависит только от сервера.

4. Ссылки на чужие сайты должны содержать атрибут `target="_blank"`, чтобы открываться в новом окне

5. Все ссылки с `target="_blank"` должны так же содержать атрибут `rel="noopener noreferrer"`, это связано с уязвимостью:

    > [rel=noopener](https://mathiasbynens.github.io/rel-noopener/) в соответствии с которой сайт, который вы открыли, получит доступ к сайту, с которого перешли через `window.opener`, причем это работает даже кроссдоменно.

### Прочее

1. Все инпуты, селекты и другие интерактивные элементы должны быть обрамлены в форме `<form>`

2. Все интерактивные элементы, для которых дизайнером задуман нетривиальный порядок полей, использовать всегда `tabindex`, плюс всегда кнопка сабмита в tabindex должна быть последней (соответственно если есть визуально поля под кнопкой, у них должен быть tabindex и он должен быть меньше, чем у кнопки)

3. Спрашивать у дизайнеров, какие элементы делать autofocus на какой странице

4. Никогда не допускать вложенные формы `<form>`

5. Если у поля есть четкое назначение, то использовать соответствующий тип (email, number, color и тд)

6. Каждый тег в котором может лежать текст должен быть проверен на большое количество символов

   - все заголовки и все теги с текстовыми описаниями;
   - все инпуты проверять, чтобы при заполнении текст не прижимался вплотную к правой границе;

   ![image](/assets/img/55307777-c0e18e80-5482-11e9-927f-9c195d81555e.png)

7. Классические инлайн теги должны быть только inline или inline-block и в них не должно быть ничего кроме простого текста и других таких же инлайновых тегов

   - Исключения: `<a>` - иногда ссылку надо сделать блочным элементом, но лучше использовать inline-block

8. Для телефонов, емайл-адресов и скайп никнеймов нужно использовать `<a>` c соответствующим адресом

    ```html
    <a href="tel: +74951234567">+7 (495) 123-45-67</a>
    <a href="mailto: example@mail.ru">example@mail.ru</a>
    <a href="skype: someskype?call">someskype</a>
    ```

9. Отображать примеры кода через тег `<code>`

    - Иногда на некоторых проектах нужно прямо на сайте показывать пользователям примеры кода (например, [здесь в туториале Реакта](https://reactjs.org/) целая куча примеров кода) - эти примеры должны быть написано моноширинными шрифтами и отличаться от обычного текста - по умолчанию достаточно обрамить код в тeг `<code>`.

## Подключаемые файлы

1. Все картинки, шрифты и тд должны иметь уникальное название в рамках проекта и не содержать кириллических символов. Если в проекте нет индивидуальных соглашений, то они должны именоваться в стиле lower-case-hyphenated

2. В проекте обязательно должен быть favicon.ico, подключаемый на всех страницах

   > Как это сделать используя webpack, очень хорошо написано в [этой статье](https://medium.com/tech-angels-publications/bundle-your-favicons-with-webpack-b69d834b2f53)

3. В сафари своя версия favicon, ее тоже обязательно надо настраивать

   > То есть нужна svg для контура иконки и нужен цвет для иконки при наведении. [Статья](https://yoast.com/dev-blog/safari-pinned-tab-icon-mask-icon/)

4. Прогонять картинки через [kraken.io](https://kraken.io/) или использовать свои CLI-утилиты для этого

5. Все фотографии и картинки, где нет прозрачности, делать в jpg

6. При нарезке картинок из фотошопа поставить DPI равным 72dpi, а саму картинку сохраняйте через "Save for Web"

7. Максимальная ширина картинки 1920 пикселей, если в макетах она больше - пропорционально ужимайте
   > На самом деле это правило спорно (как минимум для ретина дисплеев я не уверен), но следуйте ему, пока дизайнер не скажет другого
