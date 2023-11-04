import { useEffect, useState } from "react";
import MyNav from "../../components/MyNavBar/MyNav";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Swal from "sweetalert2";
import { getUser } from "../../service/authorize";

function Create() {
      const navigate = useNavigate();

  // State to store form input values
  const [formData, setFormData] = useState({
    title: "",
    author: getUser(),
    publishYear: 0, // Initialize with a default value
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  // Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5555/books", formData)
      .then(() => {
        // Show a success alert using SweetAlert2
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Book has been created successfully!ss",
        }).then(() => {
          // Redirect to the homepage after showing the success alert
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(()=>{
    !getUser() && navigate('/')
  })
  

  return (
    <>
      <MyNav />

      <div className="container">
        <h1 className="text-center my-3">Create New Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="publishYear" className="form-label">
              Publish Year
            </label>
            <input
              type="number"
              className="form-control"
              id="publishYear"
              name="publishYear"
              value={formData.publishYear}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    </>
  );
}

export default Create;
