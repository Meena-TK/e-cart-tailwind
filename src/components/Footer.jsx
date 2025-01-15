import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'300px'}} className='bg-violet-600 mt-6 p-5 w-full text-white'> 
      <div class="flex justify-between">
        {/* intro */}
        <div style={{width:'400px'}} >
         <Link className='text-2xl font-bold' to={'/'}><i className='fa-solid fa-truck-fast me-1'></i>Daily Cart
               </Link>
            <p class="mb-2">Designed and built with all the love in the world by the  with the help of our contributors</p>
            <p>Code licensed docs CC BY 3.0 </p>
            <p>Currently v5.3.3.</p>
        </div>

        {/* Link */}
        <div className='flex flex-col'>
          <h5 className='font-bold'>Links</h5>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
          <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>Cart Page</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}>Wishlist Page</Link>
        </div>

        {/* Guides */}
        <div className='flex flex-col'>
          <h5 className='font-bold'>Guides</h5>
          <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://react.dev/">React</a>
          <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
          <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.npmjs.com/package/react-router-dom">React Router</a>
        </div>

        {/* Contacts */}
        <div className='flex flex-col'>
          <h5 className='font-bold'>Contact Us</h5>
          <div className='flex justify-between mt-3'>
            <input type="text" placeholder='Email....' className='form-control me-2'  />
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='flex justify-between mt-3'>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://en.wikipedia.org/wiki/Twitter" ><i class="fa-brands fa-twitter"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.instagram.com/" ><i class="fa-brands fa-instagram"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.facebook.com/" ><i class="fa-brands fa-facebook"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.linkedin.com" ><i class="fa-brands fa-linkedin"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://github.com/" ><i class="fa-brands fa-github"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="/" ><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
        
      
      </div>
      <p className='text-center mt-3'>Copyright &copy May 2024 Batch, E Cart. Built with React Redux.</p>
    </div>
  )
}

export default Footer