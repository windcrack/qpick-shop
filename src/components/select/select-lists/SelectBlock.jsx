import React, {useState} from 'react';
import arrow from '../../../assets/img/svg/arrow-down.svg'

function SelectBlock({items, showBlock, setTitleSelected}){
    const [isShow, setIsShow] = useState(true);

    function rotateArrow(){
        isShow ? setIsShow(false) : setIsShow(true);
    }

    function closeModal(){
        showBlock();
        rotateArrow();
    }

    return(
        <>
            {items.map(item => 
            <div key={item.id} className='select-block'>
                <div className='select-block__title' onClick={rotateArrow}>{item.brand}</div>
                {item.models.length > 0 ? <img className={isShow ? 'select-block__img' : 'select-block__img rotate'} src={arrow} alt="Стрелка" /> : ''}
                {item.models.length > 0 ?  
                <div className='select-block__sub' style={isShow ? {display: 'none'}: {display: 'grid'}}>
                    {item.models.map((model, idx) => <div key={idx} className='select-block__model' onClick={() => {closeModal(); setTitleSelected({title: item.brand, subtitle: model})}}>{model}</div>)}
                </div>: ''}
            </div>
            )}
        </>
    )
}

export default SelectBlock;