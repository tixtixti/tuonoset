import React from 'react'
import Logo from './logo.jsx'
class HeaderBar extends React.Component{


  render(){
    return (<div className="bar" ><Logo />  {this.props.titleName}  </div>)
  }
}
export default HeaderBar
