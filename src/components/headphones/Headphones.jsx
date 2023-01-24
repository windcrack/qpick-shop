import React from 'react';
import img1 from '../../assets/img/headphones/img1.png'
import img2 from '../../assets/img/headphones/img2.png'
import img3 from '../../assets/img/headphones/img3.png'
import CardMore from '../../ui/cardMore/CardMore';

const headPhonesData = [
    {id: 1, title: 'Apple BYZ S852I', img: img1, price: 9527, rating: 4.7, app: false},
    {id: 2, title: 'Apple EarPods', img: img2, price: 2327, rating: 4.7, app: false},
    {id: 3, title: 'Apple EarPods', img: img3, price: 2327, rating: 4.7, app: false},
    {id: 4, title: 'Apple BYZ S852I', img: img1, price: 9527, rating: 4.7, app: false},
    {id: 5, title: 'Apple EarPods', img: img2, price: 2327, rating: 4.7, app: false},
    {id: 6, title: 'Apple EarPods', img: img3, price: 2327, rating: 4.7, app: false},
]

function Headphones(){
    return(
        <div className='head-phones'>
            <h2 className='title'>Наушники</h2>
            {headPhonesData.map(item => <CardMore key={item.id} title={item.title} img={item.img} price={item.price} rating={item.rating} app={item.app} />)}
        </div>
    )
}

export default Headphones;