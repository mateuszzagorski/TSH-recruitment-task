import React from 'react';
import StarsGenerator from '../starsGenerator/StarsGenerator';
import { Promo } from '../promo/Promo';
import { CardButton } from '../cardButton/CardButton';
import { CardImage } from '../cardImage/CardImage';
import Col from 'react-bootstrap/Col';

export const Card = props => (
      <Col xs={12} sm={6} md={6} lg={3} className='card-container'>
        <div className="card">
          <div>
            <CardImage active={props.item.active} srcUrl={props.item.image} />
            <Promo promo={props.item.promo} />
          </div>
          <div className="card-inner d-flex flex-column justify-content-between">
            <div className="item-information">
              <p className="item-title font-small"> {props.item.name} </p>
              <p className="item-description font-smallest"> {props.item.description} </p>
            </div>
            <div className={ `stars-${props.item.id} stars` }>
              <StarsGenerator rating={props.item.rating} id={props.item.id} />
            </div>
            <CardButton active={props.item.active} id={props.item.id} srcUrl={props.item.image} itemName={props.item.name} itemDescription={props.item.description} />
          </div>
        </div>
      </Col>
);