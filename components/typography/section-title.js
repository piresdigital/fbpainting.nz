export default function SectionTitle({ title, subtitle }) {
  return (
    <>
      <div className='text-center mt-16 mb-16'>
        <h4 className='text-brand-blue text-xl opacity-80 capitalize'>{subtitle}</h4>
        <h2 className='text-brand-red-500 text-4xl capitalize'>{title}</h2>
      </div>
    </>
  );
}
