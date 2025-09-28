import React, { Component } from "react";
import "../App.css"

export default class LeftSideBar extends Component{
    state = {
        menuExpanded: false,
    }

    handleNavMouse = e =>this.setState({menuExpanded: !this.state.menuExpanded})

    handleProductMenuClick = e => this.props.onMenuItemSelected('products')
    handlePricesMenuClick = e => this.props.onMenuItemSelected('prices')
    handleAboutMenuClick = e => this.props.onMenuItemSelected('about')

    render(){
        return(
        <nav id="navbar" title="Toggle menu width" className={this.state.menuExpanded ? "expanded" : ""} onMouseEnter={this.handleNavMouse} onMouseLeave={this.handleNavMouse}>
            <div className="menu-item" tabIndex="0" data-content="products" onClick={this.handleProductMenuClick}>
                <span className="menu-icon">📦</span>
                <span className="menu-text">Products</span>
            </div>
            <div className="menu-item" tabIndex="0" data-content="prices" onClick={this.handlePricesMenuClick}>
                <span className="menu-icon">💰</span>
                <span className="menu-text">Prices</span>
            </div>
            <div className="menu-item" tabIndex="0" data-content="about" onClick={this.handleAboutMenuClick}>
                <span className="menu-icon">ℹ️</span>
                <span className="menu-text">About</span>
            </div>
        </nav>
        )
    }
}