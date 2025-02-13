import Image from 'next/image'

const Guide = () => {
  return (
    <section className='flexCenter flex-col h-screen'>
      <div className='padding-container max-container w-full pb-8 flex flex-col justify-center h-full'>
        <div className='flex flex-wrap justify-between gap-5'>
          <p className='uppercase text-green-50 font-extrabold text-3xl mb-6 tracking-wide animate__animated animate__fadeIn'>
            Helping You To Find the Right Path
          </p>
          <p className='text-gray-30 text-lg xl:max-w-[520px] leading-relaxed animate__animated animate__fadeIn'>
            With the <strong>STK Travel</strong> app, you will never get lost again. Our offline maps ensure you are always on track, even without an internet connection. Invite your friends and loved ones to explore the wilderness, journey through rivers, and reach national parks together!
          </p>
        </div>
      </div>
    
      <div className='flexCenter max-container relative w-full h-full'>
        <Image 
          src="/ll.jpg"
          alt="Chitwan National Park"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className='2xl:rounded-5xl'
        />

        <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-10'>
          <Image 
            src='/meter.svg'
            alt='meter'
            width={16}
            height={158}
            className='h-full w-auto'
          />
          <div className='flexBetween flex-col'>
            <div className='flex w-full flex-col'>
              <div className='flexBetween w-full'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-50'>30 min</p>
              </div>
              <p className='bold-20 mt-2'>Chitwan National Park</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className='regular-16 text-gray-20'>Start track</p>
              <h4 className='bold-20 mt-2 whitespace-nowrap'>Narayanghat</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
