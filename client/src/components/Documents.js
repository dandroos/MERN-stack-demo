import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getDocuments, deleteDocument } from "../redux/actions";

import { useTransition, animated } from "react-spring";

import { Container, Button } from "reactstrap";

function Documents(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocuments());
  }, [dispatch]);

  const removeDocument = e => {
    dispatch(deleteDocument(e.target.id));
  };

  const transitions = useTransition(props.documents, item => item._id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <Container>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={item._id}
          style={props}
          className="mb-4 p-2 border-bottom"
        >
          <h2 className="font-weight-bold">{item.title}</h2>
          <p>{item.body}</p>
          <div className="text-right">
            <Button
              size="sm"
              color="primary"
              id={item._id}
              onClick={removeDocument}
            >
              Delete
            </Button>
          </div>
        </animated.div>
      ))}
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    documents: state.documents.documents
  };
};
export default connect(mapStateToProps)(Documents);
