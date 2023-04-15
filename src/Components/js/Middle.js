import React from 'react'
import Search from './Search'
import Images from './Images'
import Pagination from './Pagination'
import '../css/Middle.css'

export default function Middle() {
  return (
    <>
      <div className='Middle'>
        <Search />
        <Images />
        <Pagination />
      </div>
    </>
  )
}
