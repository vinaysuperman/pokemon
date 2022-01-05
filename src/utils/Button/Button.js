import React from 'react';
import Button from 'react-bootstrap/Button'

const Buttons=(props)=>{
    return(
        <Button variant={props.variant} disabled>{props.children} {props.detail}</Button>
    )
}

export default Buttons