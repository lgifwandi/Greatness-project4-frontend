import {Link} from 'react-router-dom';
const WatchList = ({movies, watchlist, handleDelete}) => {

    let listMovie = [];
   {movies.map((movie) => {
       if(movie.watchlists[0]) {
           listMovie.push(movie)
       }
    })}
    return(
        <div>
        <h1>Watch List</h1>
        {listMovie.map((item) => (
                <div key={item.id}>
                    <Link to={`/movies/${item.id}`}>
                    <img src={item.image} alt={item.title}/>
                    </Link>
                    <button onClick={() => handleDelete(watchlist.id)} >X</button>
                </div>
            ))} 
        
        </div>
    )
};

export default WatchList;