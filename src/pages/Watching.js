import {Link} from 'react-router-dom';

const Watching = ({movies, watchlists}) => {
   console.log(movies)
   let watchedMovie = []
   let review = []
   {movies.map((movie) => {
       if(movie.watchlists[0]) {
           if (movie.watchlists[0].completed)
           watchedMovie.push(movie)
           review.push(movie.watchlists[0].movie_review)
       }
    })}
    console.log(review)
    return(
        <div>
            <h1>Watched</h1>
            {watchedMovie.map((item) => (
                <div key={item.id}>
                    <Link to={`/movies/${item.id}`}>
                    <img src={item.image} alt={item.title}/>
                    </Link>
                    <h2>{item.title}</h2>
                    <h3>Review</h3>
                    <p>{review[0]}</p>
                </div>
            ))} 
        </div>
    )
}

export default Watching;