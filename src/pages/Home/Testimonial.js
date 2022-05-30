import React from 'react';
import quote from '../../assets/icons/quote.svg'
import TestimonialCard from './TestimonialCard';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonial = () => {


    const reviews = [
        {
            _id: 1,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam asperiores iste sapiente laborum minus?',
            img: people1,
            name: "Wilson Herry",
            country: "USA"
        },
        {
            _id: 2,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam asperiores iste sapiente laborum minus?',
            img: people2,
            name: "Wilson Herry",
            country: "USA"
        },
        {
            _id: 3,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam asperiores iste sapiente laborum minus?',
            img: people3,
            name: "Wilson Herry",
            country: "USA"
        }
    ]


    return (
        <div className='my-14'>

            <div className='flex justify-between px-12'>
                <div>
                    <h1 className='text-primary font-bold text-xl'>Testimonial</h1>
                    <h2 className='text-accent  text-5xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} className='max-h-24 xl:max-h-44' alt="quote" />
                </div>
            </div>


            <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 px-12'>
                {
                    reviews.map(review => <TestimonialCard
                        key={review._id}
                        review={review}
                    ></TestimonialCard>)
                }
            </div>



        </div>
    );
};

export default Testimonial;