import React, { useState }  from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {

  const[uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})

  return (
    <>
    <div className='container mt-5 mb-5 d-flex align-items-center justify-content-between '>
<div className="add-videos">
  <Add setUploadVideoServerResponse={setUploadVideoServerResponse}/>
</div>

<Link to ={'/WatchHistory'} style={{textDecoration:'none',color:'blueviolet'}} className='  fw-bolder fs-3 p-2'>Watch History</Link>


    </div>

    <div className='container mt-5 mb-5 d-flex  '>
      <div className="all-videos">
        <h3>All-Videos</h3>
        <View uploadVideoServerResponse={uploadVideoServerResponse}/>
      </div>
      <div className="category w-50 ms-5">
        <Category/>
      </div>
   </div>
    
    </>
  )
}

export default Home