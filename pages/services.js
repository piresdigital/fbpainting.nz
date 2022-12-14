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
      <ToTop />
      <Header />
      <Breadcrumb title='Services' />
      <Watermark color='green' />

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
