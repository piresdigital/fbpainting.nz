import Link from 'next/link';
import Header from '../components/header';
import Hero from '../components/hero';
import Testimonial from '../components/testimonial';
import SectionTitle from '../components/typography/section-title';
import Partners from '../components/partners';
import Services from '../components/services';
import ContactForm from '../components/contactform';
import ToTop from '../components/toTop';
import Watermark from '../components/watermark';

import { projects } from '../data/data';

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      <ToTop />
      <Header variant />
      <Hero background='/images/slider/image-1.jpg' />
      <Watermark color='red' />
      <Testimonial variant />

      <Services />

      <div className='container mx-auto mb-44'>
        <SectionTitle title='Projects' subtitle='our work' />
        <div className='flex flex-col md:flex-wrap gap-12 items-center mb-20 md:justify-center md:flex-row'>
          {featuredProjects.map((project, index) => {
            return (
              <div key={index} className='w-[70%] max-w-[260px]'>
                <div className='rounded-xl overflow-hidden bg-gradient-to-br from-brand-red-500 via-brand-yellow to-brand-blue p-0 mb-4 transition-all hover:scale-105 hover:shadow-2xl hover:p-1'>
                  <Link href='/projects/873687236'>
                    <img
                      className='rounded-lg hover:opacity-90'
                      src='/images/service-example.jpg'
                      alt='Service Example'
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className='text-center'>
          <Link
            href='/projects'
            className='bg-brand-red-500 text-white rounded-lg p-4 inline-block transition-all hover:scale-105 hover:shadow-2xl'>
            See All Projects
          </Link>
        </div>
      </div>

      <Partners />

      <ContactForm />

      <div className='bg-brand-red-500 text-white text-center pb-8'>
        <span className='block h-4 bg-[url(/images/header-svg.svg)] bg-no-repeat bg-cover bg-center mb-6'></span>
        &copy; FB Painting. All rights reserved. Design by
        <a
          className='text-sm text-white opacity-60 px-2'
          target='_blank'
          href='https://piresdigital.com'>
          Pires Digital
        </a>
      </div>
    </>
  );
}
