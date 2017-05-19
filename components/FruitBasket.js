import React from 'react';
import { Component } from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


function FruitBasket(props) {


  return (
    <div className="fruit-basket">
      <Filter filters={props.filters} handleChange={props.handleFilterChange} />
      <FilteredFruitList filter={props.selectedFilter} fruit={props.fruit} />
    </div>
  );
}

FruitBasket.defaultProps= {
  fruit: null,
  filters: null,
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
