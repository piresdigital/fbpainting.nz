import Header from '../components/header';
import Breadcrumb from '../components/breadcrumb';
import ContactForm from '../components/contactform';
import Footer from '../components/footer';
import ToTop from '../components/toTop';
import Watermark from '../components/watermark';

export default function Contact() {
  return (
    <>
      <ToTop />
      <Header />
      <Breadcrumb title='Contact Us' />
      <Watermark color='blue' />

      <section>
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
