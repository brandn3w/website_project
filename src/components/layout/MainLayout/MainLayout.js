import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Homepage from '../../views/Homepage/Homepage'
import Hero from '../../layout/Hero/Hero'
import Container from 'react-bootstrap/Container';
import Footer from '../../layout/Footer/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './MainLayout.module.scss';

const MainLayout = ({ className, children }) => (
    <div className={styles.root}>
       
        <Header />
        <Homepage />
        <Hero/>
      {/* <Container>
          <Row>
      <Col xs={12} md={8} lg={8} xl={8}> Blog </Col>
      <Col xs={6} md={4} lg={4} xl={4}> Social Media </Col>
      </Row> */}

      <Container/>
      <Footer />
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
