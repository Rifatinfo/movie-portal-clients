import { useLoaderData } from "react-router-dom";

const FeatureDetails = () => {
    const featureData = useLoaderData();
    const {duration,genre, poster,rating,release_year,title} = featureData;
    console.log(featureData);
    
    return (
        <div>
        <div className="border text-white min-h-[calc(100vh-64px-255px)]">
            <div>
                <div className="flex flex-col md:flex-row justify-center md:items-start items-center md:gap-20 gap-6 mb-20 mt-20 md:p-0 p-2">
                    <div className="border-4 rounded-lg">
                        <img className="mx-auto w-full max-w-xs rounded-lg" src={poster} alt={poster} />
                    </div>
                    <div className="space-y-3 text-center md:text-left">
                        <p className="font-semibold">Movie Name: <span className="text-red-600">{title}</span></p>
                        <p className="font-semibold">Category: <span className="text-red-600">{genre}</span></p>
                        <p className="font-semibold">Duration: <span className="text-red-600">{duration}</span></p>
                        <p className="font-semibold">Release Year: <span className="text-red-600">{release_year}</span></p>
                        <p className="font-semibold">Rating: <span className="text-red-600">{rating}</span></p>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default FeatureDetails;