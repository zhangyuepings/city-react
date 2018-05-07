import axios from 'axios'
import { JDLIST} from './interface.js'

export const jdList = () => {
  return axios.get(JDLIST)
}
