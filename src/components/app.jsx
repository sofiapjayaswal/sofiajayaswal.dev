import React from 'react';
import { motion } from 'framer-motion';
import About from './about';
import Experience from './experience';
import Footer from './footer';
import Header from './header';
import Home from './home';

function App() {
  return (
    <div id="main">
      <Header />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div id="content">
          <Home />
          <About />
          <Experience />
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}
export default App;
