import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
// import { CssBaseline } from '@material-ui/core';

// import { store } from './redux/store';


import  Homepage  from './components/views/Homepage/Homepage';
import MainLayout from './components/layout/MainLayout/MainLayout';
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

        <BrowserRouter>   
        <MainLayout>   
            <Switch>
              <Route exact path='/' component={Homepage} />
              {/* <Route exact path='/post/add' component={PostAdd} />
              <Route exact path='/post/:id' component={Post} />
              <Route exact path='/post/:id/edit' component={PostEdit} />
              <Route path='*' component={NotFound} /> */}
            </Switch>
            </MainLayout>  
            </BrowserRouter>

</div>
);

export default App ;