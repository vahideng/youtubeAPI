import React, {
  Component
} from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

  }

  onInputChanged(event) {
      this.setState({term: event})
      this.props.onSearchTermChanged(event)
  }

  render() {


    return ( <
      div className = "search-bar" >
        <input
          onChange= {event => this.onInputChanged(event.target.value)}
          value= {this.state.term}/>
      </div>);
    }

  }

  export default SearchBar;
