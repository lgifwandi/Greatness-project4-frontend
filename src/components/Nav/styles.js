import styled from "styled-components";

export const Wrapper = styled.div`
  nav {
    top: 0;
    height: 4rem;
    background-color: #0a192f;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    justify-content: flex-end;
    align-items: center;
  }
  .nav-links {
    position: relative;
    display: inline-block;
    margin-right: 4rem;
  }

  #logo {
    padding: 7px;
    border-radius: 20px;
    color: #4cc9f0;
    position: absolute;
    left: 2rem;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    border: #08f7fe 2.5px solid;
    text-decoration: none;
  }
  #logo:hover {
    background-color: rgba(8, 247, 254, 0.2);
  }
  .links {
    text-transform: uppercase;
    font-weight: 400;
    border-radius: 25px;
    color: #c5d9e2;
    padding: 0px;
    display: inline-block;
    font-size: 1.05rem;
    text-transform: uppercase;
    text-decoration: none;
    transition: 0.7s ease;
  }
  .links:hover {
    color: #4cc9f0;
    transition: 0.6s;
  }
  .undr_line {
    content: "";
    position: absolute;
    margin-top: 4px;
    display: none;
    margin-left: 0px;
    text-align: center;
    height: 2px;
    width: 47px;
    background-color: #c5d9e2;
    padding: 0;
    transition: 300ms;
  }
`;
