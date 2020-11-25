import React, { useState, useEffect, useContext } from "react";
import { Table, Button } from "reactstrap";
import CustomModal from "./components/CustomModal";
import Cart from './components/Cart';
import { CartContext } from './context/cart';
import axios from "axios";  
import "./App.css";

const BASE_URL = "https://codersx-expressjs-29-1.herokuapp.com";




export default function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://codersx-expressjs-29-1.herokuapp.com/api/books",
    };
    axios(config)
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  }, []);

  const [addNewModal, setAddNewModal] = useState(false);
  const [newBook, setNewBook] = useState({});
  const handleChangeAddNewModal = (e, key) => {
    setNewBook((prevBook) => {
      return { ...prevBook, [key]: e.target.value };
    });
  };

  const handleAddNewBook = () => {
    const config = {
      method: "post",
      url: `${BASE_URL}/api/books`,
      data: JSON.stringify(newBook),
    };
    axios(config)
      .then((response) => console.log(JSON.stringify(response.data)))
      .catch((error) => console.log(error));
  };

  const [editModal, setEditModal] = useState(false);
  const [editBook, setEditBook] = useState({});
  const handleChangeEditModal = (e, key) => {
    setEditBook((prevBook) => {
      return { ...prevBook, [key]: e.target.value };
    });
  };
  const handleEditButton = (e) => {
    const id = e.target.id;
    const [currentBook] = books.filter((b) => b._id === id);
    setEditBook(currentBook);
    setEditModal(true);
  };
  const handleEditBook = (e) => {
    console.log("editBook", editBook);
    axios
      .patch(`${BASE_URL}/api/books/${editBook._id}`, editBook)
      .then((res) => console.log("res", res))
      .catch((error) => console.log(error));
    setEditModal(false);
  };

  const handleDeleteButton = (e) => {
    axios
      .delete(`${BASE_URL}/api/books/${e.target._id}`)
      .then((res) => alert("This book is deleted."))
      .catch((error) => alert(error.message));
  };

  const {handleAddToCart} = useContext(CartContext);

  return (
    <div className="App container">
      <center>
        <h1>BOOK STORE</h1>
      </center>
      <Cart />
      <CustomModal
        className={"add-new-modal"}
        isOpen={addNewModal}
        toggle={() => setAddNewModal(false)}
        modalTitle={"ADD NEW BOOK"}
        submitButtonFunc={handleAddNewBook}
        cancleButtonFunc={() => setAddNewModal(false)}
        handleChange={handleChangeAddNewModal}
        book={newBook}
      />

      <CustomModal
        className={"edit-modal"}
        isOpen={editModal}
        toggle={() => setEditModal(false)}
        modalTitle={"EDIT BOOK INFO"}
        submitButtonFunc={handleEditBook}
        cancleButtonFunc={() => setEditModal(false)}
        book={editBook}
        handleChange={handleChangeEditModal}
      />

      <Button
        color="primary"
        className="m-2"
        onClick={() => setAddNewModal(true)}
      >
        Add new book
      </Button>

      

      <Table>
        <thead>
          <tr className="row">
            <th style={{ width: "3%" }}>#</th>
            <th style={{ width: "10%" }}>Cover</th>
            <th style={{ width: "15%" }}>Title</th>
            <th style={{ width: "7%" }}>Rating</th>
            <th style={{ width: "41%" }}>Description</th>
            <th style={{ width: "24%" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book, id) => {
            return (
              <tr className="row" key={id}>
                <td style={{ width: "3%" }}>{id + 1}</td>
                <td style={{ width: "10%" }}>
                  <img
                    src={book.coverUrl}
                    width="100px"
                    heigh="100%"
                    alt={book.title}
                  />
                </td>
                <td style={{ width: "15%", textAlign: "left" }}>
                  {book.title}
                </td>
                <td style={{ width: "7%" }}>{book.rating}</td>
                <td style={{ width: "41%", textAlign: "justify" }}>
                  {book.description}
                </td>
                <td style={{ width: "24%" }}>
                  <Button
                    id={book._id}
                    color="success"
                    size="sm"
                    className="m-2"
                    onClick={handleEditButton}
                  >
                    Edit
                  </Button>
                  <Button
                    id={book._id}
                    color="danger"
                    size="sm"
                    className="m-2"
                    onClick={handleDeleteButton}
                  >
                    Delete
                  </Button>
                  <Button
                    id={book._id}
                    color="primary"
                    className="m-2"
                    size="sm"
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
