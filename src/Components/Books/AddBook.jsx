import { useForm } from "react-hook-form";
import img1 from "../../assets/img1.png"

const AddBook = () => {
    const { register, handleSubmit, reset } = useForm();

    // form submit 
    const onSubmit = async (data) => {
        console.log(data);
        try {
          const response = await fetch("http://localhost:3000/books", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
    
          const result = await response.json();
    
          if (result.insertedId) {
            alert("Book added successfully");
            window.href="/"
            reset();
          } 
        } catch (error) {
          console.error("Error:", error);
          alert("Error adding product");
        }
      };
  
    return (
        <div className="container">
        <div className="row">
          {/* img  */}
          <div className="col-lg-6 d-lg-flex align-items-center">
            <img src={img1} alt="" className="img-fluid" />
          </div>
      
          {/* Form*/}
          <div className="col-lg-6 col-md-12">
            <form
              className="mt-5 p-4 rounded"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="mb-4">
                Add Book
              </h2>
              <div className="mb-3">
                <input
                  {...register("name", { required: true, maxLength: 20 })}
                  className="form-control"
                  placeholder="Book Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  {...register("image")}
                  className="form-control"
                  placeholder="Product Img Url"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  {...register("publisher")}
                  className="form-control"
                  placeholder="Publisher"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  {...register("publicationYear")}
                  className="form-control"
                  placeholder="Publication Year"
                  required
                  type="number"
                />
              </div>
              <div className="mb-3">
                <input
                  {...register("genre")}
                  className="form-control"
                  placeholder="Genre"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  {...register("authorName")}
                  className="form-control"
                  placeholder="Author Name"
                  required
                />
              </div>
              <button type="submit" className=" custom-btn btn btn-dark me-3 fw-semibold fs-5 p-2 ">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
      
      
    );
};

export default AddBook;