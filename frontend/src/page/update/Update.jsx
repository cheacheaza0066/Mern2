import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import MyNav from "../../components/MyNavBar/MyNav";
import { useNavigate } from "react-router-dom"; // Import useNavigate
function Update() {
  const navigate = useNavigate();

  const { _id } = useParams();
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    publishYear: 0,
  });

  const cleanedId = _id.substring(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/${cleanedId}`)
      .then((response) => {
        setBookData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [_id]);

  const handleUpdate = () => {
    axios
      .put(`http://localhost:5555/books/${cleanedId}`, bookData)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Book updated successfully",
          icon: "success",
        });
        navigate('/')
      })
      .catch((error) => {
        // Handle error
        console.error("Error updating book:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  return (
    <>
      <MyNav />
      <div className="container my-4">
        <h1>Update Book</h1>
        <form>
          <div>
            <label>Title:</label>
            <input className="form-control"
              type="text"
              name="title"
              value={bookData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Author:</label>
            <input
            className="form-control"
              type="text"
              name="author"
              value={bookData.author}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>publishYear:</label>
            <input
            className="form-control"
              type="number"
              name="publishYear"
              value={bookData.publishYear}
              onChange={handleChange}
            />
          </div>
          <button type="button" className="btn btn-primary my-2" onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default Update;
