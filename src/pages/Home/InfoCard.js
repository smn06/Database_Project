import React from 'react';

const InfoCard = ({ img, bgClass, cardTitle }) => {
    return (
        <div className={`card lg:card-side shadow-xl  px-5   ${bgClass}`}>
            <figure>
                <img src={img} alt="Album" className='h-11 mt-5 xl:mt-0 ' />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;