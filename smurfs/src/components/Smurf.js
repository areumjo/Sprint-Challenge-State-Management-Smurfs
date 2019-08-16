import React from 'react';

const Smurf = props => {
    console.log('smurf porps: ', props)
    return(
        <div className="smurf-card">
            <h3>Smurf: {props.name}</h3>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    )
}

export default Smurf;