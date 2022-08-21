import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from "react-router-dom";
const StudentList = () => {

  const [students, setStudents] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/listStudents").then((response) => {
      console.log(response)
      setStudents(response.data);
      // console.log(students)
    })
    .catch(error => console.log(error));
  }, []);


  const handleDelete = (id) => {
    console.log(id)
    axios.delete(`http://localhost:8080/student/${id}`).then((response) => {
      setStudents(students.filter((student)=>student.id!==id));
      // setStudents(response.data)
    })
  }


  return (
    <Container className='mt-2'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Update</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {students && students.map((student) => {
          return <tr>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.address}</td>
          <td><Link to={`/student/${student.id}`} ><i className="fa-solid fa-pen-to-square text-primary" ></i></Link></td>
          <td><i className="fa-solid fa-trash-can text-danger" onClick={() => {handleDelete(student.id)}}></i></td>
        </tr>
        })}
      </tbody>
    </Table>
    </Container>
  )
}

export default StudentList
