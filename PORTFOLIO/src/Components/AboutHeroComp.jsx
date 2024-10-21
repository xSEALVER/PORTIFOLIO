import React from 'react'

const AboutHeroComp = () => {
  return (
<section className=' py-12'>

<div className="top-header text-center m-8 ">
    <h1 data-aos="fade-down" className=' font-bold text-3xl text-violet-600 mb-[10px]' >À Propos</h1>
</div>
<div className='row flex justify-between w-full gap-[50px] px-36'>
    <div className='col flex w-1/2'
        data-aos="fade-right"
    >
    <div className='about-info relative flex items-center flex-col py-[30px] lg:py-[30px] px-[20px] w-full rounded-3xl bg-white '>
        <h3 className=' text-gray-300 font-bold text-3xl mb-3'>Mon Introduction</h3>
        <p className=' text-center text-base text-gray-500 mb-3'>
            I am well-versed in HTML, CSS and JavaScript , and other cutting edge
            frameworks and libraries,which allows me to implement interactive features.
            Additionally, I have experirence working with content management systems (CMS) like
            WordPress.
        </p>
        <div className=''>
            <button className=' font-medium px-5 py-3 bg-[#efefef] border-none rounded-[10px] cursor-pointer transition duration-400 hover:bg-violet-600 hover:text-white '>télécharger mon CV</button>
        </div>
    </div>
    </div>
    <div className='col flex w-1/2'
        data-aos="fade-left"

    >
        <div className="skills-box m-[10px]">
            <div className='skills-header m-[30px] '>
                <h3 className='text-white items-start'>Frontend</h3>
            </div>
            <div className='skills-list flex flex-wrap gap-1'>
                <span className='text-[14px] bg-violet-600 text-white px-2 py-0.5 rounded-[5px]'>HTML</span>
                <span className='text-[14px] bg-violet-600 text-white px-2 py-0.5 rounded-[5px]'>CSS</span>
                <span className='text-[14px] bg-violet-600 text-white px-2 py-0.5 rounded-[5px]'>BOOTSRAP</span>
                <span className='text-[14px] bg-violet-600 text-white px-2 py-0.5 rounded-[5px]'>TAILWIND</span>
                <span className='text-[14px] bg-violet-600 text-white px-2 py-0.5 rounded-[5px]'>JAVASCRIPT</span>
                <span className='text-[14px] bg-violet-600 text-white px-2 py-0.5 rounded-[5px]'>NodeJS</span>
                <span className='text-[14px] bg-violet-600 text-white px-2 py-0.5 rounded-[5px]'>ExpressJS</span>
                <span className='text-[14px] bg-violet-600 text-white px-2 py-0.5 rounded-[5px]'>React</span>
            </div>
        </div>

        <div className='skills-box m-3'>
            <div className='skills-header m-8'>
                <h3 className='text-white'>Backend</h3>
            </div>
            <div className=' flex flex-wrap gap-1'>
                    <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>PHP/SYMFONY</span>
            </div>
        </div>

        <div className='skills-box m-3'>
            <div className='skills-header m-8'>
                <h3 className='text-white'>Database</h3>
            </div>
            <div className=' flex flex-wrap gap-1'>
                <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>MySQL</span>
                <span className=' text-sm bg-violet-500 text-white rounded p-[2px] px-[10px]'>Firebase</span>
            </div>
        </div>
    </div>
</div>

</section>  )
}

export default AboutHeroComp