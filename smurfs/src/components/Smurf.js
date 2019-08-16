import React from 'react';

const Smurf = props => {
    console.log('smurf porps: ', props)
    return(
        <>
            <p>Smurf: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </>
    )
}

export default Smurf;