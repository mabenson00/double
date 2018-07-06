import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';
import  Sidebar  from "./containers/sidebar"
const users = [
  {name: "Sam",
  id: 1
  },
  {name: "Ben",
  id: 2
  },
  {name: "Jennifer",
  id: 3
  },
  {name: "Michael",
  id: 4
  },
  {name: "Laura",
  id: 5
}]

class App extends Component {
  state = {
    users: users,
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <nav id="sidebar">
            <Sidebar
              users = {this.state.users}
              />
              {this.state.response}
          </nav>
          <div id="content">
          </div>
        </div>
      </div>
    );
  }
}



export default App;
