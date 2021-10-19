import React from 'react';
import error from '../../images/404_Error.jpg'
const NotFound = () => {
    return (
        <div className="not-found">
            <img className="img-fluid" src={error} alt="" />
        </div>
    );
};

export default NotFound;