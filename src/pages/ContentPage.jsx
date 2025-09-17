import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'
import './Content.css'

export const ContentPage = () => {
  return (
    <div className='page'>
        <Sidebar/>
        <Main/>
    </div>
  )
}
