import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import {Container} from 'react-bootstrap';

class Homepage extends React.Component {
   
render(){

    return(
<Container>
    <h1>Welcome</h1>
</Container>
    )
}
};
Homepage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

export default Homepage;