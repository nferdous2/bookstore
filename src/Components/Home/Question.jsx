import { Accordion } from "react-bootstrap";

const Question = () => {
    return (
        <div className="container mt-5">
            <p className='fw-bold fs-1 text-center mt-5 mb-5'>F <span style={{ color: "orange" }}>A</span> Q</p>
            <div className="mt-2 mb-5">
                <div className="row g-8">
                    <div className="col-md-7">

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How do I find books on this website?</Accordion.Header>
                                <Accordion.Body>
                                    To discover books on our website, follow these steps:
                                    <ol>
                                        <li>Explore the homepage or use the search feature to find books.</li>
                                        <li>Browse categories or recommendations to discover new titles.</li>
                                        <li>Click on a book to view details and start reading.</li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Can I customize my reading preferences?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, you can personalize your reading experience:
                                    <ol>
                                        <li>Go to your account settings.</li>
                                        <li>Adjust preferences like font size, theme, or reading history.</li>
                                        <li>Explore additional features to enhance your reading environment.</li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-md-5">
                        <img src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Question;