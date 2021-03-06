import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { urlLinks } from '../components/App';
import { getSmurfs } from '../store/actions';
import Header from '../components/Header';
import SmurfsVillage from '../components/SmurfsVillage';

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class HomeView extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <Fragment>
        <Header {...this.props} urlLinks={urlLinks} />
        <SmurfsVillage {...this.props} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(HomeView);
