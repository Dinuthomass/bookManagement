import React from 'react'
import AddBook from '../Components/AddBook'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Home() {
    const books = useSelector((state)=>state.addReducer.books)
  return (
    <>
      <div className="row">
        <div className="col-6">
           <AddBook/>
        </div>
        <div className="col-6"></div>
      </div>


      <div className="row">
      {
        books?.length>0 ?
            books.map((book)=>(
                <Card style={{ width: '18rem',marginRight:"10px" }}>
     
      <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>
        Authuor :{book.author}
        </Card.Text>
        <div className='justify-content-between d-flex'>
        <Link to={'/view'}><Button variant="primary">View</Button></Link>
        <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
        </div>
      </Card.Body>
    </Card>
            )):

        <p className='text-danger text-center'>Nothing to Display</p>
      }
      </div>
    </>
  )
}

export default Home
