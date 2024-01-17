import React from 'react'
import {Card, Col, Row} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
const navigateByUrl=useNavigate()


  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100 '>

        <Col></Col>
        <Col lg={5} className='g-2'>
          <h3>Welcome To <span className='text-warning'>Media Player </span></h3>
        <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil culpa repudiandae vitae ab, numquam hic accusantium officiis doloribus. Provident velit asperiores maxime qui! Asperiores vitae, nostrum a accusamus nisi harum, omnis cupiditate  </p>
        <button className='my-4 btn btn-info' onClick={()=>navigateByUrl('/home')}>Get Started</button>
        </Col>
        
        <Col lg={5} >
          <img className='img-fluid rounded w-75 ms-4' src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="player" />
        </Col>
        <Col></Col>
      </Row>

<div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column ">
  <h3 >FEATURES</h3>
  <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100 ">


    <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media.giphy.com/media/wFJySurszxSbm/giphy.gif" />
      <Card.Body>
        <Card.Title>Categorized videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://24.media.tumblr.com/d36278415ea2632bb223d8e736a93a6b/tumblr_n6akz39WvM1shpedgo1_500.gif" />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>


    <Card className='p-4' style={{ width: '18rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media0.giphy.com/media/3oEjHZgob6DQW110Ig/source.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>

  </div>
</div>

<div className="container my-5 b-5 d-flex align-items-center justify-content-between w-100  border rounded p-5 border-secondary ">

<div className='col-lg-5'>
    <h3 className='mb-5 text-warning'>Simple,Powerful,Fast</h3>
    <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe, ea corporis amet quis suscipit impedit odio esse doloribus consequuntur. Ex repudiandae perspiciatis neque quidem amet quaerat ullam ut quibusdam.</h6>
  
    <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Categorize videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe, ea corporis amet quis suscipit impedit odio esse doloribus consequuntur. Ex repudiandae perspiciatis neque quidem amet quaerat ullam ut quibusdam.</h6>
  
    <h6 className='mb-3'><span className='fs-5 fw-bolder text-warning'>Managing History </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe, ea corporis amet quis suscipit impedit odio esse doloribus consequuntur. Ex repudiandae perspiciatis neque quidem amet quaerat ullam ut quibusdam.</h6>
  </div>
  
  <div className="col-lg-5 video">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/1F3hm6MfR1k?si=r5rOe7m3cgUj_XiO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>
    </>
  )
}

export default LandingPage