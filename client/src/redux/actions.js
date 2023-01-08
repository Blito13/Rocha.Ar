import axios from "axios";


export const getVideos =  async()=>{
var json = await axios.get("/videos");
return {
    type : "GET_VIDEOS",
    payload : json.data
}
}