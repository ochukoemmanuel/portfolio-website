import React from 'react';

const Header = ({ open, toggle }) => {
  return (
    <div>
      <header className='py-6'>
        <div className='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
          <div className='text-lg font-bold'>Mj</div>
          <div className='hidden md:flex space-x-12 items-center'>
            <a href='/' className='text-selected-text'>
              Home
            </a>
            <a href='#work' className='menu'>
              My work
            </a>
            <a href='#clients' className='menu'>
              Clients
            </a>
            <a href='#hire'>
              <button className='py-2 px-6 bg-theme font-bold hover:bg-opacity-90 transition duration-300 ease-in-out'>
                Hire me
              </button>
            </a>
          </div>
          <div className='cursor-pointer md:hidden' onClick={toggle}>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </div>
        </div>

        <div
          className={
            !open
              ? 'hidden'
              : 'block' +
                'hidden md:hidden flex flex-col justify-between items-center px-2 space-y-6 mt-6 py-12'
          }
        >
          <a href='/' className='text-selected-text'>
            Home
          </a>
          <a href='#work' className='menu'>
            My work
          </a>
          <a href='#clients' className='menu'>
            Clients
          </a>
          <a href='#hire'>
            <button className='py-2 px-6 bg-theme font-bold hover:bg-opacity-90 transition duration-300 ease-in-out'>
              Hire me
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
