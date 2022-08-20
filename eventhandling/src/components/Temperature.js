import React, { Component } from 'react'

export class Temperature extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:'',
      celcius:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e){
    this.setState({[e.target.name]:e.target.value})
    console.log(this.state.celcius);
  }
  render() {
    return (
      <div>
        <input type="text" name="celcius" id="" value={this.state.celcius} onChange={this.handleInputChange} />
      </div>
    )
  }
}

export default Temperature