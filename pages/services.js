import Header from '../components/header';
import Breadcrumb from '../components/breadcrumb';
import ServicesBanner from '../components/services';
import SectionTitle from '../components/typography/section-title';
import Testimonial from '../components/testimonial';
import Partners from '../components/partners';
import ContactForm from '../components/contactform';
import Footer from '../components/footer';
import ToTop from '../components/toTop';
import Watermark from '../components/watermark';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | FB Painting.</title>
      </Head>
      <ToTop />
      <Header />
      <Breadcrumb title='Services' />
      <Watermark color='green' />

      <section className='container mx-auto mb-24 md:mb-56 pt-10 px-6 md:pt-20 md:px-0'>
        <div className='flex flex-col md:flex-row gap-6 md:gap-12 md:justify-around'>
          <div>
            <SectionTitle position='left' title='our services' subtitle='what we do' />
            <p className='text-xl text-slate-500 max-w-sm'>
              We paint New Residential, Commercial Properties, Renovations and more. We're specialized in traditional Brush,
              Roller and Spray painting.
            </p>
            <ul className='list-disc pl-6 mt-4 text-base'>
              <li>New residential</li>
              <li>Commercial</li>
              <li>Renovation</li>
              <li>Interior & exterior</li>
              <li>Roof painting</li>
              <li>Deck, cladding and cedar Staining</li>
              <li>Water Blasting</li>
            </ul>
          </div>
          <div className='grid grid-cols-2 gap-4 md:gap-8 md:translate-y-14 max-w-xl'>
            <div>
              <img
                src='/images/featured-section/residential.jpg'
                alt='Residentail painting'
                className='rounded-lg overflow-hidden md:bg-gradient-to-br from-brand-red-500 via-brand-yellow to-brand-blue md:transition-all md:scale-125 md:shadow-2xl md:p-1 md:-translate-x-8 md:-translate-y-8'
              />
            </div>
            <div>
              <img src='/images/featured-section/deck.jpg' alt='Deck staining' className='rounded-lg overflow-hidden' />
            </div>
            <div className='col-start-1 col-end-3 md:col-start-auto md:col-end-auto'>
              <img src='/images/featured-section/process.jpg' alt='Commercial painting' className='rounded-lg overflow-hidden' />
            </div>
          </div>
        </div>
      </section>

      {/* <ServicesBanner /> */}

      {/* <section className='mb-44'>
        <SectionTitle title='Our Reviews' subtitle='What They Say' />
        <Testimonial />
      </section> */}

      <section>
        <Partners />
      </section>

      <section>
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
