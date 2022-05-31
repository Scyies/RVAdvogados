import React from 'react';
import Hero from '../../components/hero/Hero';
import Info from '../../components/info/Info';
import Banner from '../../components/banner/Banner';
import Contact from '../../components/contact/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Info />
      <Banner />
      <Contact />
    </div>
  )
}
