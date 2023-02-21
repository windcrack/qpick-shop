import React, {useState} from 'react';
import SelectBlock from './select-lists/SelectBlock';
import arrow from '../../assets/img/svg/arrow-down.svg'
import './styles.sass';

const items = [
    {id: 1, brand: 'Apple', models: ['iPhone 12', 'iPhone 12 Max', 'iPhone 13', 'iPhone 13 Max', 'iPhone 13 Pro Max', 'iPhone 14']},
    {id: 2, brand: 'INOI', models: []},
    {id: 3, brand: 'Nokia', models: []},
    {id: 4, brand: 'Xiaomi', models: []},
    {id: 5, brand: 'Realme', models: []},
    {id: 6, brand: 'Samsung', models: []},
    {id: 7, brand: 'Sony', models: []},
    {id: 8, brand: 'Vivo', models: []},
]

function Select(){
    const [show, setShow] = useState(true);
    const [text, setTitle] = useState({title: '', subtitle: ''});

    function showBlock(){
        show ? setShow(false) : setShow(true);
    }

    function setTitleSelected(text){
        setTitle({title: text.title, subtitle: text.subtitle})
    }

    return(
        <div className='select'>
            <div className='select__default' onClick={showBlock}>
                {text.title === '' && text.subtitle === '' ? 'Выбрать модель телефона' : `${text.title} - ${text.subtitle}`}
                <img src={arrow} alt="Стрелка" />
            </div>
            <div className={show ? 'select-body' : 'select-body show'}>
                <SelectBlock items={items} showBlock={showBlock} setTitleSelected={setTitleSelected} />
            </div>
        </div>
    )
}

export default Select;