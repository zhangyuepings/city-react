import React, {Component} from 'react'
import {withRouter, Link } from 'react-router'
import './Header.css'
class Header extends Component{
    constructor(props){
        super(props)
        this.handle = this.handle.bind(this)
    }
    handle(){
        const {history} = this.props
        // console.log(history)
        history.push('/myCity')
        // console.log(this.props)
    }
    render(){
        //  console.log(this.props)
        return(
            <div className='head'>
                <div className='head-left' onClick={this.handle}>
                    <span>北京市</span>  <i className='iconfont icon-up'></i>                
                </div>
                <div></div>
            </div>
        )
    }
}
export default withRouter(Header)