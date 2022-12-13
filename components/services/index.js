import Link from 'next/link';
import SectionTitle from '../typography/section-title';

export default function Services() {
  return (
    <>
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
    </>
  );
}
