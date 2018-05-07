import React, {Component} from 'react'
import './Mine.css'
class Mine extends Component{
    render(){
        const {children} = this.props
        return(
            <div className='mine'>
                {children}
            </div>
        )
    }
}
export default Mine