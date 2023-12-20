'use client';
import Success from '../../../components/Email/Success'
import Preloader from '../../../components/Email/Success/Preloader'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';


export default function EmailPage () {
  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
          

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
        <Success />

    </main>
  );
};