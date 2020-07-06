// External Dependencies
import { connect } from 'react-redux';
// This function connects a stateless functional react component
// with the redux store. It just reduces some boilerplate and makes the
// component code easier to read.
export default (mapStateToProps, actionCreators, component) =>
  connect(
    mapStateToProps,
    actionCreators,
  )(component);
