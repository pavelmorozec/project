const  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB ={
    count: numberOfFilms,
    movies : {},
    actors: {},
    genres:[],
    private: false
};

      for(let i=0; i<2; i++)
      {
        const a = prompt("Один из последних просмотренных фильмов?",""),
              b = prompt("На сколько оцените его?");

        if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
            personalMovieDB.movies[a]=b;
            console.log("Status: OK");
        } else{
            console.log("Error data not avaliable");
            i--;
        }
      }

      let message = (personalMovieDB.count <= 10 ) ? 'Просмотрено довольно мало фильмов':
        (personalMovieDB.count >10 && personalMovieDB.count <= 30) ? 'Вы класический зритель':
        (personalMovieDB.count > 30) ? 'Вы киноман':
        'произошла ошибка';

        alert(message);

      console.log(personalMovieDB);