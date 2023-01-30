import { useState } from 'react';
import Link from 'next/link';

import Header from '../../components/header';
import Breadcrumb from '../../components/breadcrumb';
import SectionTitle from '../../components/typography/section-title';
import ContactForm from '../../components/contactform';
import Footer from '../../components/footer';
import ToTop from '../../components/toTop';
import Watermark from '../../components/watermark';

import { projects } from '../../data/data';

export default function Projects() {
  const categories = ['all', 'residential', 'commercial'];

  const [list, setList] = useState(projects);
  const [category, setCategories] = useState(categories);
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <Head>
        <title>Projects | FB Painting.</title>
      </Head>
      <ToTop />
      <Header />
      <Breadcrumb title='Projects' />
      <Watermark color='red' />

      <SectionTitle title='Projects' subtitle='Our Work' />

      <section className='mb-36 w-10/12 mx-auto'>
        <ul className='relative z-10 flex flex-row justify-center gap-8 mb-12 md:mb-20'>
          {category.map((item, i) => {
            return (
              <li key={'category_' + i}>
                <button
                  className={`capitalize cursor-pointer opacity-80 py-3 px-4 rounded-md border-2 border-brand-blue hover:opacity-100 ${
                    item === activeCategory ? 'font-bold text-white bg-brand-blue' : ''
                  } `}
                  onClick={() => setActiveCategory(item)}>
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
        <div className='flex flex-col gap-14 items-center justify-center lg:flex-row'>
          {list.map((item, i) => {
            if (activeCategory === item.category || activeCategory === 'all') {
              return (
                <div key={'thubnail_' + i} className='w-[70%] max-w-[300px] transition-all'>
                  <div className='rounded-xl overflow-hidden bg-gradient-to-br from-brand-red-500 via-brand-yellow to-brand-blue p-0 mb-4 transition-all hover:scale-105 hover:shadow-2xl hover:p-1'>
                    <Link href={`/projects/${i}`}>
                      <img className='rounded-lg hover:opacity-90' src={item.thumbnail} alt={item.clientName} />
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>

      <section>
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
