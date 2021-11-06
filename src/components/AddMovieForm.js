import {useState, useEffect} from 'react';
import Input from './Input';

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
        props.handleSubmit(formState);
      };

      useEffect(() => {
          if(props.movie) {
              setFormState({
                title,
                description,
                image,
                movie_rating,
                release_date,
                genre
              })
          }
      }, [props.movies])

    return(
<form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          name="title"
          placeholder="Movie Title"
          type="text"
          value={formState.title}
          id="title"
         />
         <Input
           handleChange={handleChange}
           name="Description"
           placeholder="Movie Description"
           type="text"
           value={formState.description}
           id="description"
        />
        <Input
          handleChange={handleChange}
          name="movie_rating"
          placeholder="Movie Rating"
          type="text"
          value={formState.movie_rating}
          id="movie_rating"
       />
        <Input
          handleChange={handleChange}
          name="image"
          placeholder="Image URL"
          type="text"
          value={formState.image}
          id="image"
       />
        <Input
          handleChange={handleChange}
          name="release_date"
          placeholder="Release Date"
          type="text"
          value={formState.release_date}
          id="release_date"
       />
        <Input
          handleChange={handleChange}
          name="genre"
          placeholder="Movie Genre"
          type="text"
          value={formState.genre}
          id="genre"
       />
        <input type="submit" value={props.movie ? "update this movie" : "add a movie"}/>
      </form>
    )
};

export default AddMovieForm;