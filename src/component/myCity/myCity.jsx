import React, { Component } from 'react'
import { connect } from 'react-redux'
import  {Route, Link} from 'react-router-dom'
import { jdList } from '../../api/server'
import { addJdListAction } from '../../store/action/myCity'
import List from '../../component/common/List'
import './myCity.css'
const arr = [];
class MyCity extends Component {
  constructor(props){
    super(props)
    this.state = {
      date : [],
      news : [],
    }
    // this.selectCity = this.selectCity.bind(this)
  }

  // 获取city数据
  componentDidMount() {
    const { dispatch } = this.props
    jdList().then((data) => {
      this.setState({
          date : data
      })
    })
  }

  // 点击添加
    cityck(e) {
        const newd = e.target;
        this.setState({
            news : arr.push(
                e.province
            )
        })
    }
 
  render() {
    const date = this.state;
    const newdata = date.date.data;
    const listdata = date.date.data;
    return (
      <div className='listbox'>
           <div className='xuanzecity'>
                <span>您的上牌城市</span>
                {/* <span className='blue' onClick={this.selectCity}>北京市></span> */}
                <aside><Link to="/selectCity"><span className='blue'><i className='iconfont icon-xiayige'></i></span></Link></aside>

            </div>
          <div className='yixuancity'> 
            <h4 >您已选择城市</h4>
            <div className='yxcity'>
              <div>
                {
                 arr
                }
              </div>
            </div>
          </div>
          {
            newdata ? newdata.map((ite , ind ) => {
              return (
                <div key={ind} className='listbox_title'>
                  <h5 key = {ind}>
                    {ite.letter}
                  </h5>
                  {
                    ite.city.map((item , index) => {
                      return (
                        <div key={index} className='content' onClick={ () => this.cityck(item)}>
                          {item.name}
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
const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    jdList: state.myCity.jdList
  }
}
export default connect(mapStateToProps)(MyCity)