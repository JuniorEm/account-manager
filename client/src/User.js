import React, { Component } from 'react';
import './User.css';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: "Idade",
      money: "Salário"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    if (event.target.name === "name") {
      this.setState({ name: event.target.value });
    } else if (event.target.name === "age") {
      this.setState({ age: event.target.value });
    } else if (event.target.name === "money") {
      this.setState({ money: event.target.value });
    }
  }

  sendFormData() {

    var str = JSON.stringify({
      "name": this.state.name,
      "age": this.state.age,
      "money": {
        "value": this.state.money
      }
    });

    console.log(str);

    var options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        "name": this.state.name,
        "age": this.state.age,
        "money": {
          "value": this.state.money
        }
      })
    };

    var request = new Request('http://localhost:8080/user', options);

    fetch(request).then(function (response) {
    });
  }

  handleSubmit(event) {
    this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="User">
          <h1>Register</h1>
          <div className="User-form">
            <input type="text" class="input-specific" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Nome" />
            <br />
            <br />
            <input type="number" class="input-specific" value={this.state.age} onChange={this.handleChange} name="age" placeholder="Idade" />
            <br />
            <br />
            <input type="number" class="input-specific" value={this.state.money} onChange={this.handleChange} name="money" placeholder="Salário" />
            <br />
            <br />
            <button class="button"><span>Submit</span></button>
          </div>
        </div>
      </form>
    );
  }
}

export default User;
