import React from 'react';
import { CardImage } from '../cardImage/CardImage';

export const CardButton = (props) => {
    if(props.active) {
        return (
            <>
                <div className="available-button">
                    <button className="font-smallest" onClick={() => { showItem(props.id) }}>Show details</button>
                </div>
                <div id={`item-${props.id}-details`} className="item-details" >
                    <div id="details-container" className="item-details-container">
                        <button onClick={() => { close(props.id) }} className="button-test">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="close">
                                    <path id="Path" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#1A1B1D"/>
                                </g>
                            </svg>
                        </button>
                        <CardImage active={props.active} srcUrl={props.srcUrl} />
                        <p className="item-title font-small"> {props.itemName} </p>
                        <p className="item-description font-smallest"> {props.itemDescription} </p>
                    </div>
                </div>
            </>
        )
    } else { 
        return (
            <div className="unavailable-button">
                <button className="font-smallest" disabled>Unavailable</button>
            </div>
        )
    }
}

function showItem(id) {
    document.getElementById(`item-${id}-details`).classList.add('overlay');
}
function close(id) {
    document.getElementById(`item-${id}-details`).classList.remove('overlay');
}