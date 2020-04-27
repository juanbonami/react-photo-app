import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {

      username: '',
      password: '',
      confirmPassword: ''

    }
  }


  handleUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleConfirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value
    })
  }


  render() {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {/* A segment is used to create a grouping of related content. A segment can have its colors "inverted" for contrast. */}
        <Segment inverted style={{ maxWidth: 500 }}>
          {/* A Form displays a set of related user input fields in a structured way. */}
          <Form inverted style={{ maxWidth: 450 }}>
            {/* A Form.Input displays an input field with "label" and "placeholder" as attributes. */}
            <Form.Input label="E-mail" placeholder="E-mail" value={this.state.username} onChange={this.handleUsername} />
            <Form.Input label="Password" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
            <Form.Input
              fluid
              label="Confirm Password"
              placeholder="Confirm Password"
              value={this.state.confirmPassword}

            />
            {/* A Button displays button with attribute type. */}
            <Button type="submit">Sign-Up</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
