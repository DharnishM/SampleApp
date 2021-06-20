import Route from '@ember/routing/route';

export default class BookingRoute extends Route {
    async model(){
            let movie = await fetch('/api/movies.json');
            let {movies} = await movie.json();
            return movies.map((model)=>{
                let {title,release_date,vote_average,poster_path,id}=model;
                return{title,release_date,vote_average,poster_path,id};
            });  
    }
} 