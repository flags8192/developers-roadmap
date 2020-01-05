1. **Читаемость первостепенна!**
    > Любое решение в первую очередь должно быть понятным и разбитым на логичные части, чтобы другие члены команды могли разобраться не только в назначении кода, но и в применяемых решениях без дополнительных оговорок.

2. **Все, что может быть написано на чистых html+css в рамках тех свойств, что дают заявленные браузеры - должно быть написано без применения JS**;
    > Это правило не должно противоречить предыдущему пункту.   
    > Это очень важное правило, так как:
    > * Часто излишнее использование скриптов вводит других разработчиков в заблуждение, особенно, когда посреди работы скрипт внезапно меняет какие-либо свойства элемента;
    > * Это уменьшает производительность веб-приложения;
    > * Как правило код, написанный на html+css, гораздо проще изменять.    
    > Если реализация функционала на html+css возможна только с применением разных хаков, то тут уже стоит переходить на JS, чтобы поддерживаемость проекта не падала.

3. **Избегать неявных критических зависимостей**;
    > Иногда на проекте могут возникнуть задачи, решая которые вы делаете систему уязвимой в плане падения, а не взлома. Пример из реальной жизни - подсчет суммы заказа на клиенте. Так как любым расчетам на клиенте нельзя доверять (ведь любой может простым HTTP запросом и другую цену послать), надо было сделать отдельный код на сервере, и при несовпадении значений заказ отклонять. Такого в идеале надо избегать по максимуму, но если это все-таки необходимо оставить в проекте, то надо сделать решение максимально безопасным (предусмотреть все случаи падений и зафиксить их + обязательно мгновенно уведомлять админов, если что-то пошло не так) и щедро осыпать комментариями и тестами.    
    > Вторым примером будет, когда вы в коде опираетесь на что-то из базы данных. Если в базе таких значений не будет и ваша система упала - 99% что это ваша вина, даже если заполнение конкретно этого типа данных было священной обязанностью админов, которые прохалтурили.

4. **[Библиотеки](./libraries.md)**;

5. **[Хорошие практики](./goodPractice.md)**;

6. **[jQuery](./jQuery.md)**;

7. **[React](./react.md)**;

8. **[Архитектура](./architecture.md)**;

9. **[Производительность](./performance.md)**;

10. **Безопасность**;
    * [Browser Security Handbook from Google](https://code.google.com/archive/p/browsersec/wikis/Main.wiki);
    * [HTML5 Security Cheatsheet](https://html5sec.org/#javascript);
    * [Web Security Basics](https://github.com/vasanthk/web-security-basics).