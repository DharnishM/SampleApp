import Route from '@ember/routing/route';

export default class ShowsRoute extends Route {
    async model(){
        let movie = await fetch('/api/movies.json');
            let {movies} = await movie.json();
            movies=movies.slice(0,4);
            return movies.map((model)=>{
                let {title,release_date,vote_average,poster_path}=model;
                return{title,release_date,vote_average,poster_path};
            });
    }
}
