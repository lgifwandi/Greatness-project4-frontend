import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  .movie-grid {
    margin-top: auto;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(7, 200px);
    gap: 15px;
  }

  .movie-hov {
    position: relative;
    text-align: center;
    transition: transform 450ms;
  }
  .movie-img {
    height: 100%;
    width: 100%;
  }
  .title {
    transition: transform 850ms;
    display: none;
    font-size: 1.3rem;
    color: white;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    bottom: 1rem;
    left: 0;
    right: 0;
    text-align: center;
  }
  .bck-shadow {
    transition: transform 850ms;
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
  }
  .movie-hov:hover {
    transform: scale(1.08);
  }

  .movie-hov:hover .bck-shadow {
    display: block;
  }

  ${
    "" /* {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
    justify-content: space-evenly;
  }
  h1 {
    flex: 100%;
    text-align: center;
    padding: 20px;
  }

  a {
    width: 7rem;
  } */
  }
`;

export const Container = styled.div``;
