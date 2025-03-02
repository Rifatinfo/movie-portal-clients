import React from 'react';
import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Roots;