import {Link} from 'react-router-dom';

const Watching = (props) => {
    const movies = props.movies;
   console.log(movies)
    return(
        <div>
            <h1>Watching</h1>
            {movies.map((movie) => {
                if (movie.watchlists.completed) {
                    <div key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                        <img src={movie.image} alt={movie.title}/></Link>
                    </div>
                }
            })}
        </div>
    )
}

export default Watching;