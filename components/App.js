import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      filters: [],
      fruit: [],
      selectedFilter: null
    }
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  fetchFilters() {
      fetch('/api/fruit_types')
        .then(res => res.json())
        .then(filters => this.setState({filters: filters}));
    }

    componentWillMount() {
      fetch('/api/fruit')
        .then(res => res.json())
        .then(fruit => this.setState({ fruit: fruit}));
    }


  render(){
    return(
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} handleFilterChange={this.handleFilterChange.bind(this)} selectedFilter={this.state.selectedFilter}/>
    )
  }
}
export default App;
