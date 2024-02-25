import React from 'react'

const Footer = () => {
  return (
    <footer className="footer px-4 lg:px-72 p-10 bg-[#212731]">
  <nav>
    <h6 className="text-[16px] select-none text-white">Categories</h6> 
    <a className=" text-[14px] link link-hover text-[#B6BDC4]">Web Builder</a>
    <a className=" text-[14px] link link-hover text-[#B6BDC4]">Hosting</a>
    <a className=" text-[14px] link link-hover text-[#B6BDC4]">Data Center</a>
    <a className=" text-[14px] link link-hover text-[#B6BDC4]">Robotic-Automation</a>
  </nav> 
  <nav>
    <h6 className="text-[16px] select-none text-white">Contact</h6> 
    <a className=" text-[14px] link link-hover text-[#B6BDC4]">Contact</a>
    <a className=" text-[14px] link link-hover text-[#B6BDC4]">Privacy Policy</a>
    <a className=" text-[14px] link link-hover text-[#B6BDC4]">Terms Of Service</a>
    <a className=" text-[14px] link link-hover text-[#B6BDC4]">Categories</a>
    <a className=" text-[14px] link link-hover text-[#B6BDC4]">About</a>
  </nav> 
 
  <nav>
  <ul className="menu menu-horizontal  px-1 justify-end">
            <li className="">
              <details >
                <summary className="text-[16px] lg:text-[14px]">
                  United states
                </summary>
                <ul className="p-2 text-white">
                  <li>
                    <a>India</a>
                  </li>
                  <li>
                    <a>United Kingdom</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
  </nav>
</footer>
  )
}

export default Footer
