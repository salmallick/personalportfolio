import React from 'react';
import umichLogo from '../assets/Umich.png'; // Replace with your logo path
import { motion } from "framer-motion";

const Education = () => {
    return (
      <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className='my-20 text-center text-4xl'
        >
          Education
        </motion.h1>
        <div className='flex flex-wrap items-center justify-center'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-2/3 text-left'
          >
            <h6 className='mb-2 text-2xl font-semibold'>
              University of Michigan - Ann Arbor
            </h6>
            <p className='mb-2 text-neutral-400'>Graduation Date: May 2027</p>
            <p className='mb-4 text-neutral-400'>Bachelor of Science in Data Science</p>
            <h6 className='text-xl font-semibold'>Relevant Coursework:</h6>
            <ul className='list-disc pl-6 text-neutral-400'>
              <li>Data Structures and Algorithms</li>
              <li>Applied Linear Algebra</li>
              <li>Programming and Introductory Data Structures</li>
              <li>Discrete Mathematics</li>
              <li>Probability and Statistics for Engineers</li>
              <li>Intro to C++ and Python</li>
            </ul>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='w-full lg:w-1/3 flex justify-center'
          >
            <img src={umichLogo} alt='University of Michigan Logo' className='h-40' />
          </motion.div>
        </div>
      </div>
    );
  };

export default Education;