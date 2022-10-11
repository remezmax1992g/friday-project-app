import React from 'react';
import {NavLink} from "react-router-dom";

export const Error = () => {
    return (
        <NavLink to="error">
            <div>
                Error 404
            </div>
        </NavLink>
    );
};
