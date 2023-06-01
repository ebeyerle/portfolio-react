import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return ( 
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-200'>
      <div>
        <a href='/'><img src={Logo} alt="Logo Image" style={{width: '50px'}} /></a>
      </div>

      {/* Menu */}
        <ul className='hidden md:flex'>
          <li className='hover:text-gray-400'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='hover:text-gray-400'>
            <Link to='work' smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li className='hover:text-gray-400'>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-20 left-0 w-full h-128 bg-[#000000] text-gray-200 flex flex-col justify-center items-center'}>
        <li className='py-6 text-2xl'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-2xl'>
          <Link to='work' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className='py-6 text-2xl'>
          <Link to='work' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons 
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/' size={30}>Linkedin <FaLinkedin /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/' size={30}>Github <FaGithub /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-400'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/' size={30}>Email <HiOutlineMail /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-200'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/' size={30}>Resume <BsFillPersonLinesFill /></a>
          </li>
        </ul>
      </div>
      */}
    </div>
   );
}
 
export default Navbar;