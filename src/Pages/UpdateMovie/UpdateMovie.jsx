
const UpdateMovie = () => {
    const handleUpdateMovie = (e) => {
        e.preventDefault();
        
        const movieName = e.target.movie.value;
        const category = e.target.category.value;
        const posterUrl = e.target.poster.value;
        const duration = e.target.duration.value;
        const releaseYear = e.target.year.value;
        const rating = e.target.rating.value;
    
        console.log("Selected Movie:", movieName);
        console.log("Category:", category);
        console.log("Poster URL:", posterUrl);
        console.log("Duration:", duration);
        console.log("Release Year:", releaseYear);
        console.log("Rating:", rating);
      };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-center font-semibold text-2xl mb-20 text-black">Add New Movie</h1>
        <div className="w-full max-w-5xl">
          <form onSubmit={handleUpdateMovie} className="bg-white p-6 rounded-lg shadow-lg w-full text-red-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Movie Name</label>
                <select name="movie" className="w-full p-2 border-2 rounded-lg focus:ring focus:border-red-600 focus:outline-none">
                  <option value="">Select Option</option>
                  <option value="The Shawshank Redemption">The Shawshank Redemption</option>
                  <option value="The Godfather">The Godfather</option>
                  <option value="The Dark Knight">The Dark Knight</option>
                  <option value="Pulp Fiction">Pulp Fiction</option>
                  <option value="Forrest Gump">Forrest Gump</option>
                  <option value="Inception">Inception</option>
                  <option value="Fight Club">Fight Club</option>
                  <option value="The Matrix">The Matrix</option>
                  <option value="Goodfellas">Goodfellas</option>
                  <option value="The Silence of the Lambs">The Silence of the Lambs</option>
                  <option value="Se7en">Se7en</option>
                  <option value="Interstellar">Interstellar</option>
                </select>
  
                <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Movie Category</label>
                <select name="category" className="w-full p-2 border-2 rounded-lg focus:ring focus:border-red-600 focus:outline-none">
                  <option value="">Select Option</option>
                  <option>Drama</option>
                  <option>Action</option>
                  <option>Crime</option>
                  <option>Thriller</option>
                  <option>Sci-Fi</option>
                  <option>Adventure</option>
                  <option>Fantasy</option>
                  <option>Horror</option>
                  <option>Comedy</option>
                  <option>Romance</option>
                  <option>Animation</option>
                  <option>Documentary</option>
                </select>
  
                <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Poster URL</label>
                <select name="poster" className="w-full p-2 border-2 rounded-lg focus:ring focus:border-red-600 focus:outline-none">
                  <option value="">Select Option</option>
                  <option value="https://example.com/poster1.jpg">Poster 1</option>
                  <option value="https://example.com/poster2.jpg">Poster 2</option>
                  <option value="https://example.com/poster3.jpg">Poster 3</option>
                  <option value="https://example.com/poster4.jpg">Poster 4</option>
                  <option value="https://example.com/poster5.jpg">Poster 5</option>
                  <option value="https://example.com/poster6.jpg">Poster 6</option>
                  <option value="https://example.com/poster7.jpg">Poster 7</option>
                  <option value="https://example.com/poster8.jpg">Poster 8</option>
                  <option value="https://example.com/poster9.jpg">Poster 9</option>
                  <option value="https://example.com/poster10.jpg">Poster 10</option>
                  <option value="https://example.com/poster11.jpg">Poster 11</option>
                  <option value="https://example.com/poster12.jpg">Poster 12</option>
                </select>
              </div>
  
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Duration</label>
                <select name="duration" className="w-full p-2 border-2 rounded-lg focus:ring focus:border-red-600 focus:outline-none">
                  <option value="">Select Option</option>
                  <option>90 min</option>
                  <option>120 min</option>
                  <option>150 min</option>
                  <option>180 min</option>
                  <option>200 min</option>
                  <option>210 min</option>
                  <option>220 min</option>
                  <option>240 min</option>
                  <option>250 min</option>
                  <option>270 min</option>
                  <option>300 min</option>
                  <option>320 min</option>
                </select>
  
                <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Release Year</label>
                <select name="year" className="w-full p-2 border-2 rounded-lg focus:ring focus:border-red-600 focus:outline-none">
                  <option value="">Select Option</option>
                  <option>1990</option>
                  <option>1995</option>
                  <option>2000</option>
                  <option>2005</option>
                  <option>2010</option>
                  <option>2012</option>
                  <option>2015</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2022</option>
                </select>
  
                <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Rating</label>
                <select name="rating" className="w-full p-2 border-2 rounded-lg focus:ring focus:border-red-600 focus:outline-none">
                  <option value="">Select Option</option>
                  <option>4.1</option>
                  <option>4.2</option>
                  <option>4.3</option>
                  <option>4.4</option>
                  <option>4.5</option>
                  <option>4.6</option>
                  <option>4.7</option>
                  <option>4.8</option>
                  <option>4.9</option>
                  <option>5.0</option>
                </select>
              </div>
            </div>
            <button type="submit" className="w-full mt-6 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
};

export default UpdateMovie;