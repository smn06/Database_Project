import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center mt-40 ">
            <div className="w-24 h-24 border-l-2 border-secondary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;