import { useParams } from "react-router";
import WatchedForm from "../components/WatchedForm";

const Movies = ({movies, handleAddWatched}) => {   
    console.log(handleAddWatched)
    const {id} = useParams();
    let movie = []
    console.log(movies);
    
    {movies.map((item) => {
        if(item.id == id) {
        return movie = item
        }
    })}
   
    return(
        <div>
            <img src={movie.image} alt={movie.title}/>
            <h1>{movie.title}</h1>
            <h3>{movie.description}</h3>
            <h3>{movie.movie_rating}</h3>
            <h3>{movie.release_date}</h3>
            <h3>{movie.genre}</h3>

           <WatchedForm handleAddWatched={handleAddWatched}/>
        </div>
    )
};

export default Movies;