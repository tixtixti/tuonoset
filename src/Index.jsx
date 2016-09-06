import React from 'react'
import ReactDOM from 'react-dom'
import HeaderBar from './HeaderBar.jsx'
import Uutinen from './Uutinen.jsx'
class Index extends React.Component{

  render(){
    return (
      <div>
      <HeaderBar titleName="Tuonoset.fi" />
      <Uutinen />
      </div>)
  }
}

ReactDOM.render(<Index/>, document.getElementById('default'));
