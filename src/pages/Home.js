
import {Link} from 'react-router-dom';
import {Wrapper, Container} from "./Home-styled";
import Nav from "../components/Nav/Nav.js";

const Home = ({movies}) => {

    const loaded = () => {
    return( 
        <Wrapper>
        <Nav />
            <h1>Movies</h1>
            {movies.map(movie => 
            (<Container key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                    <img src={movie.image} alt={movie.title}/>
                </Link>
            </Container>)
        )}
        </Wrapper>
    )
    }


  const loading = () => {
    return <h1>Loading...</h1>;
  };


    return movies ? loaded() : loading();

};

export default Home;
