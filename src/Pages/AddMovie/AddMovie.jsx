const AddMovie = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-center font-semibold text-2xl mb-20 text-black">Add New Movie</h1>
        <div className="w-full max-w-5xl">
          <form className="bg-white p-6 rounded-lg shadow-lg w-full text-red-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Movie Name</label>
                <select className="w-full p-2 border-2 rounded-lg focus:ring  focus:border-red-600 focus:outline-none">
                  <option value="">Select Option</option>
                  <option>The Shawshank Redemption</option>
                  <option>The Godfather</option>
                  <option>The Dark Knight</option>
                  <option>Pulp Fiction</option>
                  <option>Forrest Gump</option>
                  <option>Inception</option>
                  <option>Fight Club</option>
                  <option>The Matrix</option>
                  <option>Goodfellas</option>
                  <option>The Silence of the Lambs</option>
                  <option>Se7en</option>
                  <option>Interstellar</option>
                </select>
  
                <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Movie Category</label>
                <select className="w-full p-2 border-2 rounded-lg focus:ring  focus:border-red-600 focus:outline-none">
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
                <select className="w-full p-2 border-2 rounded-lg focus:ring  focus:border-red-600 focus:outline-none">
                  <option value="">Select Option</option>
                  <option>https://example.com/poster1.jpg</option>
                  <option>https://example.com/poster2.jpg</option>
                  <option>https://example.com/poster3.jpg</option>
                  <option>https://example.com/poster4.jpg</option>
                  <option>https://example.com/poster5.jpg</option>
                  <option>https://example.com/poster6.jpg</option>
                  <option>https://example.com/poster7.jpg</option>
                  <option>https://example.com/poster8.jpg</option>
                  <option>https://example.com/poster9.jpg</option>
                  <option>https://example.com/poster10.jpg</option>
                  <option>https://example.com/poster11.jpg</option>
                  <option>https://example.com/poster12.jpg</option>
                </select>
              </div>
  
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Duration</label>
                <select className="w-full p-2 border-2 rounded-lg focus:ring  focus:border-red-600 focus:outline-none">
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
                <select className="w-full p-2 border-2 rounded-lg focus:ring  focus:border-red-600 focus:outline-none">
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
                <select className="w-full p-2 border-2 rounded-lg focus:ring  focus:border-red-600 focus:outline-none">
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
            <button type="submit" className="w-full mt-6 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Submit</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddMovie;
