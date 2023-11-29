
import { useEffect, useState } from "react";
import { Card, } from "react-bootstrap"; // Import Col from react-bootstrap
import { Link, } from "react-router-dom";
import "../../Style/Style.css"

const Books = () => {
    const [books, setBooks] = useState([]);
    //fetching the books
    useEffect(() => {
        fetch('http://localhost:3000/books')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div>

            <div className="container">
                <div className="btn-group d-flex justify-content-between">
                    <button className=" custom-btn btn btn-dark me-3 fw-semibold fs-5 p-2 ">All</button>
                    <button className=" custom-btn btn btn-light me-3 fw-semibold fs-5 p-2 ">Best Sellers</button>
                    <button className=" custom-btn btn btn-light me-3 fw-semibold fs-5 p-2 ">Fantasy</button>
                    <button className=" custom-btn btn btn-light me-3 fw-semibold fs-5 p-2 ">History</button>
                    <button className=" custom-btn btn btn-light me-3 fw-semibold fs-5 p-2 ">Art</button>
                    <button className=" custom-btn btn btn-light me-3 fw-semibold fs-5 p-2 ">Love Stories</button>
                </div>

                <div className="row mt-5">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {books.map((book, index) => (
                                <div className="col-md-4 g-3" key={index}>
                                    <Card style={{ height: '100%' }}>
                                        <Card.Img variant="top" src={book.image} style={{ height: '70%' }} />
                                        <Card.Body>
                                            <Card.Title className="fs-4">
                                                <span>Book Name: </span>{book.name}
                                            </Card.Title>
                                            <Card.Text>
                                                Author Name: {book.authorName}
                                            </Card.Text>
                                            <Link to ={`/details/${book._id}`}>
                                            <button className=" custom-btn btn btn-dark me-3 fw-semibold fs-5 p-2 w-50">See Details</button>

                                            </Link>
                                        
                                        </Card.Body>

                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-1">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;
