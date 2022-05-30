import React from 'react';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import ServiceBanner from './ServiceBanner';
import ServiceCard from './ServiceCard';

const Service = () => {


    const services = [
        {
            _id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, odio?"
        },
        {
            _id: 2,
            img: cavity,
            title: 'Cavity Filling',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, odio?"
        },
        {
            _id: 3,
            img: whitening,
            title: 'Teeth Whitening',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo, odio?"
        }
    ]


    return (
        <div className='my-14 px-12 '>
            <div className='text-center uppercase'>
                <h2 className='text-primary text-xl font-bold'>Our services</h2>
                <h3 className='text-accent text-2xl'>Service we Provide</h3>
            </div>

            <div className='grid md:grid-col-1 xl:grid-cols-3 gap-4 mt-10'>
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        >

                        </ServiceCard>)
                }

            </div>
            <div>
                <ServiceBanner></ServiceBanner>
            </div>
        </div>
    );
};

export default Service;