import { useLoaderData } from "react-router-dom";

const AllMovieDetails = () => {
    const allMovieDetailsData = useLoaderData();
    const {Duration,Genre, Movie_Poster,Rating,Release_Year,Movie_Title} = allMovieDetailsData;
    console.log(allMovieDetailsData);
    return (
        <div>
             <div className="border text-white min-h-[calc(100vh-64px-255px)]">
            <div>
                <div className="flex flex-col md:flex-row justify-center md:items-start items-center md:gap-20 gap-6 mb-20 mt-20 md:p-0 p-2">
                    <div className="border-4 rounded-lg">
                        <img className="mx-auto w-full max-w-xs rounded-lg" src={Movie_Poster} alt={Movie_Poster} />
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                        <p className="font-semibold">Movie Name: <span className="text-red-600">{Movie_Title}</span></p>
                        <p className="font-semibold">Category: <span className="text-red-600">{Genre}</span></p>
                        <p className="font-semibold">Duration: <span className="text-red-600">{Duration}</span></p>
                        <p className="font-semibold">Release Year: <span className="text-red-600">{Release_Year}</span></p>
                        <p className="font-semibold">Rating: <span className="text-red-600">{Rating}</span></p>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default AllMovieDetails;

