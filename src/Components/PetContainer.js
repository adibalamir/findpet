import React from 'react';
import Pet from './Pet'

function PetContainer(props) {
    return (
        <div className='flex'>
            {
                props.pets !== undefined ? props.pets.map(pet => 
                <Pet id={pet.id.toString()} name={pet.name} photo={pet.photos[0] !== undefined ? pet.photos[0].large : 'https://via.placeholder.com/100'} />) : <p></p>
            }
        </div>
    )
}

export default PetContainer;