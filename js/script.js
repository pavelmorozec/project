'use strict';

let numberOfFilms;


function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("Status: OK");
    } else {
      console.log("Error data not avaliable");
      i--;
    }
  }
}

//rememberMyFilms();

function detectedPersonalLevel() {
  let message = (personalMovieDB.count <= 10) ? 'Просмотрено довольно мало фильмов' :
    (personalMovieDB.count > 10 && personalMovieDB.count <= 30) ? 'Вы класический зритель' :
    (personalMovieDB.count > 30) ? 'Вы киноман' :
    'произошла ошибка';

  alert(message);
}

//rememberMyFilms();
//detectedPersonalLevel();
writeYourGenres();
showMyDB();



function showMyDB() {
  if (!personalMovieDB.private)
    console.log(personalMovieDB);
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

  }
}