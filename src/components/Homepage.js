import React, { Fragment } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

const Homepage = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <Segment inverted style={{ maxWidth: 500 }} >
      <Form inverted style={{ maxWidth: 450 }}>
        <Form.Input label="E-mail" placeholder="E-mail" />
        <Form.Input label="Password" placeholder="Password" />
        <Button type="submit">Sign-In</Button>
      </Form>
      {/* <p>
        Don't have an account? <a href='' >Sign-Up</a>
      </p> */}
    </Segment>
  </div>


);
export default Homepage;
