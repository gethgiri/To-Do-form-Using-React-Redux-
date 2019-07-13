

1->axios

<!-- npm i --save axios
 -->
download axios 
import axios 

used to call api (get,put,delete,post)


2->developer tools in f12 console


3->  router

download router and router dom first


<!-- npm install --save react-router
npm install --save react-router-dom -->


then import route in new file that is routes.js
then import route.js in app.js
then add a button in app.js then define its function
<!-- sendNavigation(){
  this.props.history.push('/dummy');
} -->

before this you need to set route path in navigation.js A.K.A router.js

<!--     <BrowserRouter>
                    <Switch>
                          <Route exact path='/' component={App}/>
                          <Route exact path='/home' component={App}/>
                          <Route exact path='/dummy' component={Dummy}/>

                     </Switch>
                </BrowserRouter> -->

add this in case any error in router.js
<!-- import {withRouter} from 'react-router-dom'; -->


and this also for any error that occurs in router.js 

<!--     export default withRouter(App); -->


                              reduxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




                              redux concept


<!-- import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default connect(mapStateToProps, mapDispatchToProps)(App);
 -->

index for redux
<!--  import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger' -->



app for reduxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

<!-- 
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setUserData} from './actions/index';
import axios from 'axios'; -->



Reducer indexxxx

<!-- 
import {combineReducers} from "redux";
import userReducers from "./userReducers.js"; -->