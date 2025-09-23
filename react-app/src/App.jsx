import React from "react";

import MuesliPage from "./pages/MuesliPage";
import AboutPage from "./pages/AboutPage";

import "./App.css"


export default class App extends React.Component{
  state = {
    menuItemSelected: 'products',
    menuExpanded: false
  }

  handleProductsMenuItemClick = e => this.setState({menuItemSelected: 'products'})
  handleAboutMenuItemClick = e => this.setState({menuItemSelected: 'about'})
  
  handleNavMouse = e => this.setState({menuExpanded: !this.state.menuExpanded})

  render(){
    return(
      <div className="page-container">
        
        <nav id="navbar" title="Toggle menu width" className={this.state.menuExpanded ? "expanded" : ""} onMouseEnter={this.handleNavMouse} onMouseLeave={this.handleNavMouse}>
          <div className="menu-item" tabIndex="0" data-content="products" onClick={this.handleProductsMenuItemClick}>
            <span className="menu-icon">📦</span>
            <span className="menu-text">Products</span>
          </div>
          <div className="menu-item" tabIndex="0" data-content="prices">
            <span className="menu-icon">💰</span>
            <span className="menu-text">Prices</span>
          </div>
          <div className="menu-item" tabIndex="0" data-content="about" onClick={this.handleAboutMenuItemClick}>
            <span className="menu-icon">ℹ️</span>
            <span className="menu-text">About</span>
          </div>
        </nav>

        {this.state.menuItemSelected == 'products' && <MuesliPage/>}
        {this.state.menuItemSelected == 'about' && <AboutPage/>}

      </div>
    )
  }

}