import React, { Component } from 'react';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            money: 0.0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        if (event.target.name == "name") {
            this.setState({ name: event.target.value });
        } else if (event.target.name == "age") {
            this.setState({ age: event.target.value });
        } else if (event.target.name == "money") {
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

        var request = new Request('http://localhost:3000/user', options);

        fetch(request).then(function (response) {
            console.log("Success");
        });
    }

    handleSubmit(event) {
        this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br />
                <label>
                    Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br />
                <br />
                <label>
                    Age:
                        <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
                </label>
                <br />
                <br />
                <label>
                    Money:
                        <input type="number" name="money" value={this.state.money} onChange={this.handleChange} />
                </label>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
export default Index;