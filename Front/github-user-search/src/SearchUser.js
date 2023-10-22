import React from 'react';
import axios from 'axios';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(response => {
        this.props.onUserFetch(response.data);
      })
      .catch(error => {
        this.props.onFetchError("No hay usuarios que cumplan con el criterio de búsqueda");
      });
  };

  render() {
    return (
      <form className="pseudo-search" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.username} onChange={this.handleChange} />
        <button type="submit"><img src="/images/search_icon.png" alt="Search" /></button>
      </form>
    );
  }
}

export default SearchUser;