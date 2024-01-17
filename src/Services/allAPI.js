//upload a video

import {commonAPI} from "./commonAPI"
import {serverUrl} from "./serverUrl"


export const uploadVideo = async(reqBody)=>{
    //call POST http request to "http://localhost:4000/video" to add to json server and return response add component

    return await commonAPI("POST",`${serverUrl}/video`,reqBody)
}

//get all videos from json server

export const getAllVideo = async ()=>{
    // make http request to "http://localhost:4000/video"to get all video from json server to view component
    return await commonAPI("GET",`${serverUrl}/video`,"")
}

//get a videos from json server

export const getAVideo = async (id)=>{
    // make http request to "http://localhost:4000/video"to get all video from json server to videoCard component
    return await commonAPI("GET",`${serverUrl}/video/${id}`,"")
}

//remove videos from json server

export const deleteVideo = async (id)=>{
    // make http request to "http://localhost:4000/video"to delete video from json server to videoCard component
    return await commonAPI("DELETE",`${serverUrl}/video/${id}`,{})
}

//-------------------------------watch history-----------------------------------------------

//store watch history in json server 

export const addToHistory = async(videoDetails)=>{
    // make POST http request to "http://localhost:4000/history" to add watchhistory to the json server and 
    //  return response to videoCard

    return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}

//get all watching video history

 export const getAllHistory = async()=>{
        // make get http request to "http://localhost:4000/history"to get all video watchhistory from json server to watchhistory component
        return await commonAPI("GET",`${serverUrl}/history`,"")


}

//delete a  watching video history

export const deleteHistory = async(id)=>{
    // make get http request to "http://localhost:4000/history/id"to delete video watchhistory from json server to watchhistory component
    return await commonAPI("DELETE",`${serverUrl}/history/${id}`,{})


}


// ---------------------------add category--------------------------------------

//add a cateogy to JSON server

export const addCategory = async(reqBody)=>{
    //make POST http request to "http://localhost:4000/categories" to add video to json server and return response category component

    return await commonAPI("POST",`${serverUrl}/categories`,reqBody)
}

//get all cateogy to JSON server

export const getAllCategory = async()=>{
    //make GET http request to "http://localhost:4000/categories" to get video to json server and return response category component

    return await commonAPI("GET",`${serverUrl}/categories`,"")
}

//DELETE a cateogy From JSON server

export const deleteCategory = async (id)=>{
    //make DELETE http request to "http://localhost:4000/categories/id" to DELETE video from json server and return response category component

    return await commonAPI("DELETE",`${serverUrl}/categories/${id}`,{})
}

//UPDATE a cateogy From JSON server

export const updateCategory = async (id,body)=>{
    //make UPDATE http request to "http://localhost:4000/categories/id" to UPDATE video from json server and return response category component

    return await commonAPI("PUT",`${serverUrl}/categories/${id}`,body)
}