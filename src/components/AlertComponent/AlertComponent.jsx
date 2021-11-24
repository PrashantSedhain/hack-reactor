import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const AlertComponent = (props) => {
  const [show, setShow] = useState(true);

  const handleCloseClick = () => {
      setShow(false);
      props.setErrMessage('');
  }

  if (show) {
    return (
      <Alert variant="danger" onClose={handleCloseClick} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{props.message}</p>
      </Alert>
    );
  }
  return null;
};

export default AlertComponent;
