import { Link } from "react-router-dom";

import Nav from "../components/Nav/Nav.js";

const Home = (props) => {
  const loaded = () => {
    return (
      <div>
        <Nav />
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return props.movies ? loaded() : loading();
};

export default Home;
