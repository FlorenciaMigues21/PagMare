import React from 'react';
import CardItem from './CardItem';
import Femenino from './Femenino.jpg'
import Masculino from './Masculino.jpg'
import Accesorios from './Accesorios.jpg'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <div className='cards--container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={Masculino}
                            label='Masculino'
                            path='/Catalogo'
                        />
                        <CardItem
                            src={Accesorios}
                            label='Accesorios'
                            path='/Catalogo'
                        />
                        <CardItem
                            src={Femenino}
                            label='Femenino'
                            path='/Catalogo'
                            />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;