import React, { Component } from "react";
import "../App.css"

export default class AboutPage extends Component{

    render(){
        return (<div style={{margin: '20px'}}>
            <h1>Super muesli infos</h1>
            <p>by Kando Corp</p>
            <p className="about-paragraph">
                Muesli is a healthy and popular breakfast choice made from a mixture of rolled oats, nuts, seeds, and dried fruits. It originated in Switzerland and is well-known for its high fiber content and nutritional benefits.
            </p>
            <p className="about-paragraph">
                Many people enjoy muesli as it offers a convenient way to consume a balanced mix of carbohydrates, proteins, and healthy fats. It can be served with milk, yogurt, or fruit juices and is often customized with various ingredients to suit personal tastes.
            </p>
            <p className="about-paragraph">
                Thanks to its versatility and wholesome ingredients, muesli remains a favorite for health-conscious consumers worldwide. Whether classic, fruity, or nutty variations, it provides a delicious start to the day.
            </p>
        </div>)
    }
}