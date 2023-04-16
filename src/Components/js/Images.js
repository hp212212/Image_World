import React, { useState } from 'react'

export default function Images(Props) {
  const [ShowIndex, setShowIndex] = useState()
  // if (!ShowIndex) {
  //   document.getElementById('Img-Not-Found').style.display = 'flex'
  //   document.getElementById('Img-Found').style.display = 'none'
  // }
  const OpenModel = (index) => {
    setShowIndex(index)
    document.getElementById('Model-container').style.display = 'block';
    // document.getElementById('ModelImage').style.transform = 'scaleX(1)';
  }
  const ssss = () => { document.getElementById('Model-container').style.display = 'none' }
  return (
    <>
      <div className='ImagesMain'>
        <div className='Images-NotFound' id='Img-Not-Found' style={{ display: Props.notfound }}>
          <h1>Sorry</h1>
          <h1>No Image Found !!!</h1>
        </div>
        <div className='ImagesMain-container' id='Img-Found' style={{ display: Props.found }}>
          <div className='Result-For'>
            Result For : <span>{Props.Name}</span>
          </div>
          {
            Props.images.map((image, index) => {
              return (
                <img
                  src={`${image}&fm=webp&auto=compress&w=200`}
                  alt="Hitesh"
                  key={index}
                  onClick={() => OpenModel(index)}
                />
              )
            })
          }
        </div>
        <div className='Model-container' id='Model-container' onClick={ssss}>
          <div className='Model-container-inner'>
            <img src={Props.images[ShowIndex]} alt="Hitesh" id='ModelImage' onClick={() => document.getElementById('Model-container').style.display = 'flex'} />
          </div>
        </div>
      </div>
    </>
  )
}
