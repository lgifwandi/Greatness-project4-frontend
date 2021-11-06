import './App.css';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Watching from './pages/Watching';
import WatchList from './pages/WatchList';
import Movies from './pages/Movies';

function App() {
  const [movies, setMovies] = useState(null);
  const URL = 'http://localhost:3000/movies';
  
  const getMovies = async () => {
    try {
    const movies = await fetch(URL).then(response => response.json())
    setMovies(movies)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => getMovies(), []);

  async function handleUpdate(reviewForm) {
    try {
      const {rating, review, id} = reviewForm;
      const movies = await fetch(`${URL}/${id}`, {method: "PUT",
    headers: {
      'Content-Type': "Application/json"
    }, body: JSON.stringify({review, rating})}).then(res => res.JSON())
    setMovies({movies})
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home movies={movies}/>}/>
        <Route path='/movies/:id' element={<Movies movies={movies}/>} />
        <Route path='/watchlist' element={<WatchList movies={movies}/>}/>
        <Route path='/watching' element={<Watching movies={movies}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
