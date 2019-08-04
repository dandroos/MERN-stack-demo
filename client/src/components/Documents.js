import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getDocuments, deleteDocument } from "../redux/actions";
import moment from "moment";
import { useTransition, animated } from "react-spring";

import { Container, Button } from "reactstrap";

function Documents(props) {

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getDocuments())
  }, [dispatch, props.isAuthenticated])


  const removeDocument = e => {
    dispatch(deleteDocument(e.target.id));
  };

  const transitions = useTransition(props.documents, item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <Container>
      {transitions.map(({ item, animatedProps, key }) => {
        return (
          <animated.div
            key={key}
            style={animatedProps}
            className="mb-4 p-2 border-bottom"
          >
            <h2 className="font-weight-bold">{item.title}</h2>
            <p>
              <small>
                Posted by {' '}
                
                <a href={`mailto:${item.email}`}>{props.user && props.user.id === item.author_id ? (<span className="font-weight-bold">YOU</span>) : item.name}</a>
                {' '}
                {moment(item.date).fromNow()}
              </small>
            </p>
            <p>{item.body}</p>
            {props.user && props.user.id === item.author_id ? (
              <div className="text-right">
                <Button
                  size="sm"
                  color="primary"
                  id={item.id}
                  onClick={removeDocument}
                >
                  Delete
                </Button>
              </div>
            ) : null}
          </animated.div>
        );
      })}
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    documents: state.documents.documents
  };
};
export default connect(mapStateToProps)(Documents);
