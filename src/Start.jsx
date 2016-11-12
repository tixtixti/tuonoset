import React, {Component} from 'react';
export default class Start extends Component{
  render(){
    return(
      <div>
        <div className="center top">
          <img className="logo" src="./photos/recropped.png" />
            <h1 className="midden">Tuonoset.fi</h1>

        </div>
        <div className="center mid">
          <div onClick={this.props.onClick} className="animated-button">
          <div className="center-text"> Tervetuloa </div>
         </div>
        </div>

        <div className="center bottom"></div>
      </div>
    )
  }
}
