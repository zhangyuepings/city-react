import { GET_JDLIST } from '../actionTypes/myCity'

const initalState = {
    name: 'myCity',
    jdList: null
}

const reducer = (state=initalState, action) => {
    switch (action.type) {
        case GET_JDLIST:
            return {...state, jdList: action.jdList}
        default:
            return state
    }
}

export default reducer