import React from 'react'

const ContactComponents = () => {
  return (
    <section className=' py-12'>
        <div className='top-header text-center '
            data-aos="fade-down"
            data-aos-duration="100"
            data-aos-delay="100"


        >
            <h1 className=' font-semibold text-violet-600  '>Contactez-moi</h1>
        </div>
        <div className='row flex justify-between w-full gap-11 px-10 pt-3'>\
            <div className='col flex w-6/12'
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"


            >
                
                <div className="contact-info relative flex flex-col justify-center items-center p-5 w-full h-[315px] rounded-lg overflow-hidden bg-violet-600">
                    <h2 className='text-white mb-5'>Me Retrouver</h2>
                    <p className='flex items-center gap-2 text-white my-1 '>Email : miezaneric2@gmail.com</p>
                    <p className='flex items-center gap-2 text-white my-1 '>Tel : 07 72 11 94 43</p>
                </div>
            </div>
            <div className='col flex w-6/12'
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="100"
            >
                <div className="form-control flex flex-col gap-3 w-full">
                    <div className="form-inputs flex gap-3 w-full">
                        <input type="text" placeholder='Nom' className='w-1/2 h-[55px] bg-transparent border-2 border-gray-400 rounded-lg px-5 outline-none text-white' />
                        <input type="text" placeholder='Email' className='w-1/2 h-[55px] bg-transparent border-2 border-gray-400 rounded-lg px-5 outline-none text-white' />
                    </div>
                    <div className="text-area">
                        <textarea placeholder='Message' className='w-full h-[250px] bg-transparent border-2 border-gray-400 rounded-lg p-4 outline-none resize-none text-white'></textarea>
                    </div>
                    <div className="">
                        <button className='flex items-center justify-center bg-violet-600 text-white font-medium py-3 px-5  border-none rounded-lg cursor-pointer transition duration-400'>Envoyer</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
    

   
    
    
   
  )
}

export default ContactComponents