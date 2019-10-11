import React, { Component } from 'react';
import './GameCircle.css';

// propsien avulla siirretään bg-ominaisuus GameCircle-komponenteille
// jotta voidaan määritellä eri taustaväri kaikille neljälle komponentin ilmentymälle


const GameCircle = (props) => {
   
        return (
            <div className={props.bg}></div>
        );
    
}

export default GameCircle;