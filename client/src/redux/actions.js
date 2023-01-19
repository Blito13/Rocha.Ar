import axios from "axios";
export const GET_VIDEOS = 'GET_VIDEOS'
export const SEARCH = "SEARCH"
export function getVideos(){
    return async function (dispatch){

        var json = await axios.get("https://youtube.googleapis.com/youtube/v3/search?channelId=UC4gUTdhrYT7amcvSLyaoBIQ&maxResults=5&key=AIzaSyCkqrjoLH7nSBngzSG-uZyT3_-wdp113eo");
        console.log(json.data)
        return dispatch( {
            type : "GET_VIDEOS",
            payload : json.data
        })
    }
}
export function searchBar(key){
    return async function (dispatch){
        return dispatch( {
            type : "SEARCH",
            payload : key
        })
    }
}