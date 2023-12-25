import React from 'react';
import './SidebarServices.css'
import { Link } from 'react-router-dom';
// import brand from '../../assets/logo.png'
function Sidebar() {
  return (
    <>
    <div className='container_sidebar '>
   {/* <div className="logos">
   <img src={brand} height={'55px'} alt='K2 e-commerce Solutions' />
   </div>  */}
      <div className="sidebar">
      <Link to={'/services/seo'} className='sidebar_element'>Search Engine Optimization</Link>
      <Link to={'/services/smo'} className='sidebar_element'>Social Media Optimization</Link>
      <Link to={'/services/web-dev'} className='sidebar_element'>Web Development</Link>
      <Link to={'/services'} className='sidebar_element'>Digital Marketing</Link>
      <Link to={'/services'} className='sidebar_element'>Printed Slip</Link>
     
      <Link to={'/client'} className='sidebar_element'>Clients</Link>
      </div>
      </div>
    </>
  )
}

export default Sidebar;