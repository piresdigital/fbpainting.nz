import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/header';
import Hero from '../components/hero';
import SectionTitle from '../components/typography/section-title';
import Partners from '../components/partners';
import ContactForm from '../components/contactform';
import ToTop from '../components/toTop';
import Watermark from '../components/watermark';

import { projects } from '../data/data';

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      <Head>
        <title>FB Painting | Professional indoor, outdoor and commercial painting company.</title>
        <meta name='description' content='' />
      </Head>

      <ToTop />

      <Header variant />

      <Hero background={['/images/slider/family.jpg', '/images/slider/fabricio.jpg']} />

      <section className='container mx-auto mb-24 md:mb-56 pt-10 px-6 md:pt-20 md:px-0'>
        <div className='flex flex-col md:flex-row gap-6 md:gap-12 md:justify-around'>
          <div>
            <SectionTitle position='left' title='our services' subtitle='what we do' />
            <p className='text-xl text-slate-500 max-w-sm'>
              We paint New Builds, Commercial Properties, Renovations and more. We're specialized in traditional Brush, Roller and
              Spray painting.
            </p>
            <ul className='list-disc pl-6 mt-4 text-base'>
              <li>New residential</li>
              <li>Commercial</li>
              <li>Renovation</li>
              <li>Interior & exterior</li>
              <li>Roof painting</li>
              <li>Deck, cladding and cedar Staining</li>
              <li>Water Blasting</li>
            </ul>
          </div>
          <div className='grid grid-cols-2 gap-4 md:gap-8 md:translate-y-14 max-w-xl'>
            <div>
              <img
                src='/images/featured-section/residential.jpg'
                alt='Residentail painting'
                className='rounded-lg overflow-hidden md:bg-gradient-to-br from-brand-red-500 via-brand-yellow to-brand-blue md:transition-all md:scale-125 md:shadow-2xl md:p-1 md:-translate-x-8 md:-translate-y-8'
              />
            </div>
            <div>
              <img src='/images/featured-section/deck.jpg' alt='Deck staining' className='rounded-lg overflow-hidden' />
            </div>
            <div className='col-start-1 col-end-3 md:col-start-auto md:col-end-auto'>
              <img src='/images/featured-section/process.jpg' alt='Commercial painting' className='rounded-lg overflow-hidden' />
            </div>
          </div>
        </div>
      </section>

      <div className='container mx-auto mb-44'>
        <SectionTitle title='Projects' subtitle='our work' />
        <div className='flex flex-col md:flex-wrap gap-1 items-center mb-20 md:justify-center md:flex-row'>
          {featuredProjects.map((project, index) => {
            return (
              <div key={'project_' + index} className='w-[70%] max-w-[300px]'>
                <div className='bg-gradient-to-br from-brand-red-500 via-brand-yellow to-brand-blue p-0 mb-4 transition-all hover:scale-[1.3] hover:shadow-2xl hover:p-1'>
                  <Link href={`/projects/${index}`}>
                    <img src={project.thumbnail} alt={project.slug} />
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
        <a className='text-sm text-white opacity-60 px-2' target='_blank' href='https://piresdigital.com' rel='nofollow'>
          Pires Digital
        </a>
      </div>

      <Watermark color='red' />
    </>
  );
}
