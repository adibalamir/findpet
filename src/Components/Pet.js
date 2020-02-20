import React from 'react';

let imgStyle = {
    height: '150px',
    width: '150px'
}

function Pet(props) {
    return(
        <div key={props.id}>
            <p>{props.name}</p><img alt='animal' src={props.photo} style={imgStyle}/>
        </div>
    )
}

export default Pet;