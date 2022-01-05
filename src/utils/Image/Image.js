import React from 'react'
import Card from 'react-bootstrap/Card';
const Image=(props)=>{
    
    return(
     <Card.Img variant="top" src={props.imageUrl} style={{width: '80%'}} />
    )
}

export default Image;