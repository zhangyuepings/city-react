import React, {Component} from 'react'
import './FooteItem.css'
class FooteItem extends Component{
    render(){
        const {title, icon} = this.props
        return(
            <div className='footeItem'>
                {/* <p className={icon}></p> */}
                {title}
            </div>
        )
    }
}
export default FooteItem