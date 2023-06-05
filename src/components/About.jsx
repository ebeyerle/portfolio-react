import React from 'react';

import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import Python from '../assets/python.png';
import MongoDB from '../assets/mongodb.png';
import MySQL from '../assets/mysql.png';
import Java from '../assets/java.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-white text-[#000000]'>
      <div className='flex flex-col justify-center items-center w-full h-full mb-10'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            {/* 
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Evan Beyerle, nice to meet you. Please take a look around.</p>
            </div>
            <div>
               
            </div>
            */}
            <div className='mt-10'>
              <p>I am deeply passionate about developing exceptional software solutions that 
                enhance the lives of those in my vicinity. In one of my previous roles, I focused
                on creating HIPAA-compliant data interfaces by utilizing Java and JavaScript, along 
                with HL7 and FHIR standards, as well as RESTful APIs. Furthermore, I possess 
                valuable experience in building web applications for clients utilizing React and 
                MongoDB.</p> 
            </div>
            <div>
              <h1 className='text-2xl font-bold'>Skills:</h1>
              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6'>
                <div>
                    <img className='w-10 mx-auto' src={JavaScript} alt="HTML icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div>
                    <img className='w-10 mx-auto' src={ReactImg} alt="HTML icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div>
                    <img className='w-10 mx-auto' src={Tailwind} alt="HTML icon" />
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div>
                    <img className='w-10 mx-auto' src={Node} alt="HTML icon" />
                    <p className='my-4'>NODE JS</p>
                </div>
                <div>
                    <img className='w-10 mx-auto' src={MongoDB} alt="HTML icon" />
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div>
                    <img className='w-10 mx-auto' src={MySQL} alt="HTML icon" />
                    <p className='my-4'>MYSQL</p>
                </div>
                <div>
                    <img className='w-10 mx-auto' src={Python} alt="HTML icon" />
                    <p className='my-4'>PYTHON</p>
                </div>
                <div>
                    <img className='w-10 mx-auto' src={Java} alt="HTML icon" />
                    <p className='my-4'>JAVA</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;