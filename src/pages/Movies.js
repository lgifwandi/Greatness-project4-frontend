import { useParams } from "react-router";

const Movies = (props) => {
    const {id} = useParams();
    const movies = props.movies;
    let movie = []
    
    movies.map((item) => {
         if(item.id == id) {
             movie = item
         }
     })
    
    console.log(id)
    console.log(movies)
    console.log(movie)
   

    return(
        <div>
            <img src={movie.image} alt={movie.title}/>
            <h1>{movie.title}</h1>
            <h3>{movie.description}</h3>
        </div>
    )
};

export default Movies;