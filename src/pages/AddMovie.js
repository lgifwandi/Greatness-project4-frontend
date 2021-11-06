const AddMovie = (props) => {
    return(
        <div>
            <h1>Add A Movie</h1>
            <h2>Not seeing your favorite movie? Add it to the list!</h2>
            <AddMovieForm handleAdd={props.handleAdd}/>
        </div>
    )
};

export default AddMovie;