import { useState } from 'react';
import { reviews } from '../../data/data';

export default function Testimonial({ children, name, profile, pic, variant }) {
  const [current, setCurrent] = useState(0);
  const count = reviews.length;

  const updateCurrent = () => {
    if (current < count - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  setTimeout(updateCurrent, 3000);

  return (
    <>
      <div
        className={`flex justify-center items-center ${
          variant ? '-translate-y-[8rem]' : ''
        }`}>
        <div className='relative w-10/12 max-w-[900px] h-[480px] md:h-[250px] md:hover:scale-105'>
          {reviews.map((review, index) => {
            return (
              <div
                key={index}
                className='absolute top-0 left-0 flex flex-col w-full rounded-lg border-[6px] border-white shadow-2xl bg-gray-50 overflow-hidden md:flex-row transition-all duration-1000 opacity-0 translate-y-4'
                style={
                  index === current ? { opacity: 1, transform: 'translateY(0)' } : {}
                }>
                <div
                  className='w-full h-[200px] overflow-hidden relative z-20 md:flex-1 md:h-[290px] bg-cover bg-center bg-no-repeat'
                  style={{ backgroundImage: `url(${review.project})` }}></div>
                <div className='pt-5 pb-5 px-5 relative md:flex-1'>
                  <span className='block absolute -top-[40px] -left-[40px] w-[130px] h-[130px] bg-[url(/images/quotes.gif)] bg-cover bg-no-repeat z-0 opacity-70'></span>

                  <div className='relative z-10'>
                    <p className='text-xl pt-4 pb-10 indent-16'>{review.description}</p>
                  </div>
                  <div className='text-gray-500 text-right'>
                    <span>{review.name}</span>
                    <img
                      className='inline w-12 h-12 rounded-full ml-4'
                      src={review.profile}
                      alt={review.name}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          {` `}
        </div>
      </div>
    </>
  );
}
