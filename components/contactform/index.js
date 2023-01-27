import { useState } from 'react';
import SectionTitle from '../typography/section-title';

// icons
import { BsPinMapFill, BsEnvelopeFill, BsFillChatDotsFill, BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

export default function ContactForm() {
  const [formMessage, setFormMessage] = useState(null);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const escape = (value) => {
    const valueEscaped = value
      .trim()
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\//g, '&#x2F;')
      .replace(/\\/g, '&#x5C;')
      .replace(/`/g, '&#96;');
    return valueEscaped;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.setAttribute('disabled', 'disabled');

    setIsSubmited(true);

    const formData = {
      name: escape(e.target.name.value),
      phone: escape(e.target.phone.value),
      email: escape(e.target.email.value),
      message: escape(e.target.message.value)
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((res) => {
      if (res.status == 200) {
        setFormMessage('Thank you! We will be in touch very soon.');
        setIsSuccess(true);

        setIsSubmited(false);
        e.target.reset();
      } else {
        setFormMessage(
          'Sorry, we were unable to receive your message. Please email us on fabricio@fbpainting.nz or call us on 021 0887 2880.'
        );
        setIsSuccess(false);
        setIsSubmited(false);
      }
    });
  };

  return (
    <>
      <div className='container mx-auto mb-44'>
        <SectionTitle title='Contact Us' subtitle='Get In Touch' />
        <div className='container mx-auto'>
          <div className='w-[80%] max-w-4xl mx-auto flex flex-col justify-around gap-10 px-6 mb-20 md:flex-row'>
            <div className='flex-1 bg-gray-100 px-6 py-10 text-center rounded-2xl border-b-8 border-brand-red-500'>
              <BsPinMapFill className='inline-block text-3xl text-brand-red-500 mb-6' />
              <span className='block text-2xl'>Address</span>
              <span className='block text-lg'>Queenstown</span>
            </div>

            <div className='flex-1 bg-gray-100 px-6 py-10 text-center rounded-2xl border-b-8 border-brand-yellow'>
              <BsEnvelopeFill className='inline-block text-3xl text-brand-red-500 mb-6' />
              <span className='block text-2xl'>Email</span>
              <span className='block text-lg'>
                <a href='mailto:fabricio@fbpainting.nz' className='text-brand-blue hover:opacity-70'>
                  fabricio@fbpainting.nz
                </a>
              </span>
            </div>

            <div className='flex-1 bg-gray-100 px-6 py-10 text-center rounded-2xl border-b-8 border-brand-green'>
              <BsFillChatDotsFill className='inline-block text-3xl text-brand-red-500 mb-6' />
              <span className='block text-2xl'>Social</span>
              <span className='block text-lg w-8/12 mx-auto'>
                <ul className='flex flex-row gap-12 justify-center mt-6'>
                  <li className='flex-1'>
                    <a
                      aria-label='Facebook Page'
                      href='https://facebook.com/fbpaintingnz/'
                      target='_blank'
                      className='block text-2xl transition-all hover:scale-125'>
                      <BsFacebook className='text-brand-blue' />
                    </a>
                  </li>
                  <li className='flex-1'>
                    <a
                      aria-label='Instagram Page'
                      href='https://www.instagram.com/fbpaintingnz/'
                      target='_blank'
                      className='block text-2xl transition-all hover:scale-125'>
                      <BsInstagram className='text-brand-red-600' />
                    </a>
                  </li>
                  <li className='flex-1'>
                    <a
                      aria-label='WhatsApp Chat'
                      href='https://wa.me/642108872880'
                      target='_blank'
                      className='block text-2xl transition-all hover:scale-125'>
                      <BsWhatsapp className='text-brand-green' />
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>

          <form method='post' onSubmit={handleSubmit}>
            <h4 className='text-xl text-brand-blue opacity-70 text-center mb-8 md:hidden'>Send us a message</h4>
            <div className='w-[80%] max-w-4xl mx-auto flex flex-col gap-4 mb-4'>
              <input
                className='border rounded-lg border-gray-400 p-2 focus:outline-none focus:border-brand-blue '
                type='text'
                name='name'
                maxLength='30'
                minLength='3'
                required
                placeholder='Your Name*'
              />
              <input
                className='border rounded-lg border-gray-400 p-2 focus:outline-none focus:border-brand-blue '
                type='text'
                name='phone'
                maxLength='20'
                minLength='7'
                placeholder='Your Phone Number'
              />
            </div>
            <div className='w-[80%] max-w-4xl mx-auto flex flex-col gap-4 mb-4'>
              <input
                className='border rounded-lg border-gray-400 p-2 focus:outline-none focus:border-brand-blue '
                type='email'
                name='email'
                maxLength='50'
                placeholder='Your Email Address*'
                required
              />
            </div>
            <div className='w-[80%] max-w-4xl mx-auto flex flex-col gap-4 mb-4'>
              <textarea
                className='border rounded-lg border-gray-400 p-2 focus:outline-none focus:border-brand-blue '
                placeholder='Type Your Message Here*'
                maxLength='240'
                required
                name='message'
                rows='10'></textarea>
            </div>
            <div className='w-[80%] max-w-4xl mx-auto flex flex-col gap-4 mb-4'>
              <div className='text-center'>
                {isSubmited ? (
                  <input
                    type='submit'
                    disabled
                    value='Sending Message'
                    className='block w-full rounded-lg transition-colors bg-slate-400 hover:bg-slate-600 p-4'
                  />
                ) : (
                  <input
                    type='submit'
                    value='Send'
                    className='block w-full rounded-lg transition-colors bg-brand-red-500 hover:bg-brand-red-600 text-white p-4'
                  />
                )}

                <p className='p-4 text-slate-600'>
                  <small>
                    <strong>*</strong> required fields.
                  </small>
                </p>
                <br />
                {formMessage && (
                  <div className={`p-2 ${isSuccess ? 'text-brand-blue' : 'text-brand-red-600'} `} role='alert'>
                    {formMessage}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
