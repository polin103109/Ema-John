import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Shop from '../Shop/Shop';
const Home = () => {
    return (
        <div>
        <Header></Header>
        <Shop></Shop>
        {/* <Outlet/>
        */}
        </div>
    )
}
export default Home;