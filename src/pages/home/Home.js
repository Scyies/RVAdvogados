import React from 'react';
import Hero from '../../components/hero/Hero';
import Info from '../../components/info/Info';
import Contact from '../../components/contact/Contact';
import Sobre from '../../components/sobre/Sobre';
import Team from '../../components/team/Team';

export default function Home() {
  return (
    <div>
      <Hero />
      <Info />
      <Sobre />
      <Team />
      <Contact />
    </div>
  )
}
