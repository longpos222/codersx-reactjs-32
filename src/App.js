import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://codersx-expressjs-29-1.herokuapp.com/api/books',
      headers: { 
        'Cookie': 'sessionId=s%3Aj%3A%225fbd36d1f66eb900170bd0c2%22.0CfshQITForiyFk4YgCBsOju%2F%2Bn6WSANsZVSQGuIYMg',
        "Access-Control-Allow-Origin": "*"
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(response);
      setBooks(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }, []);

  return (
    <div className="App container">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Cover</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img
                src="http://res.cloudinary.com/longpos/image/upload/v1598272192/msqZ7dmKG_cover.jpg"
                width="100px"
                heigh="100%"
                alt=""
              />
            </td>
            <td>Đắc Nhân Tâm</td>
            <td>4/5</td>
            <td>
              Đắc nhân tâm của Dale Carnegie là quyển sách duy nhất về thể loại
              self-help.
            </td>
            <td>
              <Button color="success" size="sm" className="m-2">
                Edit
              </Button>
              <Button color="danger" size="sm" className="m-2">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
