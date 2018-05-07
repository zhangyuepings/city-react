import Home from '../component/Home'
import Hy from '../component/Hy'
import BuyingCar from '../component/BuyingCar'
import My from '../component/Home'
import MyCity from '../component/myCity'
import SelectCity from '../component/selectCity'

export const ROUTER_MAP = {
    ROUTER_LINK: [
        {
            to:'/home',
            text:'首页',
            active: 'on',
            icon: 'home'
        },
        {
            to:'/hy',
            text:'买车',
            active: 'on',
            icon: 'hy'
        },
        {
            to:'/buyingcar',
            text:'卖车',
            active: 'on',
            icon: 'buyingcar'
        },
        {
            to:'/my',
            text:'我的',
            active: 'on',
            icon: 'my'
        }
    ],
    ROUTER_VIEW: [
        {
            path:'/home',
            component: Home
        },
        {
            path:'/hy',
            component: Hy
        },
        {
            path:'/buyingcar',
            component: BuyingCar
        },
        {
            path:'/my',
            component: My
        },
        {
            path:'/myCity',
            component: MyCity
        },
        {
            path:'/selectCity',
            component: SelectCity
        }
    ]
}