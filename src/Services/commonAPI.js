import axios from 'axios'

export const commonAPI=async(httpMethod,url,reqBody)=>{
let reqConfig={
    method:httpMethod,
    url,
    data:reqBody,
    headers:{
        "Content-type":"application/json"
    }

}
return await axios (reqConfig).then(
    (result)=>{
        return result
    }
).catch((err)=>{
    return err
})
}
