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

    }
}