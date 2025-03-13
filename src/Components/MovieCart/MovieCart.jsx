import { FaEye } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MovieCart = ({ movie , moviesData, setMoviesData}) => {
    const {_id,movieName,posterUrl,category,duration} = movie;
    const handleMovieDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/movies/${_id}`,{
                method : "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Movie has been deleted.",
                        icon: "success"
                      });

                      const remaining = moviesData.filter(mov => mov._id !== _id);
                      setMoviesData(remaining);
                }
            })
            }
          });
    }
  return (
    <div>
      <div className="border ">
        <img
          src={posterUrl}
          alt=""
        />
        <div className="mt-4 text-white p-1.5 rounded-md">
          <p className="text-xl font-semibold">{movieName}</p>
          <p className="font-semibold">{category}</p>
          <div className="flex justify-between items-center text-red-600 font-semibold">
            <p>Ratings</p>
            <p>1h : {duration}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mb-2 p-1.5 ">
            <Link to={`details-movie/${_id}`}><button className="border rounded-md text-xl p-2 bg-white text-red-600 border-none"><FaEye /></button></Link>
            <Link to={`update-movie/${_id}`}><button className="border rounded-md text-xl p-2 bg-white text-red-600 border-none"><FaUserEdit /></button></Link>
            <button onClick={() => handleMovieDelete(_id)} className="border rounded-md text-xl p-2 bg-white text-red-600 border-none"><MdDelete /></button>
        </div>
      </div>
    </div>
  );
};

export default MovieCart;
