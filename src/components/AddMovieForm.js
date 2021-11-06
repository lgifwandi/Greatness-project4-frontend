import {useState, useEffect} from 'react';
import {Wrapper, Button, Form} from './AddMovieForm-styled';

const AddMovieForm = (props) => {
    const [formState, setFormState] = useState({
        title: '',
        description: '',
        image: '',
        movie_rating: '',
        release_date: '',
        genre: ''
    })

    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.id] : event.target.value
        }))
    };

    function handleSubmit(event){
        event.preventDefault();
        props.handleAdd(formState);
        setFormState({
            title: '',
            description: '',
            image: '',
            movie_rating: '',
            release_date: '',
            genre: ''
          })
      };


    return(
        <Wrapper>
            <form onSubmit={handleSubmit}>
            <Form>
                <input
                onChange={handleChange}
                name="title"
                placeholder="Movie Title"
                type="text"
                value={formState.title}
                id="title"
                />
                <input
                onChange={handleChange}
                name="description"
                placeholder="Movie Description"
                type="text"
                value={formState.description}
                id="description"
                />
                <input
                onChange={handleChange}
                name="movie_rating"
                placeholder="Movie Rating"
                type="text"
                value={formState.movie_rating}
                id="movie_rating"
                />
                <input
                onChange={handleChange}
                name="image"
                placeholder="Image URL"
                type="text"
                value={formState.image}
                id="image"
                />
                <input
                onChange={handleChange}
                name="release_date"
                placeholder="Release Date"
                type="text"
                value={formState.release_date}
                id="release_date"
                />
                <input
                onChange={handleChange}
                name="genre"
                placeholder="Movie Genre"
                type="text"
                value={formState.genre}
                id="genre"
                />
                <Button>
                    <input type="submit" value='Add a Movie'/>
                </Button>
            </Form>
        </form>
      </Wrapper> 
    )
};

export default AddMovieForm;