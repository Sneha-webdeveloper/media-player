import React from 'react'
import {Container,Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
<Navbar className="bg-info ">
        <Container> 
          <Navbar.Brand  >

          <Link to={'/'} className='fs-4 text-white' style={{textDecoration:"none"}}>
           <i className="fa-solid fa-cloud-arrow-down fa-fade"></i>
          {' '}
           &nbsp;Media Player
          </Link>
         
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header