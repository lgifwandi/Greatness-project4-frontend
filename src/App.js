import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Watching from './pages/Watching';
import WatchList from './pages/WatchList';
import Movies from './pages/Movies';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies/:id' element={<Movies />}/>
        <Route path='/watchlist' element={<WatchList />}/>
        <Route path='/watching' element={<Watching />}/>
      </Routes>
      
    </div>
  );
}

export default App;
