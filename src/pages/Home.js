import {Link} from 'react-router-dom';
import {Wrapper, Container} from "./Home-styled";

const Home = ({movies}) => {

    const loaded = () => {
    return( 
        <Wrapper>
            <h1>Your Movies</h1>
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
        return <h1>Loading...</h1>
    };

    return movies ? loaded() : loading();
};

export default Home;