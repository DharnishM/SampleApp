import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let movie = await fetch('/api/movies.json');
    let { movies } = await movie.json();
    movies = movies.slice(5, 13);
    return movies.map((model) => {
      let { title, release_date, vote_average, poster_path } = model;
      return { title, release_date, vote_average, poster_path };
    });
  }
}
