import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Group from './Group';
import AddGroup from './AddGroup';

export class DefaultPage extends Component {
  static propTypes = {
    cardGroups: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <header className="card-groups-header">Card manager</header>
        <div className="card-groups">
            <Group></Group>
            <Group></Group>
            <Group></Group>
            <AddGroup></AddGroup>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    cardGroups: state.cardGroups,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
