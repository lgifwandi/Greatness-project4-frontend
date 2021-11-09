import {Link} from 'react-router-dom';

const Watching = ({movies}) => {
   console.log(movies)
   let watchedMovie = [];
   {movies.map((movie) => {
       if(movie.watchlists[0]) {
           if (movie.watchlists[0].completed)
           watchedMovie.push(movie)
       }
    })}
   
    return(
        <div>
            <h1>Watched</h1>
            {watchedMovie.map((item) => (
                <div key={item.id}>
                    <Link to={`/movies/${item.id}`}>
                    <img src={item.image} alt={item.title}/>
                    </Link>
                </div>
            ))} 
        </div>
    )
}

export default Watching;