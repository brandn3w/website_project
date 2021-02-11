import React from 'react';
//import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';


class Homepage extends React.Component {
   
render(){

    return(
<div>
//this component is probably not needed
    </div>
    )
}
};
Homepage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

export default Homepage;