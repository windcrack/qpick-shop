import React from 'react';
import img1 from '../../assets/img/wireless/img1.png';
import img2 from '../../assets/img/wireless/img2.png';
import img3 from '../../assets/img/wireless/img3.png';
import CardMore from '../../ui/cardMore/CardMore';

const wirelessData = [
    {id: 1, title: 'Apple AirPods', img: img1, price: 9527, rating: 4.7, app: true},
    {id: 2, title: 'GERLAX GH-04', img: img2, price: 6527, rating: 4.7, app: false},
    {id: 3, title: 'BOROFONE BO4', img: img3, price: 7527, rating: 4.7, app: false},
]

function Wireless(){
    return(
        <div className='wireless'>
            <h2 className="title">Беспроводные наушники</h2>
            {wirelessData.map(item => <CardMore key={item.id} title={item.title} img={item.img} rating={item.rating} app={item.app} />)}
        </div>
    )
}

export default Wireless;