
import { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Details = () => {
//form data initialization
  const initialFormData = {
    image:"",
    name: "",
    publisher: "",
    publicationYear: "",
    genre: "",
    authorName: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  //modal
  const [showModal, setShowModal] = useState(false);
//get data di wise
  const book = useLoaderData();
  const { _id, name, image, publicationYear, publisher, authorName, genre } = book;
//delete data
  const handleDelete = async () => {
    try {
      const response = await fetch(`https://books-5ey6.onrender.com/books/${_id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.deletedCount > 0) {
        alert("Book deleted successfully");
        window.location.href = "/";
      }
      console.log(data.message);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
// update data 
  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://books-5ey6.onrender.com/books/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data.message);

      // Close the modal 
      setShowModal(false);
      window.location.reload();

    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleShowModal = () => {
    setFormData({
      name,
      publisher,
      publicationYear,
      genre,
      authorName,
      image, 

    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mb-5">
      <Card className="mt-4" style={{ maxWidth: "30rem", margin: "auto" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p className="fs-5">
              <span style={{ fontWeight: "bold" }}>Publisher:</span> {publisher}
            </p>
            <p className="fs-5">
              <span style={{ fontWeight: "bold" }}>Publication Year: </span>
              {publicationYear}
            </p>
            <p className="fs-5">
              <span style={{ fontWeight: "bold" }}>Genre: </span>
              {genre}
            </p>
            <p className="fs-5">
              <span style={{ fontWeight: "bold" }}>Author Name: </span>
              {authorName}
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Button variant="primary" className="me-2" onClick={handleShowModal}>
            Update
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
        <Card.Body>
          {/* Modal for update */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Update Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPublisher">
                  <Form.Label>Publisher</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter publisher"
                    name="publisher"
                    value={formData.publisher}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPublicationYear">
                  <Form.Label>Publication Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter publication year"
                    name="publicationYear"
                    value={formData.publicationYear}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGenre">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAuthorName">
                  <Form.Label>Author Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter author name"
                    name="authorName"
                    value={formData.authorName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleUpdate}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;