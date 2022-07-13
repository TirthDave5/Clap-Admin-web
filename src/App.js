import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./modules/Login";
import AppScreen from './components/AppScreen';
import Users from './modules/Users';
import GenerateCoupons from './modules/GenerateCoupons';

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="home" element={<AppScreen />}>
        <Route path="user" element={<Users />} />
        <Route path="coupon" element={<GenerateCoupons />} />
      </Route>
    </Routes>
  )
}

export default App;