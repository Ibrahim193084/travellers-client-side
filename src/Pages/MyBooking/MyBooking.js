import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const MyBooking = () => {
    const [booking, setBooking] = useState([])
    const {user} = useAuth()
    useEffect(()=>{
        fetch('https://young-headland-50696.herokuapp.com/book')
        .then(res => res.json())
        .then(data => data.filter(booking =>{
            return booking.email==user.email;
        }))
        .then((matched) =>setBooking(matched))
       
    },[user])
    console.log(booking)

     //delete my booking
     const handleDelete = id =>{
        const proceed = window.confirm ('Are you sure, you want to delete?');
if(proceed){
    const url = `https://young-headland-50696.herokuapp.com/book/${id}`
fetch(url,{
    method: 'DELETE'
})
.then(res=> res.json())
.then(data =>{
    if(data.deletedCount>0){
        alert('deleted successfully');
        const remainingBooking = booking.filter(book => book._id !== id)
        setBooking(remainingBooking)
    }
})
}
    }
 
    return (
        <div>
            <Navigation/>
            <br/>
            <br/>
            <br/>
            <br />
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Phone Number</th>
      <th>Tour Place</th>
      <th>Date</th>
      <th>Cost</th>
      <th>Status</th>
      <th>Delete</th>

    </tr>
  </thead>
  <tbody>
  {
          booking?.map(book =><tr key={book._id}>
              <td>
                  {book.name}
              </td>
              <td>
                  {book.email}
              </td>
              <td>
                  {book.address}
              </td>
              <td>
                  {book.phone}
              </td>
              <td>
                  {book.tourplace}
              </td>
              <td>
                  {book.date}
              </td>
              <td>
                  {book.cost}
              </td>
              <td className="text-danger">
              {book.status}
              </td>
              <td>
              <i onClick={()=>handleDelete(book._id)} className="fas fa-trash text-danger fs-5"></i>
              </td>
          </tr>)
      }
  </tbody>
</Table>
        <Footer></Footer>
        </div>
    );
};

export default MyBooking;