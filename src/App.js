import React, { Component } from 'react';
import Pages from './pages';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="container">
            <Pages />
        </section>
      </React.Fragment>
    );
  }
}

export default App;