import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
const Welcome = () => (
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>
      This is simple application that retreives photos from Unsplash api. In
      order to start please enter any search term in the inputs field
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        learn more
      </Button>
    </p>
  </Jumbotron>
);
export default Welcome;
