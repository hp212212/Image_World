import React, { useState, useEffect } from 'react'
import Images from './Images'
import '../css/Middle.css'
import next from '../Assets/Images/next.svg'
import previous from '../Assets/Images/previous.svg'
import First from '../Assets/Images/First.svg'
import Last from '../Assets/Images/Last.svg'
import { DefultImages } from './Service'

export default function Middle() {
  let [Pages, setPages] = useState([])
  let DefultImg = DefultImages()
  const [Input, setInput] = useState('')
  const [AllImages, setAllImages] = useState(DefultImg)
  let [Current, setCurrent] = useState(1)
  let [MaxPageLimit, setMaxPageLimit] = useState(3)
  let [MinPageLimit, setMinPageLimit] = useState(0)

  const SearchSubmit = (e) => {
    e.preventDefault();
    if (Input === '') {
      alert('Input Field Must Be Non-Empty!!')
    } else {
      let TempImg = []
      fetch(`https://api.unsplash.com/search/photos?client_id=Bb-6szc-iyrTPIG_IFgEl2Rt3-HiUOLaOVA0bfbKJQU&page=${Current}&query=${Input}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          for (let i of data.results) {
            TempImg.push(i.urls.regular)
          }
          setAllImages(TempImg)
          Pages = []
          for (let i = 1; i < (data.total_pages) + 1; i++) {
            Pages.push(i)
          }
          setPages(Pages)
        });
      setInput('')
    }
  }

  const PageNumbersRow = Pages.map((kaka, index) => {
    if (kaka < (MaxPageLimit) + 2 && kaka > MinPageLimit) {
      return (
        <p
          key={kaka}
          id={kaka}
          onClick={(event) => { setCurrent(Number(event.target.id)) }}
          className={Current === kaka ? "active" : null}
        >{kaka}</p>
      )
    } else {
      return null;
    }
  })

  useEffect(() => {
    setMaxPageLimit(Current + 1)
    setMinPageLimit(Current - 3)
    SearchSubmit(event)
  }, [Current])


  return (
    <>
      <div className='Middle'>
        <div className='SearchMain'>
          <form onSubmit={SearchSubmit}>
            <input type='text' id='SearchInput' value={Input || ''} autoComplete='off' placeholder='Search By Key Word' aria-label="lorem ipsum" onChange={(event) => { setInput(event.target.value) }} />
            {/* <button className='SearchButton'>Search</button> */}
          </form>
        </div>
        <Images images={AllImages} />
        <div className='PaginationMain'>
          <img src={First} alt="Hitesh" onClick={() => setCurrent(1)} />
          <img src={previous} alt="Hitesh"
            onClick={() => {
              if (Current !== Pages[0]) {
                setCurrent(Current + 1)
              }
            }}
          />
          <div className='Numbers'>
            {PageNumbersRow}
          </div>

          <img src={next} alt="Hitesh"
            onClick={() => {
              if (Current !== Pages[Pages.length - 1]) {
                setCurrent(Current + 1)
              }
            }}
          />
          <img src={Last} alt="Hitesh" onClick={() => setCurrent(Pages.length)} />
        </div>
      </div>
    </>
  )
}
