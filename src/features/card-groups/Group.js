import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Card from './Card'
import AddCard from './AddCard'

export class Group extends Component {
  
  static propTypes = {
    cardGroups: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="task-group card-groups-group">
        <header>{this.props.header}</header>
        <ul>

        {this.props.data && this.props.data.length > 0 ? (
            <div>
              {this.props.data.map((item, i) => (
                <Card key={i} url={item.url} desc={item.desc} title={item.title}></Card>
              ))}
            </div>
        ) : (
          <div className="no-items-tip">No items yet.</div>
        )}

        </ul>
        <AddCard></AddCard>
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
)(Group);
