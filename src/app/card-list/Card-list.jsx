import React from 'react';
import { Card } from '../card/Card';
import { NoResults } from '../noResults/NoResults';

export const CardList = (props) => {
  if(props.searchField.length > 0 && props.currentItemList.length > 0) {
    return (
      <>
        {props.currentItemList.slice(0, 8).map(items => (
          <Card key={items.id} item={items} />
        ))}
      </>
    )
  } else if ((props.searchField.length > 0 || props.searchField === '') && props.currentItemList.length === 0) {
    return (
      <>
        <NoResults />
      </>
    )
  } else {
    return (
      <>
        {props.currentItemList.map(items => (
          <Card key={items.id} item={items} />
        ))}
      </>
    )
  }
};