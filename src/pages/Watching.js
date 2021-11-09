import {Link} from 'react-router-dom';

const Watching = ({movies}) => {
   console.log(movies)
   let listMovie = [];
   {movies.map((movie) => {
       if(movie.watchlists[0]) {
           listMovie.push(movie)
       }
    })}
    console.log(listMovie)
    return(
        <div>
            <h1>Watching</h1>
            {listMovie.map((item) => (
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