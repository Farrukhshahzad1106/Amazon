import React from 'react';
import './Header.css'
import Header from './Header';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <Header/>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
             alt='Amazon banner'
             className='home__image'/>
        <div className='home__row'>
            <Product
                id="12321341"
                title="The Lean Startup"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,201,203,200_.jpg"
            />
            <Product
                id="12321341"
                title="The Lean Startup"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,201,203,200_.jpg"
            />
        </div>

        <div className='home__row'>
            <Product
                id="12321341"
                title="The Lean Startup"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,201,203,200_.jpg"
            />
            <Product
                id="12321341"
                title="The Lean Startup"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,201,203,200_.jpg"
            />
            <Product
                id="12321341"
                title="The Lean Startup"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,201,203,200_.jpg"
            />
        </div>
        <div className='home__row'>
        <Product
                id="12321341"
                title="The Lean Startup"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,201,203,200_.jpg"
            />
        </div>
        
    </div>
  )
}
export default Home;
//Product component will have the following:
//Product ID
//title
// Price
// Rating
// Image