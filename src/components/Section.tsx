
function Section() {

  return(
    <section className='mt-9 font-mono border-b-2 border-gray-900 pb-7'>
      <div className='flex justify-between'>
        <p className='text-sm font-bold text-gray-700 pl-5 hover:border-b-4 hover:border-blue-500'>All</p>
        <p className='text-sm font-bold text-gray-700'>Active</p>
        <p className='text-sm font-bold text-gray-700 pr-5'>Completed</p>
      </div>
    </section>
  )
}

export default Section;
