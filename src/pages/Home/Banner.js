import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (

        <div className='px-12 mb-14'>
            <div className="hero h-96" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="xl:max-w-xl md:max-w-xs rounded-lg shadow-2xl" alt='' />


                    <div >
                        <h1 className="md:text-3xl  xl:text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="p-2">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn  bg-gradient-to-r from-secondary to-primary uppercase text-white border-0">Get Started</button>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Banner;