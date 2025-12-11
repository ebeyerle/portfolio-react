import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-white text-[#000000] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/94014144-6d2d-4fc0-a03a-aa757b8070f6" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-[#000000]'>Contact</p>
                <p className='text-[#000000] py-4'>Please fill out the contact form below or you can email me at: evanbeyerle@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 bg-slate-800 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's keep in touch!</button>
        </form>
    </div>
  )
}

export default Contact
