import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default class Signup extends Component {
  render() {
    return (
      <div>
        {/* A segment is used to create a grouping of related content. A segment can have its colors "inverted" for contrast. */}
        <Segment inverted>
          {/* A Form displays a set of related user input fields in a structured way. */}
          <Form inverted style={{ maxWidth: 450 }}>
            {/* A Form.Input displays an input field with "label" and "placeholder" as attributes. */}
            <Form.Input label="E-mail" placeholder="E-mail" />
            <Form.Input label="Password" placeholder="Password" />
            <Form.Input
              fluid
              label="Confirm Password"
              placeholder="Confirm Password"
            />
            {/* A Button displays button with attribute type. */}
            <Button type="submit">Sign-Up</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
