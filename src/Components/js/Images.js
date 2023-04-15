import React from 'react'

export default function Images(Props) {
  return (
    <>
      <div className='ImagesMain'>
        <div className='ImagesMain-container'>
          <img src={Props.res[0]} alt="Hitesh" />
          <img src={Props.res[1]} alt="Hitesh" />
          <img src={Props.res[2]} alt="Hitesh" />
          <img src={Props.res[3]} alt="Hitesh" />
          <img src={Props.res[4]} alt="Hitesh" />
          <img src={Props.res[5]} alt="Hitesh" />
          <img src={Props.res[6]} alt="Hitesh" />
          <img src={Props.res[7]} alt="Hitesh" />
          <img src={Props.res[8]} alt="Hitesh" />
          <img src={Props.res[9]} alt="Hitesh" />
        </div>
      </div>
    </>
  )
}
