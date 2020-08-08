import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
// import { CssBaseline } from '@material-ui/core';

// import { store } from './redux/store';


import  Homepage  from './components/views/Homepage';
// import { Post } from './components/views/Post/Post';
// import { PostEdit } from './components/views/PostEdit/PostEdit';
// import { PostAdd } from './components/views/PostAdd/PostAdd';
// import { NotFound } from './components/views/NotFound/NotFound';

// const theme = createMuiTheme({
//   palette: {
//     primary: { main: '#2B4C6F' },
//   },
// });

const App = () => (
  <div>
<Homepage/>
</div>
);

export default App ;