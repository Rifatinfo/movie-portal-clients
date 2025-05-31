import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import Swal from "sweetalert2";

const MyFavorite = () => {
    const my_favourite = useLoaderData();
    const [favourites, setFavourites] = useState(my_favourite);
    console.log(favourites);
    // const {_id} = favourites
    const handleDelete = (_id) => {
        console.log(_id);
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
                fetch(`https://movie-portal-server-92li.onrender.com/my-favourite/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Movie has been deleted.",
                                icon: "success"
                            });
    
                            const remaining = favourites.filter(movi => movi._id !== _id);
                            setFavourites(remaining);
                        }
                    })
                    .catch(error => console.error('Error:', error)); // Handle any errors
            }
        });
    };
    
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mt-16 py-10 p-2">
                {favourites.map(fav => (
                    <div key={fav._id} className="border p-4 mb-4">
                        <img src={fav.Movie_Poster} alt={fav.Movie_Title} className="w-full h-auto" />
                        <div className="mt-4 text-white p-1.5 rounded-md">
                            <p className="text-xl font-semibold">{fav.Movie_Title}</p>
                            <p className="font-semibold">{fav.Genre}</p>
                            <div className="flex justify-between items-center text-red-600 font-semibold">
                                <p>Ratings: {fav.Rating}</p>
                                <p>Duration: {fav.Duration}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-4 mb-2 p-1.5">
                            <button onClick={() => handleDelete(fav._id)} className="border rounded-md text-xl p-2 bg-white text-red-600 border-none">
                                <RxCrossCircled className="font-bold" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyFavorite;
