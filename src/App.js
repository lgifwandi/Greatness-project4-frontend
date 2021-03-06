import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watching from "./pages/Watching";
import WatchList from "./pages/WatchList";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";
import Nav from "./components/Nav/Nav";

function App() {
  const [movies, setMovies] = useState();
  const [watchlist, setWatchlist] = useState();
  const URL = "http://localhost:3000/movies";
  const URL2 = "http://localhost:3000/watchlists";

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await fetch(URL).then((response) => response.json());
        setMovies(movies);
        console.log(movies);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, []);

  useEffect(() => {
    async function getWatchlist() {
      try {
        const watchlist = await fetch(URL2).then((response) => response.json());
        setWatchlist(watchlist);
        console.log(watchlist);
      } catch (error) {
        console.log(error);
      }
    }
    getWatchlist();
  }, []);

  async function handleAdd(formInputs) {
    try {
      const movies = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(formInputs),
      }).then((res) => res.json());
      setMovies({ movies });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate(listForm) {
    try {
      const { completed, to_watch, review, id } = listForm;
      const watchlist = await fetch(`${URL2}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ completed, to_watch, review }),
      }).then((res) => res.json());
      setWatchlist({ watchlist });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleMovieUpdate(form) {
    try {
      const { title, description, movie_rating, release_date, genre, id } =
        form;
      const watchlist = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          title,
          description,
          movie_rating,
          release_date,
          genre,
        }),
      }).then((res) => res.json());
      setMovies({ movies });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddWatched(formInputs) {
    try {
      const watched = await fetch(URL2, {
        method: "POST",

        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(formInputs),
      }).then((res) => res.json());

      setWatchlist({ watched });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(listId) {
    try {
      const watchlist = await fetch(`$URL2/${listId}`, {
        method: "DELETE",
      }).then((res) => res.json());

      setWatchlist({ watchlist });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteMovie(movieId) {
    try {
      const watchlist = await fetch(`${URL}/${movieId}`, {
        method: "DELETE",
      }).then((res) => res.json());

      setMovies({ movies });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home movies={movies}
        />}/>
        <Route path='/movies/:id' element={<Movies movies={movies} handleAddWatched={handleAddWatched} 
        handleMovieUpdate={handleMovieUpdate} 
        handleDeleteMovie={handleDeleteMovie}/>}/>
        <Route path='/watchlist' element={<WatchList movies={movies} 
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        watchlist={watchlist}/>}/>
        <Route path='/watching' element={<Watching movies={movies} watchlist={watchlist} handleUpdate={handleUpdate}/>}/>
        <Route path='/addmovies' element={<AddMovie handleAdd={handleAdd}/>}/>
      </ Routes>
    </div>
  );
}

export default App;
