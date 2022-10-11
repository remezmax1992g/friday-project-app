import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EnterNewPassword from "../routes/EnterNewPassword/EnterNewPassword";
import {Error} from "../routes/Error/Error";
import Login from "../routes/Login/Login";
import PasswordRecovery from "../routes/PasswordRecovery/PasswordRecovery";
import Profile from "../routes/Profile/Profile";
import Registration from "../routes/Registration/Registration";
import Test from "../routes/Test/Test";

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="enterNewPassword" element={<EnterNewPassword/>}/>
                <Route path="error" element={<Error/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="passwordRecovery" element={<PasswordRecovery/>}/>
                <Route path="profile" element={<Profile/>}/>
                <Route path="registration" element={<Registration/>}/>
                <Route path="test" element={<Test/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Main;