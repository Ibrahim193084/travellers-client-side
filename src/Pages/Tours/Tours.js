import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Tour from './Tour/Tour';

const Tours = () => {
    const [tours, setTours]= useState([])
    useEffect(()=>{
        fetch('https://young-headland-50696.herokuapp.com/tours')
        .then(res => res.json())
        .then(data=>setTours(data))
    },[])
    return (
        <div id="tours">
            <h1 className="text-center text-danger my-5">TOURS</h1>
             <Row xs={1} md={3} className="g-2">
                 {tours.map(tour => <Tour key={tour._id}tour={tour}></Tour>)}
             </Row>
            
        </div>
    );
};

export default Tours;