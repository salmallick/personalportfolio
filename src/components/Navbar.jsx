import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <span className='text-white text-2xl font-light tracking-tight mx-2'>Technical Portfolio</span>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-white text-2xl'>
        <a href="https://www.linkedin.com/in/salmanmallick" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/salmallick/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/salmanmallick_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:salmanma@umich.edu">
          <FaEnvelope />
        </a>
        <a href="https://salmanresume.tiiny.site" target="_blank" rel="noopener noreferrer">
          <FaFileAlt />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;