import React from 'react';

const TestimonialCard = ({ review }) => {
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <p>{review.review}</p>

                <div className="flex mt-2">

                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt='people' />
                        </div>
                    </div>

                    <div className='ml-10'>
                        <h1>{review.name}</h1>
                        <p>{review.country}</p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default TestimonialCard;