import React from 'react';

export const Promo = ({promo}) => {
    if(promo) {
        return <p className="promo-label font-smallest">Promo</p>
    } else {
        return <></>
    }
};