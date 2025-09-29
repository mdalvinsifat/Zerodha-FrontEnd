import React from 'react';
import Awards from './Awards';
import Navber from '../Navber';
import Hero from "./Hero"
import State from "./State"
import Pricing from './Pricing';
import Layout from '../Layout';

const HomePage = () => {
    return (
        <Layout>
             
        
             <Hero/>
             <Awards/>
             <Pricing/>
             <State/>


        </Layout>
    );
};

export default HomePage;