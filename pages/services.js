import Header from '../components/header';
import Breadcrumb from '../components/breadcrumb';
import ServicesBanner from '../components/services';
import SectionTitle from '../components/typography/section-title';
import Testimonial from '../components/testimonial';
import Partners from '../components/partners';
import ContactForm from '../components/contactform';
import Footer from '../components/footer';
import ToTop from '../components/toTop';

export default function Services() {
  return (
    <>
      <ToTop />
      <Header />
      <Breadcrumb title='Services' />
      <div className='absolute top-[500px] md:top-[300px] right-0 -z-50 opacity-10 overflow-hidden'>
        <img
          className='block w-[1000px] translate-x-24 md:translate-x-48'
          src='/images/green-brush-logo.gif'
          alt='green brush logo'
        />
      </div>

      <ServicesBanner />

      <section className='mb-44'>
        <SectionTitle title='Our Reviews' subtitle='What They Say' />
        <Testimonial />
      </section>

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
