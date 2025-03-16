import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const AllMovie = () => {
    const allMovieData = useLoaderData();
    const [allMovie, setAllMovieData] = useState(allMovieData)
    console.log(allMovie, setAllMovieData);
    
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
                      <button className="btn border rounded-md text-xl p-1 bg-white text-red-600 border-none">
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