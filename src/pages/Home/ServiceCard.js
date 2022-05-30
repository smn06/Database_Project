import React from 'react';

const ServiceCard = ({ service }) => {

    const { img, title, description } = service

    return (
        <div>

            <div className="card xl:w-96 md:w:82 mx-auto bg-base-100 shadow-2xl">
                <figure className="px-8 pt-10">
                    <img src={img} alt="Service" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-primary">{title}</h2>
                    <p>{description}</p>

                </div>
            </div>

        </div>
    );
};

export default ServiceCard;