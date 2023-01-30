import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';

import Header from '../../components/header';
import Breadcrumb from '../../components/breadcrumb';
import Partners from '../../components/partners';
import Footer from '../../components/footer';
import ToTop from '../../components/toTop';
import Watermark from '../../components/watermark';
import SectionTitle from '../../components/typography/section-title';

import { projects } from '../../data/data';

const ProjectPage = () => {
  const [image, setImage] = useState(null);

  const router = useRouter();
  const { projectIndex } = router.query;

  const project = projects[projectIndex];

  return (
    <>
      <Head>
        <title>Our Work | FB Painting</title>
      </Head>

      {image && (
        <div
          className='z-50 fixed top-0 left-0 bg-slate-800 bg-opacity-90 w-full h-full flex justify-center items-center p-10 hover:cursor-pointer'
          onClick={() => setImage(null)}>
          <div className='w-[95%] h-[95%] md:max-w-[1200px]'>
            <img fill className='w-full object-cover' src={image} />
          </div>
        </div>
      )}

      <ToTop />

      <Header />

      <Breadcrumb title={''} path='Previous Projects' />

      <Watermark color='red' />

      {project ? (
        <section className='mb-32'>
          <SectionTitle title={project.name} subtitle='Our Work' />
          <div className='flex flex-col md:flex-row w-10/12 max-w-5xl mx-auto gap-10 mb-16'>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
              {project.pictures.map((pic, index) => {
                return (
                  <div key={'pic' + index} className='w-full h-96 overflow-hidden relative hover:cursor-pointer'>
                    <Image
                      className='object-cover max-w-[500px]'
                      src={pic}
                      alt={'pic' + index}
                      onClick={(e) => {
                        setImage(e.target.src);
                      }}
                      fill
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='w-10/12 max-w-5xl mx-auto flex flex-col md:flex-row gap-8'>
            {project.description && (
              <div className='flex-1'>
                <h2 className='text-2xl mb-4 text-gray-700'>Project Description</h2>
                <p className='text-lg text-gray-700'>{project.description}</p>
              </div>
            )}
            {project.review && (
              <div className='flex-1'>
                <div
                  className={`flex flex-col w-[85%] mx-auto rounded-lg overflow-hidden border-[6px] border-white shadow-2xl bg-gray-50
            md:transition-transform md:flex-row md:max-w-[800px] md:hover:scale-105`}>
                  <div className='pt-5 pb-5 px-5 relative md:flex-1'>
                    <span className='block absolute -top-[40px] -left-[40px] w-[130px] h-[130px] bg-[url(/images/quotes.gif)] bg-cover bg-no-repeat z-0 opacity-70'></span>

                    <div className='relative z-10'>
                      <p className='text-xl pt-6 pb-6 indent-16'>{project.review}</p>
                    </div>
                    <div className='text-gray-500 text-right'>
                      <span>{project.clientName}</span>
                      <img className='inline w-12 h-12 rounded-full ml-4' src={project.clientpicture} alt='client' />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      ) : (
        ''
      )}

      <section>
        <Partners />
      </section>

      <Footer />
    </>
  );
};

export default ProjectPage;
