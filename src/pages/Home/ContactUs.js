import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div className='px-12 py-10'>
            <div className="hero min-h-full" style={{ backgroundImage: `url(${appointment})` }}>

                <div className='py-10 text-center'>
                    <h1 className='text-2xl text-primary font-semibold text-center'>Contact Us</h1>
                    <p className='text-4xl text-white text-center'>Stay connected with us</p>


                    <form className='grid grid-cols-1 justify-items-center gap-5 py-8 '>
                        <input type="text" placeholder="Email" className="input w-full  h-10" />
                        <input type="text" placeholder="Subject" className="input w-full   h-10" />
                        <textarea className="textarea w-full  " placeholder="Your Message"></textarea>
                    </form>


                    <button className="btn  bg-gradient-to-r from-secondary to-primary uppercase text-white border-0 px-8 mx-auto">submit</button>


                </div>




            </div>
        </div>
    );
};

export default ContactUs;