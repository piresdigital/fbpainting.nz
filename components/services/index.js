import Link from 'next/link';
import SectionTitle from '../typography/section-title';

const services = [
  'New residential',
  'Commercial',
  'Renovation',
  'Interior & exterior',
  'Roof painting',
  'Deck, cladding and cedar Staining',
  'Water Blasting'
];

export default function Services() {
  return (
    <>
      <div className='container mx-auto mb-44'>
        <SectionTitle title='our services' subtitle='what we do' />
        <div className='flex flex-col gap-20 md:flex-wrap md:pt-10 items-center md:justify-center md:flex-row'>
          {services.map((service) => {
            return (
              <div className='w-[70%] max-w-[300px]'>
                <div className='rounded-xl overflow-hidden bg-gradient-to-br from-brand-red-500 via-brand-yellow to-brand-blue p-0 mb-4 transition-all hover:scale-105 hover:shadow-2xl hover:p-1'>
                  <img className='rounded-lg' src='https://via.placeholder.com/500' alt='Service Example' />
                </div>
                <h4 className='text-2xl text-center text-gray-800'>{service}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
