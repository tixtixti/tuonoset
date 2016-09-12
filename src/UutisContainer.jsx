import React, {Component} from 'react';
import Uutinen from "./Uutinen.jsx";
import HeaderBar from "./HeaderBar.jsx"
export default class UutisContainer extends Component{

  getUutiset(){

  }

  render(){
    return(
      <div className="main">
        <HeaderBar titleName="Uutiset" />
        <Uutinen></Uutinen>
        <Uutinen></Uutinen>
        <footer>Footer</footer>
      </div>
    )
  }
}
