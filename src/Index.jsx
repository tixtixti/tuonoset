import React from 'react'
import ReactDOM from 'react-dom'
import HeaderBar from './HeaderBar.jsx'
import Uutinen from './Uutinen.jsx'
import UutisContainer from './UutisContainer.jsx'
import Start from './Start.jsx'
class Index extends React.Component{

  constructor(){
    super()
    this.state = {
      start: true
    }
  }

  refaktorVaihda(){
    this.setState({
      start:false
    });
  }
  refaktorThisSelect(){
    if(this.state.start){
      return <Start onClick ={this.refaktorVaihda.bind(this)}  />
    } else {
      return <UutisContainer />
    }
  }

  render(){
    //  <Start />
    return (
      <div>
        {this.refaktorThisSelect()}
      </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('default'));
