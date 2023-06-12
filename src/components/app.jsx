import React from 'react';
import About from './about';
import Experience from './experience';
// import Experience from './experience';
// import Experience from './experience';
import Header from './header';
import Home from './home';

function App() {
  return (
    <div id="main">
      <Header />
      <div id="content">
        <Home />
        <About />
        <Experience />
      </div>
    </div>
  );
}
export default App;
