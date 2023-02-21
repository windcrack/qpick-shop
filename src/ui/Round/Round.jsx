import React from 'react';
import './styles.sass';

function Round({children}){
    return(
        <div className='round'>
            {children}
        </div>
    )
}

export default Round;