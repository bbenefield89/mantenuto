import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export class RequireLoggedInComponent extends Component {

  static propTypes = {
    tryingAuth: PropTypes.bool.isRequired,
    authenticated: PropTypes.bool.isRequired,
    triedAuth: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    push: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tryingAuth || nextProps.authenticated) {
      return;
    }
    if (nextProps.triedAuth) {
      return this.props.push('/login');
    }
  }

  render() {
    return <div>{ this.props.children }</div>
  }
}

const mapStateToProps = (state) => {
  const { tryingAuth, triedAuth } = state.auth;
  const authenticated = !!state.auth.user;
  return { tryingAuth, triedAuth, authenticated }
}

export default connect(mapStateToProps, { push })(RequireLoggedInComponent);