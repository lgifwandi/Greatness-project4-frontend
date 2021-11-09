import { useParams } from "react-router";
import WatchedForm from "../components/WatchedForm";
import UpdateMovieForm from "../components/UpdateMovieForm";

const Movies = ({movies, handleAddWatched, handleDeleteMovie}) => {   
    const {id} = useParams();
    let movie = []
    console.log(movies);
    
    {movies.map((item) => {
        if(item.id == id) {
        return movie = item
        }
    })}
   
    return(
        <div className="show-div">
            <img className="image-show" src={movie.image} alt={movie.title}/>
            <div className="show-text">
            <h1>{movie.title}</h1>
            <h3>{movie.description}</h3>
            <h3>{movie.movie_rating}</h3>
            <h3>{movie.release_date}</h3>
            <h3>{movie.genre}</h3>
            

           <WatchedForm id={id}handleAddWatched={handleAddWatched}/>

           <UpdateMovieForm movie={movie}/>
           </div>
        </div>
    )
};

export default Movies;