import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState  , useMemo} from "react";
import { getVideos} from "../redux/actions";

export default function Home () {
    const dispatch = useDispatch();
    useEffect(()=>{
        
        dispatch(getVideos());
        
    },[])
    const allVideos = useSelector((state)=> state.videos)
    console.log(allVideos)
    return (
    <h1>Hola , soy home</h1>
)
}