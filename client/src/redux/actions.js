import axios from "axios";
export const GET_VIDEOS = 'GET_VIDEOS'

export function getVideos(){
    return async function (dispatch){

        var json = await axios.get("");
        console.log(json.data)
        return dispatch( {
            type : "GET_VIDEOS",
            payload : json.data
        })
    }
}