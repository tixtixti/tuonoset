import React from 'react'
import Logo from './logo.jsx'
class HeaderBar extends React.Component{


  render(){
    //
    return (
      <header className="bar" >
          <Logo />
          <span className="bar-otsikko">{this.props.titleName} </span>
          <span></span>
    </header>
    )
  }
}
export default HeaderBar
