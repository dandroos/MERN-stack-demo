import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
    console.log(this.props)
    console.log(prevProps)
    console.log(this.props.location.pathname)
    console.log(prevProps.location.pathname)
    if (this.props.location.pathname !== prevProps.location.pathname) {
      console.log('triggered')
      window.scrollTo(0, 0);
    }
  }
  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
