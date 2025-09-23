import React, { Component } from "react";
import "../App.css"

export default class MuesliPage extends Component{
    state = {
        muesliData: {
        result: []
        }
    }

    render(){
        return (
        <main id="content-area">
          {/* Default content is Products/Prices table */}

          <h1>My mueslis</h1>

          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {/*<tr><td>1</td><td>Classic Muesli</td><td>$4.65</td></tr>*/}
              {this.state.muesliData.result.map(muesli =>(
                <tr key={muesli.id}>
                  <td>{muesli.id}</td>
                  <td>{muesli.name}</td>
                  <td>{muesli.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
        )
    }

    async componentDidMount(){
        try{
        let muesliData = await fetch('http://localhost:3333/mueslis')
        //console.log(muesliData)
        muesliData = await muesliData.json()

        this.setState({muesliData})
        }
        catch(e){
        console.warn(e)
        }
  }
}