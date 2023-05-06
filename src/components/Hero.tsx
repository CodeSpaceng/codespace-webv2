import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[url('/public/assets/Hero-bg.svg')] min-h-[90vh] md:min-h-[calc(100vh+100px)] bg-no-repeat bg-right bg-contain flex items-center overflow-hidden relative">
      <div className='max-w-3xl px-7 md:py-0 lg:pl-[102px] relative'>
        <h1 className='font-gelion font-bold text-4xl leading-[42px] md:text-[64px] md:leading-[70px] mb-9'>
          Reshaping how <span className='text-primary color-slide bounce-delayed'>Africa's story</span> is
          told and shared with tech
        </h1>
        <p className='font-dm-sans text-lg md:text-2xl text-grey mb-8'>
          We are a Community that connects teen techies (17 -19) accross Nigeria
          in one place to share opportunites, work on awesome projects and
          foster quality connections.
        </p>
        <button className='bg-primary text-white font-semibold text-base lg:text-2xl rounded-[25px] px-[18px] py-[14.5px] sm:px-8 sm:py-4 lg:px-[67px] lg:py-[23px] hover:scale-110 transition-all mb-44'>
          <a
            href='https://forms.gle/csVUQEScZpiK9WzE8'
            target='_blank'
            rel='noreferrer'>
            Join the Community
          </a>
        </button>
        <img
          className='absolute -bottom-24 xl:bottom-0 lg:left-0 lg:-bottom-6 -rotate-45 lg:rotate-0 -left-20 animate-pulse'
          src='/public/assets/arrow.svg'
          alt=''
        />
      </div>

      <img
        src='/public/assets/rotate.svg'
        className='absolute bottom-10 lg:bottom-40 right-7 md:right-20 animate-spin-slow w-32 h-32 md:w-auto md:h-auto'
        alt=''
      />
    </section>
  );
};

export default Hero;
