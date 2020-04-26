import React, { Fragment } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

const Homepage = () => (

  <Segment inverted style={{ maxWidth: 500 }}>
    <Form inverted style={{ maxWidth: 450 }}>
      <Form.Input fluid label="E-mail" placeholder="E-mail" />
      <Form.Input fluid label="Password" placeholder="Password" />
      <Button type="submit">Sign-In</Button>
    </Form>
    {/* <p>
        Don't have an account? <a href='' >Sign-Up</a>
      </p> */}
  </Segment>



);
export default Homepage;
