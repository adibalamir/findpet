import React from 'react';
import { dropdownData } from '../dropdowns'

function SearchContainer(props) {
    return (
        <div>
            <select onChange={props.changeType} id="animalType">
                <option value="">All Animals</option>
                {dropdownData.animalTypes.map(animalType => {
                    return <option value={animalType}>{animalType}</option>
                })}
            </select>
        </div>
    )
}

export default SearchContainer;