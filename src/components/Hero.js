import React from 'react';
import man from '../images/man.png';

const Hero = () => {
  return (
    <div>
      <div className='container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
        <div className='flex flex-wrap md:flex-nowrap'>
          <nav className='inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block'>
            <div className='absolute left-50 transform -translate-x-1/2 space-y-6 mt-36'>
              <a
                href='/'
                className='nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body'
              >
                <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>
                  Home
                </span>
              </a>
              <a
                href='#work'
                className='nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body'
              >
                <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>
                  Work
                </span>
              </a>
              <a
                href='#clients'
                className='nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body'
              >
                <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>
                  Clients
                </span>
              </a>
              <a
                href='#hire'
                className='nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body'
              >
                <span className='bg-black px-2 py-1 rounded-md ml-10 opacity-0'>
                  Hire
                </span>
              </a>
            </div>
          </nav>
          <div className='flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36 -z-1'>
            <h1 className='font-bold text-4xl md:text-6xl lg:text-7xl text-center md:text-left'>
              Bilding <br /> beatiful web experiences
            </h1>
            <div className='w-full justify-center md:justify-start'>
              <button className='px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3 mx-auto md:mx-0 transform hover:scale-110 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-theme focus:ring-opacity-50'>
                <div className='flex justify-between items-center'>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                    <path
                      fillRule='evenodd'
                      d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='ml-3'>My work</span>
                </div>
              </button>
            </div>
          </div>
          <img
            src={man}
            alt='man'
            className='w-3/4 mt-12 md:absolute - mt-6 md:mt-0 right-0'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
