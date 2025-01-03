import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className='my-10 text-center text-4xl'>Get in Touch 
      </motion.h1>
      <div className='text-center tracking-tighter'>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4'>Rochester Hills, MI</motion.p>

        <motion.a 
          href="https://www.linkedin.com/in/salmanmallick" 
          target="_blank" 
          rel="noopener noreferrer"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className='my-4 block text-blue-400 underline'>
          LinkedIn
        </motion.a>

        <a 
          href="mailto:salmanma@umich.edu" 
          className='block text-blue-400 underline my-4'>
          salmanma@umich.edu
        </a>
      </div>
    </div>
  );
};

export default Contact;
