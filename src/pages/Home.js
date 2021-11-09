import { Link } from "react-router-dom";
import { Wrapper, Container } from "./Home-styled";
import { useEffect, useState } from "react";

const Home = ({ movies }) => {
  const loaded = () => {
    return (
      <Wrapper>
        <h1>Movies</h1>
        <div className="movie-grid">
          {movies.map((movie) => (
            <Container key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <div className="movie-hov">
                  <div className="bck-shadow">b</div>
                  <img
                    className="movie-img"
                    src={movie.image}
                    alt={movie.title}
                  />
                </div>
              </Link>
            </Container>
          ))}
        </div>
      </Wrapper>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return movies ? loaded() : loading();
};

export default Home;
