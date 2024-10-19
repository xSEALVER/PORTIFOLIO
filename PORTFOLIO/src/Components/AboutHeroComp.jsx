import React from 'react'

const AboutHeroComp = () => {
  return (
<>

<div className="top-header text-center m-8 ">
    <h1 data-aos="fade-down">À Propos</h1>
</div>
<div className='row flex justify-between w-full gap-12 px-36'>
<div className='col flex w-6/12'
    data-aos="fade-right"
>
<div className='about-info relative flex items-center flex-col py-[30px] lg:py-[70px] px-[20px] w-full rounded-3xl bg-white '>
    <h3>Mon Introduction</h3>
    <p className=' text-center text-base text-black'>
        I am well-versed in HTML, CSS and JavaScript , and other cutting edge
        frameworks and libraries,which allows me to implement interactive features.
        Additionally, I have experirence working with content management systems (CMS) like
        WordPress.
    </p>
    <div className=''>
        <button className='absolute right-5 left-5 text-white rounded-3xl hover:bg-slate-950'>télécharger mon CV</button>
    </div>
</div>
</div>
<div className='col flex w-6/12'
    data-aos="fade-left"

>
    <div className="skills-box m-3">
        <div className='skills-header m-8'>
            <h3>FRONTEND</h3>
        </div>
        <div className='skills-list flex flex-wrap gap-1'>
            <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>HTML</span>
            <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>CSS</span>
            <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>BOOTSRAP</span>
            <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>TAILWIND</span>
            <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>JAVASCRIPT</span>
            <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>NodeJS</span>
            <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>ExpressJS</span>
            <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>React</span>
        </div>
    </div>

    <div className='skills-box m-3'>
        <div className='skills-header m-8'>
            <h3>BACKEND</h3>
        </div>
        <div className=' flex flex-wrap gap-1'>
                <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>PHP/SYMFONY</span>
        </div>
    </div>

    <div className='skills-box m-3'>
        <div className='skills-header m-8'>
            <h3>Database</h3>
        </div>
        <div className=' flex flex-wrap gap-1'>
            <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>MySQL</span>
            <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>Firebase</span>
        </div>
    </div>
</div>
</div>

</>  )
}

export default AboutHeroComp