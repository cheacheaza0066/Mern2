import { useEffect, useState } from "react";
import axios from "axios";
import MyNav from "../../components/MyNavBar/MyNav";
import MyCard from "../../components/Card/MyCard";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Homepage() {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const fetchBook = () =>{
    axios
    .get("http://localhost:5555/books")
    .then((response) => {
      console.log(response);
      setBooks(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  

  useEffect(() => {
    fetchBook()
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5555/books/${id}`).then((res) => {
      console.log(id)
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Book has been created successfully!",
      });
      fetchBook()

      console.log("Book deleted successfully:", res.data);
    }).catch((error)=>{
      console.log("Error deleting book:",error)
    })
    
  };

  // const handleUpdate = (id)=>{
  //   navigate(`/update/:${id}`)
  // }

  const handleUpdate = (_id) => {
    const url = `/update/:${_id}`;
    navigate(url);
  }

  const handleRead =(_id)=>{
    const url = `/read/:${_id}`
    navigate(url)
  }
  

  return (
    <>
      <MyNav />
      <div className="container">
        <h1 className="text-center my-3">List of Books</h1>
          <div className="d-flex">
          {books.map((data) => (
  <MyCard key={data._id} {...data} onRead = {()=> handleRead(data._id)} onDelete={() => handleDelete(data._id)} onUpdate = {()=> handleUpdate(data._id) } />
  ))}
          </div>
        </div>
    </>
  );
}

export default Homepage;
