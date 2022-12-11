import { useState } from 'react';
import Link from 'next/link';
import { useSpring, animated } from 'react-spring';
import { BsWhatsapp, BsArrowDownShort } from 'react-icons/bs';

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const showNavAnimation = useSpring({
    to: { opacity: 1, height: '350px', padding: '4rem 0 2.5rem' }
  });

  return (
    <>
      <header>
        <div className='w-full h-[20px] bg-stripe-pattern bg-no-repeat bg-cover bg-[center_right_-15rem] md:bg-center'></div>
        <div className='flex flex-col md:flex-row items-center bg-gradient-to-t from-slate-200 to-white bg-[length:100%_280px] bg-repeat-x'>
          <div className='text-center pt-14 px-4 md:pt-11 md:pb-11'>
            <img
              className='inline-block w-[100px]'
              src='/images/fb-logo.png'
              alt='FB Painting'
            />
          </div>
          <div className='flex items-center flex-col-reverse w-full'>
            <div className='flex flex-col items-center w-full -translate-y-[0]'>
              <nav
                className='
                bg-brand-blue 
                w-full 
                h-auto
                transition-all ease-out
              '>
                <animated.ul
                  className='flex flex-col gap-[1.5em] items-center justify-between h-12 opacity-0 text-white transition-all ease-out'
                  style={showNav ? showNavAnimation : {}}>
                  <li>
                    <Link className='text-xl hover:opacity-80' href='/'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className='text-xl hover:opacity-80' href='/about'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className='text-xl hover:opacity-80' href='/services'>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className='text-xl hover:opacity-80' href='/projects'>
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link className='text-xl hover:opacity-80' href='/contact'>
                      Contact
                    </Link>
                  </li>
                </animated.ul>
                <div className='absolute -bottom-11 left-1/2 -translate-x-1/2 bg-brand-blue rounded-b-full px-3 py-2 text-white text-center'>
                  <a
                    id='toggleMenu'
                    className='flex flex-col gap-y-2 items-center cursor-pointer'
                    onClick={() => setShowNav(!showNav)}>
                    <span className='text-xs'>Menu</span>
                    <span>
                      <BsArrowDownShort />
                    </span>
                  </a>
                </div>
              </nav>
            </div>

            <div className='flex flex-row shadow-xl translate-y-7 w-[90%]'>
              <div className='flex-1 bg-slate-100 py-5 text-sm text-center'>
                Request A Free Quote
              </div>
              <a
                href='tel:0211234567'
                className='flex-1 text-center text-lg bg-brand-red-500 text-white py-4 transition-all hover:bg-brand-red-600'>
                021 123 4567{' '}
                <BsWhatsapp className='inline-block -translate-y-[3px] ml-1' />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
