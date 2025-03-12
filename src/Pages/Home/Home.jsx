import { useLoaderData } from "react-router-dom";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import MovieSlider from "../../Components/MovieSlider/MovieSlider";
import MovieCart from "../../Components/MovieCart/MovieCart";
import { useState } from "react";

const Home = () => {
  const loadedMovies = useLoaderData();
  const  [moviesData, setMoviesData] = useState(loadedMovies); 
  return (
    <div>
      <HomeSlider />
      <MovieSlider />
      <div className="max-w-7xl mx-auto">
        <div className="mt-8">
          <p className="text-white text-2xl font-semibold">
            All Movies <sup className="text-red-600">{moviesData.length}</sup>{" "}
          </p>
        </div>
        {/* movie cart */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-8">
            {
                moviesData.map((movie, idx) => <MovieCart setMoviesData={setMoviesData} moviesData={moviesData} key={idx}  movie={movie}/>)
            }
        </div>
      </div>
    </div>
  );
};

export default Home;
