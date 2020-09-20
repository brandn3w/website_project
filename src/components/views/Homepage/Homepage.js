import React from 'react';
//import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';


class Homepage extends React.Component {
   
render(){

    return(
<div>
    <h1>Welcome to MoreMagic</h1>
    </div>
    )
}
};
Homepage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

export default Homepage;