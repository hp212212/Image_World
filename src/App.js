import React from 'react';
import './Components/css/index.css'
import Footer from './Components/js/Footer';
import Header from './Components/js/Header';
import MiddleByPagination from './Components/js/MiddleByPagination';

function App() {
  return (
    <>
      <div className='Main'>
        <Header />
        <MiddleByPagination />
        <Footer />
      </div>
    </>
  );
}

export default App;
