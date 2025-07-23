import React from 'react';
import Awards from './Awards';
import Navber from '../Navber';
import Hero from "./Hero"
import State from "./State"

const HomePage = () => {
    return (
        <div>
             
             <Navber/>
             <Hero/>
             <Awards/>
             <State/>


        </div>
    );
};

export default HomePage;