import { useState } from 'react';
import { BsWhatsapp, BsArrowDownShort } from 'react-icons/bs';

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <div className='w-full h-[28px] bg-stripe-pattern bg-no-repeat bg-fit bg-right sm:bg-cover'></div>
        <div className='flex flex-col items-center gap-x-14 h-[280px] bg-gradient-to-t from-slate-200 to-white bg-[length:100%_280px] bg-repeat-x md:flex-row md:gap-x-0 md:gap-y-14'>
          <div className='w-[120px] mt-20 mb-6'>
            <img src='/images/fb-logo.png' alt='FB Painting' />
          </div>
          <div className='flex items-center flex-col-reverse w-full'>
            <div
              className={`flex flex-col items-center w-full -translate-y-1 group ${
                showNav ? 'open' : 'close'
              }`}>
              <nav className='bg-brand-blue w-full h-auto group-[.close]:h-3'>
                <ul className='flex flex-col gap-[3em] items-center justify-between pt-[6em] pb-16 text-white '>
                  <li>
                    <a className='text-2xl hover:opacity-80' href='#'>
                      Home
                    </a>
                  </li>
                  <li>
                    <a className='text-2xl hover:opacity-80' href='#'>
                      About
                    </a>
                  </li>
                  <li>
                    <a className='text-2xl hover:opacity-80' href='#'>
                      Services
                    </a>
                  </li>
                  <li>
                    <a className='text-2xl hover:opacity-80' href='#'>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className='text-2xl hover:opacity-80' href='#'>
                      Contact
                    </a>
                  </li>
                </ul>
                <div className='absolute -bottom-14 left-1/2 -translate-x-1/2 bg-brand-blue mx-auto pt-5 group-[.close]:pt-8 group-[.close]:-bottom-[6em] pb-5 px-4 rounded-b-full text-white text-center'>
                  <a
                    id='toggleMenu'
                    className='flex flex-col gap-y-2 items-center cursor-pointer'
                    onClick={() => setShowNav(!showNav)}>
                    <span className='text-xs'>MENU</span>
                    <span>
                      <BsArrowDownShort />
                    </span>
                  </a>
                </div>
              </nav>
            </div>

            <div className='flex flex-row shadow-xl translate-y-7 w-[90%]'>
              <div className='flex-1 bg-slate-100 py-4 text-center'>
                Request A Free Quote
              </div>
              <a
                href='tel:0211234567'
                className='flex-1 text-center text-xl bg-brand-red-500 text-white py-4 hover:bg-brand-red-600 transition-all'>
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
