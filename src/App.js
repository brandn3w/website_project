import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Homepage  from './components/views/Homepage/Homepage';
import Aboutme from './components/views/Aboutme/Aboutme';

import MainLayout from './components/layout/MainLayout/MainLayout';
import { NotFound } from './components/views/NotFound/NotFound';

const App = () => (
  <div>

        <BrowserRouter>   
        <MainLayout>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/aboutme' component={Aboutme} />
              <Route path='*' component={NotFound} /> 
            </Switch>
            </MainLayout>
            </BrowserRouter>

</div>
);

export default App ;