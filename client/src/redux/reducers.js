import{
    GET_VIDEOS ,
}from './actions'
const initialState = {
videos : []
}
export default function rootReducer(state = initialState, { payload, type }) {
    switch(type){
        case GET_VIDEOS :
            return{
                ...state , 
                videos : payload
            }
            default :
            return state;
    }
}