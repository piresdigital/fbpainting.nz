import Link from 'next/link';

// icons
import {
  BsPinMapFill,
  BsEnvelopeFill,
  BsFillChatDotsFill,
  BsFacebook,
  BsInstagram,
  BsWhatsapp
} from 'react-icons/bs';

export default function Footer() {
  return (
    <>
      <div className='relative bg-brand-red-500 py-24 pb-12 text-white'>
        <span className='block w-full h-4 bg-[url(/images/header-svg.svg)] bg-no-repeat bg-cover bg-center mb-6 absolute top-0 left-0'></span>
        <div className='flex flex-col md:flex-row md:w-10/12 md:mx-auto gap-24 justify-center items-center'>
          <div className='flex-1 text-center'>
            <BsPinMapFill className='inline-block text-3xl text-white mb-6' />
            <span className='block text-2xl'>Address</span>
            <span className='block text-lg'>
              23 Poolburn Court <br />
              Lake Hayes, Queenstown
            </span>
          </div>

          <div className='flex-1 text-center '>
            <BsEnvelopeFill className='inline-block text-3xl text-white mb-6' />
            <span className='block text-2xl'>Email</span>
            <span className='block text-lg'>
              <a
                href='mailto:contact@fbpainting.nz'
                className='text-white hover:opacity-70'>
                contact@fbpainting.nz
              </a>
            </span>
          </div>

          <div className='flex-1 text-center flex flex-col items-center '>
            <BsFillChatDotsFill className='inline-block text-3xl text-white mb-6' />
            <span className='block text-2xl'>Social</span>
            <span className='block text-lg'>
              <ul className='flex flex-row gap-12 items-center justify-center mt-6'>
                <li className='w-2/12'>
                  <a
                    href=''
                    target='_blank'
                    className='block text-2xl transition-all origin-left hover:scale-125'>
                    <BsFacebook />
                  </a>
                </li>
                <li className='w-2/12'>
                  <a
                    href=''
                    target='_blank'
                    className='block text-2xl transition-all origin-left hover:scale-125'>
                    <BsInstagram />
                  </a>
                </li>
                <li className='w-2/12'>
                  <a
                    href=''
                    target='_blank'
                    className='block text-2xl transition-all origin-left hover:scale-125'>
                    <BsWhatsapp />
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
        <div className='hidden pt-12 md:flex flex-row justify-center'>
          <Link className='px-8 opacity-70 transition-opacity hover:opacity-100' href='/'>
            Home
          </Link>
          <Link
            className='px-8 opacity-70 transition-opacity hover:opacity-100'
            href='/about'>
            About
          </Link>
          <Link
            className='px-8 opacity-70 transition-opacity hover:opacity-100'
            href='/services'>
            Services
          </Link>
          <Link
            className='px-8 opacity-70 transition-opacity hover:opacity-100'
            href='/projects'>
            Projects
          </Link>
          <Link
            className='px-8 opacity-70 transition-opacity hover:opacity-100'
            href='/contact'>
            Contact
          </Link>
        </div>
        <div className='text-center text-sm pt-12'>
          &copy; FB Painting. ALl rights reserved. Design by{' '}
          <a className='opacity-60' target='_blank' href='https://piresdigital.com'>
            Pires Digital
          </a>
        </div>
      </div>
    </>
  );
}
