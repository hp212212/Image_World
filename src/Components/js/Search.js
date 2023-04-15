import React from 'react'

export default function Search() {
  return (
    <>
      <div className='SearchMain'>
        <form>
          <input type='text' placeholder='Search By Key Word' aria-label="lorem ipsum"/>
          <button className='SearchButton'>Search</button>
        </form>
      </div>
    </>
  )
}
