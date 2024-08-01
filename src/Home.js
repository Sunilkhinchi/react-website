import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'

import { useGlobalContext } from './context';
import Contact from './Contact';
import Services from './Services';

const Home = () => {

  // const data = {
  //   name: 'home page',
  //   image : homeImage,
  // };
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, []);

  return <>
        <HeroSection  />
        {/* <Services/> */}
         <Contact/>
      </> ;
  
}

export default Home