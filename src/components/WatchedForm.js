import {useState} from 'react';

const WatchedForm = (props) => {
    const [watchedForm, setWatchedForm] = useState({
        completed: false,
        to_watch: false,
        movie_review: '',
        movie_id: ''
    });

    function handleChange(event) {
        setWatchedForm(prevState => ({
            ...prevState,
            [event.target.id] : event.target.value
        }))

    function handleSubmit(event){
        event.preventDefault();
        props.handleAddWatched(watchedForm);
        setWatchedForm({
            completed: false,
            to_watch: false,
            movie_review: '',
            movie_id: ''
        })
    };
    return(
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                name="completed"
                type="checked"
                value={watchedForm.completed}
                id="completed"
                />
                <input
                onChange={handleChange}
                name="to_watch"
                type="checked"
                value={watchedForm.to_watch}
                id="description"
                />
                <input
                onChange={handleChange}
                name="movie_review"
                placeholder="Movie Review"
                type="text"
                value={watchedForm.movie_review}
                id="movie_review"
                />
                <input
                onChange={handleChange}
                name="movie_id"
                placeholder="Movie ID"
                type="text"
                value={watchedForm.movie_id}
                id="movie_id"
                />
            <input type="submit" value="Add To List"/>
        </form>
    )
}
};

export default WatchedForm;