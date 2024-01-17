import React,{useState} from 'react'
import{ Button,Form,Modal} from 'react-bootstrap';
import { uploadVideo } from '../Services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoServerResponse}) {

  const[video,setVideo]=useState({
    id:"",caption:"",url:"",embedLink:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink=(e)=>{
    const {value}=e.target
if(value){

    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedLink:link})
  }else{
    setVideo({...video,embedLink:""})
  }
  }

console.log(video);

const handleUpload = async ()=>{

  const{id,caption,url,embedLink}=video
  if(!id || ! caption || !url || !embedLink){

    toast.warning("please fill missing fields")
  }else{
    //make api calls
    const response = await uploadVideo(video)
    // console.log(response);
    if(response.status>=200 && response.status<300){
      //set Server Response
      setUploadVideoServerResponse(response.data)
      toast.success(`${response.data.caption}video successfully uploaded`)

//reset the video
setVideo({id:"",caption:"",url:"",embedLink:""
})
      //hide modal
handleClose()
    }else{
      // console.log(response);
      toast.error(`Cannot perform the action right now`)
    }
  }
}
  return (

<>
      <div className='d-flex align-items-center'>
  <h5>Upload Videos</h5>
  <button className='btn ms-3 rounded' onClick={handleShow}><i class="fa-solid fa-circle-plus fa-fade fs-5"></i></button>

  </div>

  <Modal 
   show={show}
   onHide={handleClose}
  backdrop="static"
  keyboard={false}
  >
        <Modal.Header closeButton className='bg-white'>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-white'>
          <p>plaese fill the following details</p>
          <Form>

          <Form.Group className="mb-3 bg-white" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Enter VideoId" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Enter Video Title" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
        
      </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="email" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
       
     </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="email" placeholder="Enter Video Link" onChange={getEmbedLink}/>
       
     </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer className='bg-white'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload} >
           Upload
          </Button>
        </Modal.Footer>
      </Modal>

     <ToastContainer 
     position='top-center'
     theme='colored'
     autoClose={2000}/> 
  
</>  )
}

export default Add

//https://www.youtube.com/watch?v=LNzumtGcEKI
//https://www.youtube.com/embed/ZWuzH0fW8l0

