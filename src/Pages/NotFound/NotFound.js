import React from 'react';
import error from '../../images/404.png'
const NotFound = () => {
    return (
        <div className="not-found mb-5">
            <img className="img-fluid" src={error} alt="" />
        </div>
    );
};

export default NotFound;