import Header from '../components/header';
import Breadcrumb from '../components/breadcrumb';
import ContactForm from '../components/contactform';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <>
      <Header />
      <Breadcrumb title='Contact Us' />
      <div className='absolute top-[500px] md:top-[300px] right-0 -z-50 opacity-10 overflow-hidden'>
        <img
          className='block w-[1000px] translate-x-24 md:translate-x-48'
          src='/images/blue-brush-logo.gif'
          alt='blue brush logo'
        />
      </div>

      <section>
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
