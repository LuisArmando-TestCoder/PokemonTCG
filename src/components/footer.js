import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
          <footer>
            <a href='#'>Up</a>
            <p>
              <strong>Pokémon TCG API eater</strong> by {' '}
              <a href='https://github.com/LuisArmando-TestCoder'>LuisArmando-TestCoder</a>
            </p>
            <p>
              This website is not produced, endorsed, supported,
              or affiliated with Nintendo or The Pokémon Company.
            </p>
          </footer>
        );
    }
}

export default Footer;