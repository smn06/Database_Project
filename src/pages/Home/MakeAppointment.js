import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (

        <div className='px-14 py-10'>
            <div className='flex justify-center items-center' style={{ backgroundImage: `url(${appointment})` }}>

                <div className='flex-1 hidden xl:block '>
                    <img src={doctorSmall} alt="" className='mt-[-100px] ' />
                </div>

                <div className='flex-1 p-10 xl:p-0'>
                    <h1 className='text-primary font-bold text-xl py-3'>Appointment</h1>

                    <h2 className='text-3xl font-bold text-white'>Make an appointment Today</h2>

                    <p className='text-white py-3 pr-5 text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                    <button className='btn  bg-gradient-to-r from-secondary to-primary uppercase text-white border-0 mt-5'>get started</button>
                </div>
            </div>
        </div>

    );
};

export default MakeAppointment;