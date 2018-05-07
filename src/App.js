import React, { Component } from 'react';
import './App.css';
import {ROUTER_MAP} from './router/routerMap'
import Header from './component/common/Header'
import Footer from './component/common/Footer'
import Mine from './component/common/Mine'
import FooteItem from './component/common/Footer/FooteItem'
import {NavLink, Route, Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Mine>
          {
            ROUTER_MAP.ROUTER_VIEW.map((item, index)=>{
              return(
                <Switch key={index}>
                  <Route 
                      path={item.path} 
                      component={item.component}
                      >
                  </Route>
                </Switch>
              )
            })
          }
        </Mine>
        <Footer>
          {
            ROUTER_MAP.ROUTER_LINK.map((item,index)=>{
              return (
                <NavLink
                  key={index}
                  to={item.to}
                  activeClassName={item.active} >
                  <FooteItem title={item.text} icon={item.icon}></FooteItem>
                </NavLink>
              )
          })}
        </Footer>
      </div>
    );
  }
}

export default App;
