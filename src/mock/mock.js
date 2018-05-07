import axios from 'axios'
import Axiosadapter from 'axios-mock-adapter'
// import data from './datas/jdList.json'
import data from './datas/city.js'
const mock=new Axiosadapter(axios)
const datas=()=>{
  mock.onGet('/api/city').reply((config)=>{
     return new Promise((reslove,reject)=>{
       reslove([200,data])
     })
  })
}
export default datas