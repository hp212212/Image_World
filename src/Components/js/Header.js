import React from 'react'
import Sun from '../Assets/Images/sun-color-icon.svg'
import Moon from '../Assets/Images/moon-icon.svg'
import '../css/Header.css'

export default function Header() {
  return (
    <>
      <img src={Sun} alt="Hitesh" />
      <h1>Search Images</h1>
    </>
  )
}
