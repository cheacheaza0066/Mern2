import axios from "axios";
import MyNav from "../../components/MyNavBar/MyNav"
import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import ReadCard from "../../components/Card/ReadCard";

function Read() {
    const {_id} = useParams()
    const [book,setBook] = useState([]);
    const cleanedId = _id.substring(1);

    const fetchData= () =>{
        axios.get(`http://localhost:5555/books/${cleanedId}`).then((res)=>{
            console.log(res)
            setBook(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [_id])
    console.log(book)

  return (
    <>
    <MyNav/>
    <div className="container">
    <h1 className="text-center my-5">welcone to reading</h1>
        <div className="text-center">
        <ReadCard key={book.id} {...book}/>
        </div>

    </div>
    </>
  )
}

export default Read
