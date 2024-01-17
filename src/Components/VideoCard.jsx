import React, { useState } from 'react'
import { Card,Button, Modal } from 'react-bootstrap'
import { addHistory, addToHistory, deleteVideo } from '../Services/allAPI';



function VideoCard({displayData,setDeleteVideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {setShow(true);
  //make api calls http://localhost:4000/history
  const {caption,embedLink}=displayData
  let today = new Date()
  // console.log(today);
  let timeStamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',weekday:'short'}).format(today)
  // console.log(timeStamp);

  let videoDetails={
    caption,embedLink,timeStamp
  }
  await addToHistory(videoDetails)
  }

//delete a video
const removeVideo = async (id) =>{
  //make a api call
  await deleteVideo(id)
  // console.log(response);
  setDeleteVideoStatus(true)

}

const dragStarted = (e,id)=>{
  console.log("Drag Started...Video Id: " +id);
  e.dataTransfer.setData("videoId",id)
}

  return (
    <>
    <Card className='mb-3 ' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow} variant="top" src={displayData?.url} className='img-fluid' style={{height:'200px'}}/>
      <Card.Body className='d-flex justify-content-between align-items-center'>
        <Card.Title >
<h6>{displayData?.caption}</h6>

        </Card.Title>
        {insideCategory?"":<button className='btn btn-light' onClick={()=>removeVideo(displayData?.id)}><i class="fa-solid fa-trash-can"></i></button>
}

      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <iframe width="100%" height="526" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </Modal.Body>
        
      </Modal>

    
    </>
  )
}

export default VideoCard