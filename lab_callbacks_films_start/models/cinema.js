const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(film => film.title);
};

Cinema.prototype.filmByTitle = function (title) {
  return this.films.find((film) => {
    return film.title === title;
  });
};

Cinema.prototype.filmsByYear = function (year){ 
  return this.films.some((film) => {
    return film.year === year;
  });
};

Cinema.prototype.filmByLength = function (length){
  return this.films.every((film) => {
    return film.length === length;
  });
};

Cinema.prototype.calculateCombinedFilmLength = function () {
  const totalLength = this.films.reduce((total, film) => {
    return total += film.length; 
  }, 0);
  return totalLength;
};

// Cinema.prototype.filterByGenre = function (genre){
//   return this.films.filter((film) => {
//     return film.genre === genre;
//   });
// };

Cinema.prototype.filmsByProperty = function (prop, value) {
  return this.films.filter((film) => {
    return film[prop] === value;
    });
  };

module.exports = Cinema;
