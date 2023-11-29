import { Button, Card } from "react-bootstrap";
import { useLoaderData, } from "react-router-dom";


const Details = () => {
  const book = useLoaderData();
  const{name,image,publicationYear,publisher,authorName,genre} = book;

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3000/books/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({/* Updated book details */}),
      });
      const data = await response.json();
      console.log(data.message);
      // Optionally, you can redirect to another page or update the state after a successful update.
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleDelete = async () => {
    try {

      const response = await fetch(`http://localhost:3000/books/${_id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data.message);
   } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="container mb-5">
      <Card className="mt-4" style={{ maxWidth: "30rem", margin: "auto" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p className="fs-5">
              <span style={{ fontWeight: "bold" }}>Publisher:</span>{" "}
              {publisher}
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
          <Button variant="primary" className="me-2" onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Card.Body>
        <Card.Body>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;


// const Details = () => {
//   const book = useLoaderData();
//   const{name,_id} = book;
//   return (
//     <div>
//       name: {name}
//     </div>
//   );
// };

// export default Details;