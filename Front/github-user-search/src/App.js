import React from 'react';
import SearchUser from './SearchUser';
import UserCard from './UserCard';
import './css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: ''
    };
  }

  handleUserFetch = (user) => {
    this.setState({ user });
  };

  handleFetchError = (error) => {
    this.setState({ error });
  };

  render() {
    return (
      <div className="finder">
        <h1>GitHub User Search</h1>
        <SearchUser onUserFetch={this.handleUserFetch} onFetchError={this.handleFetchError}/>
        {this.state.user && <UserCard user={this.state.user} />}
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

export default App;