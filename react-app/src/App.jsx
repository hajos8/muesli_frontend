import React from "react";

import MuesliPage from "./pages/MuesliPage";
import AboutPage from "./pages/AboutPage";
import LeftSideBar from "./components/LeftSideBar";

import "./App.css"


export default class App extends React.Component{
  state = {
    menuItemSelected: 'products',
  }

  handleSelectMenuItem = menuItem => this.setState({menuItemSelected: menuItem})

  render(){
    return(
      <div className="page-container">
        
        <LeftSideBar onMenuItemSelected={this.handleSelectMenuItem}/>

        {this.state.menuItemSelected == 'products' && <MuesliPage/>}
        {this.state.menuItemSelected == 'about' && <AboutPage/>}

      </div>
    )
  }

}