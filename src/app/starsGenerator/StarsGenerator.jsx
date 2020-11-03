import React, { Component } from 'react';
import { EmptyStar } from '../star/EmptyStar';
import { FilledStar } from '../star/FilledStar';

class StarsGenerator extends Component {

    render() {
        const filledStars = [];
        const emptyStars = [];
        for(let i = 0; i < this.props.rating; i++) {
            filledStars.push(i);
        }
        for(let i = 0; i < 5 - this.props.rating; i++) {
            emptyStars.push(i);
        }
        return (
            <>
                {Object.keys(filledStars).map( (key) => {
                    return (
                        <FilledStar key={key}/>
                    )
                })}
                {Object.keys(emptyStars).map( (key) => {
                    return (
                        <EmptyStar key={key}/>
                    )
                })}
            </>
        )
    } 
}
export default StarsGenerator;