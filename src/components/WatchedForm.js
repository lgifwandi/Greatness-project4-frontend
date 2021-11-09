import {useState} from 'react';

const WatchedForm = ({handleAddWatched, id}) => {
    const [checkedComplete, setCheckedComplete] = useState(true)
    const [checkedToWatch, setCheckedToWatch] = useState(true)
    const [watchlistForm, setWatchlistForm] = useState(
        {
            completed: {checkedComplete},
            to_watch: {checkedToWatch},
            movie_review: '',
            movie_id: id,
        }

    )

    const handleChangeComplete = () => {
        setCheckedComplete(!checkedComplete)
    }
    const handleChangeToWatch = () => {
        setCheckedToWatch(!checkedToWatch)
    }
    const handleChange = ((event) => {
        setWatchlistForm(prevState => ({
            ...prevState,
            [event.target.id] : event.target.value
        }))
    })

    const handleSubmit = ((event) => {
        event.preventDefault();
        handleAddWatched(watchlistForm)
        setWatchlistForm(
            {
                completed: {checkedComplete},
                to_watch: {checkedToWatch},
                movie_review: '',
                movie_id: '',
            }
        )
        
    })
    return(
        <form onSubmit={handleSubmit}>
            <label>Have Watched: 
                <input type='checkbox' onChange={handleChangeComplete} id="completed" name="completed" value={checkedComplete}/>
            </label>Want To Watch: 
            <label>
                <input type='checkbox' onChange={handleChangeToWatch} id="to_watch" name="to_watch" value={checkedToWatch}/>
            </label>
            <label>Review:
                <input type='text' onChange={handleChange} id="movie_review" name="movie_review"value={watchlistForm.movie_review}/>
            </label>
            <label>
                <input type='hidden' value={watchlistForm.movie_id} id='movie_review' name='movie_review'onChange={handleChange} id="movie_id"/>
            </label>
            <input type="submit" value="Add To List"/>
        </form>
    )
};


export default WatchedForm;