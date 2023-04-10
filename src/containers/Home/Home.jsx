import React from 'react';
import './home.css'
import Current from '../../components/Current/Current';

const Home = () => {
  return (
    <div className='wg__home section__padding'>




        <div className='wg__home-main'>
        <div className='wg__home-main_menu'>
            <button>В момента</button>
            <button>3 часа</button>
            <button>5 дни</button>
        </div>
        <div className='wg__home-main_current'>
            <Current />
        </div>

        </div>
    </div>
  )
}

export default Home
