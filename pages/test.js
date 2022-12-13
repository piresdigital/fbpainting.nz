import { useState } from 'react';
import { reviews } from '../data/data';

export default function Test() {
  const [current, setCurrent] = useState(0);
  const [position, setPosition] = useState(0);
  const count = reviews.length;
  const step = 384;

  const nextReview = () => {
    if (position - step > -(count * step)) {
      setCurrent(current + 1);
      setPosition(position - step);
    } else {
      setCurrent(0);
      setPosition(0);
    }
  };

  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        <div className='relative flex w-96 h-80 overflow-hidden'>
          <div
            className='transition-all delay-100 w-96 h-80 absolute top-0 flex flex-row'
            style={{ left: `${position}px` }}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className='flex-[1_0_100%] opacity-0'
                style={{ opacity: current === index ? '1' : null }}>
                <img className='w-48' src={review.profile} alt='Profile' />
                <p>{review.name}</p>
                <p>{review.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className='absolute bottom-20 right-[calc(50%-100px)]' onClick={nextReview}>
        Next
      </button>
    </>
  );
}
