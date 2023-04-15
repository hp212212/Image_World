import React, { useState } from 'react'
import Images from './Images'
import '../css/Middle.css'
import next from '../Assets/Images/next.svg'
import previous from '../Assets/Images/previous.svg'
import First from '../Assets/Images/First.svg'
import Last from '../Assets/Images/Last.svg'
import { DefultImages } from './Service'

export default function Middle() {
  let DefultImg = DefultImages()
  const [Input, setInput] = useState('')
  const [AllImages, setAllImages] = useState(DefultImg)
  const SearchSubmit = (e) => {
    e.preventDefault();
    if (Input === '') {
      alert('Input Field Must Be Non-Empty!!')
    } else {
      let TempImg = []
      fetch(`https://api.unsplash.com/search/photos?client_id=Bb-6szc-iyrTPIG_IFgEl2Rt3-HiUOLaOVA0bfbKJQU&page=1&query=${Input}`)
        .then(response => response.json())
        .then(data => {
          console.log(data.results)
          for (let i of data.results) {
            TempImg.push(i.urls.regular)
          }
          setAllImages(TempImg)
        });
    }
  }
  return (
    <>
      <div className='Middle'>
        <div className='SearchMain'>
          <form onSubmit={SearchSubmit}>
            <input type='text' id='SearchInput' value={Input || ''} placeholder='Search By Key Word' aria-label="lorem ipsum" onChange={(event) => { setInput(event.target.value) }} />
            {/* <button className='SearchButton'>Search</button> */}
          </form>
        </div>
        <Images res={AllImages} />
        <div className='PaginationMain'>
          <img src={First} alt="Hitesh" />
          <img src={previous} alt="Hitesh" />
          <div className='Numbers'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
          <img src={next} alt="Hitesh" />
          <img src={Last} alt="Hitesh" />
        </div>
      </div>
    </>
  )
}
