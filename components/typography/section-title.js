export default function SectionTitle({ title, subtitle, position = 'center' }) {
  return (
    <>
      <div className={`text-${position} mt-12 md:mt-18 mb-10 md:mb-14`}>
        <h4 className='text-brand-blue text-xl opacity-80 capitalize font-bold'>{subtitle}</h4>
        <h2 className='text-brand-red-500 text-5xl capitalize'>{title}</h2>
      </div>
    </>
  );
}
