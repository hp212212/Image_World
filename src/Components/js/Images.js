import React, { useState } from 'react'

export default function Images(Props) {
  const [ShowIndex, setShowIndex] = useState()
  const OpenModel = (index) => {
    setShowIndex(index)
    document.getElementById('Model-container').style.display = 'block';
    // document.getElementById('ModelImage').style.transform = 'scaleX(1)';
  }
  return (
    <>
      <div className='ImagesMain'>
        <div className='ImagesMain-container'>
          {
            Props.images.map((image, index) => {
              return (
                <img src={image} alt="Hitesh" key={index} onClick={() => OpenModel(index)} />
              )
            })
          }
        </div>
        <div className='Model-container' id='Model-container' onClick={() => document.getElementById('Model-container').style.display = 'none'}>
          <div className='Model-container-inner'>
            <img src={Props.images[ShowIndex]} alt="Hitesh" id='ModelImage' onClick={() => document.getElementById('Model-container').style.display = 'block'}/>
          </div>
        </div>
      </div>
    </>
  )
}
