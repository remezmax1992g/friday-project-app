import React from 'react';
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import {NavLink} from "react-router-dom";

const Test = () => {
    return (
        <NavLink to="test">
            <div>
                <SuperInputText/>
                <SuperButton>Button</SuperButton>
                <SuperCheckbox/>
            </div>
        </NavLink>
    );
};

export default Test;