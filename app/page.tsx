'use client'
import HeroSection from '@/components/HeroSection/HeropSection'
import ProjectsSection from '@/components/ProjectSection/ProjectSection'
import ContactSection from '@/components/Contact/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

export const dynamic = 'force-static';

export default function Home() {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: false,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}