import {Link} from 'react-router-dom';

const Home = (props) => {
    const loaded = () => {
    return( 
        <div>
            <h1>Home Page</h1>
            <button>Button</button>
        </div>
    )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    };

    return props.movies ? loaded() : loading();
};

export default Home;