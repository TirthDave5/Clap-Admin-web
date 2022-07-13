import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./modules/Login";
import AppScreen from './components/AppScreen';
import Users from './modules/Users';
import GenerateCoupons from './modules/GenerateCoupons';

const App = () => {
  return (
    <GenerateCoupons/>
  )
}

export default App;