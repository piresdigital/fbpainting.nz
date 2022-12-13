import { useState } from 'react';
import Link from 'next/link';

// data
import { navigationItems } from '../../data/data';

// icons
import { BsWhatsapp, BsArrowDownShort } from 'react-icons/bs';

export default function Header({ variant }) {
  const [showNav, setShowNav] = useState(false);

  // const showNavAnimation = useSpring({
  //   to: { opacity: 1, height: '350px', padding: '4rem 0 2.5rem' }
  // });

  return (
    <>
      <header>
        <div className='w-full h-[18px] bg-stripe-pattern bg-no-repeat bg-cover bg-[center_right_-15rem] md:bg-center'></div>

        <div className='bg-gradient-to-t from-slate-200 to-white bg-[length:100%_280px] bg-repeat-x'>
          <div className='flex flex-col md:flex-row items-center md:max-w-5xl md:px-24 lg:px-0 md:mx-auto '>
            <div className='text-center pt-14 px-4 md:pt-11 md:pb-11'>
              <Link href='/'>
                <img
                  className='inline-block w-[100px]'
                  src='/images/fb-logo.png'
                  alt='FB Painting'
                />
              </Link>
            </div>

            <div className='flex items-center flex-col-reverse md:flex-col w-full'>
              {/* Mobile Menu */}
              <div className='flex flex-col items-center w-full -translate-y-[0] md:hidden '>
                <nav className='bg-brand-blue  w-full  h-auto transition-all ease-out'>
                  <ul
                    className='flex flex-col gap-[1.5em] items-center justify-between h-12 opacity-0 text-white transition-all ease-out'
                    style={
                      showNav
                        ? { opacity: 1, height: '350px', padding: '4rem 0 2.5rem' }
                        : {}
                    }>
                    {navigationItems.map((link, index) => {
                      return (
                        <li key={'mobile_' + index}>
                          <Link className=' text-xl hover:opacity-80' href={link.slug}>
                            {link.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <div className='absolute -bottom-11 left-1/2 -translate-x-1/2 bg-brand-blue rounded-b-full px-3 py-2 text-white text-center'>
                    <a
                      className='flex flex-col gap-y-2 items-center cursor-pointer'
                      id='toggleMenu'
                      onClick={() => setShowNav(!showNav)}>
                      <span className='text-xs'>Menu</span>
                      <span>
                        <BsArrowDownShort />
                      </span>
                    </a>
                  </div>
                </nav>
              </div>

              {/* Destop Menu */}
              <div className=' hidden md:flex flex-row items-center w-full justify-end pt-16 pb-6'>
                <nav>
                  <ul className=' flex flex-row gap-12 items-center justify-between text-gray-900'>
                    {navigationItems.map((link, index) => {
                      return (
                        <li key={'main_' + index}>
                          <Link
                            className='text-xl hover:text-brand-red-600'
                            href={link.slug}>
                            {link.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              <div className='flex translate-y-7 w-[90%] md:justify-end md:w-full'>
                <div className='flex flex-row shadow-xl w-full md:w-[400px]'>
                  <div className=' flex-1 bg-slate-100 py-5 text-sm text-center'>
                    Request A Free Quote
                  </div>
                  <a
                    href='tel:0211234567'
                    className={`flex-1 text-center text-lg ${
                      variant
                        ? 'bg-brand-red-500 hover:bg-brand-red-600'
                        : 'bg-brand-blue'
                    } text-white py-4 transition-all  md:hover:scale-105`}>
                    021 123 4567
                    <BsWhatsapp className=' inline-block -translate-y-[3px] ml-1' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
