import {Link} from 'react-router-dom';
import {useState} from 'react';

const Watching = ({movies, watchlist, handleUpdate}) => {
   let watchedMovie = []
   let movieId
   {movies.map((movie) => {
       if(movie.watchlists[0]) {
           if (movie.watchlists[0].completed)
           movieId = movie.id
           watchedMovie.push(movie)
       }
    })}
    console.log(watchedMovie)
    const [updated, setUpdated] = useState(null)

    const handleChange = ((event) => {
        setUpdated(prevState => ({
            ...prevState,
            [event.target.id] : event.target.value
        }))
    })

    const handleSubmit = ((event) => {
        event.preventDefault()
        handleUpdate(updated)
    })
    
    return(
        <div>
            <h1>Watched</h1>
            {watchedMovie.map((item) => (
                <div key={item.id}>
                    <Link to={`/movies/${item.id}`}>
                    <img src={item.image} alt={item.title}/>
                    </Link>
                    <h2>{item.title}</h2>
                    <h2>Review</h2>
                    <p>{item.watchlists[0].movie_review}</p>
                    <form onSubmit={handleSubmit}>
                        <input type='text' value={item.watchlists[0].movie_review}onChange={handleChange} id="movie_review"/>
                        <input type="submit" value="update review"/>
                    </form>
                </div>
            ))} 
        </div>
    )
}

export default Watching;