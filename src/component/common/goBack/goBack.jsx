import React, {Component} from 'react'
import './goBack.css'
class goBack extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:''
        }
    }
    render(){
        return(
            <div>
                <i onClick={()=>{this.props.history.go(-1)}} className='iconfont icon-fanhui'></i>
                <span>{this.props.title}</span>
            </div>
        )
    }
}
export default goBack