import AddMovieForm from "../components/AddMovieForm";
import {Wrapper} from './AddMovies-styled';

const AddMovie = (props) => {
    return(
        <Wrapper>
            <h1>Add A Movie</h1>
            <h2>Not seeing your favorite movie? Add it to the list!</h2>
            <AddMovieForm handleAdd={props.handleAdd}/>
        </Wrapper>
    )
};

export default AddMovie;