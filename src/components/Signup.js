import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

export default class Signup extends Component {
  render() {
    return (
      <div>
        {/* A segment is used to create a grouping of related content. A segment can have its colors "inverted" for contrast. */}
        <Segment inverted>
          <Form inverted style={{ maxWidth: 450 }}>
            <Form.Input label="E-mail" placeholder="E-mail" />
            <Form.Input label="Password" placeholder="Password" />
            <Form.Input
              fluid
              label="Confirm Password"
              placeholder="Confirm Password"
            />
            <Button type="submit">Sign-Up</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}
