import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './List.css'
class List extends Component {
  detail(){
      const {history,imageurl,wname}=this.props
      history.push({
        pathname:'/Detail',
        params:{
          imageurl,wname
        }
      })
  }
  render() {
    return (
      <div
      onClick={this.detail.bind(this)}
       >
        <img src={this.props.imageurl} alt="" />
        {this.props.wname}
      </div>
    )
  }
}
export default withRouter(List)