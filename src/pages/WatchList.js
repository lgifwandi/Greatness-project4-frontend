const WatchList = (props) => {
    console.log(props.movies)
   
    return(
        <div>
        <h1>Watch List</h1>
        <button onClick={() => props.handleDelete(props.watchlist.id)} >X</button>
        </div>
    )
};

export default WatchList;