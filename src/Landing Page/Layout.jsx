import React from 'react';
import Navber from './Navber';
import Footer from './Footer';


const Layout = ({children}) => {
    return (
        <div>
            <Navber/>
            {children}
         <Footer/>
        </div>
    );
};

export default Layout;