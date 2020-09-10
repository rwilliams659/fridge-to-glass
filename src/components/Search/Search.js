import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: '',
      preference: '',
      error: '',
    };
  }

  handleChange = (event) => {
    this.setState({ searchPhrase: event.target.value });
  };

  searchClick = (event) => {
    event.preventDefault();
  };

  randomClick = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form className='search-component'>
        <div className='search-label-wrapper'>
          <label htmlFor='searchPhrase' className='searchPhrase'>
            What do you have?
          </label>
          <input id='searchPhrase' className='searchPhrase-input' type='text' placeholder='Vodka' onChange={this.handleChange} />
        </div>
        <div className='search-preference-wrapper'>
          <span id='rg-label'>Preference</span>
          <div role='radiogroup' aria-labelledby='rg-label' className='preference-radio-wrapper'>
            <label for='both'>
              <input type='radio' id='both' name='preference' value='both' />
              Both
            </label>
            <label for='alcoholic'>
              <input type='radio' id='alcoholic' name='preference' value='alcoholic' />
              Alcoholic
            </label>
            <label for='non-alcoholic'>
              <input type='radio' id='non-alcoholic' name='preference' value='non-alcoholic' />
              Non Alcoholic
            </label>
          </div>
        </div>
        {this.state.error && <label className='invalid-search'>{this.state.error}</label>}
        <div className='search-buttons-wrapper'>
          <button className='search' aria-label='Submit' onClick={this.searchClick}>
            Find Drinks
          </button>
          <button className='random' aria-label='Random' onClick={this.randomClick}>
            Random Drink
          </button>
        </div>
      </form>
    );
  }
}

export default Search;
