import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../Services/allAPI';
import VideoCard from './VideoCard';


function Category() {

  const [show, setShow] = useState(false);

  const [categoryName, setCategoryName] = useState("")
  const [allCategories, setAllCategories] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if (categoryName) {

      let body = {
        categoryName, allVideos: []
      }
      //make api call
      const response = await addCategory(body)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        //hide modal
        handleClose()

        //reset state
        setCategoryName("")
        //get categories
        getCategories()
      } else {
        toast.error("something went wrong")
      }

    } else {
      toast.warning("please provide category name!")
    }
  }


  const getCategories = async () => {
    //make a api call
    const { data } = await getAllCategory()
    // console.log(data);
    setAllCategories(data)
  }

  useEffect(() => {
    getCategories()
  }, [])


 const handleDelete = async(id)=>{
  await deleteCategory(id)
  getCategories()
 }

const dragOver = (e)=>{
  console.log("video drag over category");
  e.preventDefault()
}



 const videoDrop = async(e,categoryId)=>{
  console.log("video dropped inside the category: "+categoryId);
  const videoId= e.dataTransfer.getData("videoId")
  console.log("video card id : ",videoId);
//get video detail
const {data}= await getAVideo(videoId)
console.log(data);
//get category details
const selectedCategory = allCategories?.find(item=>item.id==categoryId)
selectedCategory.allVideos.push(data)
console.log(selectedCategory);

//make a api call 
await updateCategory(categoryId,selectedCategory)
getCategories()
 }

  return (
    <>
      <div className="d-grid ms-3 ">
        <button className='btn btn-info' onClick={handleShow}> Add New Category</button>

      </div>

      {
        allCategories?.length > 0 ? allCategories?.map(item => (
          <div className='m-5 border rounded p-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>

            <div className="d-flex justify-content-between align-items-center my-3">
              <h4>{item?.categoryName}</h4>
              <button className='btn ms-5' onClick={() => handleDelete(item?.id)}><i className='fa-solid fa-trash text-danger'></i></button>
            </div>

            <Row>

              {item?.allVideos && item?.allVideos.map(
                card=>(
                  <Col sm={12}>
                    <VideoCard displayData={card} insideCategory={true}/>
                  </Col>
                )
              )}
            </Row>
          </div>
        )) : <p className='fs-5 fw-5 text-danger mx-auto mt-4'>No Categories</p>

      }


     

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

          <Form className='border border-secondary rounded p-3'>
            <Form.Group className="mb-3 bg-white border-secondary rounded px-2 " controlId="formBasicEmail">
              <Form.Label className='fs-5'>Enter  Category Name</Form.Label>

              <Form.Control type="email" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />

            </Form.Group>




          </Form>

        </Modal.Body>
        <Modal.Footer className='bg-white'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAddCategory}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={2000} />
    </>
  )
}

export default Category