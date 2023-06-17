# Spectre-movie-streaming-service
**Spectre** - это стриминговый сервис на основе подписки, который позволяет нашим пользователям смотреть фильмы, мультфильмы на устройстве, подключенном к Интернету.

Веб-приложение Spectre включает в себя: 
- Удобный и красивый интерфейс
- Различные фильтрации фильмов
- Страницы актеров и информация о них
- Отдельные страницы фильмов
- Панель администратора
- Личный кабинет пользователя
- Список фильмов для просмотра позже
- Рейтинги и комментарии к фильмам и актерам
- Сохранение времени просмотра, для продолжения в любое другое время в места остановки
- Поиск фильмов и актеров
- Полная информация о фильмах
- Сохранение истории просмотров фильмов

**Backend** часть была реализована на **NodeJS**, **Express**. В качестве СУБД был выбран **MongoDB**.
**Frontend** был разработан на **React**, **Typescript**.
Также были использованы другие различные фреймворки и библиотеки, их список вы можете посмотреть в файлах package.json.

**Интерфейс кинотеатра**
**Страницы регистрации и авторизации**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/507555ec-fc74-4139-82c1-906b4729bd7e)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/8cf826aa-266d-4dd4-bbc7-f019478e34c3)
Все поля для ввода имеют валидации как на клиенте так и на сервере. На сервере была использована библиотека Express-Validator.
Для безопасного хранения пароля, была использована библиотека bcrypt.

**Главная страница кинотеатра**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/eb9e01c2-ce38-4356-b065-ff483cb64e37)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/d71fcd00-8556-4e5c-b4af-c3553b31929e)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/63faa979-8401-4cb2-92b1-7800c1e6115f)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/b2cb53c7-04cc-4068-8e07-94667d1b8e90)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/dfd13926-1d73-4882-bc75-977c80951dab)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/23aac3ba-d5a6-4113-839d-d28158102b9e)
Тут для слайдера использована библиотека React-slick. Все было реализовано с идеей того, чтобы пользователь как можно меньше нажимал на кнопку мыши.

**Страница отдельного фильма**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/9569462d-9513-439e-a922-cd8a7ef11cfb)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/17844ed2-1ae9-45a4-996e-4fb8669c6a3b)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/3ee304f7-8a8a-4caf-981b-9bce96cd134f)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/84a860b7-c080-4c98-9e4b-8c13020a4718)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/15f58918-8d17-40d3-a029-1782e6c64ab0)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/10ecc87b-e7df-437f-b5ef-dc83c6fc2f90)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/5a4659da-78c5-43a5-abcd-c196b4ed5787)
На этой странице пользователь может начать просмотр фильма, прочитать информацию о фильме, познакомится с актерским составом, оставить комментарии и рейтинги.

**Страница просмотра**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/c09003a0-6fce-4120-95a0-f2b01ae9d2ba)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/a84b3d3c-c121-47c5-a064-9977b8f55625)
Как можно увидеть на картинках, если пользователь смотрел фильм, остановился и вернулся к просмотру через какое-то время, то он увидит перед собой модальное окно, которое предложит продолжить просмотр.

**Страница фильтрации**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/f024f483-c253-4536-9d9b-673f07f66316)
Пользователю доступны фильтрации по: жанру, году, рейтингу, языку.

**Страница актеров**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/8962f4bf-1576-48f9-98c4-9011d805658d)
На этой странице пользователь может увидеть всех доступных актеров, также может искать по имени.

**Страница актера**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/1a541936-9943-4783-8661-29b95c471c9f)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/560b794d-7731-4b67-b3b0-9737642b1bdc)
Пользователь может оставить свое мнение об этом актере.

А так выглядит страница актера, если в кинотеатр уже добавлены фильмы с этим актером.
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/8fef6442-081c-4c5f-b216-2cccd2614a39)

**Панель администратора**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/8105a909-8a61-4b0f-b01b-740aa050c3bd)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/a60f42b9-3286-4714-99d6-5d6cbdd40830)


# Spectre-movie-streaming-service
**Spectre** is a subscription-based streaming service that allows our users to watch movies, cartoons on an internet-connected device.

The Spectre web application includes: 
- User-friendly and beautiful interface
- Various filterings of movies
- Actors' pages and information about them
- Individual movie pages
- Admin Panel
- User's personal account
- List of movies to watch later
- Ratings and comments on films and actors
- Save the viewing time, to continue at any other time at the stop location
- Search for movies and actors
- Full information about the films
- Saving movie viewing history

**Backend** part was implemented on **Node JS**, **Express**. **MongoDB** was selected as the DBMS.
**Frontend** was developed on **React**, **Typescript**.
Various other frameworks and libraries were also used, you can see a list of them in the package.json files.

**Interface**
**Registration and authorization pages**:
![![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/507555ec-fc74-4139-82 c1-906b4729bd7e)
![![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/8cf826aa-266 d4dd 4-bbc7-f019478e34c3)
All input fields have validations both on the client and on the server. The Express-Validator library was used on the server.
For secure password storage, the bcrypt library was used.

**Home page of the cinema**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/eb9e01c2-ce38-4356-b065-ff483cb64e37)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/d71fcd00-8556-4e5c-b4af-c3553b31929e)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/63faa979-8401-4cb2-92b1-7800c1e6115f)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/b2cb53c7-04cc-4068-8e07-94667d1b8e90)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/dfd13926-1d73-4882-bc75-977c80951dab)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/23aac3ba-d5a6-4113-839d-d28158102b9e )
Here the React-slick library is used for the slider. Everything was implemented with the idea that the user should click on the mouse button as little as possible.

**Individual movie page**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/9569462d-9513-439e-a922-cd8a7ef11cfb)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/17844ed2-1ae9-45a4-996e-4fb8669c6a3b)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/3ee304f7-8a8a-4caf-981b-9bce96cd134f)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/84a860b7-c080-4c98-9e4b-8c13020a4718)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/15f58918-8d17-40d3-a029-1782e6c64ab0)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/10ecc87b-e7df-437f-b5ef-dc83c6fc2f90)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/5a4659da-78c5-43a5-abcd-c196b4ed5787)
On this page, the user can start watching the movie, read information about the movie, get acquainted with the cast, leave comments and ratings.

**View page**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/c09003a0-6fce-4120-95a0-f2b01ae9d2ba)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/a84b3d3c-c121-47c5-a064-9977b8f55625)
As you can see in the pictures, if the user watched the movie, stopped and returned to viewing after some time, he will see a modal window in front of him, which will offer to continue viewing.

**Filtering page**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/f024f483-c253-4536-9d9b-673f07f66316 )
Filters are available to the user by: genre, year, rating, language.

**Actors Page**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/8962f4bf-1576-48f9-98c4-9011d805658d)
On this page, the user can see all the available actors, and can also search by name.

**Actor's page**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/1a541936-9943-4783-8661-29b95c471c9f)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/560b794d-7731-4b67-b3b0-9737642b1bdc)
The user can leave his opinion about this actor.

And this is how the actor's page looks if movies with this actor have already been added to the cinema.
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/8fef6442-081c-4c5f-b216-2cccd2614a39)

**Admin Panel**:
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/8105a909-8a61-4b0f-b01b-740aa050c3bd)
![image](https://github.com/AbdukarimAA/Spectre-movie-streaming-service/assets/93397997/d0d2ee1b-d588-4e95-968c-ea181a6ee14f)
