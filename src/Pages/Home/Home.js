import React from 'react';
import Banner from './Banner/Banner';
import Department from './Department/Department';
import FaqSection from './FaqSection/FaqSection';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Department></Department>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;