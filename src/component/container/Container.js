import React from 'react';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Homepage from '../../component/homepage/Homepage.js';

function Container() {
	const supportsHistory = 'pushState' in window.history;
   
  return (
    <section> 
		<BrowserRouter basename="/" forceRefresh={!supportsHistory}>                      
		<Switch>
		     <Route exact path="/" component = {Homepage} />		     
		</Switch>           
		</BrowserRouter>
    </section>

  );
}

export default Container;
