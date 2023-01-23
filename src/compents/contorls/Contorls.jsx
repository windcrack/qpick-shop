import React from 'react';
import ButtonCard from '../../ui/ButtonCard/ButtonCard';
import ButtonFavorit from '../../ui/ButtonFavorite/ButtonFavorit';

function Contorls(){
    return(
        <div className='controls'>
            <ButtonFavorit />
            <ButtonCard />
        </div>
    )
}

export default Contorls;