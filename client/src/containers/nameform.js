import React, { Component } from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var value = this.state.value
    fetch('http://localhost:5000/users/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        name: value
      }),
    }).then(response => response.json())
    .then(data => this.props.addUser(data))

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm
