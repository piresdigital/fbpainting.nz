import SectionTitle from '../typography/section-title';

// icons
import {
  BsPinMapFill,
  BsEnvelopeFill,
  BsFillChatDotsFill,
  BsFacebook,
  BsInstagram,
  BsWhatsapp
} from 'react-icons/bs';

export default function ContactForm() {
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e);
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
              <span className='block text-lg'>
                23 Poolburn Court <br />
                Lake Hayes, Queenstown
              </span>
            </div>

            <div className='flex-1 bg-gray-100 px-6 py-10 text-center rounded-2xl border-b-8 border-brand-yellow'>
              <BsEnvelopeFill className='inline-block text-3xl text-brand-red-500 mb-6' />
              <span className='block text-2xl'>Email</span>
              <span className='block text-lg'>
                <a
                  href='mailto:contact@fbpainting.nz'
                  className='text-brand-blue hover:opacity-70'>
                  contact@fbpainting.nz
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
                      href=''
                      target='_blank'
                      className='block text-2xl transition-all hover:scale-125'>
                      <BsFacebook className='text-brand-blue' />
                    </a>
                  </li>
                  <li className='flex-1'>
                    <a
                      href=''
                      target='_blank'
                      className='block text-2xl transition-all hover:scale-125'>
                      <BsInstagram className='text-brand-red-600' />
                    </a>
                  </li>
                  <li className='flex-1'>
                    <a
                      href=''
                      target='_blank'
                      className='block text-2xl transition-all hover:scale-125'>
                      <BsWhatsapp className='text-brand-green' />
                    </a>
                  </li>
                </ul>
              </span>
            </div>
          </div>

          <form method='post' onSubmit={(e) => handleForm(e)}>
            <h4 className='text-xl text-brand-blue opacity-70 text-center mb-8 md:hidden'>
              Send us a message
            </h4>
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
              <button className='block w-full rounded-lg transition-colors bg-brand-red-500 hover:bg-brand-red-600 text-white p-4'>
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
