import React from 'react';
import Card from '../../ui/card/Card';
import img1 from '../../assets/img/cases/img1.png'
import img2 from '../../assets/img/cases/img2.png'
import img3 from '../../assets/img/cases/img3.png'

const cases = [
    {id: 1,title: 'Стеклянные', img: img1},
    {id: 2,title: 'Силиконовые', img: img2},
    {id: 3,title: 'Кожаные', img: img3},
]

function Cases(){
    return(
        <div className='cases'>
            <div className="cases__body">
                <h2 className='title'>Черхлы</h2>
                {cases.map(item => (<Card key={item.id} img={item.img} text={item.title} />))}
            </div>
        </div>
    )
}

export default Cases;