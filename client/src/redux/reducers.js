import{
    GET_VIDEOS ,
    SEARCH,
}from './actions'
const initialState = {
videos : [],
search : ""
}
export default function rootReducer(state = initialState, { payload, type }) {
    switch(type){
        case GET_VIDEOS :
            return{
                ...state , 
                videos : payload
            }
        case SEARCH :
            return{
                ...state , 
                search : payload
            }
            default :
            return state;
    }
}