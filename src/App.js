import React from 'react'
import HomeScreen from './HomeScreen/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupScreen from './Authentication/SignUp/SignupScreen';
import OtpScreen from './Authentication/SignUp/OtpScreen';
import ServicesScreen from './Screen/ServicesScreen';
import LoginScreen from './Authentication/Login/LoginScreen';
import ErrorScreen from './Screen/ErrorScreen';
import OAuth2RedirectHandler from './Services/OAuthRedirectHandler';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/signup' element={<SignupScreen />} />
        <Route path='/otp' element={<OtpScreen />} />
        <Route path='/services' element={<ServicesScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<ErrorScreen />} />
        <Route path="/oauth2/redirect" Component={OAuth2RedirectHandler}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App