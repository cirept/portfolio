import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Example = (props) => {
  return (
    <div>
      <Jumbotron className={props.classes}>
        <h1 className="display-3">{props.h1}</h1>
        <p className="lead">{props.leadMessage}</p>
        <hr className="my-2" />
        <p>{props.message}</p>
        {props.includeButton && <p className="lead">
          <Button color="primary">{props.ctaText}</Button>
        </p>}
      </Jumbotron>
    </div>
  );
};

export default Example;