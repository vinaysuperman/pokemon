import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container >
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
       Pokemons
      </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavBar