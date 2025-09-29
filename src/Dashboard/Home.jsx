import React from 'react';

import "./style.css"
import TopBar from './TopBar';
import Dashboard from './Dashboard';
const Home = () => {
    return (
        <div>
            <TopBar/>
            <Dashboard/>
        </div>
    );
};

export default Home;