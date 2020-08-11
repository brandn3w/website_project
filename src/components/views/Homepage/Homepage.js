import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';


class Homepage extends React.Component {
   
render(){

    return(

    <h1>Welcome</h1>

    )
}
};
Homepage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

export default Homepage;