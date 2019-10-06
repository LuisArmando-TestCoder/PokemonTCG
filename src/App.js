import React, { Component } from 'react';
import Pages from './pages';
import Nav from './components/nav';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <section className="container">
            <Pages />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;