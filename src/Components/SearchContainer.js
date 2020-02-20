import React from 'react';

function SearchContainer(props) {
    return (
        <div>
            <select onChange={props.changeType} id="animalType">
                <option value="">All Animals</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="rabbit">Rabbit</option>
            </select>
        </div>
    )
}

export default SearchContainer;