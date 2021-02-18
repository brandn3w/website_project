import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import {AnimatedSwitch} from 'react-router-transition';
import Aboutme from '../src/components/views/Aboutme/Aboutme';
import Shop from '../src/components/views/Shop/Shop';


const App = () => (

<BrowserRouter>
<MainLayout>
  <AnimatedSwitch
  atEnter={{ opacity: 0 }}
  atLeave={{ opacity: 0 }}
  atActive={{ opacity: 1 }}
  className={"switch-wrapper"}
>
  {/* <Route exact path="/" component={Home} /> */}
  <Route exact path="/aboutme"/>
  <Route exact path='/shop' />
  {/* <Route exact path="/mycart" component={MyCart} /> */}
 
</AnimatedSwitch>
</MainLayout>
</BrowserRouter>


);

export default App ;