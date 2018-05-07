import React, { Component } from 'react'
import GoBack from '../common/goBack'
import { jdList } from '../../api/server'
import './selectCity.css'
const brr = [];
class selectCity extends Component{
    constructor(props){
        super(props)
        this.state = {
            date : [],
        }
    }

    // A对应的市
    componentDidMount() {
        const { dispatch } = this.props
        jdList().then((data) => {
          this.setState({
              date : data,
              Rdata : [],
          })
            console.log(data)
        })
      }

      indexsck(ite,id) {
          if(id == id){
            const Rdata = this.state.Rdata;
            this.setState ({
                Rdata : brr.push(
                    ite.province
                )
            })
          }else{
              console.log('没有地理位置')
          }
      }

    render(){
        const newdata = this.state.date;
        const Rdata = this.state.Rdata;
        return(
            <div>
                <GoBack title='选择上牌城市' {...this.props}></GoBack>
                {/* {
                    console.log(newdata.data)
                } */}
                {
                    newdata.data ? newdata.data.map((item , index) => {
                        return (
                            <div key={index} className='box-city-shi'>

                                <h6 className='title-zm'>
                                    {item.letter}
                                </h6>
                                    {/* {
                                        console.log(item.city)
                                    } */}
                                    {
                                        item.city.map((ite , ind) => {
                                            return (
                                                <div className='shi' key={ind} onClick={this.indexsck.bind(this,ite,ite.id)}>
                                                    {ite.name}
                                                    <div className='left'>
                                                        {
                                                            brr.map((v , i) => {
                                                                return(
                                                                    <div key={i} className='Right'>
                                                                        {v}
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                            </div>
                        )
                    }) : ''
                }
            </div>
        )
    }
}
export default selectCity