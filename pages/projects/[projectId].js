import { useRouter } from 'next/router';
import Header from '../../components/header';
import Breadcrumb from '../../components/breadcrumb';
import SectionTitle from '../../components/typography/section-title';
import Partners from '../../components/partners';
import Footer from '../../components/footer';
import ToTop from '../../components/toTop';

import { projects } from '../../data/data';
import Watermark from '../../components/watermark';

export default function ProjectPage() {
  const router = useRouter();
  const { projectId } = router.query;

  const projectContent = projects.map((item, index) => {
    if (item.slug === projectId) {
      return item;
    }
  });

  console.log(projectContent);

  return (
    <>
      <ToTop />
      <Header />
      <Breadcrumb title='Projects' path={projectId} />
      <Watermark color='red' />

      <section className='mb-32'>
        <SectionTitle title={projectId} subtitle='Our Client' />
        <div className='flex flex-col md:flex-row w-10/12 max-w-5xl mx-auto gap-10 mb-16'>
          {projectContent[0].pictures.map((item, index) => {
            return (
              <img
                key={'projectPic_' + index}
                className='flex-1 w-full transition-all hover:z-20 hover:scale-150'
                src={projectContent[0].pictures[index]}
                alt={projectContent[0].businessName}
              />
            );
          })}
        </div>
        <div className='w-10/12 max-w-5xl mx-auto flex flex-col md:flex-row gap-8'>
          <div className='flex-1'>
            <h2 className='text-2xl mb-4 text-gray-700'>Project Description</h2>
            <p className='text-lg text-gray-700'>{projectContent[0].description}</p>
          </div>
          <div className='flex-1'>
            <div
              className={`flex flex-col w-[85%] mx-auto rounded-lg overflow-hidden border-[6px] border-white shadow-2xl bg-gray-50
            md:transition-transform md:flex-row md:max-w-[800px] md:hover:scale-105`}>
              <div className='pt-5 pb-5 px-5 relative md:flex-1'>
                <span className='block absolute -top-[40px] -left-[40px] w-[130px] h-[130px] bg-[url(/images/quotes.gif)] bg-cover bg-no-repeat z-0 opacity-70'></span>

                <div className='relative z-10'>
                  <p className='text-xl pt-6 pb-6 indent-16'>
                    {projectContent[0].review}
                  </p>
                </div>
                <div className='text-gray-500 text-right'>
                  <span>{projectContent[0].clientName}</span>
                  <img
                    className='inline w-12 h-12 rounded-full ml-4'
                    src={projectContent[0].clientpicture}
                    alt='client'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Partners />
      </section>

      <Footer />
    </>
  );
}
