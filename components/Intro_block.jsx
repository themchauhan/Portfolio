import React from 'react'

const Intro_block = () => {
  return (
    <section className="intro_block bg-[#5869a5]">
        <div className="container">
           <div className='flex flex-wrap w-full justify-center'>
            <h4 className='text-white  text-center max-w-6xl w-full font-bold'>Have a brilliant concept or a monumental endeavor on your radar? <br/>Join me, and together, we'll accomplish greatness.</h4>
          </div>
          <div className='btn-wrap flex justify-center mt-7'>
          <button className="bg-[#fff] text-[#5869a5] px-6 py-3 rounded-full hover:bg-black hover:text-white ml-4">Contact Me</button>
          </div>
        </div>
    </section>
  )
}

export default Intro_block