import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const StudentList = () => {

  const [students, setStudents] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/listStudents").then((response) => {
      console.log(response)
      setStudents(response.data);
      // console.log(students)
    })
    .catch(error => console.log(error));
  }, [])

  return (
    <Container className='mt-2'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {students && students.map((student) => {
          return <tr>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.address}</td>
        </tr>
        })}
      </tbody>
    </Table>
    </Container>
  )
}

export default StudentList
