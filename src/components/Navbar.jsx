import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-[#212731]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#D1D6DA] items-center">
      <li><div className='bg-[#FFFFFF] ring-[1px] ring-[#E1E4E6] hover:bg-white'><img src="/search.svg" alt="" /><input className='input bg-[#FFFFFF] focus:outline-none focus:border-none'></input></div></li>
      <li><a>Categories</a></li>
      <li><a>Website Builder</a></li>
      <li><a>Today's Deals</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
  )
}

export default Navbar
