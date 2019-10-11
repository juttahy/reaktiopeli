import React from 'react';
import './GameCircle.css';

// propsien avulla siirretään bg-ominaisuus GameCircle-komponenteille
// jotta voidaan määritellä eri taustaväri kaikille neljälle komponentin ilmentymälle
// onClick tulee propsina! Eli vaikka sitä käytetään app:in puolella niin tässä eka määritellään
// että onClickistä tehdään se, mikä App:in puolella funktiona määritellään tälle click-propsille! 


const GameCircle = (props) => {
    
    return (
            <div className={'circle' + (props.active ? ' active' : '')}
            onClick={props.click}
            style={{ backgroundColor: props.active ? props.active : props.buttonColor }}
            >
            </div>
    );
    
}

export default GameCircle;