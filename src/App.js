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
    setMovies({movies})
    console.log(movies)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => getMovies(), []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home movies={movies}/>}/>
        <Route path='/movies/:id' render={(rp) => (
                    <Movies movies={movies} URL={URL}
                    {...rp} />
                )} />
        <Route path='/watchlist' element={<WatchList movies={movies}/>}/>
        <Route path='/watching' element={<Watching movies={movies}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
