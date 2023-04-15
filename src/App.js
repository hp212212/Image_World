import React from 'react';
import './Components/css/index.css'
import Footer from './Components/js/Footer';
import Header from './Components/js/Header';
import Middle from './Components/js/Middle';

function App() {
  return (
    <>
      <div className='Main'>
        <Header />
        <Middle />
        <Footer />
      </div>
    </>
  );
}

export default App;
