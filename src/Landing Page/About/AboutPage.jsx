import React from 'react';
import image from "../../images/nithinKamath.jpg"
const AboutPage = () => {
    return (
        <div>
<div className='text-2xl font-semibold text-center p-5 mt-10 mb-10 w-280 m-auto border-b-1 '>
                <h1>We pioneered the discount broking model in India. <br />
Now, we are breaking ground with our technology.</h1>
</div>




<div className='grid grid-cols-2 justify-center mt-50 '>
    <div  >
    <p className='w-120 m-auto text-lg'>       
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a  <br />combination of Zero and "Rodha", the Sanskrit word for barrier. <br />
            <br />
   <br />


Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
<br />
<br />

Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.      </p>
    </div>


    <div>
   <p className='w-120 m-auto text-lg'>       In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors. <br />
   <br />
   <br />

<span className='text-blue-700'>Rainmatter </span>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets. <br />
<br />
   <br />

And yet, we are always up to something new every day. Catch up on the latest updates on our <span className='text-blue-700'> blog </span>  or see what the media is <span className='text-blue-700 '> saying about us </span> or learn more about our business and product <span className='text-blue-700'>philosophies. </span>
    </p>
    </div>
</div>





<div className='text-center text-2xl mt-7 mb-20'>
    <h1> People </h1>
</div>
<div className='grid grid-cols-2 max-sm:grid-cols-1 justify-center items-center'>


    <div className='ml-auto mr-20'>
<img src={image} alt="" srcset="" className='rounded-full w-70 mt-10' />
<p className='text-xl text-center mt-7'>Nithin Kamath
</p>
<p className='mt-4 text-center'>Founder, CEO

</p>
    </div>



    <div className='mr-auto w-100'>
<p>
    Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.<br /> <br />Today, Zerodha has changed the landscape of the Indian broking industry. <br /> <br /> 

He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).  <br /> <br />

Playing basketball is his zen.

Connect on <span className='text-blue-700'> Homepage / TradingQnA / Twitter  </span>
</p>

    </div>




</div>
        </div>
    );
};

export default AboutPage;