import React, { Fragment } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

const Homepage = () => (
  <React.Fragment>
    <Segment inverted>
      <Form inverted>
        <Form.Group widths="equal">
          <Form.Input fluid label="E-mail" placeholder="E-mail" />
          <Form.Input fluid label="Password" placeholder="Password" />
        </Form.Group>
        <Button type="submit">Sign-In</Button>
      </Form>
      {/* <p>
        Don't have an account? <a href='' >Sign-Up</a>
      </p> */}
    </Segment>


  </React.Fragment>



);
export default Homepage;
