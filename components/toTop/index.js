import { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

export default function ToTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      // console.log(e);
      // console.log(window.scrollY);
      window.scrollY >= 428 ? setActive(true) : setActive(false);
    });
  }, []);

  return (
    <a
      onClick={() => {
        window.scrollTo({ top: 0, laft: 0, behavior: 'smooth' });
      }}
      className='fixed bottom-10 md:bottom-8 right-4 md:right-8 z-30 p-1 bg-white rounded-full transition-all opacity-0 translate-y-8 cursor-pointer'
      style={active ? { opacity: 1, transform: 'translateY(0)' } : {}}>
      <BsFillArrowUpCircleFill className='text-5xl text-brand-red-500' />
    </a>
  );
}
