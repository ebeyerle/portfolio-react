import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Avatar from '../assets/avatar.png';
import Name from '../assets/name1.png';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#edf0f3]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='mx-auto w-100 h-100'>
          <img src={Name} />
        </div>
        <p className='text-[#484b57] mx-auto mt-4'>I'm a developer with both Front end and Back end experience</p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a href="https://github.com/ebeyerle"><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/evan-beyerle-9a7a1b78/"><AiFillLinkedin /></a>
        </div>
        
        {/* 
        
        <h1 className='text-4xl sm:text-7xl font-bold text-[#7b8196]'>
          EVAN BEYERLE
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#000000]'>
          I'm a Full Stack Developer.
        </h2>
        
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-red group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
        */}
        
        
        <div className='mx-auto rounded-full w-80 h-80 overflow-hidden mt-10 md:h-96 md:w-96'>
          <img src={Avatar} layout='fill' objectFit='cover' />
        </div>
      </div>
    </div>
  );
};

export default Home;