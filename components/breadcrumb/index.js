export default function Breadcrumb({ title, path = '' }) {
  return (
    <>
      <div className='relative pt-28 pb-28 mb-36 md:pb-36 bg-brand-red-500 -z-10'>
        <div className='absolute top-0 left-0 w-full h-full -z-20 text-white opacity-40 bg-[url(/images/slider/image-1.jpg)] bg-cover bg-bottom md:bg-center md:bg-fixed'></div>
        <h1 className='relative w-[80%] max-w-4xl mx-auto text-5xl text-white after:absolute after:-bottom-8 after:left-0 after:w-20 after:h-1 after:bg-white'>
          {title}
        </h1>
      </div>
    </>
  );
}
