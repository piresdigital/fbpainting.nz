import Link from 'next/link';
import Header from '../components/header';
import Hero from '../components/hero';
import Testimonial from '../components/testimonial';
import SectionTitle from '../components/typography/section-title';

import {
  BsPinMapFill,
  BsEnvelopeFill,
  BsFillChatDotsFill,
  BsFacebook,
  BsInstagram,
  BsWhatsapp
} from 'react-icons/bs';

const handleForm = (e) => {
  e.preventDefault();
  console.log(e);
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero background='/images/slider/image-1.jpg' />
      <Testimonial
        name='Dhavidy Pires'
        profile='/images/profile-pic.jpg'
        pic='/images/testimonial/testimonial-1.jpg'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor
        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisseultrices
        gravida.
      </Testimonial>
      <div className='container mx-auto mb-44'>
        <SectionTitle title='our services' subtitle='what we do' />
        <div className='flex flex-col gap-20 items-center md:justify-center md:flex-row'>
          <div className='w-[70%] max-w-[300px]'>
            <div className='rounded-xl overflow-hidden bg-gradient-to-br from-brand-red-500 via-brand-yellow to-brand-blue p-0 mb-4 transition-all hover:scale-105 hover:shadow-2xl hover:p-1'>
              <img
                className='rounded-lg'
                src='/images/service-example.jpg'
                alt='Service Example'
              />
            </div>
            <h4 className='text-2xl text-center text-gray-800'>Interior Painting</h4>
          </div>

          <div className='w-[70%] max-w-[300px]'>
            <div className='rounded-xl overflow-hidden bg-gradient-to-br from-brand-red-500 via-brand-yellow to-brand-blue p-0 mb-4 transition-all hover:scale-105 hover:shadow-2xl hover:p-1'>
              <img
                className='rounded-lg'
                src='/images/service-example.jpg'
                alt='Service Example'
              />
            </div>
            <h4 className='text-2xl text-center text-gray-800'>Exterior Painting</h4>
          </div>

          <div className='w-[70%] max-w-[300px]'>
            <div className='rounded-xl overflow-hidden bg-gradient-to-br from-brand-red-500 via-brand-yellow to-brand-blue p-0 mb-4 transition-all hover:scale-105 hover:shadow-2xl hover:p-1'>
              <img
                className='rounded-lg'
                src='/images/service-example.jpg'
                alt='Service Example'
              />
            </div>
            <h4 className='text-2xl text-center text-gray-800'>Commercial Painting</h4>
          </div>
        </div>
      </div>

      <div className='container mx-auto mb-44'>
        <SectionTitle title='Projects' subtitle='our work' />
        <div className='flex flex-col md:flex-wrap gap-12 items-center mb-20 md:justify-center md:flex-row'>
          <div className='w-[70%] max-w-[260px]'>
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

          <div className='w-[70%] max-w-[260px]'>
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

          <div className='w-[70%] max-w-[260px]'>
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

          <div className='w-[70%] max-w-[260px]'>
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
        </div>
        <div className='text-center'>
          <Link
            href='/projects'
            className='bg-brand-red-500 text-white rounded-lg p-4 inline-block transition-all hover:scale-105 hover:shadow-2xl'>
            See All Projects
          </Link>
        </div>
      </div>

      <div className='container mx-auto mb-44'>
        <SectionTitle title='' subtitle='Our Partners' />
        <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
          <img
            className='w-[200px] opacity-60 transition-all hover:opacity-100'
            src='/images/partners/bcito-logo.jpg'
            alt='BCITO'
          />
          <img
            className='w-[200px] opacity-60 transition-all hover:opacity-100'
            src='/images/partners/gj-logo.jpg'
            alt='GJ Gardner Homes'
          />
          <img
            className='w-[200px] opacity-60 transition-all hover:opacity-100'
            src='/images/partners/dulux-logo.jpg'
            alt='Dulux'
          />
        </div>
      </div>

      <div className='container mx-auto mb-44'>
        <SectionTitle title='Contact Us' subtitle='Get In Touch' />
        <div className='container mx-auto'>
          <div className='w-[80%] max-w-4xl mx-auto flex flex-col justify-around gap-10 px-6 mb-20 md:flex-row'>
            <div className='flex-1 bg-gray-100 px-6 py-10 text-center rounded-2xl border-b-8 border-brand-red-500'>
              <BsPinMapFill className='inline-block text-3xl text-brand-red-500 mb-6' />
              <span className='block text-2xl'>Address</span>
              <span className='block text-lg'>
                23 Poolburn Court <br />
                Lake Hayes, Queenstown
              </span>
            </div>

            <div className='flex-1 bg-gray-100 px-6 py-10 text-center rounded-2xl border-b-8 border-brand-yellow'>
              <BsEnvelopeFill className='inline-block text-3xl text-brand-red-500 mb-6' />
              <span className='block text-2xl'>Email</span>
              <span className='block text-lg'>
                <a
                  href='mailto:contact@fbpainting.nz'
                  className='text-brand-blue hover:opacity-70'>
                  contact@fbpainting.nz
                </a>
              </span>
            </div>

            <div className='flex-1 bg-gray-100 px-6 py-10 text-center rounded-2xl border-b-8 border-brand-green'>
              <BsFillChatDotsFill className='inline-block text-3xl text-brand-red-500 mb-6' />
              <span className='block text-2xl'>Social</span>
              <span className='block text-lg'>
                <ul className='flex flex-row gap-12 justify-center mt-6'>
                  <li>
                    <a
                      href=''
                      target='_blank'
                      className='block text-2xl transition-all hover:scale-125'>
                      <BsFacebook className='text-brand-blue' />
                    </a>
                  </li>
                  <li>
                    <a
                      href=''
                      target='_blank'
                      className='block text-2xl transition-all hover:scale-125'>
                      <BsInstagram className='text-brand-red-600' />
                    </a>
                  </li>
                  <li>
                    <a
                      href=''
                      target='_blank'
                      className='block text-2xl transition-all hover:scale-125'>
                      <BsWhatsapp className='text-brand-green' />
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>

          <form method='post' onSubmit={handleForm}>
            <h4 className='text-xl text-brand-blue opacity-70 text-center mb-8 md:hidden'>
              Send us a message
            </h4>
            <div className='w-[80%] max-w-4xl mx-auto flex flex-col gap-4 mb-4'>
              <input
                className='border-2 rounded-lg border-gray-400 p-2 focus:outline-none focus:border-brand-blue '
                type='text'
                name='name'
                maxLength='30'
                minLength='3'
                required
                placeholder='Your Name*'
              />
              <input
                className='border-2 rounded-lg border-gray-400 p-2 focus:outline-none focus:border-brand-blue '
                type='text'
                name='phone'
                maxLength='20'
                minLength='7'
                placeholder='Your Phone Number'
              />
            </div>
            <div className='w-[80%] max-w-4xl mx-auto flex flex-col gap-4 mb-4'>
              <input
                className='border-2 rounded-lg border-gray-400 p-2 focus:outline-none focus:border-brand-blue '
                type='email'
                name='email'
                max-maxLength='50'
                placeholder='Your Email Address*'
                required
              />
            </div>
            <div className='w-[80%] max-w-4xl mx-auto flex flex-col gap-4 mb-4'>
              <textarea
                className='border-2 rounded-lg border-gray-400 p-2 focus:outline-none focus:border-brand-blue '
                placeholder='Type Your Message Here*'
                maxLength='240'
                required
                name='message'
                rows='10'></textarea>
            </div>
            <div className='w-[80%] max-w-4xl mx-auto flex flex-col gap-4 mb-4'>
              <button className='block w-full rounded-lg transition-colors bg-brand-red-500 hover:bg-brand-red-600 text-white p-4'>
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>

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
