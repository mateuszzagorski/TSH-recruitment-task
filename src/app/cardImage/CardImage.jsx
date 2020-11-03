import React from 'react';

export const CardImage = (props) => {
    if(props.active) {
        return <img alt='item' src={props.srcUrl} />
    } else {
        return <img alt='item' src={props.srcUrl} className="unavailable-image"/>
    }
}
