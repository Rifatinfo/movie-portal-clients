import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="">
            <form>
                <div className="bg-black text-white max-w-6xl mx-auto rounded-md">
                    <h1 className="text-2xl font-bold text-center mt-10 py-4">Create Your Account</h1>
                    <div className="md:flex md:items-center md:justify-center md:gap-3 grid gap-3 mt-10">
                        <div className="space-y-1 text-sm md:w-1/3 w-full">
                            <label htmlFor="username" className="block font-semibold">First Name</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                className="w-full px-4 py-3  border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                            />
                        </div>
                        <div className="space-y-1 text-sm md:w-1/3 w-full">
                            <label htmlFor="username" className="block font-semibold">Last Name</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Password"
                                className="w-full px-4 py-3  border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center md:justify-center md:gap-3 grid gap-3 mt-10">
                        <div className="space-y-1 text-sm md:w-1/3 w-full">
                            <label htmlFor="username" className="block font-semibold">Username*</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                className="required w-full px-4 py-3  border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                            />
                        </div>
                        <div className="space-y-1 text-sm md:w-1/3 w-full">
                            <label htmlFor="username" className="block font-semibold">Email*</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Password"
                                className="required w-full px-4 py-3  border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center md:justify-center md:gap-3 grid gap-3 mt-10">
                        <div className="space-y-1 text-sm md:w-1/3 w-full">
                            <label htmlFor="username" className="block font-semibold">Username*</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                className="w-full px-4 py-3  border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                            />
                        </div>
                        <div className="space-y-1 text-sm md:w-1/3 w-full">
                            <label htmlFor="username" className="block font-semibold">Password*</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Password"
                                className="w-full px-4 py-3  border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center md:justify-center md:gap-3 grid gap-3 mt-10">
                        <div className="w-full md:w-1/2">
                            <button className="w-full bg-red-600 btn btn-neutral mt-4 mb-10">Register</button>
                        </div>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-600 py-2 font-semibold">Don't have an account?
                        <Link to="/sign-in"><a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800"> Sign In</a></Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;