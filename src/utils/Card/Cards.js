import React from 'react';
import Card from 'react-bootstrap/Card';
import classes from './Card.module.css';
import Image from '../Image/Image';
import Buttons from '../Button/Button';


const Cards = (props) => {

    return (

        <Card className={classes.flex}>
            <Image imageUrl={props.image} />
            <Card.Body className={classes.flex2}>
                <Card.Title>{props.name.toUpperCase()}</Card.Title>
                <div>
                    <Buttons variant='success' detail={props.height}>Height:</Buttons>{' '}
                    <Buttons variant='warning' detail={props.weight}>Weight:</Buttons>
                </div>
                <div className={classes.flex3}>
                    <div style={{margin:'10px'}}>
                        <h6>Abilities</h6>
                        <ul>
                            {props.ability.map((e) => {
                                return <li key={e.ability.name}>{e.ability.name}</li>
                            })}
                        </ul>
                    </div>
                    <div style={{margin:'10px'}}>
                        <h6>STATS</h6>
                        <ul>
                            {props.stats.map((e) => {
                                return <li key={e.stat.name}>{e.stat.name}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </Card.Body>
        </Card>


    )
}
export default Cards;