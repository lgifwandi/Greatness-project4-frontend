import {useState} from 'react';
const UpdateMovieForm = ({movie}) => {
    console.log(movie)
    const [editForm, setEditForm] = useState(movie);
    return(
       <form></form>
    )
}

export default UpdateMovieForm;