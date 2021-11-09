import {useState} from 'react';
const UpdateMovieForm = ({movie, handleMovieUpdate}) => {
    console.log(movie)
    const [editForm, setEditForm] = useState(movie);

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        handleMovieUpdate(editForm);
    }
    return(
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
         <input
          type="text"
          value={editForm.movie_rating}
          name="movie_rating"
          placeholder="movie_rating"
          onChange={handleChange}
        />
         <input
          type="text"
          value={editForm.release_date}
          name="release_date"
          placeholder="release_date"
          onChange={handleChange}
        />
         <input
          type="text"
          value={editForm.genre}
          name="genre"
          placeholder="genre"
          onChange={handleChange}
        />
        <input type="submit" value="Update Movie" />
      </form>
    )
}

export default UpdateMovieForm;