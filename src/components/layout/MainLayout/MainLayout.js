import React from 'react';
import PropTypes from 'prop-types';



import Header from '../Header/Header';

import Container from 'react-bootstrap/Container';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';

const MainLayout = ({className, children}) => (
  <div className={styles.root}>
    <h2>MainLayout</h2>
    <Header/>
    <div className={styles.pageContainer}>
    {children}
    </div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};



// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default MainLayout;
