import { useLoaderData } from "react-router-dom";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import MovieSlider from "../../Components/MovieSlider/MovieSlider";
import MovieCart from "../../Components/MovieCart/MovieCart";
import { useState } from "react";

const Home = () => {
  const loadedMovies = useLoaderData();
  const [moviesData, setMoviesData] = useState(loadedMovies);
  return (
    <div>
      <HomeSlider />
      <MovieSlider />
      <div className="max-w-7xl mx-auto">
        <div className="mt-8 mb-10 flex justify-between items-center">
          <p className="text-white text-2xl font-semibold">
            All Movies <sup className="text-red-600">{moviesData.length}</sup>{" "}
          </p>
          <div>
            <div className="dropdown dropdown-start ">
              <div tabIndex={0} role="button" className="btn m-1 bg-red-600 text-white border-none shadow-none">Sort By</div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li className="text-red-600"><a>Action</a></li>
                <li className="text-red-600"><a>Crime</a></li>
                <li className="text-red-600"><a>Drama</a></li>
                <li className="text-red-600"><a>Sci-Fi</a></li>
                <li className="text-red-600"><a>Thriller</a></li>
                <li className="text-red-600"><a>Romance</a></li>
                <li className="text-red-600"><a>Adventure</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* movie cart */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-8">
          {
            moviesData.map((movie, idx) => <MovieCart setMoviesData={setMoviesData} moviesData={moviesData} key={idx} movie={movie} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
