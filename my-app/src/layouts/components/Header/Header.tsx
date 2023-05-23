import React from 'react'
import './Header.scss'
import Navbar from '../Navbar/Navbar'
import Menu from '../Menu/Menu'

const PageHeader: React.FC = () => {

  return (
    <div className='header'>
      <div className="wrapper">
        <div className="top">
          <Navbar/>
        </div>
        <div className="border-radius"></div>
        <div className="bottom">
          <Menu/>
        </div>
        <div className="border-radius"></div>
      </div>
    </div>
  )
}
export default PageHeader
