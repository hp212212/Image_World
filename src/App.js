import React, { useState } from 'react';
import './Components/css/index.css'
import Footer from './Components/js/Footer';
import Header from './Components/js/Header';
import Middle from './Components/js/Middle';

function App() {
  const [Images, setImages] = useState([])

  const fetchData = () => {
    fetch("https://api.unsplash.com/search/photos?client_id=Bb-6szc-iyrTPIG_IFgEl2Rt3-HiUOLaOVA0bfbKJQU&page=1&query=dog")
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        for (let i of data.results) {
          Images.push(i.urls.regular)
        }
        setImages([Images])
      });
  }
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
