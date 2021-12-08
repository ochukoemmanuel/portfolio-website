import React from 'react';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Hire from '../components/Hire';
import Work from '../components/Work';

const index = ({ open, toggle }) => {
  return (
    <div>
      <Header open={open} toggle={toggle} />
      <Hero />
      <Work />
      <Clients />
      <Hire />
      <Footer />
    </div>
  );
};

const updateList = () => {
  const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
    return (
      Math.abs(a.getBoundingClientRect().top) -
      Math.abs(b.getBoundingClientRect().top)
    );
  });

  document
    .querySelectorAll('.selected-circle')
    .forEach((c) => c.classList.remove('selected-circle'));

  document
    .querySelectorAll('.nav-dot')
    [[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add(
      'selected-circle'
    );
};

window.addEventListener('scroll', () => {
  updateList();
});

export default index;
