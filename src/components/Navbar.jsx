import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-[#212731]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D1D6DA]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Categories</a></li>
      <li><a>Website Builder</a></li>
      <li><a>Today's Deals</a></li>
      </ul>
    </div>
  
  </div>
  <div className="navbar-center lg:hidden"> <ul className="menu menu-horizontal px-1 text-[#D1D6DA] items-center gap-16 font-inter">
      <li><div className='bg-[#FFFFFF] ring-[1px] ring-[#E1E4E6] hover:bg-white p-0 px-4'><img src="/search.svg" alt="" /><input className='input h-[40px] bg-[#FFFFFF] focus:outline-none focus:border-none input-md lg:input' placeholder='search..'></input></div></li>
     
    </ul></div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#D1D6DA] items-center gap-16 font-inter">
      <li><div className='bg-[#FFFFFF] ring-[1px] ring-[#E1E4E6] hover:bg-white p-0 px-4'><img src="/search.svg" alt="" /><input className='input h-[40px] text-textprime-0 bg-[#FFFFFF] focus:outline-none focus:border-none' placeholder='search...'></input></div></li>
      <li className='hover:text-white'><a>Categories</a></li>
      <li className='hover:text-white'><a>Website Builder</a></li>
      <li className='hover:text-white'><a>Today's Deals</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
  )
}

export default Navbar
