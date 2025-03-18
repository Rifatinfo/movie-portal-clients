import { Link, useLoaderData } from "react-router-dom";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import MovieSlider from "../../Components/MovieSlider/MovieSlider";
import MovieCart from "../../Components/MovieCart/MovieCart";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";

const Home = () => {
  const loadedMovies = useLoaderData();
  const feature = useLoaderData();
  const [moviesData, setMoviesData] = useState(loadedMovies);
  const [featureData, setFeatureData] = useState([]);
  const [sort, setSort] = useState('');

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "rating") {
      setFeatureData((prevData) =>
        [...prevData].sort((a, b) => a.rating - b.rating) // Sorting in ascending order
      );
    }
  };

  useEffect(() => {
       fetch('https://movie-portal-server-npzb0dodo-rifatinfos-projects.vercel.app/feature-movie')
       .then(res => res.json())
       .then(data => setFeatureData(data))
  },[])
  return (
    <div>
      <HomeSlider />
      <MovieSlider />
      <div className="max-w-7xl mx-auto">
        {/* feature movie */}
        <div>
          <div className="max-w-7xl mx-auto md:py-20">
            <div>
              <div className="mt-8 mb-10 flex justify-between items-center">
                <p className="text-white text-2xl font-semibold">
                  All Feature Movies{" "}
                  <sup className="text-red-600">{feature.length}</sup>{" "}
                </p>
                <div>
                <div className="dropdown dropdown-start">
                    <div
                      onClick={() => handleSort("rating")}
                      tabIndex={0}
                      role="button"
                      className="btn m-1 bg-red-600 text-white border-none shadow-none"
                    >
                      {sort ? `Sort by ${sort}` : "Sort By"}
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      <li className="text-red-600">
                        <a onClick={() => handleSort("rating")}>Rating</a>
                      </li>
                    </ul>
                </div>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-8">
              {featureData.map((fre) => (
                <div>
                  <div className="border ">
                    <img src={fre.poster} alt="" />
                    <div className="mt-4 text-white p-1.5 rounded-md">
                      <p className="text-xl font-semibold">{fre.title}</p>
                      <p className="font-semibold">{fre.category}</p>
                      <div className="flex justify-between items-center text-red-600 font-semibold">
                        <p>Ratings : {fre.rating}</p>
                        <p>1h : {fre.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-2 p-1.5 ">
                      <Link to={`feature-movie/${fre.id}`}>
                        <button className="border rounded-md text-xl p-2 bg-white text-red-600 border-none">
                          <FaEye />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 mb-10 flex justify-between items-center">
          <p className="text-white text-2xl font-semibold">
            All Movies <sup className="text-red-600">{moviesData.length}</sup>{" "}
          </p>
          <div>
            <div className="dropdown dropdown-start ">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-red-600 text-white border-none shadow-none"
              >
                Sort By
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li className="text-red-600">
                  <a>Action</a>
                </li>
                <li className="text-red-600">
                  <a>Crime</a>
                </li>
                <li className="text-red-600">
                  <a>Drama</a>
                </li>
                <li className="text-red-600">
                  <a>Sci-Fi</a>
                </li>
                <li className="text-red-600">
                  <a>Thriller</a>
                </li>
                <li className="text-red-600">
                  <a>Romance</a>
                </li>
                <li className="text-red-600">
                  <a>Adventure</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* movie cart */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-8">
          {moviesData.map((movie, idx) => (
            <MovieCart
              setMoviesData={setMoviesData}
              moviesData={moviesData}
              key={idx}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
