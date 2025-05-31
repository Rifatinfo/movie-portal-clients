import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllMovie = () => {
    const allMovieData = useLoaderData();
    const [allMovie, setAllMovieData] = useState(allMovieData)
    console.log(allMovie, setAllMovieData);

    const handleAddToCart = (obj) =>{
       console.log(obj);

       fetch('https://movie-portal-server-92li.onrender.com/my-favourite',{
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(obj)
       })
       .then(res => res.json())
      .then(data => {
              console.log(data);
              if(data.insertedId){
                Swal.fire({
                  title: "Successfully Added My Wish List",
                  icon: "success",
                  draggable: true
                });
              }
            })
    }
    
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8 mt-16 py-10 p-2">
              {allMovie.map((fre) => (
                <div>
                  <div className="border">
                    <img src={fre.Movie_Poster} alt="" />
                    <div className="mt-4 text-white p-1.5 rounded-md">
                      <p className="text-xl font-semibold">{fre.Movie_Title}</p>
                      <p className="font-semibold">{fre.Genre}</p>
                      <div className="flex justify-between items-center text-red-600 font-semibold">
                        <p>Ratings : {fre.Rating}</p>
                        <p>1h : {fre.Duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-2 p-1.5 ">
                      <Link to={`/all-movies/${fre._id}`}>
                        <button className="border rounded-md text-xl p-2 bg-white text-red-600 border-none">
                          <FaEye />
                        </button>
                      </Link>
                      <button onClick={() => handleAddToCart(fre)} className="btn border rounded-md text-xl p-1 bg-white text-red-600 border-none">
                          Add To Cart
                        </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
    );
};

export default AllMovie;