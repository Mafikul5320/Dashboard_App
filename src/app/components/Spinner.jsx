import React from 'react';

const Spinner = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-white/40 z-50">
            <div className="loader"></div>
        </div>
    );
};

export default Spinner;